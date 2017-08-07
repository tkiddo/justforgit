<template>
  <div>
      <headerBar>
          <div slot="home" class="flex a-center header-bar">
              <i class="el-icon-message"></i>
              <span class="fg title">今日头条</span>
              <i class="el-icon-search"></i>
          </div>
      </headerBar>
      <bottomBar></bottomBar>
  </div>
</template>

<script>
import headerBar from '../components/headerBar.vue'
import bottomBar from '../components/bottomBar.vue'
export default {
  components:{
      headerBar,
      bottomBar
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/setting.scss';
.header-bar{
    height: 44px;
    background: $mc;
    .title{
        text-align: center;
    }
    i{
        padding:0 10px
    }
}
</style>


