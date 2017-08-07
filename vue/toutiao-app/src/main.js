import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/router'
import elementUi from 'element-ui'
import VueLazyload from 'vue-lazyload'
import store from './store/index'
import '../src/assets/css/style.css'
Vue.use(elementUi)

Vue.use(VueLazyload, {
    error: '/src/assets/imgs/imgerror.jpg',
    loading: '/src/assets/imgs/imgloading.gif',
    preload: 1,
    attempt: 1
});


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})