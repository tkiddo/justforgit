import * as type from './mutations-type'

export default {
    //改变登录状态
    [type.CHANGELOGINSTATUS](state, flag) {
        state.loginStatus = flag;
    }
}