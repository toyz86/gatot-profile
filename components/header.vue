<template>
  <section>
    <div class="main-page">
      <div class="d-flex justify-content-between align-items-center">
        <div class="sosmed">
          <a href="https://www.facebook.com" target="_blank"><i class="fa fa-facebook"></i></a>
          <a href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter"></i></a>
          <a href="https://www.linkedin.com" target="_blank"><i class="fa fa-linkedin"></i></a>
          <a href="https://www.github.com" target="_blank"><i class="fa fa-github"></i></a>
        </div>
        
        <nuxt-link to="/">
          <img class="logo" src="/img/t-black.png" alt="logo">
        </nuxt-link>

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
    </div>
    <hr />
  </section>
</template>

<style scoped>
  .logo {
      max-width: 100px;
      /* margin-left: -130px; */
  }
  .main-page {
    padding: 0px 90px 0px 90px;
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
    margin-right: 15px;
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
  #menu__toggle:checked~.home-page {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .menu__btn {
    display: flex;
    align-items: center;
    position: absolute;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;
    top: 60px;
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
    position: absolute;
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
    font-family: 'Roboto', sans-serif;
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

  @media (max-width: 992px) {
    .sosmed {
        display: none;
  }
}
</style>
