import {
    CHANGELOGIN,
    ADDGOODNUM,
    ADDGOODLIST,
    DELGOODNUM,
    CHANGETOKEN,
} from '@/store/mutation-types'
import {
    setStore,
    getStore
} from '@/mutils/mutils'

export default {
    [CHANGELOGIN](state) {
        state.islogin = !state.islogin
        setStore('login', state.islogin)
    },
    [ADDGOODNUM](state) {
        state.goodsNum++;
        setStore('goodsNum', state.goodsNum)
    },
    [ADDGOODLIST](state, {
        id,
        data
    }) {
        console.log(state.goodsList[0], 55)
        if (state.goodsList.length > 0) {
            state.goodsList.forEach((item, index) => {
                console.log(11, item[index])
                if (item['shop_id'] == id) {
                    item['shop_num']++
                } else {
                    state.goodsList.push(data)
                }
            })
        } else {
            state.goodsList.push(data)
        }
        console.log(66, state.goodsList)
    },
    [DELGOODNUM](state) {
        setStore('goodsNum', state.goodsNum--)
    },
    [CHANGETOKEN](state) {
        console.log(55, getStore('token'))
        state.token = getStore('token')
    },
}