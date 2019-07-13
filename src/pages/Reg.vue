<template>
  <div style="background: #f5f5f5;">
    <van-cell-group :model="ruleForm" ref="ruleForm">
      <van-field v-model="ruleForm.phone" placeholder="请输入手机号码" />
      <van-field v-model="ruleForm.password" type="password" placeholder="请输入8-36位字母与数字组合密码" />
      <van-field v-model="ruleForm.sms" center clearable placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">获取验证码</van-button>
      </van-field>
      <p class="yuyinC" ng-show="interval == 0">
        收不到验证码？尝试
        <span ng-click="sendVcode(1)">获取语音验证码</span>
      </p>
      <van-field v-model="ruleForm.value" placeholder="请输入邀请码（选填）" />
      <div
        class="register-bottom"
      >
        <span>
          <img :src="check" @click="changeImg()" />
        </span>
        <p>
          我已阅读并同意
          <a ng-click="goAgreeReg()">《注册服务协议》</a>及
          <a ng-click="goAgreePolicyReg()">《隐私权政策》</a>
        </p>
      </div>
      <p class="btn_blue registBtn" ng-click="submit()">注册</p>
      <p class="login">
        <em @click="goLogin()">已有账号?立即登录</em>
      </p>
    </van-cell-group>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {
      ruleForm: {
        phone: "",
        password: "",
        sms: "",
        value: ""
      },
      check: require("../assets/img/checked.png")
    };
  },
  methods: {
    changeImg() {
      this.check =
        this.check == require("../assets/img/checked.png")
          ? require("../assets/img/mark.png")
          : require("../assets/img/checked.png");
    },
    goLogin() {
      // let targetPath = this.$route.query.redirectTo;
      this.$router.replace("/login");
    }
  }
};
</script>
<style>
.yuyinC {
  margin: 10px 15px 10px 0;
  color: #999;
  font-size: 12px;
  line-height: 12px;
  text-align: right;
}
.yuyinC span {
  color: #5c6df9;
}
.register-bottom {
  width: 100%;
  /* padding-left:15px; */
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
}
.register-bottom span {
  width: 12.5px;
  height: 12.5px;
  float: left;
  margin-right: 5px;
  padding-left: 15px;
}
.register-bottom span img {
  width: 12.5px;
  height: 12.5px;
  /* background: url("../assets/img/checked.png") no-repeat; */
  background-size: 100%;
  margin-top: 2px;
  
}
.register-bottom p {
  color: #999;
}
.register-bottom p a {
  color: #5c6df9;
}
a {
  text-decoration: none;
}
.registBtn {
  margin: 20px 15px;
}
.btn_blue {
  width: 345.2px;
  display: block;
  height: 45px;
  background: #5c6df9;
  line-height: 46px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  margin: 25px 15px;
  border-radius: 5px;
}
.login {
  text-align: center;
  color: #999;
  font-size: 14px;
  line-height: 14px;
}
.login em {
  display: inline-table;
  margin: 0 auto;
}
</style>
