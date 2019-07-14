<template>
  <div>
    <!-- 头部 -->
    <div class="proDetailTop">
      <p class="proDetailTit ng-binding" style="padding-top:30px;">{{this.info.productBidName}}</p>
      <div class="proDetailMsg">
        <div class="yearText yearNumPos" style="padding-top:25px;">
          历史年化收益率
          <img
            class="repayment_type_img"
            src="../assets/img/wihtip.png"
          />
        </div>
        <p class="yearNum ng-binding">
          {{this.info.yearRateLowText}}
          <em>%</em>~{{this.info.yearRateHighText}}
          <em>%</em>
        </p>
        <ul class="money">
          <li>
            <p class="moneyText">可投金额(元)</p>
            <p class="ng-binding">{{(this.info.lastAmountStr*1).toFixed(2)}}</p>
          </li>
          <li>
            <p class="moneyText">
              <span>封闭期限(月)</span>
            </p>
            <p class="ng-binding">{{this.info.closurePeriod}}个月</p>
          </li>
          <li>
            <p class="moneyText">起投金额(元)</p>
            <p class="ng-binding">{{(this.info.minAmountStr*1).toFixed(2)}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 展示 -->
    <div
      class="productMsgProgress"
      ng-class="{'paddingTop90ProDetail':productDetail.stampContents.length==0}"
    >
      <div class="productNewDetProgressMain">
        <div class="productNewDetProgressMainTop" ng-if="productDetail.stampContents.length>0">
          <div class="productNewDetProgressMainTopList ng-binding">
            <p>服务奖励</p>
            <span class="borBg0" :class="{ 'active': borBg+idx }" v-for="(item,idx) in award" :key="item.id">{{item.activitylabel}}</span>
            <!-- <span class="borBg1" :class="{ 'active': isActive }">送50元红包</span> -->
          </div>
        </div>
        <div class="productMsgProgressMsgNew">
          <ul>
            <li>
              <p class="iconImg iconImg1"></p>
              <p class="iconText">今日出借</p>
              <span class="arrowIcon"></span>
            </li>
            <li>
              <p class="iconImg iconImg2"></p>
              <p class="iconText">放款起息</p>
              <span class="arrowIcon"></span>
            </li>
            <li>
              <p class="iconImg iconImg3"></p>
              <p class="iconText">收益中</p>
              <span class="arrowIcon"></span>
            </li>
            <li>
              <p class="iconImg iconImg4"></p>
              <p class="iconText">转让退出</p>
            </li>
          </ul>
        </div>
        <div class="proNewLineHint">
          <van-divider>仅供参考，具体以实际日期为准</van-divider>
        </div>
      </div>
      <div class="proDetailOriginalMsg">
        <p ng-if="menuType!=3" class>
          目标金额
          <em class="ng-binding">{{(this.info.maxAmountStr*1).toFixed(2)}}元</em>
        </p>
        <p>
          付息方式
          <em class="ng-binding">{{this.info.interestType}}</em>
        </p>
        <p>
          相关协议
          <span>
            <a
              style="color:#5c6df9;"
              ui-sref="app.relevantAgreement({'type':productDetail.bidType})"
              href="#/relevantAgreement?type=1"
            >点击查看</a>
          </span>
        </p>
        <p>
          存管银行
          <em
            style="color:#5c6df9;"
            ui-sref="app.funDepository"
            href="#/about/funDepository"
          >由商业银行提供资金存管</em>
        </p>
      </div>
    </div>
    <!-- 下屏提示 -->
    <div style class="pullDown disable-user-behavior" on-release="onRelease()">
      <div style class="pullDownCen">
        <p class="pullLine"></p>
        <span class="text">上拉查看详情</span>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Divider } from 'vant';
