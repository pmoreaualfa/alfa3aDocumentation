<script setup>
const menuItems = [
  { path: "/gouv/communes", title: "Communes" },
  { path: "/documents?cat=api", title: "API" },
  { path: "/documents?cat=notes", title: "Notes" },
];
</script>

<template>
  <div>
    <Header class="fixed top-0 left-0 w-full" />
    <div class="flex h-full">
      <!-- START : SIDEBAR    -->
      <div
        class="fixed top-0 mt-14 ml-1 bottom-0 left-1 w-40 py-2 bg-secondary text-silver"
      >
        <h1 class="mt-1 px-5 text-sm font-bold text-alfa-orange ">Test en cours</h1>

        <ul class="menu w-full mt-4 px-0">
          <li v-for="menuItem in menuItems" class="hover-bordered text-sm">
            <NuxtLink :to="menuItem.path">{{ menuItem.title }}</NuxtLink>
          </li>
        </ul>
      </div>
      <!-- END : SIDEBAR -->
      <!-- START : MAIN CONTENT -->
      <div class="pl-48 w-full  mt-24 ">

          <slot />

      </div>
      <!-- END : MAIN CONTENT -->
    </div>

  </div>
</template>
<style scoped>
.menu li.hover-bordered a:hover, .menu li.bordered a {
    @apply border-secondary-content
}</style>
