<template>
    <header>
        <slot name='home'></slot>
    </header>
</template>

<script>
export default {
  
}
</script>
<style lang="scss" scoped>
header{
    position: fixed;
    top: 0;
    left:0;
    z-index: 1111;
    width: 100%;
}
</style>



