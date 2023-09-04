<template>
    <span>
        <font-awesome-icon icon="fa-solid fa-bars" class="bars" size="2x" @click="showCol('auto',true)" />
        <div class="nav-cols" v-if="navVisible">          
            <header>
              <router-link to="/home" @click="showCol('hidden',false)">
                <h3>{{ title }}</h3>
              </router-link>
              
              <!-- <img src="../../assets/logo2.png"> -->
              <font-awesome-icon icon = "fa-solid fa-x" size="1x" @click="showCol('hidden',false)"></font-awesome-icon>
            </header>
            <!-- <span>
                <img src="../../assets/logo2.png">
            </span> -->
            <ul>
              <router-link to="/about" @click="showCol('hidden',false)">About</router-link>
              <router-link to="/gallery" @click="showCol('hidden',false)">Gallery</router-link>
              <router-link to="/services" @click="showCol('hidden',false)">Services</router-link>
              <router-link to="/consultation" @click="showCol('hidden',false)">Boox a Consultation</router-link>
            </ul>
          </div>
    </span>
</template>

<script scoped>
export default {
    data(){
        return{
            navVisible: false
        }
    },
    methods:{
      showCol(param,bool){
        console.log(param)
        this.navVisible= bool;
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Add smooth scrolling animation
        });
      }
    },
    computed:{
      title(){
        return this.$store.getters.returnTitle
      }
    }
}
</script>

<style scoped>
.router-link-active{
  font-weight: 900;
  color: black;
  text-decoration: underline;
}
img{
  min-width: 70px;
  width: 15vw;
  max-width: 200px
}
header{
    padding: 2rem 1.5rem;
    box-sizing: border-box;
    height: 20vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header button{
  border: none;
  background-color: transparent;
}
header h3{
  font-weight: 900;
  color: black;
  font-size: clamp(1.5rem, 3vw, 3rem); 
} 
span{
  color: white;
}
.nav-cols{
  z-index: 1;
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: black;
  animation: bg-change 0.3s ease-in forwards;
  position: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
}

ul{
  text-align: center;
  /* border: 1px solid black; */
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
a{
  margin: 1rem 0;
  font-weight: 400;
  font-size: larger;
  text-decoration: none;
}
h3{
  font-weight: 900;
}

@keyframes bg-change {
  0%{background-color: transparent;}
  100%{background-color: white;}
}
</style>