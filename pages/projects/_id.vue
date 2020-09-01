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
        {id: 1, title: "LOGO", url: "/img/swam-fox.jpeg", name: "Swam Fox inc.", tags: ['ALL', 'LOGO']},
        {id: 2, title: "LOGO", url: "/img/meraki.png", name: "Meraki inc.", tags: ['ALL', 'LOGO']},
        {id: 3, title: "LOGO", url: "/img/jackson.jpg", name: "Jackson inc.", tags: ['ALL', 'LOGO']},
        {id: 4, title: "LOGO", url: "/img/blackstone5.jpg", name: "Black Stone inc.", tags: ['ALL', 'LOGO']},
        {id: 5, title: "LOGO", url: "/img/blue-fox.jpg", name: "Blue Fox inc.", tags: ['ALL', 'LOGO']},
        {id: 6, title: "LOGO", url: "/img/black-bear.jpg", name: "Black Bear inc.", tags: ['ALL', 'LOGO']},
        {id: 7, title: "LOGO", url: "/img/phaseit.jpeg", name: "Phase It inc.", tags: ['ALL', 'LOGO']},
        {id: 8, title: "LOGO", url: "/img/phoenix.jpg", name: "Phoenix inc.", tags: ['ALL', 'LOGO']},
        {id: 9, title: "LOGO", url: "/img/rusa.jpg", name: "The Abide Farm", tags: ['ALL', 'LOGO']},
        {id: 10, title: "LOGO", url: "/img/WL4.jpg", name: "Wilma & Louise", tags: ['ALL', 'LOGO']},
        {id: 11, title: "ANNUAL REPORT", url: "/img/annual2.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 12, title: "ANNUAL REPORT", url: "/img/annual3.jpg", name: "Kresna Insurance", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 13, title: "ANNUAL REPORT", url: "/img/annual4.jpg", name: "Enseval", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 14, title: "ANNUAL REPORT", url: "/img/annual5.jpg", name: "KMI Wire & Cable", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 15, title: "ANNUAL REPORT", url: "/img/annual6.jpg", name: "PJB Indonesia", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 16, title: "ANNUAL REPORT", url: "/img/annual7.jpg", name: "Marein Insurance", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 17, title: "BUSINESS CARD", url: "/img/busines-card.jpeg", name: "CRU Air + Gas", tags: ['ALL', 'LOGO']},
        {id: 18, title: "BUSINESS CARD", url: "/img/busines-card2.jpg", name: "Make It Last", tags: ['ALL', 'LOGO']},
        {id: 19, title: "BUSINESS CARD", url: "/img/Dig2.jpg", name: "Live to Dig", tags: ['ALL', 'GRAPHIC']},
        {id: 20, title: "BUSINESS CARD", url: "/img/falken-cover.jpg", name: "Falken Indonesia", tags: ['ALL', 'GRAPHIC']},
        {id: 21, title: "BUSINESS CARD", url: "/img/insider.jpeg", name: "Insider inc.", tags: ['ALL', 'GRAPHIC']},
        {id: 22, title: "BUSINESS CARD", url: "/img/SEO14.jpg", name: "SEO Playbook", tags: ['ALL', 'GRAPHIC']},
        {id: 23, title: "BUSINESS CARD", url: "/img/signage.jpeg", name: "Woolf Aircraft inc.", tags: ['ALL', 'GRAPHIC']},
        {id: 24, title: "BUSINESS CARD", url: "/img/Draft kalender 2021 dunlop4.jpg", name: "Falken Indonesia", tags: ['ALL', 'GRAPHIC']},
        {id: 25, title: "BUSINESS CARD", url: "/img/Kalender Falken rev.jpg", name: "Falken Indonesia", tags: ['ALL', 'GRAPHIC']},
        {id: 26, title: "ANNUAL REPORT", url: "/img/annual8.jpg", name: "Waskita Realty", tags: ['ALL', 'ANNUAL-REPORT']},
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
