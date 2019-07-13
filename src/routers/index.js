import Vue from 'vue'

//引入并使用VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 引入页面组件
import Home from '../pages/Home.vue';
import Project from '../pages/Project.vue';
import Discovery from '../pages/Discovery.vue';
import Mine from '../pages/Mine.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';

import axios from 'axios';

//实例化router并配置参数
let router = new VueRouter({
    //路由页面信息配置
    routes:[{
        name:'Home',
        path:'/home',
        component:Home
    },
    // 重定向
    {
        path: '/',
        redirect: {name:'Home'}
    },
    
    {
        name:'Project',
        path:'/project',
        component:Project
    },{
        name:'Discover',
        path:'/discover',
        component:Discovery
    },{
        name:'Mine',
        path:'/mine',
        component:Mine,
        meta: { requiresAuth: true }
    }, {
        name:'Login',
        path:'/login',
        component:Login
    },{
        name:'Reg',
        path:'/reg',
        component:Reg
    }]
});

router.beforeEach((to,from,next)=>{
    console.log('全局：beforeEach:',to);
    //判断目标路由是否需要登录权限才可访问
    if(to.matched.some(item=>item.meta.requiresAuth)){
        let token = localStorage.getItem('Authorization');
        axios.get('/verify')
        //用户已登录
        if(token){
            next();
        }
        //用户未登录
        else{
            next({
                path:'/login',
                query:{
                    redirectTo:to.fullPath
                }
            })
        }
    }else{
        next();
    }
})

export default router;