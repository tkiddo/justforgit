import Vue from 'vue'
import App from './App.vue'
import elementUi from 'element-ui'
import './css/style.css'
import VueRouter from 'vue-router'
import router from './router/router.js'
import VueResource from 'vue-resource'
Vue.use(elementUi);
Vue.use(VueRouter);
Vue.use(VueResource);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
