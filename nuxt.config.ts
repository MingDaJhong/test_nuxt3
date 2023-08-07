// https://nuxt.com/docs/api/configuration/nuxt-config

let configPath = './config'

switch (process.env.APP_ENV) {
case 'staging':
  configPath = './config/staging.js'
  break
}

const config = require(configPath)

export default defineNuxtConfig({
  app: {
    head: {
      title: config.title
    }
  },
  devServer: {
    port: 3002
  },
  vite: {
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false
    },
    server: {
      // for local dev test with nginx config
      hmr: {
        protocol: 'ws',
        host: 'localhost'
      }
    }
  },
  runtimeConfig: {
    public: {
      BASE_API: config.api.base_url
    }
  },
  css: [
    '@/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
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

