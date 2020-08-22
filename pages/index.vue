<template>
  <section class="home-page">
    <!-- FRAME WINDOW -->
    <div id="frame-top"></div>
    <div id="frame-right"></div>
    <div id="frame-bottom"></div>
    <div id="frame-left"></div>
    
    <div class="main-page">
      <div class="d-flex justify-content-between">
      <div class="footer-right">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>
      </div>    
      <img class="logo" src="/img/t.png" alt="logo">
      <div class="menu">
        <i class="fa fa-bars"></i>
      </div>
      </div>
      <h1 class="title">Toyz<strong>design</strong></h1>
      <p class="profile-text mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim consectetur feugiat. Fusce quis ex fringilla, facilisis velit et, euismod mauris. Vivamus quis consectetur nisi. Ut a est enim. Suspendisse imperdiet nisl id metus posuere mattis.</p>
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
        <!-- <div class="imgList" v-for="image in images" v-bind:key="image.title" @click="openDetail(image)">          -->
        <div class="imgList" v-for="image in images" v-bind:key="image.title">
          <nuxt-link :to="`/projects/${image.id}`">
            <img v-if="currentFilter === image.category || currentFilter === 'ALL'" :src="image.url" />
            <div class="hover-image">
              <h1 class="gallery-title">{{image.title}}<span>DESIGN</span></h1>
            </div>
          </nuxt-link>
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
  created() {
    console.log(this.images);
  },
 	methods: {
		setFilter: function(imageItem) {
			this.currentFilter = imageItem;
    },
    // openDetail (data) {
    //   this.$store.commit('setImages', data)
    //   this.$router.push({ 'path': `/projects/{image.id}` })
    // }
	} 
}
</script>
