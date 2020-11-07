import { resolve } from 'path'

export default {
  server: {
    host: '0.0.0.0',
    port: 3001
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

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
      },
      {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-192x192.png',
        sizes: '192x192'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-512x512.png',
        sizes: '512x512'
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180'
      }
    ],
    script: [
      {
        hid: 'ga',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-35E6KRRJW3',
        async: true
      },
      {
        hid: 'ga-2',
        innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-35E6KRRJW3');`,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/global.css',
    '~/assets/css/transition.css',
    '~/assets/css/utils.css'
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
  modules: ['portal-vue/nuxt'],

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
      solid: ['faStream', 'faCubes', 'faLaptopCode', 'faLink', 'faEnvelope'],
      brands: ['faGithub']
    }
  }
}
