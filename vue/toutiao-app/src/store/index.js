import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);
const state = {
    loading: true, //列表切换时的loading图片显示
    list: { //首页新闻栏目内容
        __all__: [],
        news_hot: [],
        news_society: [],
        news_entertainment: [],
        news_tech: [],
        news_car: [],
        news_sports: [],
        news_finance: [],
        news_military: [],
        news_world: [],
        news_fashion: []

    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})