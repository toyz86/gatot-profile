<template>
  <section class="related-items">
    <div class="project-name">
      <h2>Related Items</h2>
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper d-flex align-items-center">
            <div v-for="item in filteredItems" :key="item.id" class="related">
              <nuxt-link :to="`/projects/${item.id}`">
                <img class="related-img" :src="item.url" alt="" />
                <div class="related-title">
                  <h4>{{ item.name }}</h4>
                </div>
              </nuxt-link>
            </div> 
          </div> 
        </div>    
    </div>
  </section>
</template>

<style scoped>
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
.related {
  overflow: hidden;
  position: relative;
}
.related-img {
  width: 25%;
}
</style>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
          delay: 7000,
          disableOnInteraction: true,
        },
      },      
      currentTag: 'ALL'
    }
  },
  computed: {
    ...mapState([
      'images'
    ]),    
    filteredItems () {
      var filter = this.currentTag;
      return this.images.filter(function(item) {
          return item.tags.indexOf(filter) !== -1;
      });
    }
  },
  methods: {
    filter (tag) {
      this.currentTag = tag;
    }
  }    
}
</script>
