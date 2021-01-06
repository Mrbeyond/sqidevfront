<template>
  <div>This is Dashboard</div>
  <input type="color">
  <router-link to="/beyond">beyond</router-link>
  <router-link to="/beyond/profile">Profile</router-link>
  <router-link to="/beyond/projects">Project</router-link>
  <router-link to="/beyond/posts">Posts</router-link>
  
</template>
<script>
  import { STUDENT } from '../Constants/storeConst';

  export default {

    
    
    
    
    
    
    
    name: 'Dashboard',
    components: {},
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
