<template>
  <div>
    <div>
      <h2><Markdown :use="$slots.label" unwrap="p" /></h2>
    </div>
    <div>
      <nuxt-img :alt="altProp" :src="srcProp" width="1200px" loading="lazy" class="doc-image"/>
    </div>
  </div>
</template>

<script setup>

const imgPathProp = defineProps(["imgPath", "alt"]);
const srcProp = "/content" + imgPathProp.imgPath;
const altProp = imgPathProp.alt;

</script>
