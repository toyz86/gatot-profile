<template>
  <section class="gallery">
    <ul class="nav-bar d-flex justify-content-center">
      <li class="nav-link" v-bind:class="{ active: currentTag === 'ALL' }" @click="filter('ALL')">All</li>
      <li class="nav-link" v-bind:class="{ active: currentTag === 'LOGO' }" @click="filter('LOGO')">Logos</li>
      <li class="nav-link" v-bind:class="{ active: currentTag === 'POSTER' }" @click="filter('POSTER')">Posters</li>
      <li class="nav-link" v-bind:class="{ active: currentTag === 'BROCHURE' }" @click="filter('BROCHURE')">Brochure</li>
      <li class="nav-link" v-bind:class="{ active: currentTag === 'ANNUAL-REPORT' }" @click="filter('ANNUAL-REPORT')">Annual Report</li>      
    </ul>    
    <transition-group name="list-complete" class="list-complete" tag="section">
      <div v-for="item in filteredItems" :key="item.id" class="list-complete-item">
        <nuxt-link :to="`/projects/${item.id}`">
          <img class="list-complete-img" :src="item.url" alt="" />
          <div class="works-hover">
            <div class="works-title">
              <h4>{{ item.name }}</h4>
              <span class="project-title">{{ item.title }} Design</span>
            </div>
          </div>        
        </nuxt-link>
      </div>
    </transition-group>
  </section>
</template>

<script>
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
      currentTag: 'ALL'
    }
  },
  computed: {
    filteredItems () {
      var filter = this.currentTag;
      return this.images.filter(function(item) {
          return item.tags.indexOf(filter) !== -1;
      });
    }
  },
  methods: {
    filter (tag) {
      this.currentTag = tag;
    }
  }  
}
</script>
