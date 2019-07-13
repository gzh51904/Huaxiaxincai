import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import './assets/css/iconfont/iconfont.css'
require("./assets/css/base.css");
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
 