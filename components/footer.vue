<template>
  <section class="footer">
    <div class="d-flex align-items-center">
      <img class="logo-footer" src="/img/t-black.png" alt="logo">
      <div class="footer-right">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .footer {
    padding: 100px 0px 100px 0px;
    background-color: #f5f5f5;
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
</style>
