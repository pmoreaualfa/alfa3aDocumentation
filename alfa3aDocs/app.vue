<template>
  <div>
  <Header />
    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  title: 'ALFA3A DOCS',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }    ],
  bodyAttrs: {
    class: 'test'
  }
})

definePageMeta({
  title: 'Some Page DefinePageMeta'
})

</script>
