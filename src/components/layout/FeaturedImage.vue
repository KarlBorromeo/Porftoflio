<template>
  <div class="featured-image">
    <the-header style="background-image: none; background-color: transparent;"></the-header>
    <the-title></the-title>
  </div>
</template>

<script>
import TheTitle from '../subComp/header/TheTitle.vue'
export default {
  components: {
    TheTitle,
  }
}
</script>

<style scoped>
.featured-image{
    background-image: url('../../assets/man.jpg');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}
@media screen and (min-width: 768px){
  .featured-image{
    background-position-y: -160px;
  }
}
@media screen and (min-width: 1024px){
  .featured-image{
    background-position-y: -260px;
  }
}
@media screen and (min-width: 1440px){
  .featured-image{
    background-position-y: -370px;
  }
}
</style>