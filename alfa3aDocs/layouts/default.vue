<script setup>
const menuItems = [
    {path: '/documents/passage', title: 'Pas-sage'},
    {path: '/documents/api', title: 'API'},
    {path: '/documents/notes', title: 'Notes'}
]
</script>

<template>
    <div class="flex h-full">
    <!-- START : SIDEBAR    -->
    <div class="fixed top-0 bottom-0 left-0 w-64 py-5 bg-primary text-primary-content">
<h1 class="mt-5 px-5 text-2xl font-bold">Documents</h1>


    <ul class="menu w-full mt-10 px-0">
  <li v-for='menuItem in menuItems' class="hover-bordered">
  <NuxtLink :to="menuItem.path">{{menuItem.title}}</NuxtLink>
  </li>
  </ul>
    
    </div>
    <!-- END : SIDEBAR -->
<!-- START : MAIN CONTENT -->
    <div class="pl-64 w-full">
    <div class="p-5"> 
    <slot />
    </div>  
    </div>
<!-- END : MAIN CONTENT -->

    </div>
</template>
<style scoped>
.menu li.hover-bordered a:hover, .menu li.bordered a {
    @apply border-primary-content
}
</style>
