import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6f4e00e4 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0132f659 = () => interopDefault(import('../pages/works.vue' /* webpackChunkName: "pages/works" */))
const _36a9249e = () => interopDefault(import('../pages/projects/_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _e1f448ae = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
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

export function createRouter () {
  return new Router(routerOptions)
}
