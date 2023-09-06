<template>
  <div class="container">
    <the-header style="background-image: none; background-color: transparent;"></the-header>
    
    <article class="card">
        <form @submit.prevent="submit">
          <h3>Consultation Form</h3>  
          <section class="style-form">
            <label for="name">Full Name</label>
            <input type="text" id="name" placeholder=" enter you fullname" v-model.trim="fullname">
          </section>

          <section class="style-form">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder=" enter email" v-model.trim="email">
          </section>
          
          <section class="style-form">
            <label> Services</label>
            <span class="radio">
              <input type="radio" id="webdev" v-model="service" value="web development">
              <label for="webdev">Web Development</label>
            </span>
            
            <span class="radio">
            <input type="radio" id="appdev" v-model="service" value="application development">
            <label for="appdev">Application Development</label>            
            </span>
          
            <span class="radio">
            <input type="radio" id="engr" v-model="service" value="engineering">
            <label for="engr">Electronics Engineering</label>
            </span>
          </section>

          <section class="style-form textarea">
            <label for="description">Description</label>
            <textarea id="description" placeholder=" enter more details at least 8 characters" v-model="description"/>
          </section>

          <section class="button-area">
            <p v-if="!checkAll" class="errorMessage">Complete all details required...</p>
            <button :disabled="!checkAll" :class="{disableButton:!checkAll}">Send now</button>
          </section>
      </form>
    </article>
  </div>
  <contact-card></contact-card>
</template>

<script>
export default {
    data(){
      return{
          isError: false,
          fullname: '',
          email: '',
          service: 'web development',
          description: '',
          fullnameBool: true,
          emailBool: true,
          descriptionBool: true,
      }
    },
    methods: {
      submit(){
          //REQUEST API
          this.resetData()
      },
      resetData(){
          this.fullname= ''
          this.email= ''
          this.service= 'web development'
          this.description= ''
      },
      clicked(){
        console.log('Clicked')
      }
    },
    computed:{
      checkAll(){
        if(this.fullname !== '' && this.email !== ''&& this.description.length >= 8){
          console.log("ALL OK")
          return true
        }else{
          console.log("NOT ALL OK")
          return false
        }
      }
    },
  }
</script>

<style scoped>
.container{
  background-image: url(../../assets/aw.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #4429345b;
  background-blend-mode: darken;
  background-position: top right ;
}
.card{
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h3{
  font-size: clamp(1rem, 1.5vw, 2rem); 
  letter-spacing: 3px;
  padding: 1rem;
  background-color: #3E3FE7;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  color: white;
  font-weight: 900;
  text-transform: uppercase;
}
form{
  position: relative;
  width: 80%;
  height: 95%;
  max-height: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.638);
  box-sizing: border-box;
  gap: .5rem;
  border-radius: 10px;
}
.style-form{
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 90%;
}
#name, #email, #description{
  width: 100%;
  padding: .3rem 0;
}
.radio{
  display: flex;
  align-items: center;
  gap: .1rem;
}
section label, button{
  font-size: clamp(1rem, 1.5vw, 2rem);
}
.radio label{
  font-size: clamp(.7rem, 1.5vw, 1.5rem);
}
.textarea{
  flex-grow: 1;
}
form .textarea textarea{
  resize: none;
  height: 100%;

}
#description,#name, #email{
  padding: 10px;
  box-sizing: border-box;
}
.button-area{
  width: 90%;
  text-align: center;
  padding: .5rem 0;
}
button{
  border: none;
  border-radius: 10px;
  width: 70%;
  padding: .5rem 1rem;
  background-color: #3E3FE7;
  box-shadow: 0 1px 3px 1px black;
  color: white;
  margin: .2rem auto;
  box-sizing: border-box;
}
button:active{
  background-color: #2afc0078;
  color: black;
}
.disableButton{
  background-color: transparent;
  box-shadow: 0 1px 3px 1px red;
  border: 1px solid red;
  color: red;
}
.errorMessage,.disableButton{
  color: red;
  font-weight: 700;
}
</style>
