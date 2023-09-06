<template>
    <div class="custom-loader" ></div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .custom-loader {
  display: absolute;
  left: 50;
  top: 50;
  width:5vw;
  height:5vw;
  min-width: 50px;
  min-height: 50px;
  display: grid;
  animation: s4 4s infinite;
}
.custom-loader::before,
.custom-loader::after {    
  content:"";
  grid-area: 1/1;
  border:16px solid;
  border-radius: 50%;
  border-color:#766DF4 #766DF4 #0000 #0000;
  mix-blend-mode: darken;
  animation: s4 1s infinite linear;
}
.custom-loader::after {
  border-color:#0000 #0000 #E4E4ED #E4E4ED;
  animation-direction: reverse;
}

@keyframes s4{ 
  100%{transform: rotate(1turn)}
}

</style>