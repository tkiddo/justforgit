<template>
	<div class="content">
    <div class="title">
       {{contentData.title}}
    </div>
    <div v-html="contentData.answer" class="detail"> 
    </div>
    <img :src="contentData.img[0]" alt="" v-if='contentData.img'>
    <a :href="contentData.link" v-if='contentData.link'>link to source</a> 
  </div>
</template>
<script type="text/javascript">
	export default{
		data(){
      return {

      }
    },
    computed:{
      contentData:function () {
        return this.$route.params;
      }
    },
    components:{
      
    }
	}
</script>

<style scoped>
  .content{
    padding:15px;
  }
  .title{
    font-weight:bold;
    font-size:20px;
  }
  .detail{
    padding:15px 0;
  }
  img{
    display:block;
  }
</style>