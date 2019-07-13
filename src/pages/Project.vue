<template>
  <div>
    <Header :keywork="key"></Header>    
    <van-cell class="list proList indexProList">
      <template slot="title">
        <div class="custom-title">
          <p class="title">新手专享</p>
          <em class="tip">期限短-返50元红包</em>
        </div>
        <div>
          <ul>
            <li class="indexProListLi1">
              <p class="indexProListLi1Year ng-binding">
                11.8
                <em>%</em>~12.0
                <em>%</em>
              </p>
              <p class="indexProListLi1YearText yearNumPos">
                历史年化收益率
                <img class="repayment_type_img" src="../assets/img/point.png" @click="hint" />
                <span class="money_type1" style="display: inline;" v-if="show">历史年化收益率仅供参考，不代表未来收益。</span>
              </p>
            </li>
            <li class="indexProListLi2">
              <p class="indexProListMonth">
                封闭期限
                <span class="ng-binding">1个月</span>
              </p>
              <p class="indexProListLi1YearText ng-binding">一次性还本付息</p>
            </li>
            <li class="indexProListLi3">
              <van-circle
                :v-model="50"
                :rate="30"
                :speed="100"
                color="#07c160"
                fill="#fff"
                size="48px"
                layer-color="#ebedf0"
                :stroke-width="60"
                default="还款中"
              >
                <span>
                  <slot></slot>
                </span>
              </van-circle>
            </li>
            <div style="clear: both;"></div>
            <!--产品标签说明-->
            <div class="productNLabel">
              <div class="productLabelMsg">
                <van-tag color="#ff8f10" plain>100元起投</van-tag>
                <van-tag color="#ff8f10" plain>送50元红包</van-tag>
              </div>
            </div>
          </ul>
        </div>
      </template>
    </van-cell>
    <van-cell class="list proList indexProList">
      <template slot="title">
        <div class="custom-title">
          <p class="title">华信宝系列</p>
          <em class="tip">优质资产 多样选择</em>
        </div>
        <div>
          <ul>
            <li class="indexProListLi1">
              <p class="indexProListLi1Year ng-binding">
                6.8
                <em>%</em>~7.0
                <em>%</em>
              </p>
              <p class="indexProListLi1YearText yearNumPos">
                历史年化收益率
                <img class="repayment_type_img" src="../assets/img/point.png" @click="hint" />
                <span class="money_type1" style="display: inline;" v-if="show">历史年化收益率仅供参考，不代表未来收益。</span>
              </p>
            </li>
            <li class="indexProListLi2">
              <p class="indexProListMonth">
                封闭期限
                <span class="ng-binding">3个月</span>
              </p>
              <p class="indexProListLi1YearText ng-binding">一次性还本付息</p>
            </li>
            <li class="indexProListLi3">
              <van-circle
                :v-model="50"
                :rate="30"
                :speed="100"
                color="#07c160"
                fill="#fff"
                size="48px"
                layer-color="#ebedf0"
                :stroke-width="60"
                default="还款中"
              >
                <span slot="default">还款中</span>
              </van-circle>
            </li>
            <div style="clear: both;"></div>
            <!--产品标签说明-->
            <div class="productNLabel">
              <div class="productLabelMsg">
                <van-tag color="#ff8f10" plain>限时加息1%</van-tag>
              </div>
            </div>
          </ul>
        </div>
      </template>
    </van-cell>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
export default {
  data() {
    return {
      show: false,
      key:"Item",
    };
  },
  methods: {
    hint() {
      this.show = !this.show;
    }
  },
  components:{
    Header
  }
  //   computed: {
  //     text() {
  //       return "还款中";
  //     }
  //   }
};
</script>
<style>
.title {
  font-size: 18px;
  line-height: 18px;
  color: #000;
  font-weight: 700;
  margin: 0;
}
.tip {
  display: block;
  font-size: 12px;
  line-height: 12px;
  margin-top: 10px;
  color: #666;
  font-style: normal;
}
.list {
  margin-top: 10px;
}
.proList ul {
  margin-top: 25px;
}
.list ul {
  display: block;
  width: 100%;
}
.indexProList ul li.indexProListLi1 {
  width: 42%;
}
.indexProList ul li {
  width: 33.33%;
  float: left;
  height: 48px;
}
.indexProList ul li.indexProListLi2 {
  width: 35%;
}
.indexProListMonth {
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 10px;
  color: #333;
}
.indexProListLi2 .indexProListLi1YearText {
  text-align: left;
}
.indexProListLi1YearText {
  font-size: 12px;
  color: #999;
  line-height: 12px;
}
.indexProList ul li {
  width: 33.33%;
  float: left;
  height: 48px;
}
.indexProListLi2 {
  padding-left: 8%;
}
.indexProList ul li.indexProListLi3 {
  width: 50px;
  height: 48px;
  line-height: 48px;
  font-size: 12px;
}
.van-circle__text {
  color: #989898;
}
.indexProList ul li {
  width: 33.33%;
  float: left;
  height: 48px;
}
.indexProListLi3 {
  float: right !important;
}
.productLabelMsg {
  height: 16px;
  margin-top: 15px;
}
.productLabelMsg span {
  margin-right: 8px;
  padding: 0 7px;
  font-size: 12px;
  border-radius: 2px;
  height: 16px;
}
.repayment_type_img {
  width: 12px;
  vertical-align: middle;
  margin-left: 3px;
  margin-top: -2px;
}
.indexProListLi1Year {
  color: #5c6df9;
  font-size: 22px;
  line-height: 14px;
  margin-bottom: 14px;
}
.indexProListLi1Year em {
  font-size: 14px;
}
.money_type1 {
  position: absolute;
  top: -40px;
  background: rgba(0, 0, 0, 0.7);
  color: #dfdfdf;
  line-height: 23px;
  padding: 5px;
  border-radius: 5px;
  width: 180%;
  left: 10px;
}
.yearNumPos {
  position: relative;
}
.van-nav-bar__left{
  font-size: 18px;
}
</style>
