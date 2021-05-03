<template>
  <section class="gallery" id="gallery">
    <div class="button-group d-flex justify-content-center" id="filterNav">
      <button 
        v-for="(val, key) in option.getFilterData" 
        :key="val.key" class="button" 
        :class="[key===filterOption? 'is-checked' : '']" 
        @click="filter(key)">{{key}}
      </button>
    </div>    
    <client-only>
      <CoolLightBox 
        :items="images" 
        :index="index"
        @close="index = null">
      </CoolLightBox>
    </client-only>
    <client-only>
      <isotope ref="cpt" id="root_isotope" 
        :item-selector="'element-item'" 
        v-images-loaded:on.progress="layout"
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
    </client-only> 
  </section>
</template>

<script>
import { mapState } from 'vuex';
import Loading from '~/components/loading.vue';

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
        itemSelector: ".element-item",
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
  },
  mounted() {
    this.onLoadIsotope();
  },
  methods: {
    filter: function(key) {
    	this.$refs.cpt.filter(key);
    },
    layout () {
      this.$refs.cpt.layout('masonry');
    },     

    onLoadIsotope() {
      if (process.browser) {
        console.log('duarrrr');
      }
    }
  }  
}
</script>
