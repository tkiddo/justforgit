import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
    loginStatus: false, //登录状态
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store