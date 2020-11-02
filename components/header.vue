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
