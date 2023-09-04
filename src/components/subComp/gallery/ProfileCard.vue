<template>
    <div class="card">
      <header>
        //PROFILE IMAGE<h3>{{ name }}</h3>
      </header>
      <h5>{{ expertise }}</h5>
      <h5>{{ degree }}</h5>
      <p><span class="indent"/>{{ description }}</p>  
      
    </div>
  </template>
  
  <script>
  export default {
      props: ['name','degree','description','expertise','profileImage'],
      computed: {
        image(){
          // return this.outputImages
          return this.profileImage
        }
      }
  }
  </script>
  
  <style scoped>
  .card{
      width: 75%;
      margin: 1rem auto;
      border: 1px solid black;
      /* background-color: red; */
  }
  .card header{
    display: flex;
  }
  </style>