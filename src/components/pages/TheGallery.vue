<template>
    <the-header></the-header>
    <div class="container">
      <ul v-for="project in projects" :key="project.id">
        <project-card
          :title="project.title"
          :description="project.description"
          :dateFinished="project.dateFinished"
          :outputImages="project.outputImages"/>
      </ul>

      <ul v-for="profile in profiles" :key="profile.name">
        <profile-card
          :name="profile.name"
          :degree="profile.degree"
          :description="profile.description"
          :expertise="profile.expertise"
          :profileImage="profile.image"
        />
        <!-- <img :src="profile.image" alt="none">       
        {{profile.image}}
        <img src="../../assets/portrait.jpg"> -->
      </ul>
    </div>
    <contact-card></contact-card>
</template>

<script>
import ProfileCard from '../subComp/gallery/ProfileCard.vue'
import ProjectCard from '../subComp/gallery/ProjectCard.vue'
export default {
  components: { ProjectCard, ProfileCard },
    computed:{
      projects(){
        return this.$store.getters.project
      },
      profiles(){
        return this.$store.getters.profile
      }
    }
}
</script>

<style scoped>

</style>