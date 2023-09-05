<template>
  <div class="card">
    <header class="header">
      <span><img src='../../../assets/portrait.jpg'></span>
      <h3>{{ serviceName }}</h3>
    </header>
    <p>{{ description }}</p>
    <section>
      <ul v-for="tool in tools" :key="tool">
          <li>{{ tool }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
    props: ['serviceName', 'serviceIcon', 'description', 'tools']
}
</script>

<style scoped>
.card{
    width: 75%;
    margin: 1rem auto;
    border: 1px solid black;
    padding: 1rem;
    box-sizing: border-box;
}
.header{
    display: flex;
    align-items: center;
    gap: .5rem;
    /* padding: 1rem 0; */
    /* height: 20%; */
    /* border: 1px solid black; */
}
span{
  width: 7vw;
  height: 7vw;
  min-width: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
} 
img{
  width: 5vw;
  height: 5vw;
  min-width: 40px;
  min-height: 40px;
  border-radius: 10px;
  /* box-shadow: 0 1px 10px 1px rgb(135, 134, 134); */
}
img:hover{
  animation: grow 0.2s ease-in forwards ;
  box-sizing: border-box;
}
@keyframes grow {
  0%{
    width: 5vw;
    height: 5vw;
    min-width: 40px;
    min-height: 40px;
  }
  100%{
    width: 7vw;
    height: 7vw;
    min-width: 50px;
    min-height: 50px;
  }
}
</style>