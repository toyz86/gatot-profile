<template>
  <section class="works">
    <Header />
    <div class="container">
      <ul class="nav-bar d-flex justify-content-center">
        <li class="nav-link" v-bind:class="{ active: currentTag === 'ALL' }" @click="filter('ALL')">All</li>
        <li class="nav-link" v-bind:class="{ active: currentTag === 'LOGO' }" @click="filter('LOGO')">Logos</li>
        <li class="nav-link" v-bind:class="{ active: currentTag === 'GRAPHIC' }" @click="filter('GRAPHIC')">Graphic Design</li>
        <li class="nav-link" v-bind:class="{ active: currentTag === 'ANNUAL-REPORT' }" @click="filter('ANNUAL-REPORT')">Annual Report</li>      
      </ul>    
      <transition-group name="list-complete" class="list-complete mb-10" tag="section">
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
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Header from '~/components/header.vue'
export default {
  data() {
    return {
      currentTag: 'ALL'
    }
  },
  components: {
    Header,
  },  
  computed: {
    ...mapState([
      'images'
    ]),    
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
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }  
}
</script>
