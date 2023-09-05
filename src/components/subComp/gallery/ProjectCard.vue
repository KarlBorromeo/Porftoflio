<template>
  <div class="card">
    <h5>{{ theNumber }}. {{ title }}</h5>
    <p><span class="indent"/>{{ description }}</p>
    
    <section class="images">
      <ul v-for="image in arrayImage" :key="image">
         <img :src="image">        
      </ul>
          
    </section>
  </div>
</template>

<script>
import portraitImage from '@/assets/portrait.jpg';
import landscapeImage from '@/assets/landscape.jpg'
import awImage from '@/assets/aw.jpg'

export default {
    props: ['title','description','outputImages','number'],
    data(){
      return{
        arrayImage: [],
      }
    },
    methods:{
      getlistImages(){
        for(let i = 0; i<this.outputImages.length; i++){
            if(this.outputImages[i] === 'aw'){
              this.arrayImage.push(awImage)
            }else if(this.outputImages[i] === 'portrait'){
              this.arrayImage.push(portraitImage)
            }else{
              this.arrayImage.push(landscapeImage)
            }
          }
      }
    },
    computed:{
      theNumber(){
        return this.number + 1;
      }
    },
    created(){
      this.getlistImages()
    }
}
</script>

<style scoped>
.card{
    width: 73%;
    margin: 0 auto;
    /* border: 1px solid black; */
    padding: .5rem;
}
.indent{
  display: inline-block;
  width: 2rem;
}
h5{
    font-size: clamp(1rem, 2.5vw, 1.8rem);
    padding: .5rem 0 ;
  }
p{
    font-size: clamp(.8rem, 1.5vw, 1.5rem);
    line-height: 1.3rem;
}
.images{
  margin: 1rem 0;
  display: flex;
  gap: .5rem;
  /* justify-content: center;
  align-items: center;
  flex-direction: column; */
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  justify-items: center;
}
img{
  box-sizing: border-box;
  width: 30vw;
  height: 30vw;
  min-height: 200px;
  min-width: 200px;
  border-radius: 5px;
}
@media screen and (min-width: 768px) {
  p{
    line-height: 1.5rem;
  }
  .images{
    grid-template-columns: 1fr 1fr;
  }
}
</style>