import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import passage from '../views/passage.vue'
import tips from '../views/tips.vue'
import demos from '../views/demos.vue'


const router = new VueRouter({
	routes:[
	{
		path:'/passage',component:passage
	},{
		path:'/tips',component:tips
	},{
		path:'/demos',component:demos
	}
	]
})

export default router;