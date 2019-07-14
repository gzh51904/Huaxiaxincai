<template>
  <div>
    <van-nav-bar fixed>
      <span slot="left">优选计划</span>
    </van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-cell class="list proList indexProList" style="margin-top:46px">
        <template slot="title">
          <div class="custom-title">
            <p class="title">{{this.newp.signName}}</p>
            <em class="tip">{{this.newp.signDescribe}}</em>
          </div>
          <div v-for="item in newp" :key="item.id">
            <ul>
              <li class="indexProListLi1">
                <p class="indexProListLi1Year ng-binding">
                  {{item.yearRateLowText}}
                  <em>%</em>
                  ~{{item.yearRateHighText}}
                  <em>%</em>
                </p>
                <p class="indexProListLi1YearText yearNumPos">
                  历史年化收益率
                  <img
                    class="repayment_type_img"
                    src="../assets/img/point.png"
                    @click="hint()"
                  />
                  <span
                    class="money_type1"
                    style="display: inline;"
                    v-if="show"
                  >历史年化收益率仅供参考，不代表未来收益。</span>
                </p>
              </li>
              <li class="indexProListLi2">
                <p class="indexProListMonth">
                  封闭期限
                  <span class="ng-binding">{{item.period}}个月</span>
                </p>
                <p class="indexProListLi1YearText ng-binding">{{item.interestType}}</p>
              </li>
              <li class="indexProListLi3">
                <van-circle
                  v-model="currentRate"
                  :rate="100"
                  :speed="100"
                  :text="text"
                  size="48px"
                  color="#989898"
                  layer-color="#989898"
                  slot="default"
                >
                  <span>{{item.statusText}}</span>
                </van-circle>
              </li>
              <div style="clear: both;"></div>
              <!--产品标签说明-->
              <div class="productNLabel">
                <div class="productLabelMsg">
                  <van-tag color="#ff8f10" plain>{{item.stampContents.slice(19,25)}}</van-tag>
                  <van-tag color="#ff8f10" plain>{{item.stampContents.slice(46,52)}}</van-tag>
                </div>
              </div>
            </ul>
          </div>
        </template>
      </van-cell>
      <van-cell class="list proList indexProList">
        <template slot="title">
          <div class="custom-title">
            <p class="title">{{this.huaxinbao.signName}}</p>
            <em class="tip">{{this.huaxinbao.signDescribe}}</em>
          </div>
          <div>
            <ul v-for="item in huaxinbao" :key="item.id">
              <li class="indexProListLi1">
                <p class="indexProListLi1Year ng-binding">
                  {{item.yearRateLowText}}
                  <em>%</em>
                  ~{{item.yearRateHighText}}
                  <em>%</em>
                </p>
                <p class="indexProListLi1YearText yearNumPos">
                  历史年化收益率
                  <img
                    class="repayment_type_img"
                    src="../assets/img/point.png"
                    @click="hint()"
                  />
                  <span
                    class="money_type1"
                    style="display: inline;"
                    v-if="show"
                  >历史年化收益率仅供参考，不代表未来收益。</span>
                </p>
              </li>
              <li class="indexProListLi2">
                <p class="indexProListMonth">
                  封闭期限
                  <span class="ng-binding">{{item.period}}个月</span>
                </p>
                <p class="indexProListLi1YearText ng-binding">{{item.interestType}}</p>
              </li>
              <li class="indexProListLi3">
                <van-circle
                  v-model="currentRate"
                  :rate="item.proportion"
                  :speed="100"
                  :text="text"
                  size="48px"
                  color="#ff8f10"
                  layer-color="#ffd29f"
                  slot="default"
                >
                  <span style="color:#ff9925">{{item.statusText}}</span>
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
      <van-cell class="list proList indexProList">
        <template slot="title">
          <div class="custom-title">
            <p class="title">{{this.dingxinbao.signName}}</p>
            <em class="tip">{{this.dingxinbao.signName}}</em>
          </div>
          <div>
            <ul v-for="item in dingxinbao" :key="item.id">
              <li class="indexProListLi1">
                <p class="indexProListLi1Year ng-binding">
                  {{item.yearRateLowText}}
                  <em>%</em>
                  ~{{item.yearRateHighText}}
                  <em>%</em>
                </p>
                <p class="indexProListLi1YearText yearNumPos">
                  历史年化收益率
                  <img
                    class="repayment_type_img"
                    src="../assets/img/point.png"
                    @click="hint()"
                  />
                  <span
                    class="money_type1"
                    style="display: inline;"
                    v-if="show"
                  >历史年化收益率仅供参考，不代表未来收益。</span>
                </p>
              </li>
              <li class="indexProListLi2">
                <p class="indexProListMonth">
                  封闭期限
                  <span class="ng-binding">{{item.period}}个月</span>
                </p>
                <p class="indexProListLi1YearText ng-binding">{{item.interestType}}</p>
              </li>
              <li class="indexProListLi3">
                <van-circle
                  v-model="currentRate"
                  :rate="item.proportion"
                  :speed="100"
                  :text="text"
                  size="48px"
                  color="#ff8f10"
                  layer-color="#ffd29f"
                  slot="default"
                >
                  <span style="color:#ff9925">{{item.statusText}}</span>
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
      <div class="prodocutBeforeHint">
        <div class="prodocutBeforeHintMsg" ng-click="selectProBidList()" ng-if="selectProType==0">
          <p class="prodocutBeforeHintArrow"></p>
          <p>查看往期项目</p>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
