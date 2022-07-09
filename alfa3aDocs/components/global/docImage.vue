<template>
<div class="imgS">
  <img :src="imgSrc()" :alt="alt" class="doc-image" />
</div>

</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/resources/docs/${this.src}`)
      } catch (error) {
        return null
      }
    }
  }
}
</script>

<style>
.imgS {
margin-top: 1em;
margin-bottom: 1em;
}
</style>