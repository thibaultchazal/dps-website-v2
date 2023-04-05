// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
          apiBaseUrl: process.env.NUXT_API_BASE_URL,
          siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://blog.digitalproductstudio.fr',
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
      'nuxt-simple-sitemap'
    ],
    extends: ['nuxt-umami'],
    image: {
      domains: ['dps-blog-medias.s3.fr-par.scw.cloud'],
      alias: {
        scwS3: 'https://dps-blog-medias.s3.fr-par.scw.cloud'
      }
    },
    appConfig: {
      umami: {
        autoTrack: true,
        domains: 'blog.digitalproductstudio.fr',
        id: 'b046d805-d6ad-4b3d-9bb5-e92d2122fad2',
        host: 'https://dpsumamiad759dop-dps-umami.functions.fnc.fr-par.scw.cloud/umami.js',
      }
    }
})
