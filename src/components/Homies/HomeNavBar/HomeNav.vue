<template>
  <MenuBar :model='model'>
    <template #start>
      <img alt='logo' src="@/assets/App/sqi.png" height="50" />
    </template>
    <template #end>
    <button @click="changer"> me</button>
    <button @click="openAuthModal"> login</button>
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
  <!-- jhjhjhj -->
  <template #footer>
    <Button label="NO" @click="openAuthModal"></Button>
  </template>
  </Dialog>
</template>

<script>
  import MenuBar from 'primevue/menubar';
  import Dialog from 'primevue/dialog';
  import Button from 'primevue/button';
  import Model from './../../../Constants/MenuModel';
  import InputText from 'primevue/inputtext';
  import {TEST, AUTHMODAL} from './../../../Constants/storeConst';
export default {
  // name: 'LastRowFixed',
  name:'HomeNav',
  data: () => ({
    menuVisible: false,
    model: Model,
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
    window.addEventListener('click', (event)=>{
      console.log( getComputedStyle(event.target))
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
    })
  
  },

  components: {
    MenuBar, InputText, Dialog, Button
  }
}
</script>

<style lang="scss" >


.p-menubar {
  width: 100%;
  margin:0% !important;
  position: fixed;
  top:0;
  left: 0;
  border-radius: 0px;
  z-index: 20;
  //color: white !important;0930143 #EFA722 #082260-033496 #000442  #00A9CE-000169206 #1E264A #11152A-112146 #B28200  #030E26-031438
  background: green;
  // linear-gradient(90deg, rgba(254, 254, 254, 1) 29.2%, rgba(250, 250, 250, 0.98) 38.68%, rgba(248, 248, 248, 0.96) 47.93%250, 250, 250, 1) !important;*/

  @media (min-width: 962px) {
    width: 100%;
    margin:0% !important;
    position: fixed;
    top:0;
    left: 0;
    border-radius: 0px;
    z-index: 20;
    //color: white !important;0930143 #EFA722 #082260-033496 #000442  #00A9CE-000169206 #1E264A #11152A-112146 #B28200  #030E26-031438
    background:green;
    //linear-gradient(90deg, rgba(254, 254, 254, 1) 29.2%, rgba(250, 250, 250, 0.98) 38.68%, rgba(248, 248, 248, 0.96) 47.93%250, 250, 250, 1) !important;

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
</style>

<!-- 892999547246-59gvrga70uchme09fvdmms097l0bhcc3.apps.googleusercontent.com -->