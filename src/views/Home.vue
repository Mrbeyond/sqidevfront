<template>
  <Navbar v-if="isIn && student" />
  <HomeNav v-else />

  <div style="margin-top: 70px">
    <Dashboard v-if="isIn && student" />
    <HomePage v-else />
  </div>
  
</template>
<script>
  import HomeNav from './../components/Homies/HomeNavBar/HomeNav.vue';
  import Navbar from './../components/DashBoard/Navbar/Navbar.vue';
  import HomePage from './HomePage.vue'
  import Dashboard from './Dashboard.vue'
  import { STUDENT } from '../Constants/storeConst';
// import mapGetters from 'vuex';

export default{
  name: 'Home',
  components: {
    HomeNav,
    Navbar,
    HomePage,
    Dashboard,
  },
  data: ()=>({
  
  }),
  computed: {

    isIn(){
      return this.$store.getters.isIn;
    },

    student(){
      return this.$store.getters.student;
    },


  },
  methods:{

    getStudent(){
      return this.$store.dispatch(STUDENT)
    }
  },

  mounted(){
    if(!this.isIn || !this.student){
      this.getStudent();
    }

  },
}
</script>
<style lang="scss">

</style>
