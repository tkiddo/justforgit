<template>
	<div>
       <div v-for='item in arr' class="item flex j-center a-center" @click='goRouter(item.path)'>
         <img :src="item.img" alt="">
         <span class="title">{{item.title}}</span>
         <span class="text">{{item.text}}</span>
       </div>
    </div>
</template>

<script>
export default{
	data(){
		return {
            arr:[
			{img:'../../static/map.png',title:'基于openlayers的地图demo',text:'地图放大缩小，动画定位，线面测量',path:'/map'}
		   ]
        }
	},
    methods:{
        goRouter(_path){
            this.$router.push({path:_path})
        }
    }
}
</script>

<style lang="scss">
    .item{
        padding:10px;
        width:300px;
        flex-direction:column;
        img{
            width:300px;
            border-radius:5px;
        }
        .title{
            font-size:20px;
            color:#111;
            margin:5px 0;
        }
        .text{
            font-size:15px;
            color:#555;
        }
    }
</style>