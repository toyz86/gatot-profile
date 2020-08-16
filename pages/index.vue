<template>
  <section class="home-page">
    <!-- FRAME WINDOW -->
    <div id="frame-top"></div>
    <div id="frame-right"></div>
    <div id="frame-bottom"></div>
    <div id="frame-left"></div>
    
    <div class="main-page">
      <img class="logo mt-5" src="/img/t.png" alt="logo">
      <h1 class="title">Toyz<strong>design</strong></h1>
      <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim consectetur feugiat. Fusce quis ex fringilla, facilisis velit et, euismod mauris. Vivamus quis consectetur nisi. Ut a est enim. Suspendisse imperdiet nisl id metus posuere mattis.</p>
    </div>

    <section class="portfolio">
      <!-- BEGIN NAVBAR -->
      <ul class="nav-bar d-flex justify-content-center">
        <li class="nav-link" v-bind:class="{ active: currentFilter === 'ALL' }" @click="setFilter('ALL')">All</li>
        <li class="nav-link" v-bind:class="{ active: currentFilter === 'LOGO' }" @click="setFilter('LOGO')">Logos</li>
        <li class="nav-link" v-bind:class="{ active: currentFilter === 'POSTER' }" @click="setFilter('POSTER')">Posters</li>
        <li class="nav-link" v-bind:class="{ active: currentFilter === 'BROCHURE' }" @click="setFilter('BROCHURE')">Brochure</li>
        <li class="nav-link" v-bind:class="{ active: currentFilter === 'ANNUAL-REPORT' }" @click="setFilter('ANNUAL-REPORT')">Annual Report</li>      
      </ul>
    <!-- END NAVBAR -->

      <transition-group class="mansory" name="mansory" tag="section">
        <div class="imgList" v-for="image in images" v-bind:key="image.title" @click="openDetail(image)">
          <img v-if="currentFilter === image.category || currentFilter === 'ALL'" :src="image.url" />
          <div class="hover-image">
            <h1 class="gallery-title">{{image.title}}<span>DESIGN</span></h1>
          </div>
        </div>
      </transition-group>
    </section>  
  </section>
</template>

<script>
export default {
  data(){
    return {
      currentFilter: 'ALL',
      images: [
        {title: "LOGO", url: "img/swam-fox.jpeg", category: 'LOGO'},
        {title: "LOGO", url: "img/meraki.png", category: 'LOGO'},
        {title: "LOGO", url: "img/jackson.jpg", category: 'LOGO'},
        {title: "POSTER", url: "img/poster3.jpeg", category: 'POSTER'},
        {title: "POSTER", url: "img/brochure.jpg", category: 'POSTER'},
        {title: "POSTER", url: "img/poster.jpg", category: 'POSTER'},
        {title: "POSTER", url: "img/poster2.jpg", category: 'POSTER'},
        {title: "BROCHURE", url: "img/brochure2.png", category: 'BROCHURE'},
        {title: "BROCHURE", url: "img/Flyer.jpg", category: 'BROCHURE'},
        {title: "ANNUAL REPORT", url: "http://www.pixeden.com/media/k2/galleries/511/001-business-card-mockup-vol-22-box-brand-psd.jpg", category: 'ANNUAL-REPORT'},
        {title: "ANNUAL REPORT", url: "img/annual.jpg", category: 'ANNUAL-REPORT'},
        {title: "ANNUAL REPORT", url: "img/annual2.jpg", category: 'ANNUAL-REPORT'},
        {title: "BUSINESS CARD", url: "https://image.freepik.com/free-psd/luxury-logo-mockup-dark-business-card_103373-98.jpg", category: 'LOGO'},
        {title: "BUSINESS CARD", url: "img/Kalender Falken rev.jpg", category: 'POSTER'},
        {title: "OTHER", url:"https://image.freepik.com/free-psd/front-back-isolated-t-shirt-with-shadow-mockup_117023-1752.jpg", category: 'LOGO'},
        {title: "OTHER", url: "https://image.freepik.com/free-psd/mobile-phone-mockup-with-editable-design-changeable-colors_196070-196.jpg", category: 'LOGO'},
        {title: "SIGNAGE", url:"https://image.freepik.com/free-psd/front-back-isolated-t-shirt-with-shadow-mockup_117023-1752.jpg", category: 'LOGO'},        
      ],
    }
  },
 	methods: {
		setFilter: function(imageItem) {
			this.currentFilter = imageItem;
    },
    openDetail (data) {
      this.$store.commit('setImages', data)
      this.$router.push({ 'path': '/detail' })
    }
	} 
}
</script>
