<template>
    <the-header></the-header>
    <div class="container">
      <ul v-for="service in services" :key="service.serviceName">
      <service-card
        :serviceName="service.serviceName"
        :serviceIcon="service.serviceIcon"
        :description="service.description"
        :tools="service.tools"
      />
    </ul>      
    </div>
    
    <contact-card></contact-card>
</template>

<script>
import ServiceCard from '../subComp/service/ServiceCard.vue'

export default {
  components: { ServiceCard },
  computed: {
    services(){
      return this.$store.getters.service
    }
  }
}
</script>

<style scoped>
</style>