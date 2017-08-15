import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter);

import login from '../views/login.vue'
import index from '../views/index.vue'

const routes = [{
    path: '/login',
    name: 'login',
    component: login
}, {
    path: '/index',
    name: 'index',
    component: index
}, {
    path: '/',
    redirect: '/login'
}]

const scrollBehavior = (to, from, savePosition) => {
    if (savePosition) {
        return savePosition
    } else {
        return { x: 0, y: 0 }
    }
}

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior
})