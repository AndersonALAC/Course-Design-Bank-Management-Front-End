<template>
  <div> here is user page
      <el-button type="info" @click="exit">Exit</el-button>
  </div>
</template>

<script>
export default {
    data() {
    
    },
    methods: {
        exit() {
            window.sessionStorage.clear();
            this.$router.push('/login');
        }
    }
}
</script>

<style>

</style>