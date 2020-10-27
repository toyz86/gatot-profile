<template>
  <section class="header">
    <div v-if="isNavshow" class="main-page">
      <div class="new-nav d-flex justify-content-between align-items-center">
        <nuxt-link to="/">
          <img class="logo" src="/img/logo-gp.png" alt="logo">
        </nuxt-link>

        <div class="navbar-center">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/works">Works</nuxt-link>
          <nuxt-link to="/about">About</nuxt-link>
        </div>

        <div class="hamburger-menu">
          <input id="menu-toggle" type="checkbox" />
          <label class="menu-btn" for="menu-toggle">
            <span></span>
          </label>
          <div class="menu-box">
            <nuxt-link to="/" class="menu-item" >Home</nuxt-link>
            <nuxt-link to="/works" class="menu-item">Works</nuxt-link>
            <nuxt-link to="/about" class="menu-item">About</nuxt-link>
          </div>
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


        <div class="home-navbar-center">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/works">Works</nuxt-link>
          <nuxt-link to="/about">About</nuxt-link>
        </div>

        <div class="hamburger-menu">
          <input id="menu-toggle" type="checkbox" />
          <label class="home-menu-btn" for="menu-toggle">
            <span></span>
          </label>
          <div class="menu-box">
            <nuxt-link to="/" class="menu-item" >Home</nuxt-link>
            <nuxt-link to="/works" class="menu-item">Works</nuxt-link>
            <nuxt-link to="/about" class="menu-item">About</nuxt-link>
          </div>
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
