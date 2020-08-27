<template>
  <section class="detail">
    <Header />
    <div class="container">
      <h1 class="title">Portfolio</h1>
      <p class="project-title">Home > Projects > <b>{{ image.title }}</b></p>
      <div class="row justify-content-md-center">
        <div class="col-8">
          <img :src="image.url" alt="Card image cap" class="image-desc">
        </div>
        <div class="col-4">
          <h2 class="project-name">{{ image.name }}</h2>
          <hr />
          <p class="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer vitae dui felis. Curabitur posuere nibh et orci consequat, nec molestie dui pulvinar. 
            Cras auctor ligula quis ante tristique, vitae vestibulum magna aliquam. 
            Mauris vel luctus dolor. Sed ac consequat turpis. 
            Aenean dignissim velit ut varius congue. Nunc lacinia consequat lorem, 
            ut suscipit lorem rutrum sit amet. Ut et elementum ligula.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/header.vue'
export default {
  data() {
    return {
      images: [
        {id: 1, title: "LOGO", url: "/img/swam-fox.jpeg", name: "Meraki inc.", tags: ['ALL', 'LOGO']},
        {id: 2, title: "LOGO", url: "/img/meraki.png", name: "Meraki inc.", tags: ['ALL', 'LOGO']},
        {id: 3, title: "LOGO", url: "/img/jackson.jpg", name: "Jackson inc.", tags: ['ALL', 'LOGO']},
        {id: 4, title: "POSTER", url: "/img/poster3.jpeg", name: "Poster Mockup 3", tags: ['ALL', 'POSTER']},
        {id: 5, title: "POSTER", url: "/img/brochure.jpg", name: "Swam Fox inc.", tags: ['ALL', 'POSTER']},
        {id: 6, title: "POSTER", url: "/img/poster.jpg", name: "Poster Mockup 1", tags: ['ALL', 'POSTER']},
        {id: 7, title: "POSTER", url: "/img/poster2.jpg", name: "Poster Mockup 2", tags: ['ALL', 'POSTER']},
        {id: 8, title: "BROCHURE", url: "/img/brochure2.png", name: "Swam Fox inc.", tags: ['ALL', 'BROCHURE']},
        {id: 9, title: "BROCHURE", url: "/img/Flyer.jpg", name: "Swam Fox inc.", tags: ['ALL', 'BROCHURE']},
        {id: 10, title: "ANNUAL REPORT", url: "http://www.pixeden.com/media/k2/galleries/511/001-business-card-mockup-vol-22-box-brand-psd.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 11, title: "ANNUAL REPORT", url: "/img/annual.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 12, title: "ANNUAL REPORT", url: "/img/annual2.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 13, title: "BUSINESS CARD", url: "https://image.freepik.com/free-psd/luxury-logo-mockup-dark-business-card_103373-98.jpg", name: "Swam Fox inc.", tags: ['ALL', 'LOGO']},
        {id: 14, title: "BUSINESS CARD", url: "/img/Kalender Falken rev.jpg", name: "Falken inc.", tags: ['ALL', 'POSTER']},
        {id: 15, title: "OTHER", url:"https://image.freepik.com/free-psd/front-back-isolated-t-shirt-with-shadow-mockup_117023-1752.jpg", name: "Swam Fox inc.", tags: ['ALL', 'LOGO']},
        {id: 16, title: "OTHER", url: "https://image.freepik.com/free-psd/mobile-phone-mockup-with-editable-design-changeable-colors_196070-196.jpg", name: "Swam Fox inc.", tags: ['ALL', 'LOGO']},
        {id: 17, title: "SIGNAGE", url:"https://image.freepik.com/free-psd/front-back-isolated-t-shirt-with-shadow-mockup_117023-1752.jpg", name: "Swam Fox inc.", tags: ['ALL', 'LOGO']},
        {id: 18, title: "LOGO", url: "/img/black-bear.jpg", name: "Black Bear Inc.", tags: ['ALL', 'LOGO']},
        {id: 19, title: "POSTER", url: "/img/poster3.jpeg", name: "Poster Mockup 3", tags: ['ALL', 'POSTER']},
        {id: 20, title: "POSTER", url: "/img/brochure.jpg", name: "Swam Fox inc.", tags: ['ALL', 'POSTER']},
        {id: 21, title: "POSTER", url: "/img/poster.jpg", name: "Poster Mockup 1", tags: ['ALL', 'POSTER']},
        {id: 22, title: "BROCHURE", url: "/img/brochure2.png", name: "Swam Fox inc.", tags: ['ALL', 'BROCHURE']},
        {id: 23, title: "BROCHURE", url: "/img/Flyer.jpg", name: "Swam Fox inc.", tags: ['ALL', 'BROCHURE']},
        {id: 24, title: "BROCHURE", url: "/img/brochure2.png", name: "Swam Fox inc.", tags: ['ALL', 'BROCHURE']},
        {id: 25, title: "BROCHURE", url: "/img/Flyer.jpg", name: "Swam Fox inc.", tags: ['ALL', 'BROCHURE']},
        {id: 26, title: "ANNUAL REPORT", url: "http://www.pixeden.com/media/k2/galleries/511/001-business-card-mockup-vol-22-box-brand-psd.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 27, title: "ANNUAL REPORT", url: "/img/annual.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 28, title: "ANNUAL REPORT", url: "/img/annual2.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 29, title: "ANNUAL REPORT", url: "http://www.pixeden.com/media/k2/galleries/511/001-business-card-mockup-vol-22-box-brand-psd.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 30, title: "ANNUAL REPORT", url: "/img/annual.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 31, title: "ANNUAL REPORT", url: "/img/annual2.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
      ],
    }
  },  
  components: {
    Header,
  },
  computed: {
    image () { 
      return this.images.find(v => v.id == this.$route.params.id)
    }
  },
  // mounted() {
  //   console.log('ini adalah', this.images);
  // }
}
</script>
