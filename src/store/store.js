import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
    islogin: false,
    goodsNum: 0,
    goodsList: [],
    token: ''
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
})