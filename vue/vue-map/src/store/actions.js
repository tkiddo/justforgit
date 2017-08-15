import * as type from './mutations-type'

import axios from 'axios'
import router from '../route/router'

export default {
    login({
        commit,
        state
    }, data) {
        axios.post('http://localhost:3000/login', data).then(
            (res) => {
                if (res.data.code === 1) {
                    commit(type.CHANGELOGINSTATUS, true);
                    router.push({ name: 'index' })
                }
            }, (err) => {
                console.log(err)
            }
        )
    }
}