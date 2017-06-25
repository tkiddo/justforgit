<template>
	<div>
		<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="1">Home</el-menu-item>
		  <el-menu-item index="2">Tips</el-menu-item>
		  <el-menu-item index="3">Demos</el-menu-item>
        </el-menu>
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
        switch (key){
        	case '1':
        	this.$router.push({path:'/home'});
        	break;
        	case '2':
        	this.$router.push({path:'/tips'});
        	break;
        	case '3':
        	this.$router.push({path:'/demos'});
        	break;
        }
      }
    }
  }
</script>

