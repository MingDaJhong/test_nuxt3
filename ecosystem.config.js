module.exports = {
  apps: [
    {
      name: 'Nuxt3_Test_App',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        NITRO_PORT: 3002,
        NITRO_HOST: '0.0.0.0'
      }
    }
  ]
}