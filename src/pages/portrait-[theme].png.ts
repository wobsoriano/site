import path from "node:path";
import sharp from "sharp";
import type { APIRoute, GetStaticPaths } from "astro";

// The portrait as a 4x4 ordered dither, drawn once at build time in each theme's two tones.
// Dark pixels take the darker of page and ink, light pixels the lighter, so it reads as a photo in both.
const SIZE = 160;
const TONES = {
  light: { dark: [28, 28, 28], light: [255, 255, 255] },
  dark: { dark: [18, 18, 18], light: [212, 212, 212] },
} as const;

const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
// Below 1, the darkest and lightest areas go solid instead of patterned.
const SPREAD = 0.8;

// Dithered in linear light, so midtones keep their weight.
const linear = (v: number) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);

export const getStaticPaths: GetStaticPaths = () => [{ params: { theme: "light" } }, { params: { theme: "dark" } }];

export const GET: APIRoute = async ({ params }) => {
  const tones = TONES[params.theme as keyof typeof TONES];
  const { data } = await sharp(path.join(process.cwd(), "src/assets/me-crop.jpeg"))
    .resize(SIZE, SIZE)
    .grayscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const rgb = Buffer.alloc(SIZE * SIZE * 3);
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const i = y * SIZE + x;
      const threshold = 0.5 + ((BAYER[(y % 4) * 4 + (x % 4)] + 0.5) / 16 - 0.5) * SPREAD;
      const tone = linear(data[i] / 255) < threshold ? tones.dark : tones.light;
      rgb.set(tone, i * 3);
    }
  }

  const png = await sharp(rgb, { raw: { width: SIZE, height: SIZE, channels: 3 } })
    .png({ palette: true, colors: 2, compressionLevel: 9 })
    .toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
