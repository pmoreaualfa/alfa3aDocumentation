import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  image: {
    screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536, '2xl': 1536 },
  },
  content: {},
  modules: ['@nuxt/content','@nuxt/image-edge'],
  publicRuntimeConfig: {
    baseAuthor: "Phil Mor" 
  },
  plugins: [],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  css: [
    '@/assets/css/main.css',
  ],
})
