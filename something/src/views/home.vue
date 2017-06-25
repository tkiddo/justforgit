<template>
	<div class="bg" >
    <img src="../../static/logo.png" height="260" width="325">
    <index-nav></index-nav>
  </div>
</template>
<script type="text/javascript">
  import indexNav from '../components/nav.vue' 
	export default{
		data(){
      return{
        
      }
    },
    components:{
      indexNav
    }
	}
</script>

<style scoped>
  .bg{
    background-image: url(/static/timg.jpg);
    background-size:cover;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>