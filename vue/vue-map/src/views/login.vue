<template>
<div class="bg">
    <el-form :model='loginData' label-width="80px" class="loginForm">
        <h3>用户登录</h3>
        <el-form-item label="用户名">
            <el-input type="text" v-model="loginData.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input type="password" v-model="loginData.userName"></el-input>
        </el-form-item>
        <div style="text-align:center">
            <el-button type='primary' @click="login(loginData)">登录</el-button>
        </div>       
    </el-form>
</div>  
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return {
            loginData:{
                userName:'admin',
                password:'123456'
            }
        }
    },
    computed:{
        ...mapGetters([
            'loginStatus'
        ]) 
    },
    methods:{
        ...mapActions([
            'login'
        ])
    }
  
}
</script>

<style lang="scss">
.bg{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: skyblue;
}
.loginForm{
    width:400px;
    height:220px;
    background: #fff;
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-130px;
    margin-left:-220px;
    padding:20px;
    border-radius: 10px;
}
h3{
    text-align: center;
}

</style>


