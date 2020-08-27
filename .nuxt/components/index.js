export { default as Footer } from '../../components/footer.vue'
export { default as Gallery } from '../../components/gallery.vue'
export { default as Header } from '../../components/header.vue'

export const LazyFooter = import('../../components/footer.vue' /* webpackChunkName: "components/footer'}" */).then(c => c.default || c)
export const LazyGallery = import('../../components/gallery.vue' /* webpackChunkName: "components/gallery'}" */).then(c => c.default || c)
export const LazyHeader = import('../../components/header.vue' /* webpackChunkName: "components/header'}" */).then(c => c.default || c)
