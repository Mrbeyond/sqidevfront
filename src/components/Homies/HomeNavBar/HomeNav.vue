<template>
  <MenuBar style="color:white;" :model='model'>
    <template #start>
      <img alt='logo' src="@/assets/App/sqi.png" height="40" />
    </template>
  </MenuBar>
</template>

<style lang="scss" >





.p-menubar {
  width: 100%;
  margin:0% !important;
  position: fixed;
  top:0;
  left: 0;
  border-radius: 0px;
  z-index: 20;
  //color: white !important;
  background: linear-gradient(90deg, rgba(9, 30, 143, 0.96) 29.2%, rgba(13, 32, 137, 0.96) 38.68%, rgba(2, 25, 142, 0.96) 47.93%, rgba(9, 30, 143, 0.96) 57.86%) !important;

}
.p-menuitem-text{
  
  color: white !important;
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
  color: white !important;
}
 
.p-menuitem{
  
 // color: white !important;
  //background: red !important; 
}
</style>

<script>
  import MenuBar from 'primevue/menubar'
  import Model from './../../Constants/MenuModel'
export default {
  // name: 'LastRowFixed',
  name:'HomeNav',
  data: () => ({
    menuVisible: false,
    model: Model,
  }),
  components: {
    MenuBar
  }
}
</script>