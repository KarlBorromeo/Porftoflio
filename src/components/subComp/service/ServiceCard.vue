<template>
  <div class="card">
    <header class="header">
        //IMAGE ICON<h3>{{ serviceName }}</h3>
    </header>
    <p>{{ description }}</p>
    <section> //IMAGE TOOLS RELATED</section>
  </div>
</template>

<script>
export default {
    props: ['serviceName', 'serviceIcon', 'description', 'imageTools']
}
</script>

<style scoped>
.card{
    width: 75%;
    margin: 1rem auto;
    border: 1px solid black;
    padding: 1rem;
}
.header{
    display: flex;
}
</style>