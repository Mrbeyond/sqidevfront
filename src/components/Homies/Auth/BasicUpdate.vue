<template>
  <div>
    Update Form
    <div v-if="student">
    {{ student.id }} {{ student.firstName }} {{ student.lastName }}{{ student.id }}
  </div>
  </div>
</template>
<script>
export default {
  name: "BasicUpdate",
  data: ()=>({

  }),

  computed: {      
    student(){
      return this.$store.getters.student;
    }
  },

  mounted(){
    console.log(this.student)
    if(this.student && this.student.phoneNum && this.student.gender && this.student.course){
      // goto dashboard
    }
  }
  
}
</script>
<style lang="scss">

</style>