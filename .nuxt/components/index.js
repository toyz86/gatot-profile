export { default as Footer } from '../../components/footer.vue'
export { default as Header } from '../../components/header.vue'
export { default as RelatedItems } from '../../components/related-items.vue'

export const LazyFooter = import('../../components/footer.vue' /* webpackChunkName: "components/footer'}" */).then(c => c.default || c)
export const LazyHeader = import('../../components/header.vue' /* webpackChunkName: "components/header'}" */).then(c => c.default || c)
export const LazyRelatedItems = import('../../components/related-items.vue' /* webpackChunkName: "components/related-items'}" */).then(c => c.default || c)
