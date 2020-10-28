export { default as Burger } from '../../components/burger.vue'
export { default as Footer } from '../../components/footer.vue'
export { default as Gallery } from '../../components/gallery.vue'
export { default as Header } from '../../components/header.vue'
export { default as Loading } from '../../components/loading.vue'
export { default as RelatedItems } from '../../components/related-items.vue'

export const LazyBurger = import('../../components/burger.vue' /* webpackChunkName: "components/burger" */).then(c => c.default || c)
export const LazyFooter = import('../../components/footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyGallery = import('../../components/gallery.vue' /* webpackChunkName: "components/gallery" */).then(c => c.default || c)
export const LazyHeader = import('../../components/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyLoading = import('../../components/loading.vue' /* webpackChunkName: "components/loading" */).then(c => c.default || c)
export const LazyRelatedItems = import('../../components/related-items.vue' /* webpackChunkName: "components/related-items" */).then(c => c.default || c)
