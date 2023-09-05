<template>
    <the-header></the-header>
    <div class="container">
      <ul v-for="service in services" :key="service.serviceName">
      <service-card
        :serviceName="service.serviceName"
        :serviceIcon="service.serviceIcon"
        :description="service.description"
        :tools="service.tools"
        :animated="isAnimated"
      />
    </ul>      
    </div>
    <contact-card></contact-card>
</template>

<script>
import ServiceCard from '../subComp/service/ServiceCard.vue'

export default {
  components: { ServiceCard },
  data(){
    return{
      isAnimated: false,
    }
  },
  computed: {
    services(){
      return this.$store.getters.service
    }
  },
  methods:{
    setClass(index){
      return 'card'+index
    },
    async show(){
      const cards = document.querySelectorAll('.sub-container')
      for(let i = 0; i<cards.length; i++){
        cards[i].classList.add('animated')
        await new Promise(resolve => setTimeout(resolve,200))
      }  
    }
  },
  mounted(){
    this.show()
  }
}
</script>

<style scoped>
.animated{
  visibility: visible;
  animation: animate .8s ease-in forwards;
}
@keyframes animate {
  0%{
    opacity: 0;
    transform: translateY(1000px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
}

</style>