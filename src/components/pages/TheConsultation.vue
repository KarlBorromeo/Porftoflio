<template>
  <div class="container">
    <the-header style="background-image: none; background-color: transparent;"></the-header>
    <div class="card">
      <h3>Consultation Form</h3>
      <form @submit.prevent="">
        <section class="style-form">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder=" enter you fullname">
        </section>

        <section class="style-form">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder=" enter email">
        </section>
        
        <section class="style-form">
          <label> Services</label>
          <span class="radio">
            <input type="radio" id="webdev">
            <label for="webdev">Web Development</label>
          </span>
          
          <span class="radio">
          <input type="radio" id="appdev">
          <label for="appdev">Application Development</label>            
          </span>
        
          <span class="radio">
          <input type="radio" id="engr">
          <label for="engr">Electronics Engineering</label>
          </span>
        </section>

        <section class="style-form textarea">
          <label for="description">Description</label>
          <textarea id="description" placeholder=" enter more details"/>
        </section>
        <button>Send now</button>
        

      </form>
    </div>
  </div>
  <contact-card></contact-card>
</template>

<script>
export default {

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
  height: 100vh;
}
.card{
  width: 75%;
  height: 75%;
  margin: 1rem auto;
  background-color: rgb(246, 239, 239);
  padding-top: 1rem;
  border-radius: 10px;
  text-align: center;
}
h3{
  font-size: clamp(1rem, 5vw, 2rem); 
  padding: 1rem;
}
form{
  box-sizing: border-box;
  width: 80%;
  height: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding: 1rem;
}
.style-form{
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
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
form .textarea{
  /* min-height: 100px; */
  flex-grow: 1;
}
form .textarea textarea{
  height: 100%;
  /* min-height: 5rem; */
  /* border: 1px solid greenyellow; */
}
button{
  border: none;
  border-radius: 10px;
  width: 70%;
  padding: .5rem 1rem;
  background-color: #3E3FE7;
  color: white;
  margin: auto;
}
</style>
