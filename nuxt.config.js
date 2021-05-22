
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      lang: 'id'
    },    
    // title: process.env.npm_package_name || '',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Gatot Prastyo Personal Portfolio' },
      // { name: 'description', content: 'Gatot Prastyo' },
      { property: 'og:title', content: 'Gatot Prastyo' },
      { property: 'og:description', content: 'Gatot Prastyo Portfolio' },
      { property: 'og:url', content: 'https://www.gatot-prastyo.com' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/android-chrome-512x512.png' },
      { name: 'keywords', content: 'gatot, gatot prastyo, gatot prasetyo, prastyo, toyz86, gatot prastyo portfolio, portfolio design, jasa desain, design service' },
    ],
    link: [
      { 
        rel: 'icon', 
        type: 'image/x-icon', 
        href: '/img/icon-profile.png'
      },
      { 
        hid: 'canonical',
        rel: 'canonical', 
        href: 'https://www.gatot-prastyo.com'
      },      
      { 
        rel: 'stylesheet', 
        type: 'text/css', 
        href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-alpha1/css/bootstrap.min.css' 
      },
      { 
        rel: 'stylesheet', 
        type: 'text/css', 
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' 
      },
      { 
        rel: 'stylesheet', 
        type: 'text/css', 
        href: 'https://fonts.googleapis.com/css?family=Poppins'
      },
      { 
        rel: 'stylesheet', 
        type: 'text/css', 
        href: '//db.onlinewebfonts.com/c/49fdec8ee8568aaf58534b3ede38e294?family=Industry'
      },      
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss'},
  ],

  loading: '~/components/loading.vue',

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {
      src: '~plugins/bootstrap.js',
      ssr: true,
    },    
    {
      src: '~plugins/isotope.js',
      ssr: false
    },    
    {
      src: '~plugins/images-loaded.js',
      ssr: false
    },      
    {
      src: '~plugins/cool-lightbox.js',
      ssr: false
    },   
    {
      src: '~plugins/scrollTop.js',
      ssr: false
    },        
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        const vueLoader = config.module.rules.find(
          ({
            loader
          }) => loader === 'vue-loader')
        const {
          options: {
            loaders
          }
        } = vueLoader || {
          options: {}
        }
        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
          }
        }
        config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
        // console.log(util.inspect(config.module.rules, { depth: 6 }))
      }
    }
  }
}
function changeLoaderOptions(loaders) {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === 'sass-loader') {
        Object.assign(loader.options, {
          includePaths: ['./assets'],
          // data: '@import "_imports";'
        })
      }
    }
  }
}
