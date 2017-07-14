import Vue from 'vue'
import App from './App.vue'
import elementUi from 'element-ui'
import './css/style.css'
import VueRouter from 'vue-router'
import router from './router/router.js'
import axios from 'axios'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import store from "./store/store.js"
Vue.use(Vuex);
Vue.use(VueResource);
Vue.prototype.$axios = axios;
Vue.use(elementUi);
Vue.use(VueRouter);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})