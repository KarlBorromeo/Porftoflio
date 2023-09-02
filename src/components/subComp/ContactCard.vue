<template>
    <div>
      <h3>{{ title}}</h3>
      <section class="contact">
        <p>lrakborromeo@gmail.com</p>
        <P>+639388534616</P>
        <section class="social-icons">
          <font-awesome-icon icon="fa-brands fa-twitter"/>
          <font-awesome-icon icon="fa-brands fa-instagram"/>
          <font-awesome-icon icon="fa-brands fa-facebook"/>
        </section>
      </section>
      <p>@copyright 2023</p>
    </div>
  </template>
  
  <script>
  export default {
    computed:{
      title(){
        return this.$store.getters.returnTitle
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
      gap: 2rem;
      justify-content: center;
      text-align: center;
  }
  h3,p{
      color: black;
      font-weight: 600;
  }
  p{
    font-weight: 400;
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