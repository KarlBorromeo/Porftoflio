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
// import portraitImage from '@/assets/portrait.jpg';
import landscapeImage from '@/assets/landscape.jpg'
// import awImage from '@/assets/aw.jpg'
import reynardThesis1 from '@/assets/projects/reynardThesis1.png'
import reynardThesis2 from '@/assets/projects/reynardThesis2.png'
import karlThesis1 from '@/assets/projects/karlThesis1.png'
import karlThesis2 from '@/assets/projects/karlThesis2.png'
import karlojt1 from '@/assets/projects/karlojt1.png'
import solarpanelCleaner2 from '@/assets/projects/solarpanelCleaner2.png'
import solarpanelCleaner1 from '@/assets/projects/solarpanelCleaner1.png'
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
            if(this.outputImages[i] === 'reynardThesis1'){
              this.arrayImage.push(reynardThesis1)
            }else if(this.outputImages[i] === 'reynardThesis2'){
              this.arrayImage.push(reynardThesis2)
            }else if(this.outputImages[i] === 'karlThesis1'){
              this.arrayImage.push(karlThesis1)
            }else if(this.outputImages[i] === 'karlThesis2'){
              this.arrayImage.push(karlThesis2)
            }else if(this.outputImages[i] === 'karlojt1'){
              this.arrayImage.push(karlojt1)
            }else if(this.outputImages[i] === 'solarpanelCleaner1'){
              this.arrayImage.push(solarpanelCleaner1)
            }else if(this.outputImages[i] === 'solarpanelCleaner2'){
              this.arrayImage.push(solarpanelCleaner2)
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
img:hover{
  scale: 1.2;
  border: 1px solid black;
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