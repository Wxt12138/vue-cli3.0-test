import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import router from './router/router'
import store from './store/store'
// import axios from 'axios'
import {
    getStore
} from './mutils/mutils'
import api from '@/request/api'
// import { nextTick } from 'vue/types/umd'

// Vue.config.productionTip = false
Vue.prototype.$api = api
    // Vue.prototype.getStore = getStore
// Vue.use(VueRouter)

// const router = new VueRouter({
//     mode: 'history',
//     routes,
// })


router.beforeEach((to, from, next) => {
    let token = getStore('token')
    if (to.matched.some((res) => res.meta.requireAuth)) {
        if (token) {
            next()
            console.log(1)
        } else {
            console.log(2)
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath,
                },
            })
        }
    } else {
        next()
        console.log(3)
    }
})

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')