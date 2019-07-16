import Vue from 'vue'

// VueRouter的使用步骤
// 1. 引入
import VueRouter from 'vue-router'
// 2. 使用VueRouter插件
Vue.use(VueRouter);

// 引入页面组件
import Home from '../pages/Home.vue'
import Noob from '../pages/Noob.vue';
import User from '../pages/User.vue';
import Login from '../pages/Login.vue';
import Huaxinbao from '../pages/Huaxinbao.vue';
import Dingxinbao from '../pages/Dingxinbao.vue';
import Adduser from '../pages/Adduser.vue';
import Additem from '../pages/Additem.vue';
import Previous from '../pages/Previous.vue';


import axios from 'axios';

// 3. 实例化router并配置参数
let router = new VueRouter({
    // 路由页面信息配置
    routes: [{
            name: 'Home',
            path: '/home',
            component: Home,
            // meta: { requiresAuth: true },

            children: [{
                name: 'Noob',
                path: '/noob',
                component: Noob,
            }, {
                name: 'User',
                path: '/user',
                component: User,
            }, {
                name: 'Huaxinbao',
                path: '/huaxinbao',
                component: Huaxinbao,
                // meta: { requiresAuth: true },
            }, {
                name: 'Dingxinbao',
                path: '/dingxinbao',
                component: Dingxinbao,
                // meta: { requiresAuth: true },
            }, {
                name: 'Adduser',
                path: '/adduser',
                component: Adduser,
            }, {
                name: 'Additem',
                path: '/additem',
                component: Additem,
            }, {
                name: 'Previous',
                path: '/previous',
                component: Previous,
            }]
        },
        // 重定向
        {
            path: '/',
            redirect: {
                name: 'Home'
            }
        },{
            name: 'Login',
            path: '/login',
            component: Login,
            props: true
        }
    ]
});

// 全局路由守卫
// 所有的路由切换都会执行，
router.beforeEach((to, from, next) => {
    console.log('全局：beforeEach', to);
    // 判断目标路由是否需要登录权限才可访问
    if (to.matched.some(item => item.meta.requiresAuth)) {
        let token = localStorage.getItem('Authorization');
        axios.get('/verify')
        // 用户已登录
        if (token) {
            next();
        }
        // 用户未登录
        else {
            next({
                path: '/login',
                query: {
                    redirectTo: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})

router.afterEach((to, from) => {
    console.log('全局：afterEach');
})

export default router;
