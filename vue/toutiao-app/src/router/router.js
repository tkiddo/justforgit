import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from '../views/home.vue'
import collect from '../views/collect.vue'
import care from '../views/care.vue'
import my from '../views/my.vue'


const routes = [{
        path: '/home/:type',
        component: home
    }, {
        path: '/collect',
        component: collect
    }, {
        path: '/care',
        component: care
    }, {
        path: '/my',
        component: my
    },
    {
        path: '*',
        redirect: '/home/all?type=__all__'
    },
    {
        path: '',
        redirect: '/home/all?type=__all__'
    }
]

const scrollBehavior = (to, from, savePosition) => {
    if (savePosition) {
        return savePosition
    } else {
        return { x: 0, y: 0 }
    }
}

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior

})

export default router