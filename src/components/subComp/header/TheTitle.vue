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
    <article class="button">
        <!-- <button><span>Book and Consultation</span></button> -->
        <!-- <font-awesome-icon class="diamond" icon="fa-icon fa-diamond" size="8x" bounce/> -->
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
        align-items: end;
        /* height: 20%; */
        font-weight: bolder;
        font-size: clamp(1.5rem,5vw,5em);
        color: white;
        text-shadow: 5px 10px 1px rgba(0, 0, 0, 0.5)
    }
    .description{
        display:flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        /* height: 30%; */
        font-weight: 500;
        color: white;
        padding: 0 3rem;
        /* border: 1px dashed yellowgreen; */

        /* width: clamp(200px,50%,70%); */
    }
    .description p{
        line-height: 2;
        font-size: clamp(1rem,1vw,5rem);
        width: max(50%, 300px);
        /* border: 1px solid white; */
    }
    .button{
        display:flex;
        justify-content: center;
        align-items: center;
        /* height: 50%; */
    }
    .button div{
        width: 110px;
        height: 110px;
        border: 3px solid #2afc0061;
        border-radius: 10px;
        transform: rotate(45deg);
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 10px 1px black;
        background-color: rgba(255, 0, 0, 0.459);
        animation: shine .8s ease-in-out alternate infinite;
    }
    .button div section{
        color: white;
        transform: rotate(-45deg) translateY(-5px);
        text-align: center;
        margin: 1rem;
        font-weight: 950;
        text-shadow: 0 2px 3px black;
        font-size: large;
        /* font-size: clamp(.7rem,2.5vw,3em); */
        /* transform: translateX(10px) */
    }
    .button div:hover{
        animation: shine 0.5s ease-in-out alternate;
    }

    @keyframes shine {
        0%{box-shadow: 0px 0px 0px 0px #2afc009e}
        100%{box-shadow: 0px 0px 20px 5px #2afc0078}
    }
</style>