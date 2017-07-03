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
		mounted(){
			console.log(this.$router.currentRoute.params.class)

		},
		methods:{
			getlog(){
				console.log(this.$router.currentRoute.params.class)
			}
		}
	}
</script>