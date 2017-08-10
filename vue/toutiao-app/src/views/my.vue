<template>
  <div>
      <headerBar>
          <div slot='my' class="flex a-center detail-head">
              <div class="fg detail-top">我的</div>
          </div>
      </headerBar>
      <div class="myInfo top-cotar flex flex-column a-center">
          <img src="../assets/imgs/head.jpg" alt="">
          <p v-if='loginStatus'>{{userName}}</p>
          <p v-else @click='goLogin'>点击登录</p>
      </div>
      <div v-if='loginStatus' class="logout" @click='logout'>退出登录</div>
      <bottomBar></bottomBar>
  </div>
</template>

<script>
import bottomBar from '../components/bottomBar.vue'
import headerBar from '../components/headerBar.vue'
import * as type from '../store/mutation-types'
import {mapGetters,mapActions} from 'vuex'
export default {
    components:{
        bottomBar,
        headerBar
    },
    data(){
        return {
            
        }
    },
    computed:{
        ...mapGetters([
            'loginStatus',
            'userName'
        ])
    },
    methods:{
        ...mapActions([
            'getLoginStatus',
            'logout'
        ]),
        goLogin(){
            this.$router.push({name:'login'})
        }
    },
    mounted(){
        this.getLoginStatus()
    }
  
}
</script>

<style lang="scss">
@import '../assets/css/setting.scss';
.myInfo{
    width: 100%;
    padding:30px 0;
    background: $mc;
    img{
        width: 80px;
        border-radius: 40px;
        height: 80px;
    }
    p{
        color:#fff;
        margin-top:10px;
        border:1px solid #fff;
        border-radius: 10px;
        padding: 2px 10px;
        font-size: 14px;
    }
}
.logout{
    width: 50%;
    height: 30px;
    border-radius: 10px;
    text-align: center;
    margin: 0 auto;
    background: #fff;
    color:$mc;
    line-height: 30px;
    border:1px solid $mc;
    margin-top: 30px;
}
</style>



