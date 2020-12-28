<template>
  <MenuBar :model='model'>
  </MenuBar>
</template>

<style lang="scss" scoped>



.p-menubar {
  width: 100%;
  margin:0% !important;
  position: fixed;
  top:0;
  left: 0;
  border-radius: 0px;
  z-index: 20;
}
 
</style>

<script>
  import MenuBar from 'primevue/menubar'
  import Model from './../Constants/MenuModel'
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