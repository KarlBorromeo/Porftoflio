<template>
    <div>
      <h3 @click="home">{{ title}}</h3>
      <section class="contact">
        <p>borromeojhaerix27@gmail.com</p>
        <section class="social-icons">
          <a href="https://www.facebook.com/jhaerix.borromeo.9/"><font-awesome-icon icon="fa-brands fa-facebook"/></a>
          <a href="https://www.instagram.com/jhae_romeo/"><font-awesome-icon icon="fa-brands fa-instagram"/></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-whatsapp"/></a>   
        </section>
      </section>
      <p>@2023 Iron-Dev. All Rights Reserved</p>
    </div>
  </template>
  
  <script>
  export default {
    computed:{
      title(){
        return this.$store.getters.returnTitle
      }
    },
    methods: {
      home(){
        this.$router.push('/home')
      }
    }
  }
  </script>
  
  <style scoped>
  div{
      background-color: #E9CEB0;
      min-height: 30vh;
      padding: 3rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      text-align: center;
  }
  h3{
    font-size: clamp(2rem, 2vw, 3rem);
  }
  p{
    font-size: clamp(1rem, 2vw, 1.5rem);
  }
  h3,p{
      color: black;
      font-weight: 600;

  }
  p{
    font-weight: 400;
  }
  a{
    text-decoration: none;
    color: black;
  }
  a:active{
    color: rgba(255, 255, 255, 0.797);
  }
  .social-icons{
    font-size: xx-large;
    display: flex;
    justify-content: center;
    gap: .5rem;
  }
  .contact{
    display: flex;
    flex-direction: column;
    gap: .5rem;
    justify-content: center;
    align-content: center;
  }
  </style>