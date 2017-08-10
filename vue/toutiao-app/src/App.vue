<template>
  <div id="app">
    <transition>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </transition>
      
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">

</style>
