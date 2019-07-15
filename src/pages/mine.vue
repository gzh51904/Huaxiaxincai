<template>
    <div class="app">
        <div class="header" id="head">
            <div class="headerTop">
                <div class="headerUser">
                    <div class="headerUserLeft">
                        <img src="../img/headImg.png" alt="" @click="goto('setting')">
                        <div style="float:left;margin-left:5px" class="left">
                            <p class="dengji" >
                                <span class="V">
                                    <img src="../img/memberV.png" alt="" />
                                </span>
                                1
                            </p>
                            <p>普通会员</p>
                        </div>
                    </div>
                    <div class="headerUserRight">
                        <img src="../img/accountMsgIcon.png" alt="">
                    </div>
                </div>
                <div class="headerMid">
                    <p class="eyeOpen" v-if="show" @click="sh()"></p>
                    <p class="eyeClose" v-else @click="sh()"></p>
                    <div class="headerMidTop">
                        <div class="headerMTText">
                            <div>
                                <p>总资产(元)</p>
                            </div>
                        </div>
                        <p class="headerAssetMoney" v-if="show">
                            0.00
                        </p>
                        <p class="headerAssetMoney" v-else>
                            **
                        </p>
                        <p class="headerAssetIcon"></p>
                        <p style="background:#6797fb;height:1px"></p>
                    </div>
                </div>
                <ul class="headerBot">
                    <li>
                        <p class="funText">
                            <em class="opacity4">累计收益(元)</em>
                            <span></span>
                        </p>
                        <p v-if="show">0.00</p>
                        <p v-else>**</p>
                    </li>
                    <li>
                        <p class="funText">
                            <em class="opacity4">可用余额(元)</em>
                        </p>
                        <p v-if="show">0.00</p>
                        <p v-else>**</p>
                    </li>
                </ul>
                <img src="../img/new.gif" style="display:block;width:100%;position:absolute;left:0;bottom:-2px" alt="">
            </div>
            <div class="headerERIcon">
                <ul>
                    <li>
                        <p class="headerERIcon1 erIcon"></p>
                        <p class="headerERText">提现</p>
                    </li>
                    <li>
                        <p class="headerERIcon2 erIcon"></p>
                        <p class="headerERText">充值</p>
                    </li>
                </ul>
            </div>
            <div class="headerHint" @click="goto('account')">
                <em></em>
                应法规要求，出借前请先开通存管账户
                <span class="headerHintIcon"></span>
            </div>
            <div class="headerMsgM">
                <em></em>
                <div class="headerMsg">
                    <div class="headerMsgText">
                        <div>
                            <p>我的优惠券:10.00元红包</p>
                            <span>1天前</span>
                        </div>
                    </div>
                    <span class="publicArrowIcon"></span>
                </div>
            </div>

            <publiclist></publiclist>
            <botlist></botlist>
        </div>

    </div>
