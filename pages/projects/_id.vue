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
      <RelatedItems />
    </div>
  </section>
</template>

<script>
import Header from '~/components/header.vue'
import RelatedItems from '~/components/related-items.vue'
export default {
  data() {
    return {
      images: [
        {id: 1, title: "LOGO", name: "Swam Fox inc.", url: "/img/swam-fox.jpeg", category: 'LOGO'},
        {id: 2, title: "LOGO", name: "Meraki inc.", url: "/img/meraki.png", category: 'LOGO'},
        {id: 3, title: "LOGO", name: "Jackson inc.", url: "/img/jackson.jpg", category: 'LOGO'},
        {id: 4, title: "POSTER", name: "Poster Mockup 3", url: "/img/poster3.jpeg", category: 'POSTER'},
        {id: 5, title: "POSTER", name: "Swam Fox inc.", url: "/img/brochure.jpg", category: 'POSTER'},
        {id: 6, title: "POSTER", name: "Poster Mockup 1", url: "/img/poster.jpg", category: 'POSTER'},
        {id: 7, title: "POSTER", name: "Poster Mockup 2", url: "/img/poster2.jpg", category: 'POSTER'},
        {id: 8, title: "BROCHURE", name: "Swam Fox inc.", url: "/img/brochure2.png", category: 'BROCHURE'},
        {id: 9, title: "BROCHURE", name: "Swam Fox inc.", url: "/img/Flyer.jpg", category: 'BROCHURE'},
        {id: 10, title: "ANNUAL REPORT", name: "Swam Fox inc.", url: "http://www.pixeden.com/media/k2/galleries/511/001-business-card-mockup-vol-22-box-brand-psd.jpg", category: 'ANNUAL-REPORT'},
        {id: 11, title: "ANNUAL REPORT", name: "Swam Fox inc.", url: "/img/annual.jpg", category: 'ANNUAL-REPORT'},
        {id: 12, title: "ANNUAL REPORT", name: "Swam Fox inc.", url: "/img/annual2.jpg", category: 'ANNUAL-REPORT'},
        {id: 13, title: "BUSINESS CARD", name: "Swam Fox inc.", url: "https://image.freepik.com/free-psd/luxury-logo-mockup-dark-business-card_103373-98.jpg", category: 'LOGO'},
        {id: 14, title: "BUSINESS CARD", name: "Falken inc.", url: "/img/Kalender Falken rev.jpg", category: 'POSTER'},
        {id: 15, title: "OTHER", name: "Swam Fox inc.", url:"https://image.freepik.com/free-psd/front-back-isolated-t-shirt-with-shadow-mockup_117023-1752.jpg", category: 'LOGO'},
        {id: 16, title: "OTHER", name: "Swam Fox inc.", url: "https://image.freepik.com/free-psd/mobile-phone-mockup-with-editable-design-changeable-colors_196070-196.jpg", category: 'LOGO'},
        {id: 17, title: "SIGNAGE", name: "Swam Fox inc.", url:"https://image.freepik.com/free-psd/front-back-isolated-t-shirt-with-shadow-mockup_117023-1752.jpg", category: 'LOGO'},        
      ],
    }
  },  
  components: {
    Header,
    RelatedItems,
  },
  computed: {
    image () { 
      return this.images.find(v => v.id == this.$route.params.id)
      // return this.$store.state.image == this.$route.params.id
    }
  },
  mounted() {
    console.log('ini adalah', this.images);
  }
}
</script>
