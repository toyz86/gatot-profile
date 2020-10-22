<template>
  <section>
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

<style scoped>
  .navbar-center {
    float: none;
    margin: 0;
    transform: translate(-2%)
  }

  .new-nav {
    text-align: center;
    padding: 15px;
  }

  .logo {
      max-width: 50px;
      float: left;
      position: fixed;
      top: 20px;
      margin-left: 50px;
  }

  .main-page {
    padding: 0;
  }

  ul {
    list-style-type: none;
  }

  li {
    display: inline;
  }

  li a {
    text-decoration: none;
    padding: 0 30px;
    color: #616161;
    text-align: center;
    letter-spacing: 3px;
  }

  .sosmed {
      float: left;
      margin-right: -130px;
  }

  .sosmed a {
    display: inline-block;
    width: 35px;
    height: 35px;
    border-radius: 2px;
    font-size: 20px;
    color: grey;
    text-align: center;
    line-height: 35px;
    /* margin-left: 3px; */
    transition: all .25s;
  }

  .hamburger-menu {
    float: right;
    /* margin-right: 15px; */
    z-index: 2;
  }

  #menu__toggle {
    opacity: 0;
  }

  #menu__toggle:checked~.menu__btn>span {
    transform: rotate(45deg);
  }

  #menu__toggle:checked~.menu__btn>span::before {
    top: 0;
    transform: rotate(0);
  }

  #menu__toggle:checked~.menu__btn>span::after {
    top: 0;
    transform: rotate(90deg);
  }

  #menu__toggle:checked~.menu__box {
    visibility: visible;
    right: 0;
  }

  .menu__btn {
    display: flex;
    align-items: center;
    position: fixed;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;
    top: 35px;
    right: 80px;
  }

  .menu__btn>span,
  .menu__btn>span::before,
  .menu__btn>span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #616161;
    transition-duration: .25s;
  }

  .menu__btn>span::before {
    content: '';
    top: -8px;
  }

  .menu__btn>span::after {
    content: '';
    top: 8px;
  }

  .menu__box {
    display: block;
    position: fixed;
    visibility: hidden;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100%;
    margin: 0;
    padding: 150px 0;
    list-style: none;
    background-color: #000;
    box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
    opacity: 0.8;
    /* z-index: 1; */
    transition-duration: .25s;
  }

  .menu__item {
    display: block;
    padding: 12px 24px;
    text-align: initial;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: .25s;
  }

  .menu__item:hover {
    color: #47c9e5;
  }

  .menu__btn>span,
  .menu__btn>span::before,
  .menu__btn>span::after {
    background-color: #6a787b;
  }

  .home-nav {
    padding: 20px 100px 100px 100px;
    margin-bottom: 100px;
  }

  .home-navbar-center a {
    color: #cbcbcb;
  }

  .home-navbar-center a:hover {
    color: #47c9e5;
    transition: all .5s;
  }

  .home-logo {
    max-width: 50px;
    position: fixed;
    top: 50px;
    margin-left: -130px;
    z-index: 10;
  }

  .home__menu__btn {
    position: fixed;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;
    top: 80px;
    right: 80px;
  }

  .home__menu__btn>span,
  .home__menu__btn>span::before,
  .home__menu__btn>span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #cbcbcb;
    transition-duration: .25s;
  }

  .home__menu__btn>span::before {
    content: '';
    top: -8px;
  }

  .home__menu__btn>span::after {
    content: '';
    top: 8px;
  }  

  .home__menu__btn>span,
  .home__menu__btn>span::before,
  .home__menu__btn>span::after {
    background-color: #cbcbcb;
  }  

  #menu__toggle:checked~.home__menu__btn>span {
    transform: rotate(45deg);
  }

  #menu__toggle:checked~.home__menu__btn>span::before {
    top: 0;
    transform: rotate(0);
  }

  #menu__toggle:checked~.home__menu__btn>span::after {
    top: 0;
    transform: rotate(90deg);
  }  

  @media (max-width: 900px) {
    .home-nav {
      padding: 20px 100px 0px 100px;
      margin-bottom: 0;
    }
    .navbar-center {
      display: none;
    }

    .home-navbar-center {
      display: none;
    }

    .logo {
      margin-left: 10px;
    }

    .menu__btn {
      right: 25px;
    }

    .home__menu__btn {
      right: 35px;
    }

    .home-logo {
      margin-left: -140px;
    }
  }

  @media (max-width: 320px) {
    .home-logo {
      margin-left: -130px;
    }
  }
</style>

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
