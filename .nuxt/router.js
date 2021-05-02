import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6f4e00e4 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0132f659 = () => interopDefault(import('../pages/works.vue' /* webpackChunkName: "pages/works" */))
const _36a9249e = () => interopDefault(import('../pages/projects/_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _e1f448ae = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6f4e00e4,
    name: "about"
  }, {
    path: "/works",
    component: _0132f659,
    name: "works"
  }, {
    path: "/projects/:id?",
    component: _36a9249e,
    name: "projects-id"
  }, {
    path: "/",
    component: _e1f448ae,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
