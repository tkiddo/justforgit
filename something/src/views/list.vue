<template>
<div>
	<h1>{{title}}</h1>
	<button @click="getlog()">click</button>
</div>
	
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				title:"hhhhhh"
			}
		},
		methods:{
			getlog(){
				console.log(this.$router.currentRoute.path)
			}
		}
	}
</script>