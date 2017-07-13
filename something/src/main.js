import Vue from 'vue'
import App from './App.vue'
import elementUi from 'element-ui'
import './css/style.css'
import VueRouter from 'vue-router'
import router from './router/router.js'
import axios from 'axios'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.prototype.$axios = axios;
Vue.use(elementUi);
Vue.use(VueRouter);
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})