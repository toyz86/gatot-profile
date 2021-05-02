<template>
  <section class="menu-head">
    <header class="wrap d-flex align-items-center" id="header">
      <a href="/" class="name-title">Gatot Prastyo</a>
      <div class="header-socmed">
        <a href="https://web.facebook.com/toyzefbean/" target="_blank"><i class="fa fa-facebook"></i></a>
        <a href="https://api.whatsapp.com/send?phone=628567916365" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/gatot-prastyo-56572641/" target="_blank"><i class="fa fa-linkedin"></i></a>
        <a href="https://github.com/toyz86" target="_blank"><i class="fa fa-github"></i></a>    
      </div>

      <input id="hamburger" class="hamburger" type="checkbox"/>
      <label class="hamburger" for="hamburger">
        <i></i>
      </label>

      <div class="drawer-list">
        <ul @click="hideNav()">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/#gallery">Works</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <div v-if="isMobileSize()" class="socmed-nav d-flex justify-content-center">
            <li><a href="https://web.facebook.com/toyzefbean/" target="_blank"><i class="fa fa-facebook"></i></a></li>
            <li><a href="https://api.whatsapp.com/send?phone=628567916365" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
            <li><a href="https://www.linkedin.com/in/gatot-prastyo-56572641/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://github.com/toyz86" target="_blank"><i class="fa fa-github"></i></a></li>
          </div>          
        </ul>
      </div>    

    </header>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // windowWidth: window.innerWidth,
    }
  },
  mounted() {
    window.innerWidth = this.isMobileSize;
    window.onclick = this.isNavOpen;
    window.onscroll = this.isPageScrolled;
  },
  methods: {
    hideNav() {
      document.getElementById('hamburger').checked = false;
    },
    isMobileSize() {
      const maxSize = 480;
      if(this.windowWidth > maxSize){
        return false;
      } else {
        return true;
      }
    },
    isNavOpen() {
      const inputOpen = document.getElementById('hamburger').checked;
      const backDrop = document.querySelector('#home-page, #about, #detail');

      if (inputOpen === true) {
        backDrop.classList.add('blurin');
      } else {
        backDrop.classList.remove('blurin');
      }
    },
    isPageScrolled() {
      const header = document.getElementById("header");
      if (window.pageYOffset > 50) {
        header.classList.add("expanded");
      } else {
        header.classList.remove("expanded");
      }
    }
  }
}
</script>
