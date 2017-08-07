import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/router'
import elementUi from 'element-ui'
Vue.use(elementUi)


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})