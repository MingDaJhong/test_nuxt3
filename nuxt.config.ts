// https://nuxt.com/docs/api/configuration/nuxt-config

let configPath = './config/dev.js'

switch (process.env.APP_ENV) {
  case 'staging':
  configPath = './config/staging.js'
  break
}

const config = require(configPath)

export default defineNuxtConfig({
  app: {
    head: {
      title: config.title,
    }
  },
  runtimeConfig: {
    public: {
      BASE_API: config.api.base_url
    }
  },
  css: [
    '@/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts',
      {
        families: {
          'Noto+Sans': [300, 400, 500, 600]
        }
      }
    ]
  ]
})

