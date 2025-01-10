// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  ssr: false,
  modules: [],

  app: {
    head: {
      title: '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'keywords', name: 'keywords', content: '' },
        { name: 'theme-color', content: '#fff' },
      ],
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.scss'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    global: true,
    // order matters: https://github.com/nuxt/nuxt/issues/15135#issuecomment-1397372680
    dirs: ['~/components/sections', '~/components/molecules', '~/components/atoms'],
  },

  vite: {
    plugins: [eslintPlugin()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/tools/_mixins.scss" as *;`,
        },
      },
    },
  },

  compatibilityDate: '2025-01-10',
});
