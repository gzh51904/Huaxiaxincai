import Vue from 'vue';
import App from './App.vue';
import router from './routers';
import 'amfe-flexible';
// import store from "./vuex";

import axios from 'axios';
Vue.prototype.$axios = axios;
//配置基本路径
axios.defaults.baseURL = 'http://localhost:2019';

//请求拦截：发送token
axios.interceptors.request.use(config=>{
  let token = localStorage.getItem('Authorization');
  if(config.url != '/login'){
    config.headers.Authorization = token;
  }
  return config;
},error=>{
  return Promise.reject(error);
});

//响应拦截
axios.interceptors.response.use(res=>{
  // 判断token是否校验成功
  // 校验不成功：过期或被伪造
  if(router.currentRoute.matched.some(item=>item.meta.requiresAuth) && res.data.code == 401){
    router.replace({
      path:'/login',
      query:{
        redirectTo:router.currentRoute.fullPath
      }
    })
  } 
  return res;
}, error=>{
    // Do something with response error
    return Promise.reject(error);
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  // store,
}).$mount('#app')