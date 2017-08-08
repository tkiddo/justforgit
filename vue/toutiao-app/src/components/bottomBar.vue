<template>
<div class="flex bottom-nav">
    <router-link to="/home" class="nav-item flex flex-column a-center j-center">
        <div class="bottom-nav-icon icon-1"></div>
        <div>首页</div>
    </router-link>
    <router-link to="/collect" class="nav-item flex flex-column a-center j-center">
        <div class="bottom-nav-icon icon-2"></div>
        <div>收藏</div>
    </router-link>
    <router-link to="/care" class="nav-item flex flex-column a-center j-center">
        <div class="bottom-nav-icon icon-3"></div>
        <div>关注</div>
    </router-link>
    <router-link to="/my" class="nav-item flex flex-column a-center j-center">
        <div class="bottom-nav-icon icon-4"></div>
        <div>我的</div>
    </router-link>
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
  
}
</script>

<style lang="scss" scoped>
@import '../assets/css/setting.scss';
.bottom-nav{
    padding:5px 0;
    width:100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top:1px solid #f4f4f4;
    background: #fff;
    z-index: 1111;
    .nav-item{
        width:25%;
        text-align: center;
        color:#666;
        .bottom-nav-icon{
            width:24px;
            height: 24px;
            background-size:contain;
            margin: 5px 0;
            &.icon-1{
                background-image: url(../assets/imgs/bottom_nav/home_dark_icon.png);
            }
            &.icon-2{
                background-image: url(../assets/imgs/bottom_nav/collect_dark_icon.png);
            }
            &.icon-3{
                background-image: url(../assets/imgs/bottom_nav/heart_dark_icon.png);
            }
            &.icon-4{
                background-image: url(../assets/imgs/bottom_nav/head_dark_icon.png);
            }
        }
        &.router-link-active{
            color:$mc;
            .icon-1{
                background-image: url(../assets/imgs/bottom_nav/home_icon.png);
            }
            .icon-2{
                background-image: url(../assets/imgs/bottom_nav/collect_icon.png);
            }
            .icon-3{
                background-image: url(../assets/imgs/bottom_nav/heart_icon.png);
            }
            .icon-4{
                background-image: url(../assets/imgs/bottom_nav/head_icon.png);
            }
        }
    }
}
</style>
