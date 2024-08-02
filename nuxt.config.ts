// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  css: ['~/assets/main.css', 'animate.css/animate.min.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  build: {
    transpile: ['vue-toastification']
  },
  modules: ['@ant-design-vue/nuxt', '@pinia/nuxt', 'nuxt-marquee'],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate']
  },
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
});