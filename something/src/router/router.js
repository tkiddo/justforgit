import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from '../views/home.vue'
import passage from '../views/passage.vue'
import tips from '../views/tips.vue'
import demos from '../views/demos.vue'
import list from '../views/list.vue'

const router = new VueRouter({
	routes:[
	{
		path:'/home',component:home
	},{
		path:'/passage',component:passage,
		children:[
		  {path:'list/:class',component:list,name:'list'}
		]
	},{
		path:'/tips',component:tips
	},{
		path:'/demos',component:demos
	},{
		path:'',redirect:'/home'
	}
	]
})

export default router;