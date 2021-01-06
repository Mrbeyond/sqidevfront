<template>   
  <div> This is the dashBoard</div>
</template>  

<script>

  import { STUDENT } from '../Constants/storeConst';

  export default { 

    name: 'Dashboard',
    components: {
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
