<template>
  <!-- <div> -->
    <featured-image></featured-image>
    <home-body></home-body>
    <the-footer></the-footer>
  <!-- </div> -->
  
</template>

<script>
import FeaturedImage from './components/layout/FeaturedImage.vue'
import HomeBody from './components/layout/HomeBody.vue'
import TheFooter from './components/layout/TheFooter.vue'
export default {
  components: {
    FeaturedImage, 
    HomeBody,
    TheFooter,
  },
}
</script>

<style>
*{
  margin: 0;
  padding:0;
}
div{
  box-sizing: border-box;
}
</style>