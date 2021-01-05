<template>
  <div class="g-signin2" id="gSignIn"></div>
  <div v-if="!isLoginButtonLoaded" class="p-d-flex p-jc-center p-m-6">
    <ProgressSpinner 
      style="width:50px;height:50px" 
      strokeWidth="8" 
      fill="#EEEEEE" 
      animationDuration=".5s"
    />
  </div>
  <div  v-if="wentWrong" class="p-d-flex p-jc-center p-mt-2" style="color:red"> 
    Oops! Something went wrong. 
  </div>

</template>
<script>
  import { AUTHMODAL, CHANGE_LOGIN_STATUS, STUDENT } from '../../../Constants/storeConst';
  import {PARAM} from './../../../Constants/GoogleAuth';
  import ProgressSpinner from 'primevue/progressspinner';
  import Axios from 'axios';
  import {PROXY} from './../../../Constants/apiConst';
  export default {
    name: "Google",
    data: ()=>({
      isLoginButtonLoaded: false,
      wentWrong: false,

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

      /** Updates the current auth student in store */
      updateStudent(data){
        this.$store.commit(STUDENT, data);        
      },

      /** Updates the current student login status*/
      updateLoginStatus(){
        this.$store.commit(CHANGE_LOGIN_STATUS, true);
      }
    
    },

    computed: {
      auth(){
        //div.p-dialog-mask.p-component-overlay p-dialog-mask p-component-overlay
        return this.$store.getters.auth;
      }
    },

    mounted(){
      if(window.gapi){
        window.gapi.load('auth2', ()=>{
          window.gapi.auth2.init(PARAM)
          .then(()=>{
            this.isLoginButtonLoaded = true;
            // console.log(window.gapi.auth2.getAuthInstance().currentUser.get());
            // console.log(window.gapi.auth2.getAuthInstance());
            const onSuccess=(googleUser)=>{            
              var profile = googleUser.getBasicProfile();

              /** Auth payload to auth api */
               const form ={
                email: profile.getEmail(),
                firstName: profile.getGivenName(),
                lastName: profile.getFamilyName(),
                password: profile.getId()
              };
              
              Axios.post(`${PROXY}/auth`, form)
              .then(res=>{
                if(res.data.success){
                  let payload
                  try {
                    payload = JSON.parse(window.atob(window.atob(res.data.data)));             
                  } catch (e) {
                    return this.wentWrong = true;
                  }

                  window.localStorage.token = window.btoa(window.btoa(payload.token));
                  const student = payload.data;
                  this.updateLoginStatus();
                  this.updateStudent(student);
                  this.openAuthModal();

                  if(student.phoneNum && student.gender && student.course){
                    //go db
                  }else{
                    // goto updater
                  }
                }else{
                  this.wentWrong = true;
                }
              })
              .catch(err => {
                if(err){
                  this.wentWrong = true;
                }
              })

              // console.log(profile, 'here');
            };

            const onFailure =(err)=>{
              console.log(err);
            };
            
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

    components: {
      ProgressSpinner,
    },

    
  }
</script>
<style lang="scss">

</style>