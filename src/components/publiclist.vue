<template>
    <div class="headerList">
        <div class="headerMenu" @click="goto('order')">
            <em><img src="../img/accountIndexMenu1.png" alt=""></em>
            <div class="headerListCon">
                <p>我的订单</p>
            </div>
            <span class="publicArrow"></span>
        </div>
        <div class="headerMenu" @click="goto('bill')">
            <em><img src="../img/accountIndexMenu2.png" alt=""></em>
            <div class="headerListCon">
                <p>我的账单</p>
            </div>
            <span class="publicArrow"></span>
        </div>
        <div class="headerMenu" @click="goto('coupon')">
            <em><img src="../img/accountIndexMenu3.png" alt=""></em>
            <div class="headerListCon">
                <p>优惠券</p>
            </div>
            <span class="publicArrow"></span>
        </div>
        <div class="headerMenu" @click="goto('date')">
            <em><img src="../img/accountIndexMenu4.png" alt=""></em>
            <div class="headerListCon">
                <p>回款日历</p>
            </div>
            <span class="publicArrow"></span>
        </div>
        <div class="headerMenu" @click="goto('bankCard')">
            <em><img src="../img/accountIndexMenu5.png" alt=""></em>
            <div class="headerListCon">
                <p>银行卡</p>
            </div>
            <span class="publicArrow"></span>
        </div>
    </div>
</template>
<script>
export default {
  // data() {
  //   return {
  //     listinf: [
  //       {
  //         imgurl: require("../img/accountIndexMenu1.png"),
  //         name: "我的订单"
  //       },
  //       {
  //         imgurl: require("../img/accountIndexMenu2.png"),
  //         name: "我的账单"
  //       },
  //       {
  //         imgurl: require("../img/accountIndexMenu3.png"),
  //         name: "优惠券"
  //       },
  //       {
  //         imgurl: require("../img/accountIndexMenu4.png"),
  //         name: "回馈日历"
  //       },
  //        {
  //         imgurl: require("../img/accountIndexMenu5.png"),
  //         name: "银行卡"
  //       },
  //     ]
  //   };
  // }
  methods:{
    goto(name){
      this.$router.push({
        name
      })
    }
  }
};
</script>
<style>
.headerList {
  /* margin-top: 10px; */
  padding: 0 15px;
}
.headerMenu {
  height: 50px;
  position: relative;
  padding: 0 15px 0 52px;
  width: 90%;
}
.headerMenu em img {
  width: 23px;
  height: 23px;
  position: absolute;
  left: 15px;
  top: 50%;
  margin-top: -12px;
}
.headerListCon {
  border-bottom: 1px solid #eee;
  height: 50px;
}
.headerListCon p {
  color: #000;
  float: left;
  line-height: 50px;
  font-size: 16px;
}
.publicArrow {
  position: absolute;
  top: 50%;
  right: 8px;
  margin-top: -8px;
  background: url(../img/arrow.png) no-repeat;
  width: 9px;
  height: 15px;
  background-size: contain;
}
</style>
