import axios from 'axios'
import QS from 'qs'
import {
    Toast
} from 'vant'
import store from '@/store/store'
import {
    response,
    Router
} from 'express'

if (process.env.NODE_EVN == 'deveploment') {
    axios.defaults.baseURL = '/api'
} else if (process.env.NODE_EVN == 'production') {}

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截

axios.interceptors.request.use(
    config => {
        const token = store.state.token;
        token && (config.headers.Authorization = token);
        return config
    },
    error => {
        return Promise.error(error);
    }
)

// 响应拦截
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 未登录
                case 401:
                    Router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    })
                    break;
                case 403:
                    Toast({
                            message: '登录过期，请重新登录',
                            duration: 1000,
                            forbidClick: true
                        })
                        // 清楚token
                    localStorage.removeItem('token');
                    store.commit('islogin', false)

            }
        }
    }
)