Vue.use(Divider);
export default {
  data() {
    return {
      info: {},
      award:[]
    };
  },
  async created() {
    //   获取传入id
    let { id } = this.$route.params;
    console.log(id, this.$route.params);

    // 发起ajax请求，获取商品信息
     let {data} = await this.$axios.get('/project/'+id);
    //  console.log("data1:",data)
     console.log("data2:",data.data)
     data = data.data[0]
     console.log(data)
     this.info = data;
     console.log(this.info.stampContents)
     console.log(JSON.parse(this.info.stampContents))
     this.award = JSON.parse(this.info.stampContents);
  }
};
</script>
<style>
.proDetailTop {
  height: 260px;
  background: url("../assets/img/productDetBg.png") no-repeat;
  width: 100%;
  background-size: 100% 100%;
}
.proDetailTit {
  font-size: 18px;
  line-height: 18px;
  color: #fff;
  padding-top: 13px;
  text-align: center;
}
.proDetailMsg {
  margin: 0 15px;
}
.proDetailMsg .yearText {
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  color: #a9b0fb;
  margin-bottom: 20px;
  padding-top: 33px;
}
.yearNumPos {
  position: relative;
}
.repayment_type_img {
  width: 13px;
  vertical-align: middle;
  margin-left: 3px;
  margin-top: -1px;
}
.proDetailMsg .yearNum {
  font-size: 36px;
  line-height: 30px;
  color: #fff;
  text-align: center;
  vertical-align: bottom;
}
.proDetailMsg .yearNum em {
  font-size: 16px;
}
.proDetailMsg .money {
  display: block;
  height: 42px;
  margin-top: 25px;
}
.proDetailMsg .money li {
  width: 33.33%;
  float: left;
  text-align: center;
  font-size: 18px;
  line-height: 18px;
  color: #fff;
}
.proDetailMsg .money li .moneyText {
  color: #a9b0fb;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 12px;
}
.productMsgProgress {
  background: #fff;
  padding: 140px 0 0;
  margin-top: 10px;
  position: relative;
}
.productNewDetProgressMain {
  width: 90%;
  position: absolute;
  top: -35px;
  left: 5%;
  background: #fff;
  border-radius: 5px;
  z-index: 9;
  /* padding: 0 20px 15px; */
  -webkit-box-shadow: 0 3px 15px rgba(92, 110, 249, 0.2);
  -moz-box-shadow: 0 3px 15px rgba(92, 110, 249, 0.2);
  box-shadow: 0 3px 15px rgba(92, 110, 249, 0.2);
}
.productNewDetProgressMainTop {
  text-align: center;
}
.productNewDetProgressMainTopList {
  display: inline-table;
  height: 46px;
  padding: 13px 0;
  border-bottom: 1px solid #eee;
}
.productNewDetProgressMainTopList p {
  display: inline-table;
  font-size: 14px;
  color: #333;
}
.productNewDetProgressMainTopList span.borBg0 {
  border: 1px solid #ffb310;
  border-radius: 2px;
  color: #ffb310;
}
.productNewDetProgressMainTopList span {
  padding: 2px 7px;
  margin-left: 10px;
  line-height: 12px;
  font-size: 12px;
}
.productNewDetProgressMainTopList span.borBg1 {
  border: 1px solid #ff7220;
  border-radius: 2px;
  color: #ff7220;
}
.productMsgProgressMsgNew {
  height: 52px;
  margin-top: 15px;
}
.productMsgProgress ul {
  display: block;
  width: 100%;
  height: 100%;
}
.productMsgProgressMsgNew li {
  float: left;
  width: 25%;
  text-align: center;
  color: #333;
  font-size: 12px;
  line-height: 12px;
  position: relative;
}
.productMsgProgressMsgNew li p.iconImg1 {
  background: url("../assets/img/proIconImg1.png") no-repeat;
  background-size: contain;
}
.productMsgProgressMsgNew li p.iconImg {
  margin: 0 auto;
  width: 16px;
  height: 19px;
}
.productMsgProgressMsgNew li p.iconText {
  margin-top: 21px;
}
.productMsgProgressMsgNew li span.arrowIcon {
  background: url("../assets/img/proProressArrowIcon.png") no-repeat;
  width: 4px;
  height: 7px;
  background-size: contain;
  position: absolute;
  right: 0;
  top: 8px;
}
.productMsgProgressMsgNew li p.iconImg2 {
  background: url("../assets/img/proIconImg2.png") no-repeat;
  background-size: contain;
}
.productMsgProgressMsgNew li p.iconImg3 {
  background: url("../assets/img/proIconImg3.png") no-repeat;
  background-size: contain;
}
.productMsgProgressMsgNew li p.iconImg4 {
  background: url("../assets/img/proIconImg4.png") no-repeat;
  background-size: contain;
}
.proNewLineHint {
  /* margin: 19px auto 0; */
  /* height: 12px; */
  position: relative;
  text-align: center;
  /* margin-bottom: 12px; */
}
.proNewLineHint span {
  position: absolute;
  width: 80%;
  height: 1px;
  background: #eee;
  z-index: 1;
  left: 10%;
  top: 6px;
}
.proNewLineHint p {
  background: #fff;
  padding: 0 8px;
  font-size: 12px;
  line-height: 12px;
  position: relative;
  z-index: 2;
  display: inline-block;
  top: -4px;
  color: #ccc;
}
.proDetailOriginalMsg {
  margin: 0 15px 0 30px;
  padding-top: 10px;
}
.proDetailOriginalMsg p {
  margin-top: 25px;
  color: #666;
  font-size: 14px;
  line-height: 14px;
}
.proDetailOriginalMsg p em {
  color: #333;
  padding-left: 25px;
}
.proDetailOriginalMsg p span {
  color: #5c6df9;
  padding-left: 25px;
}
.pullDown {
    text-align: center;
    /* padding: 20px 0 18px; */
    padding-top: 5px;
}
.pullDownCen {
    display: inline-table;
    height: 12px;
}
.pullDown .pullLine {
    background: url("../assets/img/upArrow.png") no-repeat;
    width: 11px;
    height: 11px;
    background-size: contain;
    margin-right: 6px;
}
.pullDownCen p {
    float: left;
}
.pullDownCen span {
    float: left;
}
.text {
    font-size: 12px;
    color: #ccc;
    line-height: 12px;
}
.van-divider{
    font-size: 12px;
}
</style>
