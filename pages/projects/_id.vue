<template>
  <section class="detail">
    <Header />
    <div class="container">
      <h1 class="title">Portfolio</h1>
      <p class="project-title">Home > Projects > <b>{{ image.title }}</b></p>
      <!-- only show on desktop -->
      <div class="d-none d-lg-block">
        <div class="row justify-content-md-center">
          <div class="col-7">
            <img :src="image.url" alt="Card image cap" class="image-desc mb-3">
          </div>
          <div class="col-5">
            <h2 class="project-name">{{ image.name }}</h2>
            <hr />
            <div class="project-description">
              <p>Client -- {{ image.name }}</p>
              <p>Year -- 2019</p>
              <p>Web -- {{ image.name }}</p>
            </div>
            <img :src="image.img1" alt="Card image cap" class="image-desc-little">
            <img :src="image.img2" alt="Card image cap" class="image-desc-little">
          </div>
        </div>
      </div>

      <div class="d-lg-none d-block">
        <h2 class="project-name ml-3">{{ image.name }}</h2>
        <hr />        
        <div class="project-description ml-3">
          <p>Client -- {{ image.name }}</p>
          <p>Year -- 2019</p>
          <p>Web -- {{ image.name }}</p>
        </div>
        <img :src="image.url" alt="Card image cap" class="image-desc mb-3">  
        <img :src="image.img1" alt="Card image cap" class="image-desc-little">
        <img :src="image.img2" alt="Card image cap" class="image-desc-little">  
      </div>
      <!-- <RelatedItems /> -->
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import RelatedItems from '~/components/related-items.vue';
import Header from '~/components/header.vue';

export default {
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  },  
  components: {
    Header,
    RelatedItems,
  },
  computed: {
    ...mapState([
      'images'
    ]),     
    image () { 
      return this.images.find(v => v.id == this.$route.params.id)
    },
  },
}
</script>
