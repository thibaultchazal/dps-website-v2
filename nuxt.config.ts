// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
          apiBaseUrl: process.env.NUXT_API_BASE_URL,
        }
    },
    typescript: {
        strict: true
    },
    css: [
      'vuetify/lib/styles/main.sass',
      'assets/css/main.css'
    ],
    app: {
      head: {
        meta: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
      }
    },
    build: {
      transpile: ['vuetify']
    },
    modules: [
      '@nuxt/image-edge',
    ]
})
