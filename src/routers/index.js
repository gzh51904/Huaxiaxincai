import Vue from 'vue'

// 引入路由
import VueRouter from 'vue-router'
// 使用
Vue.use(VueRouter);
// 引入页面组件
import mine from '../pages/mine.vue';
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
let router = new VueRouter({
    routes :[
        {
            name : 'mine',
            path : '/mine',
            component:mine,
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
        },
    ]
});
export default router