import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '../pages/Home.vue'
import noticelist from '../pages/noticelist.vue'



let router = new VueRouter({
    routes:[
        {
            name:'home',
            path:'/home',
            component:home,
        },
        {
            name:'noticelist',
            path:'/noticelist',
            component:noticelist
        },{
            path:'/',
            redirect:{name:'home'}
        }
    ]
})

export default router;

