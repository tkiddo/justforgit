<template>
  <div>
      <headerBar>
          <div slot='login' class="flex a-center detail-head">
              <i class="el-icon-arrow-left" @click='goBack'></i>
              <div class="fg detail-top">用户登录</div>
              <i class=""></i>
          </div>
      </headerBar>
      <div class="loginContent top-cotar">
          <el-form :model='loginData' label-position='left'>
              <el-form-item label='用户名' label-width='60px' class="formItem">
                  <el-input type='text' v-model='loginData.userName'></el-input>
              </el-form-item>
              <el-form-item label='密码' label-width='60px' class="formItem">
                  <el-input type='text' v-model='loginData.password'></el-input>
              </el-form-item>
              <el-form-item style="text-align:center">
                  <el-button type='primary' @click='loginNow(loginData)'>立即登录</el-button>
              </el-form-item>
          </el-form>
      </div>
      
  </div>
</template>

<script>
import headerBar from '../components/headerBar.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
    components:{
        headerBar
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        ...mapActions([
            'login'
        ]),
        loginNow(data){
            this.login(data);
            this.$router.push({name:'my'})
        }
    },
    data(){
        return {
            loginData:{
                userName:'admin',
                password:'123456'
            }
        }
    }
  
}
</script>

<style lang="scss">
.loginContent{
    padding:15px ;
    padding-top: 40px;
    .formItem{
        padding-right: 25px;
    }
}
</style>


