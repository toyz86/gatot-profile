<template>
  <section class="footer">
    <div class="row">
      <div class="col-4">
        <div class="d-flex align-items-center">
          <img class="logo-footer" src="/img/t-black.png" alt="logo">
          <div class="v-line ml-3"></div>
          <h4 class="ml-3">Toyz<b>Design</b>.Inc</h4>
        </div>
      </div>
      <div class="col-8">
        <p>Our Clients :</p>
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper d-flex align-items-center">
            <div class="swiper-slide" v-for="item in banner" v-bind:key="item.key">
              <img class="footer-img" :src="item.src" alt="item.src">
            </div>
          </div>
          <div class="swiper-pagination"  slot="pagination"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    /* background: #fff; */

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    /* -webkit-justify-content: center;
    justify-content: center; */
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    }

  .footer {
    padding: 100px 0px 100px 0px;
    background-color: #f5f5f5;
    color: #8d8d8d;
  }
  .logo-footer {
    max-width: 100px; 
    margin-left: 100px;
  }
  .footer-right {
    float: right;
    margin-top: 6px;
    max-width: 180px;
  }
  .footer-right a {
    display: inline-block;
    width: 35px;
    height: 35px;
    background-color: #33383b;
    border-radius: 2px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    margin-left: 3px;
    transition:all .25s;    
  }
  img.footer-img {
    width: 50%;
    filter: grayscale(100%);
  }
  img.footer-img:hover {
    filter: none;
  }  
  .v-line {
    border-left: 1px solid grey;
    height: 100px;
  }
</style>

<script>
export default {
  data () {
    return {
      banner: [
        { src: '/img/logo/bjb.png' }, 
        { src: '/img/logo/PERUM_PERHUTANI.png' },
        { src: '/img/logo/falken.png' },
        { src: '/img/logo/dunlop.png' },
        { src: '/img/logo/mandiri.png' },
        { src: '/img/logo/unilever.png' },
      ],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        // breakpoints: {
        //   // when window width is <= 320px
        //   320: {
        //     slidesPerView: 1,
        //     spaceBetween: 8
        //   },
        //   // when window width is <= 480px
        //   480: {
        //     slidesPerView: 2,
        //     spaceBetween: 8
        //   },
        //   // when window width is <= 800px
        //   800: {
        //     slidesPerView: 3,
        //     spaceBetween: 8
        //   }
        // },
        autoplay: {
          delay: 7000,
          // stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        // pagination: {
        //   el: '.swiper-pagination'
        // }
      }
    }
  },
  // mounted() {
  //   console.log('Current Swiper instance object', this.mySwiper)
  //   // this.mySwiper.slideTo(1, 1000, false)
  // }
}
</script>
