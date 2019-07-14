<template>
  <div class="app">
    <router-view />
    <van-tabbar route class="tabbar" fixed>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/project" icon="balance-list">项目</van-tabbar-item>
      <van-tabbar-item replace to="/discover" icon="photograph">发现</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar,TabbarItem,NavBar,Cell,CellGroup,Tag,Toast,Circle,Field,Button} from "vant";
Vue.use(Tabbar).use(TabbarItem);
Vue.use(NavBar);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Tag);
Vue.use(Toast);
Vue.use(Circle);
Vue.use(Field);
Vue.use(Button);


export default {
  name: "app",
  // data(){
  //   return{
  //     logined:false
  //   }
  // },
  components: {

  },
  computed:{

  },
//   methods:{
//     created(){
//     console.log("this:", this);
// let token = localStorage.getItem("Authorization");
//     this.logined = token ? true : false;

//     }
//   },

};
</script>

<style>
html, body, div, span, applet, object, 
iframe, h1, h2, h3, h4, h5, h6, p, 
blockquote, pre, a, abbr, acronym, 
address, big, cite, code, del, dfn, 
em, img, ins, kbd, q, s, samp, small, 
strike, strong, sub, sup, tt, var, 
b, i, u, center, dl, dt, dd, ol, ul, 
li, fieldset, form, label, legend, 
table, caption, tbody, tfoot, thead, 
tr, th, td, article, aside, canvas, details, 
embed, fieldset, figure, figcaption, 
footer, header, hgroup, menu, nav, output,
ruby, section, summary, time,
mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font: inherit;
    font-size: 100%;
}
.tabbar {
  font-size: 30px;
}
.van-nav-bar__left {
  line-height: 46px;
  font-weight: bold;
}
</style>
