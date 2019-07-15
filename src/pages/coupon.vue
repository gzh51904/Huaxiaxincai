<template>
    <div>
        <div class="product-message-header orderTypeListMenu" style="z-index: 100">
            <ul>
                <li v-for="(item,idx) in tabs" :key="item.title">
                    <p v-bind:class="{active:activeIdx===idx}" v-on:click="changeTab(idx)">{{item.title}}</p>
                </li>
            </ul>
            <p class="tradRecTiXianDescIcon" style="top:9px;"></p>
        </div>
        <div class="product-message-header orderListMenu redrecordeMenu" style="top:44px;">
            <ul>
                <li class="active">
                    <p>未使用</p>
                </li>
                <li>
                    <p>已使用</p>
                </li>
                <li>
                    <p>已过期</p>
                </li>
            </ul>
        </div>
        <div class="redbox-wrap">
            <ul class="Redbox-bj Redbox-bj2 weiRedbox-bj" id="RedboxBj">
                <li class="">
                    <div class="Redbox-bj-left">
                        <div class="money ng-binding">
                            <em>￥</em>10
                        </div>
                    </div>
                    <div class="Redbox-bj-right">
                        <div style="position: relative;width: 105%" class="ng-binding">最低出借金额1.00万元</div>
                        <div class="ng-binding">赠送来源：用户注册</div>
                        <div class="ng-binding">有效期至2019-08-19 09:31:38</div>
                    </div>
                </li>
            </ul>
            <p class="nomore">没有更多记录</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {
          title: "红包"
        },
        {
          title: "加息券"
        },
        {
          title: "减免券"
        }
      ],
      activeIdx: 0,
      
    };
  },
  methods: {
    changeTab(idx, e) {
      this.activeIdx = idx;
    }
  }
};
</script>
<style scoped>
body{
    background: #f5f5f5;
}
.orderTypeListMenu {
  background: #fff;
}
.product-message-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  border-bottom: 0;
  z-index: 99;
  -webkit-box-shadow: 0 0 5px #ebebed;
  -moz-box-shadow: 0 0 5px #ebebed;
  box-shadow: 0 0 5px #ebebed;
}
.orderTypeListMenu ul {
  width: 55%;
  margin: 8px auto 0;
  height: 35px;
  display: flex;
}
.orderTypeListMenu ul li {
  flex: 1;
  line-height: 35px;
  color: #000;
  font-size: 18px;
  text-align: center;
}
.orderTypeListMenu ul li p.active {
  border-bottom: 2px solid #5b6cf8;
  color: #000;
}
.orderTypeListMenu ul li p {
  display: inline-table;
  font-weight: 700;
}
.tradRecTiXianDescIcon {
  background: url(../img/question.png) no-repeat;
  width: 21px;
  height: 21px;
  background-size: contain;
  position: absolute;
  right: 15px;
  top: 15px;
}
.orderListMenu {
  position: inherit;
  top: initial;
  -webkit-box-shadow: 0 0 0;
  -moz-box-shadow: 0 0 0;
  box-shadow: 0 0 0;
}
.product-message-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  border-bottom: 0;
  z-index: 99;
  -webkit-box-shadow: 0 0 5px #ebebed;
  -moz-box-shadow: 0 0 5px #ebebed;
  box-shadow: 0 0 5px #ebebed;
}
.product-message-header ul {
  padding: 0 15px;
  display: -moz-box;
  display: -webkit-box;
  display: box;
  background: #fff;
  height: 44px;
}
.product-message-header ul li {
  -moz-box-flex: 1;
  -webkit-box-flex: 1;
  /* box-flex: 1; */
  text-align: center;
  font-size: 16px;
  line-height: 42px;
  color: #000;
}
.product-message-header .active p {
  border-bottom: 2px solid #5c6df9;
  color: #5c6df9;
}
.redbox-wrap {
    
    max-width: 750px;
    margin: 90px auto;
}
.redbox-wrap .Redbox-bj2 {
  
    padding: 15px 15px 1px;
}
.redbox-wrap .Redbox-bj li {
  
    zoom: 1;
    height: 142px;
    position: relative;
}
.redbox-wrap .weiRedbox-bj li {
    background: url(../img/newRedRecordBg1.png);
    background-size: 100% 100%;
}
.redbox-wrap .Redbox-bj li .Redbox-bj-left {
    width: 35%;
    float: left;
}
.redbox-wrap .Redbox-bj li .Redbox-bj-left .money {
    font-size: 40px;
    line-height: 56px;
    color: #DC3D4D;
    text-align: center;
    font-weight: 700;
    padding-top: 36px;
}
.redbox-wrap .Redbox-bj li .Redbox-bj-left .money em {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font: inherit;
}
.redbox-wrap .Redbox-bj li .Redbox-bj-right {
    float: left;
    margin-left: 5%;
    font-size: 12px;
    line-height: 22px;
    padding-top: 38px;
    color: #787981;
        width: 58%;
}
.nomore {
    text-align: center;
    line-height: 12px;
    width: 100%;
    font-size: 12px;
    color: #999;
    padding-bottom: 20px;
}
</style>
