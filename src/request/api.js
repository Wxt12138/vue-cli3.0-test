import axios from '@/request/http'
import qs from 'qs'



if (process.env.NODE_ENV == 'development') {
 
    //var URL = 'http://localhost:3000/api'; // 跨域请求可以在这设置
    var URL = '/api';
} else if (process.env.NODE_ENV == 'production') {
    console.log('生产环境');
}

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