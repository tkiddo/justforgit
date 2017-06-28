<template>
  <el-carousel height="300px" trigger="click" >
    <el-carousel-item v-for="item in list">
      <img :src="item.img">
    </el-carousel-item>
  </el-carousel>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        list:[
        {img:'../../static/banner1.jpg'}
        ]
      }
    }
  }
</script>
<style scoped lang="scss">
  img{
    width:100%;
  }
</style>