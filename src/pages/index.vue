<template>
  <div class="home">
    <Header></Header>
    <div class="homebanner">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="../img/banner1.png" class="bannerpic" />
        </swiper-slide>
        <swiper-slide>
          <img src="../img/banner2.png" class="bannerpic" />
        </swiper-slide>
        <swiper-slide>
          <img src="../img/banner3.png" class="bannerpic" />
        </swiper-slide>
        <swiper-slide>
          <img src="../img/banner4.jpg" class="bannerpic" />
        </swiper-slide>
        <swiper-slide>
          <img src="../img/banner5.png" class="bannerpic" />
        </swiper-slide>
      </swiper>
      <!--以下看需要添加-->
      <div class="swiper-scrollbar"></div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="homemiddle">
      <ul class="home_list">
        <li v-for="uli in middlelist" :key="uli.title">
          <img :src="uli.imgurl" />
          <p>{{uli.title}}</p>
        </li>
      </ul>
    </div>
    <div class="homenotice" @click="goto('noticelist')">
      <div class="homenoticeleft"></div>
      <div class="homenoticeright">
        <div class="marquee">
          <div class="marquee_box">
            <ul class="marquee_list" :class="{marquee_top:animate}">
              <li v-for="item in marqueeList" :key="item.id">
                <span>{{item.name}}</span>
              </li>
            </ul>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
    <div class="indexProductOne">
      <div class="indexNewPro">新手专享</div>
      <div>
        <p class="indexYearpos">
          历史年化收益率
          <img src="../img/point.png" alt class="indexNewProimg" />
        </p>
        <div class="indexProYearL">
          <p class="indexProYearLNum">
            11.8
            <em>%</em>~12.0
            <em>%</em>
          </p>
        </div>
        <div class="indexProPeriodMsg">
          <div class="indexProPeriodCen">
            <p>封闭期限:</p>
            <span>1个月</span>
            <p class="indexProPeriodCenLine"></p>
            <p>剩余金额:</p>
            <span>0.00元</span>
          </div>
        </div>
        <div>
          <p class="indexProOneBtn" @click="goto('Productnews')">立即加入</p>
        </div>
      </div>
    </div>
    <p class="hxxcBank">
      <img src="../img/hcxcbank.png" @click="goto('AboutHuaXia')" />
    </p>
    <div class="indexProduct" v-for="item in idxProList" :key="item.name">
      <div class="indexProList">
        <p>{{item.name}}</p>
        <em>{{item.title}}</em>
        <span class="publicArrowIcon"></span>
      </div>
      <div class="indexProListCen">
        <div class="indexProListNew">
          <ul>
            <li class="indexProListLi1">
              <p class="indexProListLi1Year">
                {{item.minrate}}
                <em>%</em>
                ~{{item.maxrate}}
                <em>%</em>
              </p>
              <p class="indexProListLi1YearText">
                历史年化收益
                <img src="../img/point.png" alt />
              </p>
            </li>
            <li class="indexProListLi2">
              <p class="indexProListMonth">期限{{item.timer}}个月</p>
              <p class="indexProListLi1YearText">{{item.type}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="indexProDate">
      <div class="indexProListClassify">
        <p>信息披露</p>
        <em>实时披露 公开透明</em>
      </div>
      <ul class="indexProDateUl">
        <li>
          <p class="indexProDateNum">138.53</p>
          <p class="indexProDateDesc">累计借贷金额(亿)</p>
        </li>
        <li>
          <p class="indexProDateNum">24.65</p>
          <p class="indexProDateDesc">累计借贷笔数(万)</p>
        </li>
      </ul>
      <div class="sp">
        <ul class="swiper1">
          <li v-for="(item,$index) in swiperList" :key="item.title" @click="toggle($index)">
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="indexBotSafeDesc">
      <ul>
        <li>
          <p class="indexBotIcon1 BotIcon1"></p>
          <div class="indexBotIconDesc">
            <p class="indexBotIconDesc1">商业银行</p>
            <p>资金存管</p>
          </div>
        </li>
        <li>
          <p class="indexBotIcon2 BotIcon1"></p>
          <div class="indexBotIconDesc">
            <p class="indexBotIconDesc1">动态监测</p>
            <p>严控风险</p>
          </div>
        </li>
        <li>
          <p class="indexBotIcon3 BotIcon1"></p>
          <div class="indexBotIconDesc">
            <p class="indexBotIconDesc1">严格甄选</p>
            <p>优质资产</p>
          </div>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from "vue";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue"


export default {
  data() {
    return {
      //设置属性
      swiperOption: {
        //显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        //切换模式  横屏或者竖屏
        // direction : 'vertical',
        //设置自动播放速度
        autoplay: {
          disableOnInteraction: false,
          delay: 2000
        },
        //开启无限循环
        loop: true,
        //设置点击箭头
        paginationClickable: true,
        //设置同屏显示的数量，默认为1，使用auto是随意的意思。
        slidesPerView: 1,
        //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
        mousewheel: true
        //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
        // freeMode:true
      },
      middlelist: [
        {
          title: "会员中心",
          imgurl: require("../img/member.png")
        },
        {
          title: "平台介绍",
          imgurl: require("../img/safe.png")
        },
        {
          title: "领积分",
          imgurl: require("../img/new.png")
        },
        {
          title: "邀请好友",
          imgurl: require("../img/friend.png")
        }
      ],
      animate: false,
      marqueeList: [
        {
          name: "【清凉节加息1%】活动公告",
          id: 1,
          time: "2019年07月09日 18:00"
        },
        {
          name: "【建党节加息0.6%】活动公告",
          id: 2,
          time: "2019年06月30日 22:00"
        },
        {
          name: "关于平台系统升级维护公告",
          id: 3,
          time: "2019年06月27日 16:00"
        },
        {
          name: "关于客服升级维护公告",
          id: 4,
          time: "2019年06月20日 17:30"
        },
        {
          name: "【清凉节加息1%】活动公告",
          id: 5,
          time: "2019年07月09日 18:00"
        },
        {
          name: "【建党节加息0.6%】活动公告",
          id: 6,
          time: "2019年06月30日 22:00"
        },
        {
          name: "关于平台系统升级维护公告",
          id: 7,
          time: "2019年06月27日 16:00"
        },
        {
          name: "关于客服升级维护公告",
          id: 8,
          time: "2019年06月20日 17:30"
        },
        {
          name: "【清凉节加息1%】活动公告",
          id: 9,
          time: "2019年07月09日 18:00"
        },
        {
          name: "【建党节加息0.6%】活动公告",
          id: 10,
          time: "2019年06月30日 22:00"
        },
        {
          name: "关于平台系统升级维护公告",
          id: 11,
          time: "2019年06月27日 16:00"
        },
        {
          name: "关于客服升级维护公告",
          id: 12,
          time: "2019年06月20日 17:30"
        },
        {
          name: "【清凉节加息1%】活动公告",
          id: 13,
          time: "2019年07月09日 18:00"
        },
        {
          name: "【建党节加息0.6%】活动公告",
          id: 14,
          time: "2019年06月30日 22:00"
        },
        {
          name: "关于平台系统升级维护公告",
          id: 15,
          time: "2019年06月27日 16:00"
        },
        {
          name: "关于客服升级维护公告",
          id: 16,
          time: "2019年06月20日 17:30"
        }
      ],
      idxProList: [
        {
          name: "华信宝",
          title: "优质资产 多样选择",
          minrate: 6.9,
          maxrate: 7.1,
          timer: 6,
          type: "一次性还本付息"
        },
        {
          name: "定信宝",
          title: "智能撮合 分散匹配",
          minrate: 9.6,
          maxrate: 9.8,
          timer: 24,
          type: "每月付息"
        }
      ],
      swiperList: [
        {
          title: "基本信息",
          bgurl: require("../img/bg_jiben.png")
        },
        {
          title: "备案信息",
          bgurl: require("../img/bg_beian.png")
        },
        {
          title: "审核信息",
          bgurl: require("../img/bg_shenhe.png")
        },
        {
          title: "重大事项",
          bgurl: require("../img/bg_shixiang.png")
        },
        {
          title: "法律法规",
          bgurl: require("../img/bg_falv.png")
        },
        {
          title: "消费者咨询渠道",
          bgurl: require("../img/bg_xiaofei.png")
        },
        {
          title: "年报公示",
          bgurl: require("../img/bg_nianbao.png")
        },
        {
          title: "经营信息",
          bgurl: require("../img/bg_shuju.png")
        },
        {
          title: "法人确认函",
          bgurl: require("../img/bg_querenhan.png")
        },
        {
          title: "反欺诈名单",
          bgurl: require("../img/bg_fqz.png")
        }
      ]
    };
  },
  created: function() {
    setInterval(this.showMarquee, 2000);
  },
  components: {
    swiper,
    swiperSlide,
    Header,
    Footer
  },
  methods: {
    toggle(index) {
      this.active = index;
    },
    showMarquee: function() {
      this.animate = true;

      setTimeout(() => {
        this.marqueeList.push(this.marqueeList[0]);
        this.marqueeList.shift();
        this.animate = false;
      }, 1000);
    },
    goto(name) {
      this.$router.push({
        name
      });
    }
  }
};
</script>


<style>
body {
  background: #f5f5f5;
}
.homebanner {
  overflow: hidden;
  position: relative;
  z-index: 888;
  min-height: 164px;
  padding: 10px 0 0 15px;
  background: #fff;
  height: 164px;
  max-height: 175px;
}
.bannerpic {
  width: 324px;
  height: 140px;
}
.homemiddle {
  width: 100%;
  background: #fff;
}
.homemiddle .home_list {
  width: 100%;
  padding: 7px 0 20px;
  display: flex;
}
.homemiddle .home_list li {
  width: 97px;
  height: 69px;
  flex: 1;
}
.home_list li img {
  width: 43px;
  height: 43px;
  margin: 0 25px;
}
.home_list li p {
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #333;
  margin-top: 12px;
}

.homenotice {
  height: 36px;
  border-top: 1px solid #eee;
  padding: 0 14px;
  position: relative;
  background: #fff;
}
.homenotice .homenoticeleft {
  width: 17px;
  height: 17px;
  background: url(../img/notice.png) no-repeat;
  background-size: contain;
  position: absolute;
  top: 50%;
  left: 15px;
  margin-top: -9px;
}
.homenotice .homenoticeright {
  line-height: 36px;
  overflow: hidden;
  width: 75%;
  position: absolute;
  height: 35px;
  left: 43px;
}
.marquee {
  width: 100%;
  height: 37px;
  align-items: center;
  color: #3a3a3a;
  /* background-color: #b3effe; */
  display: flex;
  box-sizing: border-box;
}

.marquee_box {
  display: block;
  position: relative;
  width: 218.25px;
  height: 30px;
  overflow: hidden;
}

.marquee_list {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}
.marquee_top {
  transition: all 0.5s;
  margin-top: -30px;
}

.marquee_list li {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}

.marquee_list li span {
  padding: 0 2px;
}

.indexProductOne {
  padding: 20px 15px 0;
  background: #fff;
  margin-top: 10px;
  position: relative;
}

.indexNewPro {
  height: 16px;
  position: relative;
  margin-bottom: 23px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}
.indexYearpos {
  font-size: 14px;
  color: #999;
  line-height: 14px;
  margin-bottom: 15px;
  text-align: center;
}

.indexNewProimg {
  width: 13px;
  vertical-align: middle;
  margin-left: 3px;
  margin-top: -1px;
}
.indexProYearL {
  margin: 0 0 12px;
}

.indexProYearLNum {
  text-align: center;
  font-size: 36px;
  color: #5c6df9;
  line-height: 40px;
  width: 345px;
  height: 46px;
}
.indexProYearLNum em {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
}
.indexProPeriodMsg {
  height: 14px;
  text-align: center;
}

.indexProPeriodCen {
  display: inline-table;
}
.indexProPeriodCen p {
  color: #999;
  float: left;
  font-size: 12px;
  line-height: 12px;
}
.indexProPeriodCen span {
  color: #333;
  float: left;
  font-size: 12px;
  line-height: 12px;
}
.indexProPeriodCenLine {
  height: 12px;
  width: 1px;
  background: #d1d1d1;
  margin: 0 15px;
}

.indexProOneBtn {
  height: 75px;
  width: 304px;
  margin: 12px auto 0;
  text-align: center;
  color: #fff;
  line-height: 72px;
  font-size: 18px;
  background: url(../img/button.png) no-repeat center;
  background-size: contain;
}

.hxxcBank {
  margin-top: 10px;
}
.hxxcBank img {
  width: 100%;
  height: 85px;
}
.indexProduct {
  margin-top: 10px;
  background: #fff;
  padding: 20px 15px 0;
}
.indexProList {
  position: relative;
}
.indexProList p {
  font-size: 18px;
  line-height: 18px;
  color: #000;
  font-weight: 700;
}
.indexProList em {
  display: block;
  font-size: 12px;
  line-height: 12px;
  margin-top: 10px;
  color: #666;
  font-style: normal;
  font-weight: 400;
}
.publicArrowIcon {
  right: 0;
  position: absolute;
  top: 50%;
  margin-top: -8px;
  background: url(../img/arrow.png) no-repeat;
  width: 9px;
  height: 15px;
  background-size: contain;
}
.indexProListCen {
  width: 345px;
  height: 97px;
}
.indexProListNew {
  padding: 27px 0 20px;
}
.indexProListNew ul {
  display: block;
  width: 100%;
  display: flex;
}
.indexProListNew ul li {
  width: 45%;
  border-right: 1px solid #eee;
  height: 50px;
}
.indexProListLi1Year {
  font-size: 26px;
  line-height: 20px;
  margin-bottom: 14px;
  color: #5c6df9;
}
.indexProListLi1Year em {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
}
.indexProListLi1YearText {
  font-size: 12px;
  color: #999;
}
.indexProListLi1YearText img {
  width: 13px;
  vertical-align: middle;
  margin-left: 3px;
  margin-top: -1px;
}

.indexProListLi2 {
  border: 0;
  padding-left: 30px;
}

.indexProListMonth {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
  color: #333;
}

.indexProDate {
  margin-top: 10px;
  background: #fff;
  padding: 20px 0 23px 15px;
}

.indexProListClassify p {
  font-size: 18px;
  line-height: 18px;
  color: #000;
  font-weight: 700;
}
.indexProListClassify em {
  display: block;
  font-size: 12px;
  line-height: 12px;
  margin-top: 10px;
  color: #666;
  font-style: normal;
  font-weight: 400;
}

.indexProDateUl {
  width: 100%;
  margin: 26px 15px 20px 0;
  display: flex;
}
.indexProDateUl li {
  text-align: center;
  float: left;
  width: 50%;
}
.indexProDateNum {
  line-height: 24px;
  color: #333;
  text-align: center;
  font-size: 24px;
}
.indexProDateDesc {
  font-size: 12px;
  line-height: 12px;
  color: #999;
  margin-top: 12px;
}

.sp {
  width: 365px;
  height: 55px;
}
.swiper1 {
  padding: 0 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: middle;
  -ms-flex-align: middle;
  align-items: middle;
  overflow: auto;
}
.swiper1::-webkit-scrollbar {
  display: none;
}
.swiper1 li {
  width: 105px;
  margin-right: 15px;
  height: 55px;
  float: left;
  background: url("../img/bg_fqz.png") no-repeat;
}
.swiper1 li span {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 105px;
  color: #fff;
  font-size: 14px;
  margin: 0 auto;
  height: 100%;
  text-align: center;
}

.indexBotSafeDesc {
  margin: 25px 15px 16px;
}
.indexBotSafeDesc ul {
  display: flex;
}
.indexBotSafeDesc ul li {
  flex: 1;
}
.BotIcon1 {
  width: 25px;
  height: 25px;
  float: left;
  display: block;
}
.indexBotIcon1 {
  background: url("../img/indexBotIcon1.png") no-repeat;
  background-size: contain;
}
.indexBotIcon2 {
  background: url("../img/indexBotIcon2.png") no-repeat;
  background-size: contain;
}
.indexBotIcon3 {
  background: url("../img/indexBotIcon3.png") no-repeat;
  background-size: contain;
}

.indexBotIconDesc {
  float: left;
  margin-left: 10px;
}
.indexBotIconDesc1 {
  margin-bottom: 4px;
}
.indexBotIconDesc p {
  font-size: 12px;
  line-height: 12px;
  color: #999;
}
</style>
