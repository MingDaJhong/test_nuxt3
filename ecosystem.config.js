module.exports = {
  apps: [
    {
      name: 'Nuxt3_Test_App',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        NITRO_PORT: 3000,
        NITRO_HOST: '127.0.0.1'
      }
    }
  ]
}