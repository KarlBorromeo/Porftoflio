<template>
  <span>
    <ul class="nav-rows">
        <li>About</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Book a Consultation</li>
      </ul>
  </span>
</template>

<script>
export default {

}
</script>

<style scoped>

.nav-rows{
  color: white;
  list-style: none;
  display: flex;
  gap: 2rem;
  /* font-size: clamp(5px, 3.5vw, 20px);   */
  font-size: clamp(.5rem, 2vw, 3rem); 
}
</style>