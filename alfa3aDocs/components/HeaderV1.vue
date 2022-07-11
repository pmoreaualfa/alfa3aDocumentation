<template>
  <header class="bg-primary flex content-left px-2 py-1 shadow-slate-700">
    <nuxt-link to="/" >
      <div class="flex flex-row">
          <cercleAlfa class="w-12 h-10 mr-6" />
        <div class="text-primary text-2xl mt-2">
          Alfa3a
        </div>
      </div>
    </nuxt-link>
    <nav>
      <nuxt-link to="/documents" class="text-red-600">Documentation</nuxt-link>
      <nuxt-link to="/testPage" class="text-red-600">Test Page</nuxt-link>
    </nav>
  </header>
</template>





<style>

header .title {
  color: #212121;
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
}
nav {
  display: flex;
  align-items: center;
  margin: 0 -15px;
}
nav a {
  display: block;
  margin: 0 15px;
  color: #9f25cf;
}
</style>
