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
      ],
      script: [
        {
          hid: 'hubspot',
          src: `https://js-eu1.hs-scripts.com/${process.env.NUXT_HUBSPOT_HID}.js`,
          defer: true
        },
        {
          src: 'https://r2.leadsy.ai/tag.js',
          async: true,
          id: 'vtag-ai-js',
          'data-pid': 'NQ2CCCqu6JAzi7ry',
          'data-version': '062024',
        }
      ]
    }
  },
  build: {
    transpile: ['vuetify']
  },
  extends: ['nuxt-umami'],
  appConfig: {
    umami: {
      autoTrack: true,
      ignoreLocalhost: true,
      domains: 'blog.digitalproductstudio.fr',
      id: process.env.NUXT_UMAMI_ID,
      host: 'https://dpsumamiad759dop-dps-umami.functions.fnc.fr-par.scw.cloud/umami.js',
    }
  },
  modules: [
    '@nuxt/image-edge',
    'nuxt-simple-sitemap'
  ],
  image: {
    domains: [process.env.NUXT_IMG_DOMAIN],
    alias: {
      scwS3: `https://${process.env.NUXT_IMG_DOMAIN}`
    }
  },
})
