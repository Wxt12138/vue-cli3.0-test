// import App from './App'
import index from '../view/index/index'
import home from '../view/home/home'
import login from '../view/login/login'
import search from '../view/search/search'
import car from '../view/car/car'
import shops from '../view/shops/shops'
import register from "../view/register/register"
import detail from "../view/detail/detail"
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
        return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch((err) => err)
}

const routes = [{
        path: '/',
        redirect: '/index',
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/index',
        component: index,
        name: 'index',
        redirect: '/shops',
        meta: {
            requireAuth: true,
        },
        children: [{
                path: '/shops',
                name: shops,
                component: shops,
            },
            {
                path: '/car',
                name: 'car',
                component: car,
            },
            {
                path: '/search',
                name: 'search',
                component: search,
            },
            {
                path: '/home',
                name: 'home',
                component: home,
            },
        ],
    }, {
        path: '/login',
        component: login,
        name: 'login',
    },
    {
        path: '/register',
        component: register,
        name: 'register',
    },
    {
        path: '/detail',
        component: detail,
        name: 'detail',
        meta: {
            requireAuth: true,
        },
    },
]

export default routes