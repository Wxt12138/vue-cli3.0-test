// import App from './App'
import Vue from 'vue'
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

const routes = new VueRouter({
  mode: 'history',     
  routes:[{
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
                  meta: {
                      keepAlive: true
                  }
              },
              {
                  path: '/car',
                  name: 'car',
                  component: car,
                  meta: {
                      keepAlive: false
                  }
              },
              {
                  path: '/search',
                  name: 'search',
                  component: search,
                  meta: {
                      keepAlive: false
                  }
              },
              {
                  path: '/home',
                  name: 'home',
                  component: home,
                  meta: {
                      keepAlive: false
                  }
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
})


Vue.use(VueRouter)

export default routes