<template>
	<div>
		<el-button 
		@click="goRouter(item.path)"
        v-for = "(item,index) in btnList"
		>{{item.text}}</el-button>
	</div>
</template>

<script type="text/javascript">
	export default{
	  data(){
	  	return {
	  		btnList:[{
	  			path:'/passageList',text:'Passage'
	  		},{
	  			path:'/tips',text:'Tips'
	  		},{
	  			path:'/demos',text:'Demos'
	  		}]
	  	}

	  },
      methods:{
      	goRouter:function(key){
      		var route = {};
      		route.path = key;
      		this.$router.push(route);
          }
      }
	}
</script>