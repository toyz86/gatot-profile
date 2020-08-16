<template>
  <div class="mt-5">
    <div class="container">
      <!-- <img class="logo-footer" src="/img/t-black.png" alt="logo"> -->
      <div class="row justify-content-md-center">
        <div class="col-8">
          <img :src="image.url" alt="Card image cap" class="img-fluid">
          <h5 class="card-title">{{ image.title }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .logo-footer {
    max-width: 100px; 
    margin-left: 100px;
  }
</style>

<script>
export default {
  computed: {
    image () { return this.$store.state.image }
  }
}
</script>
