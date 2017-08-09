import * as type from './mutation-types.js'

export default {
    //将首页发送的请求数据添加到list各项中去，进行渲染页面
    [type.GET_NEWSLIST](state, payload) {
        for (var item in payload.data) {
            state.list[payload.kind].push(payload.data[item])
        }
    },
    //新闻切换时loading图片展示
    [type.CHANGE_LOADING_STATE](state, flag) {
        state.loading = flag;
    },
    //请求是否有数据返回
    [type.RETURN](state, flag) {
        state.ifReturnMsg = flag;
    },
    //是否加载更多
    [type.PULLDOWNBTN](state, flag) {
        state.downLoadMore = flag;
    },
    //获取收藏列表
    [type.GETCOLLECT](state, payload) {
        // for (var item in payload) {
        //     state.collectList.push(payload[item])
        // }
        for (var i = 0; i < payload.length; i++) {
            state.collectList.push(payload[i]);
        }
    }
}