<template>
  <MenuBar :model='model'>
    <template #start>
      <img alt='logo' src="@/assets/App/sqi.png" height="50" />
    </template>
    <template #end>
      <Button label="Sign in" class="p-mr-2" @click="openAuthModal"></Button>
      <InputText type="search" placeholder="search" @keyup="searcher" />
    </template>
  </MenuBar>
  <Dialog 
    id='modialog'
    header="Up" 
    :closable="true"  
    :visible="auth" 
    :maximizable="true" 
    :modal="true"
    :dismissableMask="true"
  >
    <div class="p-m-6">
      <google-login />
    </div>
  <template #footer>
    <Button label="Close" @click="openAuthModal"></Button>
  </template>
  </Dialog>
</template>

<script>
  import MenuBar from 'primevue/menubar';
  import Dialog from 'primevue/dialog';
  import Button from 'primevue/button';
  import {HomeNavBarModel} from './../../../Constants/MenuModel';
  import InputText from 'primevue/inputtext';
  import {TEST, AUTHMODAL} from './../../../Constants/storeConst';
  import GoogleLogin from '../Auth/GoogleLogin.vue';
  export default {
    // name: 'LastRowFixed',
    name:'HomeNav',
    data: () => ({
      menuVisible: false,
      model: HomeNavBarModel,
      holder: null,
    }),

    methods: {
      

      /**This would be used for searching later */
      searcher(){
        if(this.holder){
          clearTimeout(this.holder)       
        }
        this.holder = setTimeout((()=>{
          console.log('here');
        }),500);
      },

      /** Used to test the commit of mutation and action dispatch*/
      changer(){
        this.$store.dispatch(TEST)
      },

      /** Auth modal opener */
      openAuthModal(){
        this.$store.commit(AUTHMODAL)
      },

    },

    computed: {
      
      auth(){
        //div.p-dialog-mask.p-component-overlay p-dialog-mask p-component-overlay
        return this.$store.getters.auth;
      }

    },

    mounted(){
      // window.addEventListener('click', this.closeModal);
    
    },

    beforeUnmount(){
      // window.removeEventListener('click', this.closeModal)
    },

    components: {
      MenuBar, InputText, Dialog, Button, GoogleLogin,
    }
  }
</script>

<style lang="scss" >


  .p-menubar {
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    border-radius: 0px;
    z-index: 20;
    //color: white !important;0930143 #EFA722 #082260-033496 #000442  #00A9CE-000169206 #1E264A #11152A-112146 #B28200  #030E26-031438
    background: linear-gradient(90deg, rgba(254, 254, 254, 1) 29.2%, rgba(250, 250, 250, 0.98) 38.68%, rgba(248, 248, 248, 0.96) 47.93%) !important;
    
  }

  @media screen and (max-width: 960px) {
    .p-menubar {
      width: 100% !important;
      position: fixed !important;
      top:0 !important;
      left: 0 !important;
      border-radius: 0px !important;
      z-index: 20 !important;
      background: linear-gradient(90deg, rgba(254, 254, 254, 1) 29.2%, rgba(250, 250, 250, 0.98) 38.68%, rgba(248, 248, 248, 0.96) 47.93) !important;
    }
  }


.p-menuitem-text{
  
  color: #000442 !important;
  //background: red !important;
}

.p-menubar-root-list{
  color: white !important;
  //background: red !important;
}
.p-submenu-list{
  color: white !important;
  background: red !important;  
}

.p-menuitem-icon{
  color: red !important;
}
 
.p-menuitem{
  
  color: red !important;
  // background: red !important; 
}

.p-button{
  background: linear-gradient( 90deg,rgba(0,20,96, 0.96) , rgba(0,25,106, 0.94)) !important;
  padding-top: 4px !important;
  border-radius: 20px !important;
}
</style>
