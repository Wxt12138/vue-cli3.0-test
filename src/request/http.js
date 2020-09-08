import axios from 'axios'
import router from '../router/router'
import store from '../store/store'
import {
    Toast
} from 'vant'

// 提示函数
// 禁止点击蒙层，显示一秒后关闭

const tip = (msg) => {
    Toast({
        message: msg,
        duration: 1000,
        forbidClick: true,
    })
}

const loding = () =>
    Toast.loading({
        forbidClick: true,
        loadingType: 'spinner',
    })

/*
  跳转登录页
  携带当前的页面路由，完成后返回当前页
*/

const toLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullpath,
        },
    })
}

// 请求失败后错误统一处理

const errorHandle = (status, other) => {
    switch (status) {
        case 401:
            toLogin()
            break
        case 403:
            tip('登录过期，请重新登录')
            localStorage.removeItem('token')
            store.commit('islogin', false)
            setTimeout(() => {
                toLogin()
            }, 1000)
            break
        case 404:
            tip('请求的资源不存在')
            break
        case 422:
            tip('密码错误')
            break;
        default:
            console.log(other)
            tip('发生错误')
            break
    }
}

// 创建axios实例
var instance = axios.create({
        timeout: 1000 * 12,
    })
    // 设置post请求头
instance.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded'

// 请求拦截
instance.interceptors.request.use(
    (config) => {
        loding()
        const token = store.state.token
        token && (config.headers.Authorization = token)
        return config
    },
    (error) => {
        Toast.clear()
        Promise.error(error)
    }
)

// 响应拦截
instance.interceptors.response.use(
    (res) => {
        Toast.clear()
        return res.status === 200 ? Promise.resolve(res) : Promise.reject(res)
    },
    (error) => {
        Toast.clear()
        const {
            response
        } = error
        if (response) {
            errorHandle(response.status, response.data.message)
            return Promise.reject(response)
        } else {
            // if (!window.navigator.onLine) {
            //     store.commit("changeNetwork", false);
            // } else {
            return Promise.reject(error)
                // }
        }
    }
)

export default instance