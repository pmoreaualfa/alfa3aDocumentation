<template>
  <main class="mt-16">
    <div style="background-color: lightgray">
  {{route}}
  </div>
  <div>
  {{path}}
  </div>
    <ContentDoc />
  </main>
</template>

<script setup>
const route = useRoute()
const path = route.path

</script>
