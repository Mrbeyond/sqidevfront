<template>
  <div class="g-signin2" data-onsuccess="onSignIn">Login</div>
  <button id="gSignIn">login</button>
</template>
<script>
  import {PARAM} from './../../../Constants/GoogleAuth'
  export default {
    name: "Google",
    data: ()=>({
      

    }),

    methods:{
      onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      },
      onSuccess(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      },
      onFailure(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }
    
    },

    mounted(){
      if(window.gapi){
        window.gapi.load('auth2', function() {
          window.gapi.auth2.init(PARAM)
          .then(()=>{
            const onSuccess=(googleUser)=>{
              
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            };

            const onFailure =(err)=>{
              console.log(err);
            }
            // window.gapi.auth2.getAuthInstance().then(data=>console.log(data,555))
          window.gapi.signin2.render('gSignIn', {
          'scope': 'profile email',
          'width': 240,
          'height': 50,
          'longtitle': true,
          'theme': 'dark',
          'onsuccess': onSuccess,
          'onfailure': onFailure
    });
          }, (err)=>{
            console.log(err);
          })
          
        });
      }
    }
    
  }
</script>
<style lang="scss">

</style>