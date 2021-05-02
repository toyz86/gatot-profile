<template>
  <section class="gallery" id="gallery">
    <!-- <Loading v-if="onloading" /> -->
    <!-- show on desktop only -->
    <!-- <div class="d-lg-block d-none">
      <ul class="nav-bar d-flex justify-content-center">
        <li class="nav-link" v-bind:class="{ active: currentTag === 'ALL' }" @click="filter('ALL')">All</li>
        <li class="nav-link" v-bind:class="{ active: currentTag === 'LOGO' }" @click="filter('LOGO')">Logos</li>
        <li class="nav-link" v-bind:class="{ active: currentTag === 'GRAPHIC' }" @click="filter('GRAPHIC')">Print Design</li>
        <li class="nav-link" v-bind:class="{ active: currentTag === 'WEB' }" @click="filter('WEB')">Web Design</li>      
      </ul>   
    </div> -->
    <!-- show on mobile only -->
    <!-- <div class="d-lg-none d-block">
      <ul class="nav-bar d-flex justify-content-center">
        <li class="nav-link" v-bind:class="{ active: currentTag === 'ALL' }" @click="filter('ALL')">All</li>
        <li class="nav-link" v-bind:class="{ active: currentTag === 'LOGO' }" @click="filter('LOGO')">Logos</li>
      </ul>
      <ul class="nav-bar d-flex justify-content-center">
        <li class="nav-link" v-bind:class="{ active: currentTag === 'GRAPHIC' }" @click="filter('GRAPHIC')">Print Design</li>
        <li class="nav-link" v-bind:class="{ active: currentTag === 'WEB' }" @click="filter('WEB')">Web Design</li>      
      </ul>   
    </div> -->

    <div class="button-group d-flex justify-content-center" id="filterNav">
      <button 
        v-for="(val, key) in option.getFilterData" 
        :key="val.key" class="button" 
        :class="[key===filterOption? 'is-checked' : '']" 
        @click="filter(key)">{{key}}
      </button>
    </div>    

    <CoolLightBox 
      :items="images" 
      :index="index"
      @close="index = null">
    </CoolLightBox>    

    <isotope ref="cpt" id="root_isotope" 
      :item-selector="'element-item'" 
      :list="images" 
      :options='option' 
      @filter="filterOption=arguments[0]" 
      @layout="currentLayout=arguments[0]">
      <div v-for="(element,listIndex) in images" :key="listIndex" @click="index = listIndex">
        <img class="list-complete-img" :src="element.src" />
        <div class="overlay"></div>
        <h3 class="works-title p-4">{{ element.title }}</h3>
      </div>
    </isotope>    
    <!-- <transition-group name="list-complete" class="list-complete" tag="section">
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
    </transition-group> -->
  </section>
</template>

<script>
import { mapState } from 'vuex';
import Loading from '~/components/loading.vue'
export default {
  data() {
    return {      
      // currentTag: 'ALL',
      layouts: [
        "masonry",
      ],      
      index: null,
      currentLayout: 'masonry',
      selected: null,
      filterOption: "All",
      option: {
        getFilterData: {
          "All": function() {
            return true;
          },
          "Logo": function(el) {
            return el.category === "LOGO";
          },
          "Print Design": function(el) {
            return el.category === "GRAPHIC";
          },
          "Web Design": function(el) {
            return el.category === "WEB";
          },          
        }
      }      
    }
  },
  components: {
    Loading
  },

  computed: {
    ...mapState([
      'images'
    ]),    
    // filteredItems () {
    //   var filter = this.currentTag;
    //   return this.images.filter(function(item) {
    //       return item.tags.indexOf(filter) !== -1;
    //   });
    // },
    onloading() {
      return (this.images.length <= 0)
    }
  },
  methods: {
    filter: function(key) {
    	this.$refs.cpt.filter(key);
    },    
    // filter (tag) {
    //   this.currentTag = tag;
    // }
  }  
}
</script>
