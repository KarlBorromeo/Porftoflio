<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <h5>{{ dateFinished }}</h5>
    <p><span class="indent"/>{{ description }}</p>
    
    <section>
        //PROJECT IMAGES
    </section>
  </div>
</template>

<script>
export default {
    props: ['title','description', 'dateFinished', 'outputImages'],
    computed: {
      image(){
        // return this.outputImages
        return "../../assets/landscape.jpg"
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
.card h3{
  margin: .5rem 0;
}
.card span{
  display: inline-block;
  width: 2rem;
}
.card section{
  padding: 1rem;
}
.card section img{
  width: 50%;
}
</style>