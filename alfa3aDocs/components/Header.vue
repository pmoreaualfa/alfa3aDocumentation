<template>
  <header class="bg-yellow-500">
    <nuxt-link to="/" class="text-red-600">
      <div class="flex flex-row">
          <cercleAlfa class="w-12 h-12 mr-6" />
        <div class="text-red-600 text-2xl mt-2">
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
header {
  padding: 15px 30px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}
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
