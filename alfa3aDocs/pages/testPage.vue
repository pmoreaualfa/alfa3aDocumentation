<template>
  <div class="mt-8">
    <div class="bg-white">
      <h1>TEST PAGE</h1>
      <p>{{ docsTest }}</p>
      <div class="m-2">
        <button @click="myTest" class="btn btn-outline btn-gray">test function</button>
      </div>
      <div>
        {{ docsApi }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: docsTest } = await useAsyncData(`content-documents`, () => {
  return queryContent("/documents")
    .where({ app: "passage" })
    .only(["title", "slug", "_path"])
    .find();
});

// console.log('get button name : ', myDoc.originalTarget.firstChild.data)
 const { data: docsApi } = await useAsyncData(`content-documents`, () => $fetch('/api/documents'))
    // console.log("test : ", ret);
// const myTest = async ()=>{
//     // const { title: ret } = await this.$content('documents').only(['title']).fetch()
//     return await fetch(`/api/documents`).then((a) => a.json())
//     // return ret
// }
// console.log('ret : ', docRet.value)
// const ret = docRet.value
// this.context.$context.this.myRet = "sdmfkljlsdmj"
// return ret
</script>
