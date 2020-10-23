<template>
  <section class="header">
    <div v-if="isNavshow" class="main-page">
      <div class="new-nav d-flex justify-content-between align-items-center">
        <nuxt-link to="/">
          <img class="logo" src="/img/logo-gp.png" alt="logo">
        </nuxt-link>

        <ul class="navbar-center">
          <li><a href="/">Home</a></li>
          <li><a href="/works">Works</a></li>
          <li><a href="/about">About</a></li>
        </ul>

        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>
          <ul class="menu__box">
            <li><a class="menu__item" href="/">Home</a></li>
            <li><a class="menu__item" href="/works">Works</a></li>
            <li><a class="menu__item" href="/about">About</a></li>
          </ul>
        </div>
      </div>
      <hr />
    </div>

    <!-- header for homepage -->
    <div v-if="onHomePage">
      <div class="home-nav d-flex justify-content-between align-items-center">
        <nuxt-link to="/">
          <img class="home-logo" src="/img/logo-gp-fc.png" alt="logo">
        </nuxt-link>


        <ul class="home-navbar-center">
          <li><a href="/">Home</a></li>
          <li><a href="/works">Works</a></li>
          <li><a href="/about">About</a></li>
        </ul>

        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="home__menu__btn" for="menu__toggle">
            <span></span>
          </label>
          <ul class="menu__box">
            <li><a class="menu__item" href="/">Home</a></li>
            <li><a class="menu__item" href="/works">Works</a></li>
            <li><a class="menu__item" href="/about">About</a></li>
          </ul>
        </div>
      </div>
    </div>    
  </section>
</template>

<script>
export default {
  computed: {
    isNavshow() {
      return this.$route.path != '/'
    },
    onHomePage() {
      return this.$route.path == '/'
    }
  }
}
</script>
