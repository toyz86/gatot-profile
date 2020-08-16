export { default as Footer } from '../../components/footer.vue'

export const LazyFooter = import('../../components/footer.vue' /* webpackChunkName: "components/footer'}" */).then(c => c.default || c)
