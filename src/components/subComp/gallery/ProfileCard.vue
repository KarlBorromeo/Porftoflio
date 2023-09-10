<template>
    <div class="card">
      <header>
        <h5>{{ name }}</h5><img :src="image" alt="CANNOT LOAD IMAGE">
      </header>
      <h6>{{ degree }}</h6>
      <p><span class="indent"/>{{ description }}</p>  
      <ul v-for="expert in expertise" :key="expert">
        <li>{{ expert }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import Karl from '@/assets/profiles/karl.jpg'
  import Reynard from '@/assets/profiles/reynard.jpg'
  import Jhaerix from '@/assets/profiles/jhaerix.jpg'

  export default {
      props: ['name','degree','description','expertise','profileImage'],
      computed: {
        image(){
          if(this.profileImage === 'karl'){
            return Karl;
          }else if(this.profileImage === 'jhaerix'){
            return Jhaerix;
          }else{
            return Reynard;
          }
        }
      },
  }
  </script>
  
  <style scoped>
  .card{
      width: 73%;
      margin: 0 auto 1.5rem;
      display: flex;
      flex-direction: column;
      gap: .2rem;
      justify-content: center;
      align-content: center;
      /* background-color: red; */
  }
  .card header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: .5rem 0;
    gap: .5rem;
    flex-direction: row-reverse;
    justify-content: start;
  }
  .card header h5:hover + img{
    scale: 1.2;
    border: 1px solid black;
  }
  img{
  width: 10vw;
  height: 10vw;
  min-width: 50px;
  min-height: 50px;
  border-radius: 100%;
  box-sizing: border-box;
  }
  img:hover{
    scale: 1.2;
    border: 1px solid black;
  }
  .indent{
    display: inline-block;
    width: 2rem;
  }
  ul{
    padding-left: 1rem;
    font-weight: 600;
    list-style-type: disc;
  }
  h5{
    font-size: clamp(1rem, 2.5vw, 2rem);
  }
  h6{
    font-size: clamp(.8rem, 2vw, 1.5rem);
  }
  p{
    font-size: clamp(.8rem, 1.5vw, 1.5rem);
    line-height: 1.3rem;
  }
  @media screen and (min-width: 768px) {
  p{
    line-height: 1.5rem;
  }
}
  </style>