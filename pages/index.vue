<template>
  <section class="home-page" id="home-page">
    <!-- <div class="container-fluid"> -->

    <div class="page-loader d-flex justify-content-center align-items-center" id="page-loader">
    </div>
    <!-- <no-ssr> -->
      <back-to-top bottom="100px" right="50px">
        <button type="button" class="btn btn-danger btn-to-top"><i class="fa fa-chevron-up"></i></button>
      </back-to-top>
    <!-- </no-ssr> -->
      
      <div class="main-page">
        <!-- <Header /> -->
      
        <div class="d-none d-lg-block">
          <b-row>
            <b-col cols="8">
              <div class="home-title">
                <h1 class="title__text js-letter" style="transform: translateX(0%) translateZ(0px);">Gatot<br><strong>Prastyo</strong></h1>
                <div class="stripe" style="transform: translateX(0%) translateZ(0px);">
                  <span></span>
                  <span class="js-letter" style="transform: translateX(0%) translateZ(0px);"></span>
                </div>
                <p class="title__lead js-letter" style="transform: translateX(0%) translateZ(0px);">graphic /<br>web designer.</p>
              </div>
            </b-col>

            <b-col cols="4">
              <div class="title-portfolio">portfolio</div>
            </b-col>

          </b-row>
        </div>  

        <div class="d-block d-lg-none">
          <!-- <h1 class="title-portfolio">portfolio</h1> -->
          <div class="home-title">
            <h1 class="title__text js-letter" style="transform: translateX(0%) translateZ(0px);">Gatot<br><strong>Prastyo</strong></h1>
            <div class="stripe" style="transform: translateX(0%) translateZ(0px);">
              <span></span>
              <span class="js-letter" style="transform: translateX(0%) translateZ(0px);"></span>
            </div>
            <p class="title__lead js-letter" style="transform: translateX(0%) translateZ(0px);">graphic /<br>web designer.</p>
          </div>
        </div>

      </div>     
      <!-- <section class="portfolio" id="portfolio"> -->
        <Gallery />
      <!-- </section>   -->
    <!-- </div> -->
    <Footer />
  </section>
</template>

<script>
import Gallery from '~/components/gallery.vue';
import Footer from '~/components/footer.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    Gallery,
    Footer
  },
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  },
  mounted() {
    this.onLoading();
  },
  methods: {
    onLoading() {
      const loader = document.getElementById('page-loader');
      loader.classList.add('p-hidden');
    },    
  }
}
</script>
