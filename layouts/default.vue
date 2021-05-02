<template>
  <div>
    <Header />
    <!-- <div class="d-lg-block d-none" v-if="this.$route.path == '/'">
      <div id="frame-top"></div>
      <div id="frame-right"></div>
      <div id="frame-bottom"></div>
      <div id="frame-left"></div>
    </div> -->
    <Nuxt />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Footer from '~/components/footer.vue'
import Header from '~/components/header.vue'

export default {
  components: {
    Footer,
    Header
  }
}
</script>
<style>
html {
  background: #000;
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
    #frame-top,
    #frame-bottom,
    #frame-left,
    #frame-right {
        background: #fff;
        position: fixed;
        z-index: 999;
    }

    #frame-left,
    #frame-right {
        top: 0;
        bottom: 0;
        width: 18px;
    }

    #frame-left {
        left: 0;
    }

    #frame-right {
        right: 0;
    }

    #frame-top,
    #frame-bottom {
        left: 0;
        right: 0;
        height: 18px;
    }

    #frame-top {
        top: 0;
    }

    #frame-bottom {
        bottom: 0;
    }

    .blurin {
      filter: blur(10px);
      transition: 0.5s ease-in-out;
    }    

  /* .container, .container-fluid, 
  .container-lg, .container-md, 
  .container-sm, .container-xl, 
  .container-xxl {
    padding: 0px
  } */

    @media (max-width: 320px) {
      #frame-top,
      #frame-right,
      #frame-bottom,
      #frame-left {
        display: none;
      }
    }
</style>
