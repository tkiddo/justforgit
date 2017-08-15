import Vue from 'vue'
import App from './App.vue'
import ElemnetUi from 'element-ui'
Vue.use(ElemnetUi);
import router from '../src/route/router'
import store from '../src/store/index'
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})