<template>
  <section class="about">
    <Header />
    <div class="container">
      <!-- desktop only -->
      <div class="d-none d-lg-block">
        <div class="row mt-5">
          <div class="col-6">
            <img class="pic-profile" src="/img/gatot.png" alt="gatotz">
          </div>
          <div class="col-6">
            <h4 class="hl-about mt-5">Hi, My name is <b>Gatot Prastyo</b>, I’m a Graphic Designer and Frontend Developer enthusiast living in Bogor, Indonesia.</h4>
            <br />
            <p class="project-description">
              I am an expert Adobe InDesign Designer and have to my credit many years 
              experience working for employers around the world. My experience includes 
              working as a Adobe InDesign Designer, Business Cards Creator and Creative Design 
              Freelancer. I also have a good understanding of Format & Layout and Graphic Design. 
              I can work along well in cooperation with the whole team and manage them also efficiently, 
              or work individually. I am ready to be hired by you.
            </p>
          </div>
        </div>
      </div>

      <!-- mobile only -->
      <div class="d-block d-lg-none">
        <img class="pic-profile" src="/img/gatot.png" alt="gatotz">
        <h4 class="hl-about mt-5">Hi, My name is <b>Gatot Prastyo</b>, I’m a Graphic Designer and Frontend Developer enthusiast living in Bogor, Indonesia.</h4>
        <br />
        <p class="project-description">
          I am an expert Adobe InDesign Designer and have to my credit many years 
          experience working for employers around the world. My experience includes 
          working as a Adobe InDesign Designer, Business Cards Creator and Creative Design 
          Freelancer. I also have a good understanding of Format & Layout and Graphic Design. 
          I can work along well in cooperation with the whole team and manage them also efficiently, 
          or work individually. I am ready to be hired by you.
        </p>
      </div>      
    </div>
  </section>
</template>

<script>
import Header from '~/components/header.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    Header
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>
