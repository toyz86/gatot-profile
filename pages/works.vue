<template>
  <section>
    <Header />
    <section class="works">
      <ul class="nav-bar d-flex justify-content-center">
        <li class="nav-link" v-bind:class="{ active: currentTag === 'ALL' }" @click="filter('ALL')">All</li>
        <li class="nav-link" v-bind:class="{ active: currentTag === 'LOGO' }" @click="filter('LOGO')">Logos</li>
        <!-- <li class="nav-link" v-bind:class="{ active: currentTag === 'POSTER' }" @click="filter('POSTER')">Posters</li> -->
        <li class="nav-link" v-bind:class="{ active: currentTag === 'GRAPHIC' }" @click="filter('GRAPHIC')">Graphic Design</li>
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
        {id: 4, title: "LOGO", url: "/img/blackstone5.jpg", name: "Black Stone inc.", tags: ['ALL', 'LOGO']},
        {id: 5, title: "LOGO", url: "/img/blue-fox.jpg", name: "Blue Fox inc.", tags: ['ALL', 'LOGO']},
        {id: 6, title: "LOGO", url: "/img/black-bear.jpg", name: "Black Bear inc.", tags: ['ALL', 'LOGO']},
        {id: 7, title: "LOGO", url: "/img/phaseit.jpeg", name: "Phase It inc.", tags: ['ALL', 'LOGO']},
        {id: 8, title: "LOGO", url: "/img/phoenix.jpg", name: "Phoenix inc.", tags: ['ALL', 'LOGO']},
        {id: 9, title: "LOGO", url: "/img/rusa.jpg", name: "The Abide Farm", tags: ['ALL', 'LOGO']},
        {id: 10, title: "LOGO", url: "/img/WL4.jpg", name: "Wilma & Louise", tags: ['ALL', 'LOGO']},
        {id: 11, title: "ANNUAL REPORT", url: "/img/annual2.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 12, title: "ANNUAL REPORT", url: "/img/annual3.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 13, title: "ANNUAL REPORT", url: "/img/annual4.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 14, title: "ANNUAL REPORT", url: "/img/annual5.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 15, title: "ANNUAL REPORT", url: "/img/annual6.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 16, title: "ANNUAL REPORT", url: "/img/annual7.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
        {id: 17, title: "BUSINESS CARD", url: "/img/busines-card.jpeg", name: "Swam Fox inc.", tags: ['ALL', 'LOGO']},
        {id: 18, title: "BUSINESS CARD", url: "/img/busines-card2.jpg", name: "Swam Fox inc.", tags: ['ALL', 'LOGO']},
        {id: 19, title: "BUSINESS CARD", url: "/img/Dig2.jpg", name: "Swam Fox inc.", tags: ['ALL', 'GRAPHIC']},
        {id: 20, title: "BUSINESS CARD", url: "/img/falken-cover.jpg", name: "Swam Fox inc.", tags: ['ALL', 'GRAPHIC']},
        {id: 21, title: "BUSINESS CARD", url: "/img/insider.jpeg", name: "Swam Fox inc.", tags: ['ALL', 'GRAPHIC']},
        {id: 22, title: "BUSINESS CARD", url: "/img/SEO14.jpg", name: "Swam Fox inc.", tags: ['ALL', 'GRAPHIC']},
        {id: 23, title: "BUSINESS CARD", url: "/img/signage.jpeg", name: "Swam Fox inc.", tags: ['ALL', 'GRAPHIC']},
        {id: 24, title: "BUSINESS CARD", url: "/img/Draft kalender 2021 dunlop4.jpg", name: "Swam Fox inc.", tags: ['ALL', 'GRAPHIC']},
        {id: 25, title: "BUSINESS CARD", url: "/img/Kalender Falken rev.jpg", name: "Falken inc.", tags: ['ALL', 'GRAPHIC']},
        {id: 26, title: "ANNUAL REPORT", url: "/img/annual8.jpg", name: "Waskita Realty", tags: ['ALL', 'ANNUAL-REPORT']},
      ],      
      currentTag: 'ALL'
    }
  },
  components: {
    Header,
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
