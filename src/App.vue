<template>
  <router-view></router-view>
</template>

<script>

export default {
/* global FB */
  components: {
    // TheHome, 
  },
  created(){
    window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v18.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
  }
}
</script>

<style>
*{
  margin: 0;
  padding:0;
}
div{
  box-sizing: border-box;
}
</style>