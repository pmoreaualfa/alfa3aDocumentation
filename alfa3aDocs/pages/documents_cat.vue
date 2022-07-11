<template>
  <div>
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-yellow-500 font-semibold tracking-wide uppercase">
            Service Informatique - Data management
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Documentation
          </p>
          <p class="mt-2 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Derniers sujets traités.
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            route : {{ route }}
          </p>
          <p class="mt-2 max-w-2xl text-2xl text-gray-800 lg:mx-auto bg-primary rounded">
            Catégorie :
            <span class="text-red-100">
              {{ cat }}
            </span>
          </p>
        </div>

        <div class="mt-2">
          <!-- PASSAGE -->
          <div v-if="cat === 'passage'">
            <div style="background-color: lightgray">dossier : Passage</div>
            <div v-for="doc in docsPassage">
              <p>
                <nuxt-link :to="doc._path"> {{ doc.title }}</nuxt-link>
              </p>
            </div>
          </div>
          <!-- API -->
          <div v-else-if="cat === 'api'">
            <div style="background-color: lightgray">dossier : API</div>
            <div v-for="doc in docsApi">
              <p>
                <nuxt-link :to="doc._path"> {{ doc.title }}</nuxt-link>
              </p>
            </div>
          </div>
          <!-- NOTES -->
          <div v-else-if="cat === 'notes'">
            <div style="background-color: lightgray">dossier : Notes</div>
            <div v-for="doc in docsNotes">
              <p>
                <nuxt-link :to="doc._path"> {{ doc.title }}</nuxt-link>
              </p>
            </div>
          </div>
          <!-- SOMMAIRE -->
          <div v-else>
            <div style="background-color: lightgray">dossier : SOMMAIRE</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const path = route.path;
const name = route.name;
const query = route.query;
const cat = query.cat;

const router = useRouter();
const twitchStreamer = ref("");

watch(cat, (cat, previous) => {
  router.push({
    path: "/path",
    query: { streamer: twitchScattreamer },
  });
});

const { data: docsPassage } = await useAsyncData(`content-${path}-passage`, () => {
  return queryContent(path + "/passage")
    .only(["title", "slug", "_path"])
    .find();
});
const { data: docsApi } = await useAsyncData(`content-${path}-api`, () => {
  return queryContent(path + "/api")
    .only(["title", "slug", "_path"])
    .find();
});
const { data: docsNotes } = await useAsyncData(`content-${path}-notes`, () => {
  return queryContent(path + "/notes")
    .only(["title", "slug", "_path"])
    .find();
});
</script>
