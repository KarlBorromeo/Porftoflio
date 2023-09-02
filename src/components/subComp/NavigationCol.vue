<template>
    <span>
        <font-awesome-icon icon="fa-solid fa-bars" class="bars" size="2x" @click="showCol('auto',true)" />
        <div class="nav-cols" v-if="navVisible">          
            <header>
              <h3>{{ title }}</h3>
              <font-awesome-icon icon = "fa-solid fa-x" size="1x" @click="showCol('hidden',false)"></font-awesome-icon>
            </header>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Gallery</li>
              <li>Book a Consultation</li>
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
        // this.$store.commit('setNavCol',false)
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
li{
  margin: 1rem 0;
  font-weight: 700;
  font-size: larger;
}

@keyframes bg-change {
  0%{background-color: transparent;}
  100%{background-color: white;}
}
</style>