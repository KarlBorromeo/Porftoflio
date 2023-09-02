<template>
  <div>
    <h3>Book for a Consultation</h3>
    <p>We will prepare a proposal and walk you through every step of the process</p>
    <button>Book and Consultation</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div{
    background-color: #282D30;
    min-height: 30vh;
    padding: 5rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    text-align: center;
}
button{
        padding: 1rem 2rem;
        border: none; 
        font-weight: 600;
    }
h3,p{
    color: white;
    font-weight: 500;
}
</style>