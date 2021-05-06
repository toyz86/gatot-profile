<template>
  <section class="about" id="about">
    <!-- <Header /> -->
    <div class="container">
      <!-- desktop only -->
      <div class="about-section d-none d-lg-block">
        <div class="row mt-5">
          <div class="col-6">
            <img class="pic-profile" src="/img/gatot.png" alt="gatotz">
          </div>
          <div class="col-6">
            <h4 class="hl-about mt-5">Hi, My name is <b>Gatot Prastyo</b></h4>
            <br />
            <p class="project-description">
                Thanks for wanting to get to know about me. I'm Gatot Prastyo, a graphic designer based out of Bogor, Indonesia. 
                I've been in the graphic design industry field more than 10 years. I'm passionate about creating clean and elegant on-brand designs for print and web. 
                I love a good challenge and learning new skills. I understand the world through my visual experiences and love to to be challenged by new opportunities. 
                If you think you have one for me, I'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      <!-- mobile only -->
      <div class="d-block d-lg-none">
        <img class="pic-profile" src="/img/gatot.png" alt="gatotz">
        <h4 class="hl-about mt-5">Hi, My name is <b>Gatot Prastyo</b></h4>
        <br />
        <p class="project-description">
          Thanks for wanting to get to know about me. I'm Gatot Prastyo, a graphic designer based out of Bogor, Indonesia. 
          I've been in the graphic design industry field more than 10 years. I'm passionate about creating clean and elegant on-brand designs for print and web. 
          I love a good challenge and learning new skills. I understand the world through my visual experiences and love to to be challenged by new opportunities. 
          If you think you have one for me, I'd love to hear from you.
        </p>
      </div>      
    </div>
    <Footer />
  </section>
</template>

<script>
import Footer from '~/components/footer.vue';
export default {
  head() {
    return {
      title: 'About | Gatot Prastyo',
    }
  },  
  components: {
    Footer
  },

  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  },
}
</script>
