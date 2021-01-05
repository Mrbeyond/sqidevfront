<template>
  <HomeNav />
  <div style="margin-top: 70px">
    <router-view></router-view>
  </div>
  <div v-if="student">
    {{ student.id }} {{ student.firstName }} {{ student.lastName }}{{ student.id }}
  </div>
  <input type="color">
  <router-link to="/update-profile">update</router-link>
  <router-link to="/about">about</router-link>
  <router-link to="/beyond">student</router-link>
  
</template>
<script>
import HomeNav from '@/components/Homies/HomeNavBar/HomeNav';
// import mapGetters from 'vuex';

export default {

  name: 'Home',
  components: {
    HomeNav,
  },
  data: ()=>({
  
  }),
  computed: {

        // ...mapGetters({
    //   noser:'noser'
    // })
    see(){
      // alert();
     return this.$store.getters.getOne;
    } ,

    rayId(){
      return this.$store.getters.rayId(6);
    },

    noser(){
      return this.$store.getters.noser;
    },

    student(){
      return this.$store.getters.student;
    }
  },
  methods:{
    
  }
}
</script>
