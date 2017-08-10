import * as type from './mutation-types'

import axios from 'axios'
import jsonp from 'jsonp'

export default {
    getNews({
        commit,
        state
    }, pay) {
        if (pay.kind && pay.flag) {
            jsonp('http://m.toutiao.com/list/?tag=' + pay.kind + '&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000),
                function(err, res) {
                    commit(type.GET_NEWSLIST, {
                        data: res.data,
                        kind: pay.kind
                    });
                    commit(type.CHANGE_LOADING_STATE, false);
                    if (res.return_count) {
                        commit(type.RETURN, true)
                    } else {
                        commit(type.RETURN, false)
                    }
                }
            )
        }

    },
    pullDownMore({
        commit,
        state
    }, pay) {
        if (pay.kind && pay.flag) {
            jsonp('http://m.toutiao.com/list/?tag=' + pay.kind + '&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000),
                function(err, res) {
                    commit(type.GET_NEWSLIST, {
                        data: res.data,
                        kind: pay.kind
                    });
                }
            )
        }
        console.log(pay.kind)
    },
    //collect
    getCollect({
        commit,
        state
    }) {
        axios.get('http://localhost:3000/collect').then(
            (res) => {
                commit(type.GETCOLLECT, res.data.data);
                commit(type.CHANGE_LOADING_STATE, false);
            }, (err) => {
                console.log(err)
            }
        )
    },
    //获取登录状态
    getLoginStatus({
        commit,
        state
    }) {
        axios.get('http://localhost:3000/login').then(
            (res) => {
                commit(type.GETLOGINSTATUS, res.data)
            }, (err) => {
                console.log(err)
            }
        )
    },
    //登录
    login({
        commit,
        state
    }, data) {
        console.log(data)
        axios.post('http://localhost:3000/login', data).then(
            (res) => {
                commit(type.GETLOGINSTATUS, res.data)
            }, (err) => {
                console.log(err)
            }
        )
    },
    //登出
    logout({
        commit,
        state
    }) {
        axios.get('http://localhost:3000/logout').then(
            (res) => {
                commit(type.GETLOGINSTATUS, { code: 0 })
            }, (err) => {
                console.log(err)
            }

        )
    }
}