<template>
    <featured-image></featured-image>
    <home-body></home-body>
    <the-footer></the-footer>
</template>

<script>
import FeaturedImage from '../layout/FeaturedImage.vue'
import HomeBody from '../layout/HomeBody.vue'
import TheFooter from '../layout/TheFooter.vue'
export default {
  components: {
    FeaturedImage, 
    HomeBody,
    TheFooter,
  },
}
</script>
