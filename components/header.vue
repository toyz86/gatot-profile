<template>
  <section class="header">
    <div v-if="isNavShow" class="main-page">
      <div class="new-nav d-flex justify-content-between align-items-center">
        <nuxt-link to="/">
          <img class="logo" src="/img/logo-gp.png" alt="logo">
        </nuxt-link>

        <div class="navbar-center">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/works">Works</nuxt-link>
          <nuxt-link to="/about">About</nuxt-link>
        </div>

        <div>
          <div id="burger" :class="{ 'active' : isBurgerActive }" @click.prevent="toggle">
            <slot>
              <button type="button" class="burger-button" title="Menu">
                <span class="hidden">Toggle menu</span>
                <span class="burger-bar burger-bar--1"></span>
                <span class="burger-bar burger-bar--2"></span>
                <span class="burger-bar burger-bar--3"></span>
              </button>
            </slot>
          </div>        

          <div class="sidebar">
              <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
              <transition name="slide">
                  <div v-if="isPanelOpen"
                      class="sidebar-panel">
                      <slot>
                        <nuxt-link to="/" class="menu-item" >Home</nuxt-link>
                        <nuxt-link to="/works" class="menu-item">Works</nuxt-link>
                        <nuxt-link to="/about" class="menu-item">About</nuxt-link>                        
                      </slot>
                  </div>
              </transition>
          </div>
        </div>        

        <!-- <div class="hamburger-menu">
          <input id="menu-toggle" type="checkbox" />
          <label class="menu-btn" for="menu-toggle">
            <span></span>
          </label>
          <div class="menu-box">
            <nuxt-link to="/" class="menu-item" >Home</nuxt-link>
            <nuxt-link to="/works" class="menu-item">Works</nuxt-link>
            <nuxt-link to="/about" class="menu-item">About</nuxt-link>
          </div>
        </div> -->
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
        <div>
          <div id="burger" :class="{ 'active' : isBurgerActive }" @click.prevent="toggle">
            <slot>
              <button type="button" class="home-burger-button" title="Menu">
                <span class="hidden">Toggle menu</span>
                <span class="home-burger-bar burger-bar--1"></span>
                <span class="home-burger-bar burger-bar--2"></span>
                <span class="home-burger-bar burger-bar--3"></span>
              </button>
            </slot>
          </div>        

          <div class="sidebar">
              <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
              <transition name="slide">
                  <div v-if="isPanelOpen"
                      class="sidebar-panel">
                      <slot>
                        <nuxt-link to="/" class="menu-item" >Home</nuxt-link>
                        <nuxt-link to="/works" class="menu-item">Works</nuxt-link>
                        <nuxt-link to="/about" class="menu-item">About</nuxt-link>                        
                      </slot>
                  </div>
              </transition>
          </div>
        </div>
      </div>
    </div>    
  </section>
</template>

<script>
import { store, mutations } from "~/store/menu.js";
export default {
  computed: {
    isNavShow() {
      return this.$route.path != '/'
    },
    onHomePage() {
      return this.$route.path == '/'
    },
    isBurgerActive() {
      return store.isNavOpen;
    },
    isPanelOpen() {
        return store.isNavOpen
    }    
  },
  methods: {
    toggle() {
      mutations.toggleNav();
    },
      closeSidebarPanel: mutations.toggleNav   
  },  
  mounted() {
    var outSideBox = document.querySelector("body");
    console.log('ini outside', outSideBox);
    var sideBar = document.querySelector(".menu-box");
    console.log('ini sidebar', sideBar);
    outSideBox.addEventListener('click', function(event) {
      sideBar.classList.remove('.menu-box');
    })
  }
}
</script>

<style scoped>
  .hidden {
    visibility: hidden;
  }

  button {
    cursor: pointer;
  }

  /* remove blue outline */
  button:focus {
    outline: 0;
  }

  .burger-button {
    position: fixed;
    top: 35px;
    right: 50px;    
    height: 30px;
    width: 32px;
    display: block;
    z-index: 999;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .home-burger-button {
    position: fixed;
    top: 75px;
    right: 50px;    
    height: 30px;
    width: 32px;
    display: block;
    z-index: 999;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }  

  .burger-bar {
    background-color: #616161;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
      opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .home-burger-bar {
    background-color: #cbcbcb;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
      opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }  

  .burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }

  .burger-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(0.8);
  }

  .burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
  }

  .no-touchevents .burger-bar--2:hover {
    transform: scaleX(1);
  }

  .burger-bar--3 {
    transform: translateY(6px);
  }

  #burger.active .burger-button {
    transform: rotate(-180deg);
  }

  #burger.active .burger-bar {
    background-color: #fff;
  }

  #burger.active .home-burger-bar {
    background-color: #fff;
  }  

  #burger.active .burger-bar--1 {
    transform: rotate(45deg);
  }

  #burger.active .burger-bar--2 {
    opacity: 0;
  }

  #burger.active .burger-bar--3 {
    transform: rotate(-45deg);
  }

  .slide-enter-active,
  .slide-leave-active
  {
      transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
      transform: translateX(100%);
      transition: all 150ms ease-in 0s
  }

  .sidebar-backdrop {
      background-color: rgba(0, 0, 0, 0.4);
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      cursor: pointer;
      z-index: 50;
  }

  .sidebar-panel {
      overflow-y: auto;
      /* background-color: #000; */
      background: linear-gradient(45deg, rgba(71, 201, 229, 0.9) 0%, rgba(102, 252, 233, 0.9) 100%);
      position: fixed;
      right: 0;
      top: 0;
      height: 100vh;
      z-index: 50;
      /* padding: 3rem 20px 2rem 20px; */
      padding: 150px 0;
      width: 270px;
  }  
</style>
