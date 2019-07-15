<template>
  <div class="proDetail">
    <div class="proDetailTop">
      <p class="proDetailTit">新手专享-17082249期</p>
      <div class="proDetailMsg">
        <div class="yearText">
          历史年化收益率
          <img src="../img/wihtip.png" class="repayment_type_img" />
        </div>
        <p class="yearNum">
          11.8
          <em>%</em>~12.0
          <em>%</em>
        </p>
        <ul class="money">
          <li>
            <p class="moneyText">可投金额(元)</p>
            <p class="ng">0.00</p>
          </li>
          <li>
            <p class="moneyText">封闭期限(月)</p>
            <p class="ng">1个月</p>
          </li>
          <li>
            <p class="moneyText">超投金额(元)</p>
            <p class="ng">100.00</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="proMsgProgress">
      <div class="proMsgProgressMain">
        <div class="proMsgProgressMainTop">
          <div class="proMsgProgressMainTopList">
            <p>服务奖励</p>
            <span class="borBg0">100元起投</span>
            <span class="borBg1">送50元红包</span>
          </div>
        </div>
        <div class="proMsgProgressMsgNew">
          <ul>
            <li>
              <p class="iconImg1 iconImg"></p>
              <p class="iconText">今日出借</p>
              <span class="arrowIcon"></span>
            </li>
            <li>
              <p class="iconImg2 iconImg"></p>
              <p class="iconText">放款起息</p>
              <span class="arrowIcon"></span>
            </li>
            <li>
              <p class="iconImg3 iconImg"></p>
              <p class="iconText">收益中</p>
              <span class="arrowIcon"></span>
            </li>
            <li>
              <p class="iconImg4 iconImg"></p>
              <p class="iconText">转让退出</p>
            </li>
          </ul>
        </div>
        <div class="proNewLineHint">
          <span></span>
          <p>仅供参考，具体以实际日期为准</p>
        </div>
      </div>
      <div class="proDetailOriginalMsg">
        <p>
          目标金额
          <em>46,266.29元</em>
        </p>
        <p>
          付息方式
          <em>一次性还本付息</em>
        </p>
        <p>
          相关协议
          <span>点击查看</span>
        </p>
        <p>
          存管银行
          <span>由商业银行提供资金存管</span>
        </p>
      </div>
    </div>
    <div class="productBottom">
      <div class="productBottomclick">待加入</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.proDetailTop {
  height: 260px;
  background: url(../img/productDetBg.png) no-repeat;
  width: 100%;
  background-size: 100% 100%;
}
.proDetailTit {
  font-size: 18px;
  line-height: 18px;
  color: #fff;
  padding-top: 30px;
  text-align: center;
}
.proDetailMsg {
  margin: 0 15px;
}
.yearText {
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  color: #a9b0fb;
  margin-bottom: 20px;
  padding-top: 25px;
}
.repayment_type_img {
  width: 13px;
  vertical-align: middle;
  margin-left: 3px;
  margin-top: -1px;
}
.yearNum {
  font-size: 36px;
  line-height: 30px;
  color: #fff;
  text-align: center;
  vertical-align: bottom;
}
.yearNum em {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}
.proDetailMsg .money {
  display: block;
  height: 42px;
  margin-top: 25px;
  display: flex;
}
.proDetailMsg .money li {
  float: left;
  text-align: center;
  font-size: 18px;
  line-height: 18px;
  color: #fff;
  flex: 1;
}
.moneyText {
  color: #a9b0fb;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 12px;
}

.proMsgProgress {
  background: #fff;
  padding: 140px 0 0;
  margin-top: 10px;
  position: relative;
}
.proMsgProgressMain {
  width: 80%;
  position: absolute;
  top: -35px;
  left: 5%;
  background: #fff;
  border-radius: 5px;
  z-index: 9;
  padding: 0 20px 15px;
  box-shadow: 0 3px 15px rgba(92, 110, 249, 0.2);
}
.proMsgProgressMainTop {
  text-align: center;
}
.proMsgProgressMainTopList {
  display: inline-table;
  padding: 13px 0;
  border-bottom: 1px solid #eee;
}
.proMsgProgressMainTopList p {
  display: inline-table;
  font-size: 14px;
  color: #333;
}
.proMsgProgressMainTopList span {
  padding: 2px 7px;
  margin-left: 10px;
  line-height: 12px;
  font-size: 12px;
}
.borBg0 {
  border: 1px solid #ffb310;
  border-radius: 2px;
  color: #ffb310;
}
.borBg1 {
  border: 1px solid #ff7220;
  border-radius: 2px;
  color: #ff7220;
}
.proMsgProgressMsgNew {
  height: 52px;
  margin-top: 15px;
}
.proMsgProgressMsgNew ul {
  display: block;
  width: 100%;
  height: 100%;
}
.proMsgProgressMsgNew ul li {
  float: left;
  width: 25%;
  text-align: center;
  color: #333;
  font-size: 12px;
  line-height: 12px;
  position: relative;
}
.proMsgProgressMsgNew ul li .iconImg {
  margin: 0 auto;
  width: 16px;
  height: 19px;
}
.proMsgProgressMsgNew ul li .iconImg1 {
  background: url(../img/proIconImg1.png) no-repeat;
  background-size: contain;
}
.proMsgProgressMsgNew ul li .iconImg2 {
  background: url(../img/proIconImg2.png) no-repeat;
  background-size: contain;
}
.proMsgProgressMsgNew ul li .iconImg3 {
  background: url(../img/proIconImg3.png) no-repeat;
  background-size: contain;
}
.proMsgProgressMsgNew ul li .iconImg4 {
  background: url(../img/proIconImg4.png) no-repeat;
  background-size: contain;
}
.proMsgProgressMsgNew ul li .iconText {
  margin-top: 21px;
}
.proMsgProgressMsgNew ul li .arrowIcon {
  background: url(../img/proProressArrowIcon.png) no-repeat;
  width: 4px;
  height: 7px;
  background-size: contain;
  position: absolute;
  right: 0;
  top: 8px;
}
.proNewLineHint {
  margin: 19px auto 0;
  height: 12px;
  position: relative;
  text-align: center;
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
  font-style: normal;
  font-weight: 400;
}
.proDetailOriginalMsg p span {
  color: #5c6df9;
  padding-left: 25px;
}

.productBottom {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 0 5px #ebebed;
  font-size: 16px;
}
.productBottomclick {
  float: left;
  text-align: center;
  background: #5c6df9;
  color: #fff;
  width: 100%;
}
</style>
