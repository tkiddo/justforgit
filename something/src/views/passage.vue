<template>
	<div>
    <header-nav></header-nav>
    <banner></banner>
    <router-view></router-view>
  </div>
  
</template>
<script type="text/javascript">
  import headerNav from '../components/header.vue'
  import banner from '../components/banner.vue'
	export default{
		data(){
      return {

      }
    },
    components:{
      headerNav,
      banner
    }
	}
</script>

<style scoped>
  
</style>