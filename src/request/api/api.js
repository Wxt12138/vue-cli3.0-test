import axios from '@/request/http'
import qs from 'qs'
import URL from '../URL'

const api = {
    // 注册
    register(params) {
        return axios.post(`${URL}/register`, qs.stringify(params))
    },
    // 登录
    login(params) {
        return axios.post(`${URL}/login`, qs.stringify(params))
    },
    // 获取首页商品列表
    goodsList() {
        return axios.get(`${URL}/goodsList`)
    },
    // 获取商品详情
    goodsDetail(params) {
      return axios.get(`${URL}/goodsDetail`, {"params":params});
        
    }
}

export default api