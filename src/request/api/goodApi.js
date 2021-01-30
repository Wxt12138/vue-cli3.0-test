import axios from '@/request/http'
import qs from 'qs'
import URL from '../URL'

const requestGoods = {
    // 加入购物车列表
    goodsList(params) {
        return axios.post(`${URL}/addCar`,qs.stringify(params))
    }
}

export default requestGoods