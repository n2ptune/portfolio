import { resolve } from 'path'

export default {
  server: {
    host: '0'
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'style',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Noto+Sans:wght@400;700&display=swap'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/global.css',
    '~/assets/css/transition.css',
    {
      src: '~/assets/css/utils.pcss',
      lang: 'postcss'
    }
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/fullpage.ts',
      mode: 'client'
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    }
  },

  srcDir: 'src/',

  tailwindcss: {
    configPath: resolve(__dirname, 'tailwind.config.js')
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faGraduationCap', 'faBuilding', 'faInfo']
    }
  }
}
