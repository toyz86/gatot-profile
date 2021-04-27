<template>
  <section class="footer" id="footer">
    <div class="d-flex justify-content-center">
      <div class="project-name">
        <h2>Contact <b>Me</b></h2>
      </div>
      <div class="line-footer"></div>
    </div>

    <div class="footer-bottom" style="margin-top: 40px">
      <a href="https://web.facebook.com/toyzefbean/" target="_blank"><i class="fa fa-facebook"></i></a>
      <a href="https://api.whatsapp.com/send?phone=628567916365" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/gatot-prastyo-56572641/" target="_blank"><i class="fa fa-linkedin"></i></a>
      <a href="https://github.com/toyz86" target="_blank"><i class="fa fa-github"></i></a>
      
      <div class="footer-title">
        <i class="fa fa-whatsapp" aria-hidden="true"></i> +62 856791 6365
      </div>

      <span class="rights">© 2020 Gatot Prastyo. All Rights Reserved.</span>
    </div>
    <!-- <div class="row">
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
    </div> -->
  </section>
</template>

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
        autoplay: {
          delay: 7000,
          disableOnInteraction: true,
        },
      }
    }
  },
}
</script>
