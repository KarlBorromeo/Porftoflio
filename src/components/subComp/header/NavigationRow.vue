<template>
  <span>
    <ul class="nav-rows">
      <router-link to="/about">About</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/consultation">Book a Consultation</router-link>
      </ul>
  </span>
</template>

<script>
export default {

}
</script>

<style scoped>
.router-link-active{
  border: .3px solid rgba(255, 255, 255, 0.503);
}

.nav-rows{
  color: white;
  list-style: none;
  display: flex;
  /* font-size: clamp(5px, 3.5vw, 20px);   */
  font-size: clamp(.5rem, 2vw, 3rem); 
}
a{
  /* margin: .5rem; */
  padding: 1rem;
  text-decoration: none;
  color: white;
}
</style>