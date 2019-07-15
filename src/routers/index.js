import Vue from 'vue'

// <<<<<<< HEAD
//引入并使用VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 引入页面组件
import Home from '../pages/Home.vue';
import Project from '../pages/Project.vue';
import Discovery from '../pages/Discovery.vue';
import Mine from '../pages/mine.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';
import newsList from '../pages/newsList.vue';
import Sign from '../pages/Sign.vue';
import Notice from '../pages/Notice.vue';
import News from '../pages/News.vue';
import ActivityList from '../pages/ActivityList.vue';
import setting from '../pages/setting.vue';
import userinf from '../pages/userinf.vue';
import order from '../pages/order.vue';
import holding from '../pages/holding.vue';
import kitson from '../pages/kitson.vue';
import quit from '../pages/quit.vue';
import efficacy from '../pages/efficacy.vue';
import bill from '../pages/bill.vue';
import coupon from '../pages/coupon.vue';
import date from '../pages/date.vue';
import bankCard from '../pages/bankCard.vue';
import account from '../pages/account.vue';
import axios from 'axios';
import index from '../pages/index.vue'
import noticelist from '../pages/noticelist.vue'
import Productnews from '../pages/Productnews.vue'
import AboutHuaXia from '../pages/AboutHuaXia.vue'


//实例化router并配置参数
let router = new VueRouter({
    //路由页面信息配置
    routes:[{
        name:'Home',
        path:'/home',
        component:Home
    },
    
    {
        name:'Project',
        path:'/project',
        component:Project,
        
    },{
        name:'Discover',
        path:'/discover',
        component:Discovery,
        // children:[{
        //     // name:'newsList',
        //     path:'/newslist',
        //     component:newsList
        // }]
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
    },{
        name:'newsList',
        path:'/newslist',
        component:newsList
    },{
        name:'Sign',
        path:'/sign',
        component:Sign
    },{
        name:'Notice',
        path:'/notice',
        component:Notice
    },{
        name:'News',
        path:'/news/:id',
        component:News
    },{
        name:"ActivityList",
        path:"/activitylist",
        component:ActivityList
    },
    {
        name : 'setting',
        path : '/setting',
        component:setting
    },
    {
        name : 'userinf',
        path : '/userinf',
        component:userinf
    },
    {
        name : 'order',
        path : '/order',
        component:order,
        children:[{
            name : 'holding',
            path : 'holding',
            component:holding,
        },
        {
            name : 'kitson',
            path : 'kitson',
            component:kitson,
        },
        {
            name : 'quit',
            path : 'quit',
            component:quit,
        },
        {
            name : 'efficacy',
            path : 'efficacy',
            component:efficacy,
        },]
    },
    {
        name : 'bill',
        path : '/bill',
        component:bill
    },
    {
        name : 'coupon',
        path : '/coupon',
        component:coupon
    },
    {
        name : 'date',
        path : '/date',
        component:date
    },
    {
        name : 'bankCard',
        path : '/bankCard',
        component:bankCard
    },
    {
        name : 'account',
        path : '/account',
        component:account
    },{
        name:'index',
        path:'/index',
        component:index,
    },
    {
        name:'noticelist',
        path:'/noticelist',
        component:noticelist
    },{
        path:'/',
        redirect:{name:'index'}
    },
    {
        name:'Productnews',
        path:'/productnews',
        component:Productnews
    },{
        name:'AboutHuaXia',
        path:'/abouthuaxia',
        component:AboutHuaXia
    }
 
    ]
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
// =======
// // 引入路由
// import VueRouter from 'vue-router'
// // 使用
// Vue.use(VueRouter);
// // 引入页面组件
// import mine from '../pages/mine.vue';
// import setting from '../pages/setting.vue';
// import userinf from '../pages/userinf.vue';
// import order from '../pages/order.vue';
// import holding from '../pages/holding.vue';
// import kitson from '../pages/kitson.vue';
// import quit from '../pages/quit.vue';
// import efficacy from '../pages/efficacy.vue';
// import bill from '../pages/bill.vue';
// import coupon from '../pages/coupon.vue';
// import date from '../pages/date.vue';
// import bankCard from '../pages/bankCard.vue';
// import account from '../pages/account.vue';
// let router = new VueRouter({
//     routes :[
//         {
//             name : 'mine',
//             path : '/mine',
//             component:mine,
//         },
//         {
//             name : 'setting',
//             path : '/setting',
//             component:setting
//         },
//         {
//             name : 'userinf',
//             path : '/userinf',
//             component:userinf
//         },
//         {
//             name : 'order',
//             path : '/order',
//             component:order,
//             children:[{
//                 name : 'holding',
//                 path : 'holding',
//                 component:holding,
//             },
//             {
//                 name : 'kitson',
//                 path : 'kitson',
//                 component:kitson,
//             },
//             {
//                 name : 'quit',
//                 path : 'quit',
//                 component:quit,
//             },
//             {
//                 name : 'efficacy',
//                 path : 'efficacy',
//                 component:efficacy,
//             },]
//         },
//         {
//             name : 'bill',
//             path : '/bill',
//             component:bill
//         },
//         {
//             name : 'coupon',
//             path : '/coupon',
//             component:coupon
//         },
//         {
//             name : 'date',
//             path : '/date',
//             component:date
//         },
//         {
//             name : 'bankCard',
//             path : '/bankCard',
//             component:bankCard
//         },
//         {
//             name : 'account',
//             path : '/account',
//             component:account
//         },
//     ]
// });
// export default router
// >>>>>>> xiaodou
