<script setup>

const { path } = useRoute()
const { data: docsPassage } = await useAsyncData(`content-${path}-passage`, () => {
  return queryContent(path + '/passage').only(['title','slug','_path']).find()
})
const { data: docsApi } = await useAsyncData(`content-${path}-api`, () => {
  return queryContent(path + '/api').only(['title','slug','_path']).find()
})
const { data: docsNotes } = await useAsyncData(`content-${path}-notes`, () => {
  return queryContent(path + '/notes').only(['title','slug','_path']).find()
})

</script>
<template>
<div>    
  <div class="py-12 bg-white">
     <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  

      <div class="lg:text-center">
        <h2 class="text-base text-yellow-500 font-semibold tracking-wide uppercase">
          Service Informatique - Data management
        </h2>
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Documentation
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Derniers sujets traités.
        </p>
      </div>
      <!-- PASSAGE -->
      <div style="background-color: lightgray"> dossier : Passage </div>
      <div v-for="doc in docsPassage">
      <p><nuxt-link :to="doc._path"> {{doc.title}}</nuxt-link></p>
      </div>
      <!-- API -->
      <div style="background-color: lightgray"> dossier : API </div>
      <div v-for="doc in docsApi">
      <p><nuxt-link :to="doc._path"> {{doc.title}}</nuxt-link></p>
      </div>
    <!-- NOTES -->
      <div style="background-color: lightgray"> dossier : Notes </div>
      <div v-for="doc in docsNotes">
      <p><nuxt-link :to="doc._path"> {{doc.title}}</nuxt-link></p>
      </div>


    </div>
  </div>
</div>
</template>
