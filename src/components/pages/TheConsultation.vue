<template>
  <div class="container">
    <the-header style="background-image: none; background-color: transparent;"></the-header>
    
    <article class="card">
        <form @submit.prevent="">
          <h3>Consultation Form</h3>  
          <section class="style-form">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder=" enter you fullname" v-model="fullname">
          </section>

          <section class="style-form">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder=" enter email" v-model="email">
          </section>
          
          <section class="style-form">
            <label> Services</label>
            <span class="radio">
              <input type="radio" id="webdev" v-model="service" value="web">
              <label for="webdev">Web Development</label>
            </span>
            
            <span class="radio">
            <input type="radio" id="appdev" v-model="service" value="application">
            <label for="appdev">Application Development</label>            
            </span>
          
            <span class="radio">
            <input type="radio" id="engr" v-model="service" value="engineering">
            <label for="engr">Electronics Engineering</label>
            </span>
          </section>

          <section class="style-form textarea">
            <label for="description">Description</label>
            <textarea id="description" placeholder=" enter more details"/>
          </section>

          <section class="style-form">
            <button>Send now</button>
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
          fullname: '',
          email: '',
          service: '',
      }
    }
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
  letter-spacing: 5px;
  padding: 1rem;
  background-color: #3E3FE7;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}
form{
  position: relative;
  width: 80%;
  height: 90%;
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
button{
  border: none;
  border-radius: 10px;
  width: 70%;
  padding: .5rem 1rem;
  background-color: #3E3FE7;
  color: white;
  margin: .5rem auto;
}
</style>
