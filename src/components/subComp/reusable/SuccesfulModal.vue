<template>
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
dialog{
    width: 12vw;
    height: 5vw;
    min-width: 120px;
    min-height: 40px;
    margin: auto;
    border: 5px solid #3E3FE7;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.text{
    color: gold;
    font-size: clamp(1rem, 1.5vw, 2rem);
    text-shadow: 2.5px 1px 1px black;
}
</style>