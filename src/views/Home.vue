<template>
    <Navbar v-if="isIn && student" />
    <HomeNav v-if="!isIn || !student" />
    <div style="margin-top: 70px">

      <Dashboard v-if="isIn && student" />
      <HomePage v-else />

    </div>
  <div>This is Cover</div>
  <input type="color">
  <router-link to="/beyond">beyond</router-link>
  <router-link to="/beyond/profile">Profile</router-link>
  <router-link to="/beyond/projects">Project</router-link>
  <router-link to="/beyond/posts">Posts</router-link>
  
</template>
<script>
  import HomeNav from '../components/Homies/HomeNavBar/HomeNav.vue';
  import { STUDENT } from '../Constants/storeConst';
  import Navbar from './../components/DashBoard/Navbar/Navbar.vue';
  import Dashboard from './Dashboard.vue';
  import HomePage from './HomePage.vue'

  export default {
    name: 'Home',
    components: {
      Navbar,
      HomeNav,
      Dashboard,
      HomePage,
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

    }
}
</script>
<style lang="scss">

</style>
