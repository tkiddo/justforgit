<template>
    <header>
        <slot name='home'></slot>
        <slot name='newsdetail'></slot>
        <slot name='collect'></slot>
        <slot name='care'></slot>
        <slot name='my'></slot>
        <slot name='login'></slot>
    </header>
</template>

<script>
export default {
  
}
</script>
<style lang="scss">
@import '../assets/css/setting.scss';
header{
    position: fixed;
    top: 0;
    left:0;
    z-index: 1111;
    width: 100%;
}
.detail-head{
    height: 44px;
    border-bottom:1px solid $bg;
    padding: 0 10px;
    background: #fff;
    .detail-top{
        text-align: center;
    }
    i{
        width: 20px;
    }
}
</style>



