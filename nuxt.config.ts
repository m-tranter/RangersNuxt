// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    buildAssetsDir: '/rangersevents/',
  head: {
    title: 'Ranger Events',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://www.cheshireeast.gov.uk/siteelements/css/bs5/400-cec-styles.css' },
      {rel: 'stylesheet', type: 'text/css', href: 'https://www.cheshireeast.gov.uk/siteelements/css/bs5/600-events-vue-axios.css'},
    ],
  },
  },
  modules: [[
    '@pinia/nuxt',
  {
    autoImports: [
      'defineStore', 'acceptHMRUpdate'
    ],
  },
  ]],
  css: ['@/assets/bootstrap/mystyle.scss'],
  imports: { dirs: ['store'] },
  devtools: { enabled: true },
});
