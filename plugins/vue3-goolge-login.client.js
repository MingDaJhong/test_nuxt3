import vue3GoogleLogin from 'vue3-google-login'

export default defineNuxtPlugin(nuxtApp => {
  const runtimeConfig = useRuntimeConfig()

  nuxtApp.vueApp.use(vue3GoogleLogin, {
    clientId: runtimeConfig.public.GOOGLE_CLIENT_ID
  })
})