import Vue from "vue";
import { Circle, Toast, PullRefresh ,Panel} from "vant";

Vue.use(Panel);
Vue.use(PullRefresh);
Vue.use(Circle);
Vue.use(Toast);
export default {
  data() {
    return {
      currentRate: 0,
      newp: [],
      huaxinbao: [],
      dingxinbao: [],
      recommed: [],
      show: false,
      count: 0,
      isLoading: false
    };
  },
  methods: {
    hint() {
      this.$toast("历史年化收益率仅供参考，不代表未来收益。");
      // if(idx == this.id){
      // this.show = !this.show;
      // }
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  },
  // mounted() {
  //   this.$toast('提示文案');
  // },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    }
  },
  // created() {
  //   this.$axios.get("/project").then(res => {
  //     // console.log(res);
  //     let arr = res.data.data;
  //     console.log(arr);
  //     this.newp = arr.filter(item => item.productName == "新手专享");
  //     this.huaxinbao = arr.filter(item => item.signName == "华信宝系列");
  //     console.log(this.newp, this.newp[0].signName, this.huaxinbao);
  //   });
  // }
  async created() {
    let { data } = await this.$axios.get("/project");
    console.log("data:", data);
    console.log(data.data);
    let arr = data.data;
    this.newp = arr.filter(item => item.productName == "新手专享");
    this.newp.signName = this.newp[0].signName;
    this.newp.signDescribe = this.newp[0].signDescribe;
    console.log(
      this.newp[0],
      this.newp[0].stampContents.slice(19, 25),
      this.newp[0].stampContents.slice(45, 52)
    );
    console.log(this.newp[0].stampContents);

    this.huaxinbao = arr.filter(item => item.signName == "华信宝系列");
    this.huaxinbao.signName = this.huaxinbao[0].signName;
    this.huaxinbao.signDescribe = this.huaxinbao[0].signDescribe;
    console.log(this.huaxinbao);

    this.dingxinbao = arr.filter(item => item.signName == "定信宝系列");
    this.dingxinbao.signName = this.dingxinbao[0].signName;
    this.dingxinbao.signDescribe = this.dingxinbao[0].signDescribe;
  }
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
  width: 48px;
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
  font-size: 20px;
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
.van-nav-bar__left {
  font-size: 18px;
}
.prodocutBeforeHint {
  text-align: center;
  margin-top: 20px;
  padding-bottom: 20px;
  line-height: 12px;
  color: #ccc;
  font-size: 12px;
}
.prodocutBeforeHintMsg {
  display: inline-table;
}
.prodocutBeforeHintMsg p {
  float: left;
}

.prodocutBeforeHintArrow {
  background: url("../assets/img/proBeforeArrow.png") no-repeat;
  width: 12px;
  height: 7px;
  background-size: contain;
  margin-right: 5px;
  margin-top: 3px;
}
</style>
