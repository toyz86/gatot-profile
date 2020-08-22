<template>
  <section class="footer">
    <div class="row">
      <div class="col-4">
        <div class="d-flex align-items-center">
          <img class="logo-footer" src="/img/t-black.png" alt="logo">
          <div class="v-line ml-3"></div>
          <h4 class="ml-3">Toyz<b>Design</b>.Inc</h4>
        </div>
      </div>
      <div class="col-8">
        <p>Our Clients :</p>
        <div class="d-flex">
          <p class="mr-5">Client 1</p>
          <p class="mr-5">Client 2</p>
          <p class="mr-5">Client 3</p>
          <p class="mr-5">Client 4</p>
          <p class="mr-5">Client 5</p>
          <p class="mr-5">Client 6</p>
          <p class="mr-5">Client 7</p>
          <p class="mr-5">Client 8</p>          
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .footer {
    padding: 100px 0px 100px 0px;
    background-color: #f5f5f5;
    color: #8d8d8d;
  }
  .logo-footer {
    max-width: 100px; 
    margin-left: 100px;
  }
  .footer-right {
    float: right;
    margin-top: 6px;
    max-width: 180px;
  }
  .footer-right a {
    display: inline-block;
    width: 35px;
    height: 35px;
    background-color: #33383b;
    border-radius: 2px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    margin-left: 3px;
    transition:all .25s;    
  }
  .v-line {
    border-left: 1px solid grey;
    height: 100px;
  }
</style>
