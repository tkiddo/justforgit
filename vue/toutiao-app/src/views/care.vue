<template>
  <div>
      <headerBar>
          <div slot='care' class="flex a-center detail-head">
              <i class="el-icon-arrow-left" @click='goBack'></i>
              <div class="fg detail-top">我的关注</div>
              <i class="el-icon-share"></i>
          </div>
      </headerBar>
      <bottomBar></bottomBar>
  </div>
</template>

<script>
import bottomBar from '../components/bottomBar.vue'
import headerBar from '../components/headerBar.vue'
export default {
    components:{
        bottomBar,
        headerBar
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
  
}
</script>


