<template>
  <HomeNav />
  <div style="margin-top: 60px">{{ see }}</div>
</template>

<script>
import HomeNav from '@/components/Homies/HomeNavBar/HomeNav';

export default {

  name: 'Home',
  components: {
    HomeNav,
  },
  computed: {
    see(){
      // alert();
     return this.$store.getters.getOne;
    } 
  }
}
</script>
