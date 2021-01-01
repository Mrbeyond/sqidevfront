<template>
  <div class="g-signin2" data-onsuccess="onSignIn">Login</div>
  <button id="gSignIn">login</button>
</template>
<script>
import { AUTHMODAL } from '../../../Constants/storeConst';
  import {PARAM} from './../../../Constants/GoogleAuth'
  export default {
    name: "Google",
    data: ()=>({
      

    }),

    methods:{
      closeModal(event){
        // console.log( getComputedStyle(event.target))
        if(this.auth){
          if(event.path  && event.path[0] === "div.p-dialog-mask.p-component-overlay"){
              this.openAuthModal();
          }
          else if(event.target && event.target.className === "p-dialog-mask p-component-overlay"){
            this.openAuthModal();
          }
        }else{
          return
        }
      },
      /** Auth modal opener */
      openAuthModal(){
        this.$store.commit(AUTHMODAL);
      },
    
    },

    computed: {
      auth(){
        //div.p-dialog-mask.p-component-overlay p-dialog-mask p-component-overlay
        return this.$store.getters.auth;
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
      
      /** Event listener to monitor the screen if the modal 
       * is clicked to close the login with google modal*/
      window.addEventListener('click', this.closeModal);


    },

    beforeUnmount(){
      /**
       * Removed the modal monitor listener
      */
      window.removeEventListener('click', this.closeModal)
    },

    
  }
</script>
<style lang="scss">

</style>