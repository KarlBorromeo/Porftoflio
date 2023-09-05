<template>
  <div id="borderBody">
    <h2>Why choose us?</h2>
    <article class="service">
      <section class="grid-1 grid-item">
        <h4>User-Centric Design</h4>
        <P>Our designs are not just visually stunnning; 
          they're user-friendly and intuitive, ensuring 
          your visitors have a seamless experience.
        </P>
      </section>
      <section class="grid-2 grid-item">
        <h4>Timely Delivery</h4>
        <P>We value your time. Our commitment to deadlines
          ensures your project is delivered promptly 
          compromising quality
        </P>
      </section>
      <section class="grid-3 grid-item">
        <h4>Dedicated Support</h4>
        <P>Our relationship with you doesn't end at project
          delivery. We provide ongoing support to keep your website
          running smoothly.
        </P>
      </section>
      <section class="grid-4 grid-item">
        <h4>Transform Your Brilliant Ideas into Reality</h4>
        <P>Ready to take your online presence to the next level? Let's connect!
          Contact us today to discuss how we can turn your web aspirations
          into reality.
        </P>
      </section>
  </article>
  </div>
</template>

<script>
export default {
  methods: {
    async show(){
      const grids = document.querySelectorAll('.grid-item')
      
        for(let i = 0; i<grids.length; i++){
          
          if(i%2 === 0){
            grids[i].classList.add('grid-item-left')
          }else{
            grids[i].classList.add('grid-item-right')
          }
          await new Promise(resolve => setTimeout(resolve, 300))
      }
    }
  },
  mounted(){
    this.show();
    const targetElement = document.getElementById('borderBody')
    const rect = targetElement.getBoundingClientRect();
    console.log(rect)
  }
}
</script>
<style scoped>
div{
  padding: 1rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
div h2{
  padding: 1rem;
}
.service{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem 0;
    padding: 1rem 1rem;
    justify-items: center;
    align-items: start;
}

.grid-1,.grid-2,.grid-3,.grid-4{
  width: 80%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* color: white; */
  visibility: hidden;
  font-size: clamp(.8rem, 1.5vw, 1.5rem);
  line-height: 1.1rem;
}

.grid-item-left{
  visibility: visible;
  animation: fromleft 1.3s ease-in forwards;
} 
.grid-item-right{
  visibility: visible;
  animation: fromright 1.3s ease-in forwards;
} 
@keyframes fromleft {
  0%{
    transform: translateX(-200px);
    opacity: 0;
    /* color: black; */
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
    /* color: black; */
  }
}
@keyframes fromright {
  0%{
    transform: translateX(200px);
    opacity: 0;
    /* color: black; */
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
    /* color: black; */
  }
}


/*FOR desktop effects*/
@media screen and (min-width: 768px){
  .service{
    grid-template-columns: 1fr 1fr;
  }
  .grid-1,.grid-2,.grid-3,.grid-4{
    line-height: 1.5rem;
  }
}


</style>