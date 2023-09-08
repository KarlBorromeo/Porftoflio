<template>
    <div class="back">
    </div>
    <dialog open>
        <h3 class="text">Sent Succesfully!</h3>
    </dialog>
</template>

<script>
export default {
    emits: ['close-button'],
    methods:{
        close(){
            console.log('clicked')
            this.$emit('close-button',false)
        }
    }
}
</script>

<style scoped>
.back{
    background-color: rgba(255, 255, 255, 0.419);
    height: 100%;
    display: absolute;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
dialog{
    width: 12vw;
    height: 5vw;
    min-width: 120px;
    min-height: 40px;
    margin: auto;
    border: 5px solid #2afc00ae;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.659);
}
.text{
    color: #3E3FE7;
    font-size: clamp(1rem, 1.5vw, 2rem);
    /* letter-spacing: 1px; */
    text-shadow: 0px 0px 1px black;
}
</style>