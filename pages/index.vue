<template>
  <section class="home-page">
    <div class="main-page">
      <div class="d-flex justify-content-between">
        <div class="socmed-link">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-github"></i></a>
        </div>    
        <img class="logo" src="/img/t.png" alt="logo">

        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <ul class="menu__box">
            <li><a class="menu__item" href="/">About</a></li>
            <li><a class="menu__item" href="/works">Works</a></li>
            <li><a class="menu__item" href="#">Contact</a></li>
          </ul>    
        </div>  
      </div>

      <h1 class="title">Toyz<strong>design</strong></h1>
      <p class="profile-text mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim consectetur feugiat. Fusce quis ex fringilla, facilisis velit et, euismod mauris. Vivamus quis consectetur nisi. Ut a est enim. Suspendisse imperdiet nisl id metus posuere mattis.</p>
    </div>
    <section class="portfolio">
      <Gallery />
    </section>  
  </section>
</template>

<script>
import Gallery from '~/components/gallery.vue'
export default {
  data() {
    return {
      navOpen: false,
    }
  },
  components: {
    Gallery,
  },
}
</script>
