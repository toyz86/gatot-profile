<template>
  <section>
    <div class="main-page">
      <div class="d-flex justify-content-between align-items-center">
        <div class="footer-right">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-github"></i></a>
        </div>
        <nuxt-link to="/">
          <img class="logo" src="/img/t-black.png" alt="logo">
        </nuxt-link>
        <div class="menu">
          <i class="fa fa-bars"></i>
        </div>
      </div>
    </div>
    <hr />
  </section>
</template>

<style scoped>
  .logo {
      max-width: 100px;
      margin-left: -130px;
  }
  .main-page {
    padding: 0px 90px 0px 90px;
  }
  .footer-right {
      float: left;
      /* margin-top: 6px; */
  }

  .footer-right a {
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
  .menu {
    color: grey;
  }
</style>
