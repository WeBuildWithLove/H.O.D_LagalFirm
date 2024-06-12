// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  build: {
    transpile: ['vue-toastification']
  },
  modules: ['@ant-design-vue/nuxt', '@pinia/nuxt'],
  pinia: {
     autoImports: ['defineStore', 'acceptHMRUpdate'] },
  imports: {
    dirs: ['./stores']
  },
  ssr: true,
  app: {
    head: {
      script: [
        {
          src: ''
        }
      ]
    }
  }
})
