import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import {
    getStore
} from '../mutils/mutils'

Vue.use(Vuex)

const state = {
    islogin: false,
    goodsNum: 0,
    goodsList: [],
    token: getStore('token') || ''
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
})