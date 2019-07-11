import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 引入页面组件
import Home from '../pages/Home.vue';
import Project from '../pages/Project.vue';
import Discover from '../pages/Discover.vue';
import Mine from '../pages/Mine.vue';

let router = new VueRouter({
    routes:[{
        name:'Home',
        path:'/home',
        component:Home
    },{
        name:'Project',
        path:'/project',
        component:Project
    },{
        name:'Discover',
        path:'/discover',
        component:Discover
    },{
        name:'Mine',
        path:'/mine',
        component:Mine
    }, 
    // 重定向
    {
        path: '/',
        // component:{template:'<div>404</div>'}
        redirect: {name:'Home'}
    }]
});
export default router;