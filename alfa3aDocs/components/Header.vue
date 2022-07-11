<template>
  <div class="navbar bg-primary py-1 text-midnight">
    <div class="flex-1">
      <nuxt-link to="/">
        <div class="flex flex-row">
          <cercleAlfa class="w-8 h-8 ml-2" />
          <div class="btn btn-ghost normal-case text-sm">Alfa3a</div>
        </div>
      </nuxt-link>
    </div>

    <div class="flex-none normal-case text-sm">
      <ul class="menu menu-horizontal p-0">
        <li tabindex="0">
          <nuxt-link to="/documents" 
            >Documentation
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </nuxt-link>

          <ul class="p-2 bg-base-100">
            <li><nuxt-link to="/documents" >Pas-sage</nuxt-link></li>
            <li><a>API</a></li>
            <li><a>Notes</a></li>
          </ul>
        </li>
        <li><nuxt-link to="/testPage">Test Page</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>
