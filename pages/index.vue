<template>
  <section class="home-page">
    <div class="main-page">
    <Header />
      <div class="d-flex justify-content-between">

      </div>
      <div class="d-flex justify-content-center">
      <vue-typed-js :strings="['Hi, My name is <b>Gatot Prastyo</b>, I’m a Graphic Designer and Frontend Developer enthusiast living in Bogor, Indonesia.']">
        <h1><span class="typing"></span></h1>
      </vue-typed-js>
      </div>

    </div>     
    <section class="portfolio">
      <Gallery />
    </section>  
  </section>
</template>

<script>
import Gallery from '~/components/gallery.vue';
import Header from '~/components/header.vue';

export default {
  data() {
    return {
      navOpen: false,
    }
  },
  components: {
    Gallery,
    Header,
  },
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  },
}
</script>
