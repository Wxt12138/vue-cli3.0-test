// import App from './App'
import Vue from 'vue'
import VueRouter from 'vue-router'
const shops = () => import('../view/shops/shops')
const register = () => import('../view/register/register')
const detail = () => import('../view/detail/detail')

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
        return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch((err) => err)
}
// 路由加载resolve =>require(['../view/index/index'],resolve)
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
          component: resolve =>require(['../view/index/index'],resolve),
          name: 'index',
          redirect: '/shops',
          meta: {
              requireAuth: true,
          },
          children: [{
                  path: '/shops',
                  name: shops,
                  component: resolve =>require(['../view/shops/shops'],resolve),
                  meta: {
                      keepAlive: true
                  }
              },
              {
                  path: '/car',
                  name: 'car',
                  component: resolve =>require(['../view/car/car'],resolve),
                  meta: {
                      keepAlive: false
                  }
              },
              {
                  path: '/search',
                  name: 'search',
                  component: resolve =>require(['../view/search/search'],resolve),
                  meta: {
                      keepAlive: false
                  }
              },
              {
                  path: '/home',
                  name: 'home',
                  component: resolve =>require(['../view/home/home'],resolve),
                  meta: {
                      keepAlive: false
                  }
              },
          ],
      }, {
          path: '/login',
          component: resolve =>require(['../view/login/login'],resolve),
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