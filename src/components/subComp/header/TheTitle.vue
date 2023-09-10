<template>
  <div>
    <article class="name">
        <h1>{{title}}</h1>
    </article>
    <article class="description">
        <p>
            Your gateway to innovative web solutions!
        </p>
    </article>
    <article class="button" @click="book">
        <div>
            <section>
                Book<br>a<br>Consultation
            </section>
        </div>
    </article>
  </div>
</template>

<script>
export default {
    computed:{
      title(){
        return this.$store.getters.returnTitle
      }
    },
    methods: {
        book(){
            this.$router.push('/consultation')
        }
    }
}
</script>
<style scoped>
    div{
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        box-sizing:border-box;    
        gap:3rem;
    }
    .name{
        display:flex;
        justify-content: center;
        align-items: flex-end;
        /* height: 20%; */
        font-weight: 900;
        font-size: clamp(2rem,5vw,5em);
        color: white;
        text-shadow: 1px 2px 10px silver;
    }
    .description{
        display:flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        /* height: 30%; */
        font-weight: 600;
        color: white;
        padding: 0 3rem;
        text-shadow: 1px 1px 1px black;
    }
    .description p{
        line-height: 2;
        font-size: clamp(1rem,1.8vw,2rem);
        width: max(50%, 300px);
    }
    .button{
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .button div{
        width: 120px;
        height: 120px;
        border: 3px solid #2afc0094;
        border-radius: 10px;
        transform: rotate(45deg);
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 10px 1px black;
        background-color: rgba(255, 0, 0, 0.459);
        animation: shine .7s ease-in-out alternate infinite;
    }
    .button div section{
        color: white;
        transform: rotate(-45deg) translateY(-5px);
        text-align: center;
        margin: 1rem;
        font-weight: 950;
        text-shadow: 0 2px 3px black;
        font-size: large;
    }
    .button div:active{
        animation: none;
    }

    @keyframes shine {
        0%{box-shadow: 0px 0px 0px 0px #2afc009e}
        100%{box-shadow: 0px 0px 30px 5px #2afc0078}
    }
</style>