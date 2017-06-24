import Vue from 'vue'
import App from './App.vue'
import elementUi from 'element-ui'
import './css/style.css'
import VueRouter from 'vue-router'
import router from './router/router.js'
Vue.use(elementUi);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
