<template>
    <div class="back">
    </div>
    <dialog open>
        <header class="head">
            <h3>Something went wrong..</h3>
        </header>
        <main class="body">
            <p>I am sorry, please check your connection. If you have good connection you can contact us in our social media.</p>
        </main>
        <footer class="footer"><button @click="close">Close <font-awesome-icon icon = 'fa-solid fa-x' scale="1x" /></button></footer>
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
    background-color: rgba(255, 255, 255, 0.638);
    height: 100%;
    display: absolute;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
dialog{
    width: 50%;
    min-width: 200px;
    margin: auto;
    border: none;
    border-radius: 10px;
}
.head{
    background-color: #3E3FE7;
    padding: 1rem;
    color: white;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: clamp(.8rem, 1.5vw, 2rem);
}
.body{
    min-height: 100px;
    display: flex;
    align-items: center;
    padding: 1rem;
    line-height: 1.5rem;
    font-size: clamp(.8rem, 1.5vw, 2rem);
}
.footer{
    display: flex;
    justify-content: start;
    align-items: center;
    margin: .5rem;
}
.footer button{
    border-radius: 5px;
    padding: .5rem 1rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: .2rem;
    font-weight: 600;
    box-shadow: 0 .0 .1px .1px rgb(165, 161, 161);
}
.footer button:active{
    background-color: #2afc0078;
    color: black;
}
</style>