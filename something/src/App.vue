<template>
  <div id="app">
    <headCmp></headCmp>
    <router-view></router-view>
  </div>
</template>

<script>

import headCmp from './components/header.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	headCmp
  },
  methods:{
  	
  }
}
</script>

<style lang="css">

</style>
