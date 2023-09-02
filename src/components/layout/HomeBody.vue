<template>
  <div>
    <h2>Why choose us?</h2>
    <article class="service">
      <section class="grid-1">
        <h4>User-Centric Design</h4>
        <P>Our designs are not just visually stunnning; 
          they're user-friendly and intuitive, ensuring 
          your visitors have a seamless experience.
        </P>
      </section>
      <section class="grid-2">
        <h4>Timely Delivery</h4>
        <P>We value your time. Our commitment to deadlines
          ensures your project is delivered promptly 
          compromising quality
        </P>
      </section>
      <section class="grid-3">
        <h4>Dedicated Support</h4>
        <P>Our relationship with you doesn't end at project
          delivery. We provide ongoing support to keep your website
          running smoothly.
        </P>
      </section>
      <section class="grid-4">
        <h4>Our Mission</h4>
        <P>Our misison is simple yet profound: <strong>Empower business</strong>
          with the digital tools they need to thrive in today's
          competetive online world. We believe that knowledge, innovation,
          and collaboration are cornerstones of success.
        </P>
      </section>
      <section class="grid-5">
        <h4>Let's Transform Your Brilliant Ideas into Reality</h4>
        <P>Ready to take your online presence to the next level? Let's connect!
          Contact us today to discuss how we can turn your web aspirations
          into reality.
        </P>
      </section>
  </article>
  </div>
  
  <!-- <img src="../../assets/aw.jpg"> -->
</template>

<script>
export default {

}
</script>

<style scoped>
div{
  padding: 1rem 0;
  text-align: center;
}
div h2{
  padding: 1rem;
}
.service{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem .5rem;
    padding: 0 .5em;
    justify-items: center;
    align-items: start;

}
section h4{
    padding: .5rem;
}
p{
    /* text-align: start; */
    border: 1px solid brown;
}
.grid-1,.grid-2,.grid-3,.grid-4{
  border: 1px solid black;
  /* width: 80%; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.grid-5{
  grid-column-start: 1;
  grid-column-end: 3;
  width: 60%;
  justify-self: center;
  display: flex;
  justify-content: center;
}

/* img{
    background-size: cover;
    width: 100%;
} */

/*FOR desktop effects*/
@media screen and (min-width: 768px){
  .service{
    flex-direction: row;
  }
  .service h3, .service p{
    width: 50%;
    text-align: center;
  }
}
</style>