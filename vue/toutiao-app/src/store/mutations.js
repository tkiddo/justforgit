import * as type from './mutation-types.js'

export default {
    [type.GET_NEWSLIST](state, payload) {
        for (var item in payload.data) {
            state.list[payload.kind].push(payload.data[item])
        }
    }
}