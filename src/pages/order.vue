<template>
    <div>
        <div class="moneyList">
            <div class="orderCollect">
                <p style="color:#fff;margin-top:10px">0.00</p>
                <p style="color:rgba(255,255,255,0.4);margin-top:0px;font-size:12px">待收本金(元)</p>
            </div>
            <div class="orderProfit" style="padding:15px 20px 28px">
                <div class="orderProfitCen">
                    <p style="color:#fff">0.00</p>
                    <p style="color:rgba(255,255,255,0.4)" class="orderProfitText">预期总收益(元)</p>
                </div>
                <div class="orderProfitCen" style="border: none;">
                    <p style="color:#fff">0.00</p>
                    <p style="color:rgba(255,255,255,0.4)" class="orderProfitText">到账收益(元)</p>
                </div>
            </div>
        </div>
        <div class="orderMenu">
            <el-menu :default-active="active" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item v-for="item in pages" :index="item.path" :key="item.name" @click="goto(item)">{{item.title}}</el-menu-item>
            </el-menu>
        </div>
        <router-view/>
    </div>
</template>
<script>
import Vue from "vue";
import {Menu,MenuItem,} from "element-ui";
Vue.use(Menu);
Vue.use(MenuItem);
export default {
  data() {
    return {
      pages: [
        {
          title: "持有中",
          path: "/holding",
          name: "holding"
        },
        {
          title: "退出中",
          path: "/kitson",
          name: "kitson"
        },
        {
          title: "已退出",
          path: "/quit",
          name: "quit"
        },
        {
          title: "已失效",
          path: "/efficacy",
          name: "efficacy"
        }
      ],
      active:'order/holding'
    };
  },
    methods: {
      handleSelect(index) {
          this.active = index
      },
       goto(item){
           console.log(123)
      this.$router.push({name:item.name})
    }
    },
     created() {
    // 刷新保持高亮效果
    let hash = window.location.hash.slice(1);
    this.active = hash;
  }
};
</script>
<style scoped>
.moneyList {
  background: url(../img/detail_bg.png);
  background-size: 100%;
  padding: 0 15px;
  height: 197px;
}
.moneyList .orderCollect {
  padding: 25px 0;
}
.moneyList .orderCollect p {
  text-align: center;
  font-size: 24px;
}
.orderProfit .orderProfitCen {
  float: left;
  width: 50%;
  border-right: 1px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
}
.orderProfit .orderProfitCen p {
  text-align: center;
  font-size: 18px;
  line-height: 18px;
}
.orderProfit .orderProfitCen .orderProfitText {
  font-size: 12px;
  line-height: 12px;
  margin-top: 10px;
}
.orderMenu {
  position: inherit;
  top: initial;
  box-shadow: 0 0 0;
  left: 0;
  /* padding: 0 15px; */
  /* width: 100%;; */
  height: 44px;
  border-bottom: 0;
  z-index: 99;
}
.orderMenu ul {
  height: 44px;
  display: flex;
}
.orderMenu ul li {
  flex: 1;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
  color: #000;
}
.active {
  border-bottom: 2px solid #5c6df9;
  color: #5c6df9;
}
</style>
