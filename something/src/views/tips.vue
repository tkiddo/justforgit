<template>
<div>
  <button @click="getAjax">jsonp</button>
</div>
</template>
<script type="text/javascript">
	export default{
		methods:{
      getAjax(){
        this.$http.jsonp('https://www.baidu.com/s?wd=vuejs/').then(
          (res)=>{
            console.log(res)
          },(err)=>{
            console.log(err)
          }
          )
      }
    }
	}
</script>

<style scoped>
  
</style>