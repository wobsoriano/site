export const metaData = {
  baseUrl: "https://robsoriano.com/",
  title: "Robert Soriano",
  name: "Robert Soriano",
  ogImage: "/opengraph-image.png",
  description:
    "Software engineer at Clerk, building the SDKs that add sign-in to mobile and web apps. Author of svelte-sonner, trpc-nuxt and 200+ open source projects.",
};

export const email = "sorianorobertc@gmail.com";

export const socialLinks = {
  github: "https://github.com/wobsoriano",
  twitter: "https://x.com/wobsoriano",
  bluesky: "https://bsky.app/profile/robsoriano.com",
  linkedin: "https://www.linkedin.com/in/robertcsoriano",
  email: `mailto:${email}`,
};

// `stars` is the fallback when the GitHub API can't be reached at build time.
export const projects = [
  {
    name: "clerk/javascript",
    repo: "clerk/javascript",
    url: "https://github.com/clerk/javascript",
    type: "Day job",
    year: 2022,
    stars: 1769,
    description:
      "Clerk's JavaScript SDKs. I've merged 450+ pull requests here, lately for @clerk/expo and the Vue, Nuxt and Astro SDKs.",
  },
  {
    name: "svelte-sonner",
    repo: "wobsoriano/svelte-sonner",
    url: "https://svelte-sonner.vercel.app",
    type: "Svelte component",
    year: 2023,
    stars: 1298,
    description: "An opinionated toast component for Svelte. A port of Emil Kowalski's sonner.",
  },
  {
    name: "v-dashboard",
    repo: "wobsoriano/v-dashboard",
    url: "https://v-dashboard.vercel.app",
    type: "Vue template",
    year: 2020,
    stars: 930,
    description: "A dashboard starter template built with Vue 3 and Tailwind CSS.",
  },
  {
    name: "trpc-nuxt",
    repo: "wobsoriano/trpc-nuxt",
    url: "https://trpc-nuxt.pages.dev",
    type: "Nuxt module",
    year: 2022,
    stars: 779,
    description: "End-to-end typesafe APIs in Nuxt applications.",
  },
  {
    name: "lexical-vue",
    repo: "wobsoriano/lexical-vue",
    url: "https://lexical-vue.vercel.app",
    type: "Vue library",
    year: 2022,
    stars: 362,
    description: "An extensible Vue 3 rich text editor built on Lexical.",
  },
  {
    name: "pinia-shared-state",
    repo: "wobsoriano/pinia-shared-state",
    url: "https://github.com/wobsoriano/pinia-shared-state",
    type: "Pinia plugin",
    year: 2021,
    stars: 300,
    description: "Sync your Pinia state across browser tabs.",
  },
  {
    name: "v-perfect-signature",
    repo: "wobsoriano/v-perfect-signature",
    url: "https://wobsoriano.github.io/v-perfect-signature/",
    type: "Vue component",
    year: 2021,
    stars: 257,
    description: "Pressure-sensitive signature drawing for Vue 2 and 3.",
  },
  {
    name: "numix",
    repo: "wobsoriano/numix",
    url: "https://numix.vercel.app",
    type: "Vue framework",
    year: 2022,
    stars: 214,
    description: "Write your server code inside Vue single-file components and handle forms easily.",
  },
  {
    name: "blipgloss",
    repo: "wobsoriano/blipgloss",
    url: "https://github.com/wobsoriano/blipgloss",
    type: "Bun library",
    year: 2022,
    stars: 212,
    description: "Style definitions for nice terminal layouts.",
  },
  {
    name: "vue-winbox",
    repo: "wobsoriano/vue-winbox",
    url: "https://vue-winbox.vercel.app",
    type: "Vue component",
    year: 2021,
    stars: 179,
    description: "A Vue wrapper component for the WinBox.js window manager.",
  },
  {
    name: "h3-zod",
    repo: "wobsoriano/h3-zod",
    url: "https://github.com/wobsoriano/h3-zod",
    type: "Nuxt utility",
    year: 2022,
    stars: 172,
    description: "TypeScript-first schema validation for h3 and Nuxt applications.",
  },
  {
    name: "poke95",
    repo: "wobsoriano/poke95",
    url: "https://poke95.vercel.app",
    type: "React app",
    year: 2020,
    stars: 162,
    description: "A Windows 95 style Pokédex.",
  },
];

export const uses = [
  {
    heading: "Coding",
    items: [
      { name: "Zed", description: "My editor of choice", link: "https://zed.dev/" },
    ],
  },
  {
    heading: "Terminal",
    items: [
      { name: "Ghostty", description: "Stable and fast", link: "https://ghostty.com/" },
      { name: "Oh My Zsh", description: "Makes the shell pleasant", link: "https://ohmyz.sh/" },
      { name: "fnm", description: "Fast Node.js version manager", link: "https://github.com/Schniz/fnm" },
    ],
  },
  {
    heading: "Apps",
    items: [
      { name: "Raycast", description: "Spotlight, but faster", link: "https://raycast.com/" },
      { name: "Screen Studio", description: "Screen recordings in minutes", link: "https://screenstudio.com/" },
      { name: "OrbStack", description: "Docker Desktop, but lighter", link: "https://orbstack.com/" },
    ],
  },
  {
    heading: "Hardware",
    items: [
      { name: "MacBook Pro", description: "M4 Pro, 48GB" },
      {
        name: "Keychron Q10",
        description: "Alice layout keyboard",
        link: "https://www.keychron.com/products/keychron-q10-alice-layout-qmk-custom-mechanical-keyboard",
      },
      {
        name: "MX Master 3S",
        description: "Logitech mouse",
        link: "https://www.logitech.com/en-us/products/mice/mx-master-3s.910-006556.html",
      },
    ],
  },
];
