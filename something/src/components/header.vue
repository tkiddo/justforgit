<template>
	<div class="flex j-cneter a-center nav-head">
      <div class="logo">
        <h1>Code Seeker</h1>
      </div>
      <div class="fg">
       <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo flex" mode="horizontal" @select="handleSelect">
         <el-menu-item index="1">Html</el-menu-item>
         <el-menu-item index="2">Css</el-menu-item>
         <el-menu-item index="3">Javascript</el-menu-item>
         <el-menu-item index="4">Web tools</el-menu-item>
         <el-menu-item index="5">Vue</el-menu-item>
         <el-menu-item index="6">Others</el-menu-item>
       </el-menu>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        switch(key){
          case '1':
          this.$router.push({name:'list',params:{class:'html'}});
          break;
          case '2':
          this.$router.push({name:'list',params:{class:'css'}});
          break;
          case '3':
          this.$router.push({name:'list',params:{class:'javascript'}});
          break;
          case '4':
          this.$router.push({name:'list',params:{class:'webtools'}});
          break;
          case '5':
          this.$router.push({name:'list',params:{class:'vue'}});
          break;
          case '6':
          this.$router.push({name:'list',params:{class:'others'}});
          break;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav-head{
    background: #324157;
    padding:0 100px;
    .logo{
       color:#fff;
    }
    .el-menu-demo{
      justify-content: flex-end;
    }
  }
</style>

