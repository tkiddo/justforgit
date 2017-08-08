import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from '../views/home.vue'
import passage from '../views/passage.vue'
import tips from '../views/tips.vue'
import demos from '../views/demos.vue'
import list from '../views/list.vue'
import map from '../views/map.vue'
import passageList from '../views/passageList.vue'
const router = new VueRouter({
    routes: [{
        path: '/home',
        component: home
    }, {
        path: '/passageList',
        component: passageList
    }, {
        path: '/passage',
        component: passage,
        name: 'passage'
    }, {
        path: '/tips',
        component: tips
    }, {
        path: '/demos',
        component: demos
    }, {
        path: '/map',
        component: map
    }, {
        path: '',
        redirect: '/home'
    }]
})

export default router;