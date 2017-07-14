import Vue from "vue"
import Vuex from "vuex"
import state from "./state.js"
import mutations from "./mutations"
import getters from "./getters"
import actions from "./actions"
Vue.use(Vuex);
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store