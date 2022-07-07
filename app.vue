<template>
  <div class="sm:py-10">
    <Html lang="en" />
    <Meta property="og:image" content="https://og-image.vercel.app/robsoriano.com.png" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Navbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>
