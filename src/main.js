import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/store'
import axios from 'axios'
import {
    getStore
} from './mutils/mutils'
// import { nextTick } from 'vue/types/umd'

// Vue.config.productionTip = false
Vue.prototype.$axios = axios
    // Vue.prototype.getStore = getStore
Vue.use(VueRouter)

const router = new VueRouter({
    routes,
})

router.beforeEach((to, from, next) => {
    let login = getStore('login')
    console.log(to.fullPath)
    if (to.matched.some((res) => res.meta.requireAuth)) {
        if (login) {
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