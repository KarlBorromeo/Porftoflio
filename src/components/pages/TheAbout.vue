<template>
  <the-header></the-header>    
  <div class="container">
    <section>
      <h3>Who are we?</h3>
      <p><span class="indent"></span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem deleniti, aliquam sit alias ducimus dolore tempora iste quibusdam! Consequuntur adipisci vero, repellendus molestiae id nostrum molestias dolore velit veniam quasi!lorem20
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem deleniti, aliquam sit alias ducimus dolore tempora iste quibusdam! Consequuntur adipisci vero, repellendus molestiae id nostrum molestias dolore velit veniam quasi!lorem20</p>
    </section>

    <section>
      <h3>Mission</h3>
      <p><span class="indent"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum similique provident atque veniam optio culpa, tenetur eaque nobis sint, neque voluptates est? Facilis, est architecto!</p>
    </section>

    <section>
      <h3>Vision</h3>
      <p><span class="indent"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum similique provident atque veniam optio culpa, tenetur eaque nobis sint, neque voluptates est? Facilis, est architecto!</p>
    </section>
  </div>
  <contact-card></contact-card>
</template>

<style scoped>
.container{
  width: 70%;
  min-width: 270px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  /* border: 1px solid black; */
  gap: 1rem;
}
.indent{
  width: 1.5rem;
  display: inline-block
}
p{
  line-height: 1.3em;
  font-size: .8em;
}
h3{
  font-size: 1rem;
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