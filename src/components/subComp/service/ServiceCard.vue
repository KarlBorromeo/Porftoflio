<template>
  <div class="sub-container">
    <header class="header">
      <h3 class="title">{{ serviceName }}</h3>
      <img :src='image'>
    </header>
    <p><span class="indent"></span>{{ description }}</p>
    <section>
      <ul v-for="tool in tools" :key="tool">
          <li class="tool">{{ tool }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
  import webdev from '@/assets/services/webdev.png'
  import ai from '@/assets/services/ai.png'
  import engineering from '@/assets/services/engineering.png'
export default {
    props: ['serviceName', 'serviceIcon', 'description', 'tools'],
    computed: {
        image(){
          if(this.serviceIcon === 'webdev'){
            return webdev;
          }else if(this.serviceIcon === 'ai'){
            return ai
          }else{
            return engineering
          }
        }
      },
}
</script>

<style scoped>
.sub-container{
    visibility: hidden;
    width: 80%;
    min-width: 300px;
    margin: 1rem auto;
    padding: 1rem;
    box-sizing: border-box;
}
.header{
    display: flex;
    align-items: center;
    gap: .5rem;
    flex-direction: row-reverse;
    justify-content: start;
}
.image-container{
  width: 8vw;
  height: 8vw;
  min-width: 60px;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
} 
.indent{
  display: inline-block;
  width: 2rem;
}
img{
  width: 7vw;
  height: 7vw;
  min-width: 50px;
  min-height: 50px;
  border-radius: 10px;
}
img:hover{
  animation: grow 0.1s ease-in forwards ;
}
section{
  padding: 0 1rem;
}
ul{
  list-style-type: disc;
}
h3{
  margin: 0 .5rem;
}
.title:hover + img{
  animation: grow 0.1s ease-in-out forwards ;
}
.title:hover{
  text-decoration: underline;
}
.tool{
  font-style: oblique;
}

@keyframes grow {
  0%{
    transform: scale(1);
    border-radius: 10px;
    box-shadow: 0 0 0 0 gray
  }
  100%{
    transform: scale(1.2,1.2);
    box-shadow: 0 0 5px .5px black;
  }
}

@media screen and (min-width: 768px) {
  h3{
    font-size: 1.5rem;
  }
  p{
    font-size: 1rem;
  }
}
@media screen and (min-width: 1024px) {
  p{
    line-height: 2em;
  }
}
</style>