<template>
    <Navbar v-if="isIn && student" />
    <HomeNav v-if="!isIn || !student" />
  <div style="margin-top: 70px">
    <router-view></router-view>
  </div>
  <div v-if="student">
    {{ student.id }} {{ student.firstName }} {{ student.lastName }}{{ student.id }}
  </div>
  <div>This is Dashboard</div>
  <input type="color">
  <router-link to="/beyond">beyond</router-link>
  <router-link to="/beyond/about">about</router-link>
  
</template>
<script>
  import HomeNav from '../components/Homies/HomeNavBar/HomeNav.vue';
import { STUDENT } from '../Constants/storeConst';
// import mapGetters from 'vuex';
  import Navbar from './../components/DashBoard/Navbar/Navbar.vue';

  export default {

    name: 'Dashboard',
    components: {
      Navbar,
        HomeNav,
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
