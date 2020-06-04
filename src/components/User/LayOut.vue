<template>
  <el-container>
      <side-bar></side-bar>
      <el-main>
          <template>
              <app-main></app-main>
          </template>
      </el-main>
  </el-container>
</template>

<script>
import SideBar from '@/components/User/sidebar/index'
import AppMain from '@/components/User/AppMain'

export default {
    data(){
        return{

        }
    },
    components:{
        SideBar, AppMain
    }
}
</script>

<style>

</style>