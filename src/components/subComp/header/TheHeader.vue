<template>
  <div>
    <span>
      <router-link to="/">
        <img src="../../../assets/logo2.png">
      </router-link>  
    </span>
    <span>
      <navigation-col class="nav-col"></navigation-col>
      <navigation-row class="nav-row"></navigation-row>
    </span>
  </div>
</template>

<script>
import NavigationCol from './NavigationCol.vue'
import NavigationRow from './NavigationRow.vue'
export default {
  components: { NavigationCol, NavigationRow },
    data(){
      return{
        navVisible: false,
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
img{
  min-width: 70px;
  width: 15vw;
  max-width: 200px
}
div{
    background-image: url(../../../assets/aw.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #4429345b;
    background-blend-mode: darken;
    background-position: top;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.5rem;
    box-sizing: border-box;
    height: 20vh;
}
span h3{
  text-shadow: 5px 0px 0px rgba(0, 0, 0, 0.5);
  font-weight: 900;
  color: white;
  font-size: clamp(1.5rem, 3vw, 3rem); 
} 


/*FOR MOBILE AND tablet effects*/
@media screen and (max-width: 767px){
  .nav-row{
    display: none;
  }
}

/*FOR desktop effects*/
@media screen and (min-width: 768px){
  .nav-col{
    display: none;
  }
}

</style>