</template>
<script>
import publiclist from "../components/publiclist.vue";
import botlist from "../components/BotList.vue";
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    sh() {
      this.show = !this.show;
       
    },
    goto(name){ 
      this.$router.push({
          name,
      })
    }
  },
  components: {
    publiclist,
    botlist
  }
};
</script>
<style scoped>
.header {
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  /* flex-direction: column; */
}
.header .headerTop {
  /* flex: 1; */
  background: url(../img/accountTopBack.png) no-repeat;
  width: 100%;
  height: 255px;
  background-size: 100% 100%;
  padding: 0 15px;
  position: relative;
}
.headerTop .headerUser {
  /* width: 25px;
    height: 25px; */
  padding: 10px 0;
  overflow: hidden;
}
.headerTop .headerUserLeft {
  float: left;
}
.headerTop .headerUserLeft img {
  width: 25px;
  height: 25px;
  float: left;
}
.headerUserLeft p {
  float: left;

  line-height: 26px;
  color: #fff;
}
.headerUserLeft .left .dengji {
  font-size: 12px;
  margin: 0 5px;
}
.headerUserLeft .left .dengji .V img {
  margin-top: 7px;
  width: 13px;
  height: 11px;
  background-size: contain;
}
.headerUserRight {
  float: right;
}
.headerUserRight img {
  width: 17px;
  height: 21px;
}
.headerMid {
  position: relative;
}
.headerMidTop {
  position: relative;
  padding: 19px 0 0;
}
.headerMidTop .headerMTText {
  height: 13px;
  color: #fff;
  font-size: 13px;
}
.headerAssetMoney {
  font-size: 30px;
  color: #fff;
  line-height: 30px;
  padding: 20px 0;
}
.headerAssetIcon {
  background: url(../img/accountLeftArrow.png) no-repeat;
  width: 9px;
  height: 16px;
  position: absolute;
  top: 50%;
  right: 0px;
  margin-top: -8px;
  background-size: contain;
}
.headerBot {
  display: block;
  /* width: 100%; */
  margin-top: 25px;
}
.headerBot li {
  width: 50%;
  float: left;
  font-size: 18px;
  line-height: 18px;
  color: #fff;
}
.headerBot li p.funText {
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 15px;
  position: relative;
  display: table;
}
.opacity4 {
  color: #fff;
  font-size: 13px;
  font-style: normal;
}
.headerBot li p.funText span {
  position: absolute;
  right: -17px;
  top: 0;
  background: url(../img/questionBlack.png) no-repeat;
  width: 12px;
  height: 12px;
  background-size: contain;
}
.eyeOpen {
  background: url(../img/eyeOpen.png);
  width: 20px;
  height: 12px;
  background-size: contain;
  margin-left: 10px;
  position: absolute;
  left: 55px;
  top: 19px;
  z-index: 99;
}
.eyeClose {
  background: url(../img/eyeClose.png);
  width: 20px;
  height: 12px;
  background-size: contain;
  margin-left: 10px;
  position: absolute;
  left: 55px;
  top: 19px;
  z-index: 99;
}
.headerERIcon {
  height: 70px;
  padding: 0px 15px;
  /* width: 100%; */
}
.headerERIcon ul {
  /* width: 100%; */
  height: 100%;
  position: relative;
}
.headerERIcon ul li {
  width: 50%;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}
.headerERIcon ul .erIcon {
  width: 49px;
  height: 49px;
  margin-right: 3px;
}
.headerERIcon ul .headerERIcon1 {
  background: url(../img/accountTopIcon1.png) no-repeat;
  background-size: contain;
}
.headerERIcon ul .headerERText {
  font-size: 16px;
  line-height: 16px;
  color: #333;
}
.headerERIcon ul .headerERIcon2 {
  background: url(../img/accountTopIcon2.png) no-repeat;
  background-size: contain;
}
.headerHint {
  padding: 15px;
  background: #fff7ea;
  color: #ff8f10;
  width: 100%;
  font-size: 14px;
  line-height: 14px;
  position: relative;
}
.headerHint em {
  display: flex;
  background: url(../img/accountTopHintIcon.png) no-repeat;
  width: 16px;
  height: 16px;
  background-size: contain;
  margin-right: 9px;
  align-items: center;
  float: left;
}
.headerHintIcon {
  position: absolute;
  top: 50%;
  right: 15px;
  margin-top: -8px;
  background: url(../img/arrow.png) no-repeat;
  background-size: contain;
  width: 9px;
  height: 15px;
}
.headerMsgM {
  height: 88px;
  /* width: 100%; */
  padding: 0 15px;
  position: relative;
}
.headerMsgM .headerMsg {
  background: #fff;
  margin-top: 10px;
  margin-left: 50px;
  height: 68px;
  width: 90%;
  display: table;
  position: relative;
}
.headerMsgM em {
  background: url(../img/accountTopMsgIcon.png) no-repeat;
  width: 49px;
  height: 49px;
  background-size: contain;
  position: absolute;
  left: 15px;
  top: 50%;
  margin-top: -22px;
}
.headerMsg .headerMsgText {
  /* width: 100%; */
  height: 100%;
  display: table-cell;
  vertical-align: middle;
}
.headerMsg .headerMsgText div {
  font-size: 14px;
  line-height: 14px;
  color: #000;
  height: 14px;
}
.headerMsg .headerMsgText p {
  float: left;
  max-width: 75%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.headerMsg .headerMsgText span {
  padding-left: 15px;
  color: #999;
  float: left;
}
.publicArrowIcon {
  position: absolute;
  top: 50%;
  right: -12px;
  margin-top: -8px;
  background: url(../img/arrow.png) no-repeat;
  width: 9px;
  height: 15px;
  background-size: contain;
}



</style>
