<template>
    <the-header></the-header>
    <div class="container">
      <div @click="toggleProjects" class="dropdownProjects" :class="{shadedProj: shadedProj}">
        <h5 class="buttonText">Show Developers' Capabilities</h5>
        <font-awesome-icon icon = "fa-solid fa-caret-down" size="1x" v-if="!isProjectVisible"/>
        <font-awesome-icon icon = "fa-solid fa-caret-up" size="1x"  v-if="isProjectVisible"/>
      </div>
      <ul v-if=" isProjectVisible">
        <li v-for="project, index in projects" :key="project.id">
          <project-card
          :title="project.title"
          :description="project.description"
          :outputImages="project.outputImages"
          :number="index"/>
        </li>
      </ul>

      <div @click="toggleProfile" class="dropdownProfiles" :class="{shadedProf: shadedProf}">
        <h5 class="buttonText">Developers and Engineers</h5>
        <font-awesome-icon icon = "fa-solid fa-caret-down" size="1x" v-if="!isProfileVisible"/>
        <font-awesome-icon icon = "fa-solid fa-caret-up" size="1x"  v-if="isProfileVisible"/>
      </div>
      <ul v-if="isProfileVisible">
        <li v-for="profile in profiles" :key="profile.name">
          <profile-card
          :name="profile.name"
          :degree="profile.degree"
          :description="profile.description"
          :expertise="profile.expertise"
          :profileImage="profile.image"
          />
      </li>
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
      },
      isProjectVisible(){
        return this.$store.getters.isProjectVisible
      },
      shadedProj(){
        return this.$store.getters.shadedProj
      },
      isProfileVisible(){
        return this.$store.getters.isProfileVisible
      },
      shadedProf(){
        return this.$store.getters.shadedProf
      }
    },
    methods:{
      toggleProjects(){
        this.$store.commit('toggleProjects')
      },
      toggleProfile(){
        this.$store.commit('toggleProfile')
      }
    }
    
}
</script>

<style scoped>
.container{
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.dropdownProjects,.dropdownProfiles{
  width: 75%;
  margin: 1rem auto;
  border: .5px solid black;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  /* box-shadow: 0 0 3px 1px black; */
}
.shadedProj,.shadedProf{
  box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.693);
  background-color: rgba(255, 255, 255, 0.638);
  /* font-weight: 900; */
}
.buttonText{
  font-size: clamp(1rem, 2.5vw, 2rem);
}
</style>