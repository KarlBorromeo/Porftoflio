<template>
    <div class="card">
      <header>
        <img :src="image" alt="CANNOT LOAD IMAGE"><h3>{{ name }}</h3>
      </header>
      <h5>{{ expertise }}</h5>
      <h5>{{ degree }}</h5>
      <p><span class="indent"/>{{ description }}</p>  
      
    </div>
  </template>
  
  <script>
  import portraitImage from '@/assets/portrait.jpg';
  import landscapeImage from '@/assets/landscape.jpg'
  import awImage from '@/assets/aw.jpg'

  export default {
      props: ['name','degree','description','expertise','profileImage'],
      computed: {
        image(){
          if(this.profileImage === 'aw'){
            return awImage;
          }else if(this.profileImage === 'portrait'){
            return portraitImage
          }else{
            return landscapeImage
          }
        }
      },
  }
  </script>
  
  <style scoped>
  .card{
      width: 73%;
      margin: 1rem auto;
      border: 1px solid black;
      /* background-color: red; */
  }
  .card header{
    display: flex;
    justify-content: start;
    align-items: center;
    padding: .5rem 0;
    gap: .5rem;
  }
  img{
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
  </style>