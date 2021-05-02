import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../../components/footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Gallery: () => import('../../components/gallery.vue' /* webpackChunkName: "components/gallery" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Loading: () => import('../../components/loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c)),
  RelatedItems: () => import('../../components/related-items.vue' /* webpackChunkName: "components/related-items" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
