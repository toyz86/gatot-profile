<template>
  <section class="menu-head">
    <header class="wrap d-flex align-items-center" id="header">
      <nuxt-link to="/" class="name-title mr-auto p-2">Gatot Prastyo</nuxt-link>
      <div class="header-socmed p-2 d-none d-lg-block">
        <nuxt-link to="https://web.facebook.com/toyzefbean/" target="_blank"><i class="fa fa-facebook"></i></nuxt-link>
        <nuxt-link to="https://api.whatsapp.com/send?phone=628567916365" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></nuxt-link>
        <nuxt-link to="https://www.linkedin.com/in/gatot-prastyo-56572641/" target="_blank"><i class="fa fa-linkedin"></i></nuxt-link>
        <nuxt-link to="https://github.com/toyz86" target="_blank"><i class="fa fa-github"></i></nuxt-link>    
      </div>

      <div class="burger_nav p-2">
        <input id="hamburger" class="hamburger" type="checkbox"/>
        <label class="hamburger" for="hamburger">
          <i></i>
        </label>
      </div>

      <div class="drawer-list">
        <ul @click="hideNav()">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <!-- <li><nuxt-link to="/#gallery">Works</nuxt-link></li> -->
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <div class="socmed-nav d-flex d-block d-lg-none justify-content-center">
            <li><nuxt-link to="https://web.facebook.com/toyzefbean/" target="_blank"><i class="fa fa-facebook"></i></nuxt-link></li>
            <li><nuxt-link to="https://api.whatsapp.com/send?phone=628567916365" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></nuxt-link></li>
            <li><nuxt-link to="https://www.linkedin.com/in/gatot-prastyo-56572641/" target="_blank"><i class="fa fa-linkedin"></i></nuxt-link></li>
            <li><nuxt-link to="https://github.com/toyz86" target="_blank"><i class="fa fa-github"></i></nuxt-link></li>
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
    isNavOpen() {
      const inputOpen = document.getElementById('hamburger').checked;
      const backDrop = document.querySelector('#home-page, #about, #detail');
      const menuLink = document.querySelector('header a');

      if (inputOpen === true) {
        backDrop.classList.add('blurin');
        document.querySelector('.drawer-list').style.transform = 'translate(0, 0)';
        document.querySelector('body').style.overflow = 'hidden';
        menuLink.classList.sadd('menu_transition');
      } else {
        backDrop.classList.remove('blurin');
        document.querySelector('.drawer-list').style.transform = 'translate(0, -100%)';
        document.querySelector('body').style.overflow = 'scroll';
        menuLink.classList.remove('menu_transition');
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
