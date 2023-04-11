import defaultTheme from 'tailwindcss/defaultTheme'
import ui from '../src/module'
import preset from './ui'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    // @ts-ignore
    ui,
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/plausible',
    '@nuxthq/studio',
    'nuxt-lodash',
    'nuxt-component-meta'
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'material-default',
        light: 'material-lighter',
        dark: 'material-darker'
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini']
    }
  },
  ui: {
    global: true,
    colors: {
      primary: 'sky',
      gray: 'slate'
    },
    preset,
    icons: ['heroicons', 'mdi'],
    tailwindcss: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans]
          }
        }
      }
    }
  },
  typescript: {
    strict: false
  }
})
