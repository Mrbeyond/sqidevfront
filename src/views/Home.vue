<template>
  <HomeNav />
  <div style="margin-top: 70px">{{ see }}</div>
  <div v-if="rayId">
    <div v-for="(r, i) in rayId" :key="i">
      {{ r }}
    </div>
  </div>
  <div>
   {{  noser.a + noser.b }}
  </div>
  <input type="color">
  
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
    }
  },
  methods:{
    
  }
}
</script>
