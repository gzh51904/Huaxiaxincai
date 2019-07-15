<template>
  <div>
    <div class="login-wrap">
      <div class="login-main">
        <div class="title">
          <img src="../assets/img/title.png" alt />
        </div>
        <div class="inputBox" :model="ruleForm" ref="ruleForm">
          <div class="login-moblie">
            <input
              v-model="ruleForm.phone"
              type="tel"
              placeholder="请输入手机号码"
              maxlength="11"
              class="ng-pristine ng-untouched ng-valid ng-valid-maxlength"
            />
          </div>
          <div class="login-password">
            <input
              v-model="ruleForm.password"
              :type="pwdType"
              placeholder="请输入密码"
              maxlength="36"
              class="ng-pristine ng-untouched ng-valid ng-valid-maxlength"
            />
            <span class="loginulisopen">
              <img :src="openeye" @click="changeType()" />
            </span>
          </div>
        </div>
        <p class="btn_blue logoBtn" @click="login()" id="login" :class="{right_phone:rightPhone}">登录</p>
      </div>
    </div>
    <div class="loginBot" style="margin-top: 177px;">
      <div class="loginReg">
        <p ui-sref="app.forgetPwdF" href="#/user/forgetPwdF">忘记密码</p>
        <p class="line">|</p>
        <p @click="goReg()">立即注册</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Footer from "../components/Footer.vue"
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      pwdType: "password",
      openeye: require("../assets/img/eyeClose.png"),
      ruleForm: {
        phone: "",
        password: ""
      }
    };
  },
  compontents:{
    Footer
  },
  computed: {
    rightPhone() {
      //利用正则对手机号匹配
      return /^1[3456789]\d{9}$/.test(this.ruleForm.phone);
    }
  },
  methods: {
    changeType() {
      this.pwdType = this.pwdType === "password" ? "text" : "password";
      this.openeye =
        this.openeye == require("../assets/img/eyeClose.png")
          ? require("../assets/img/eyeOpen.png")
          : require("../assets/img/eyeClose.png");
    },
    login() {
      if (!this.rightPhone) {
        Toast("请输入正确的手机号码");
      } else {
        let {phone,password} = this.ruleForm;
        // let password;
        this.$axios
          .get("/login", {
            params: {
              phone,
              password
            }
          })
          .then(res => {
            let { data, header } = res;
           
            if(data.code == 250){
                Toast("账号不存在或密码错误！");
            }else if(data.code == 1000){
                // 保存登录信息
                    localStorage.setItem('Authorization',data.data);

                    // 获取目标路径
                    let targetPath = this.$route.query.redirectTo;
                    
                    this.$router.replace(targetPath?targetPath:'/home')
            }
          })
          .catch(error => {
           
          });
      }
    },
    goReg(){
        // let targetPath = this.$route.query.redirectTo;
        this.$router.replace('/reg')
    }
  }
};
</script>
<style>
.login-wrap {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}
.login-wrap .login-main {
  width: 100%;
  background-size: 100%;
  padding-top: 90px;
}
.login-wrap .login-main .title {
  width: 90px;
  margin: 0 auto;
}
.login-wrap .login-main .title img {
  width: 100%;
  margin-bottom: 43px;
}
.login-wrap .login-main .inputBox {
  width: 305.2px;
  margin: 0 auto;
}
.login-wrap .login-main .inputBox .login-moblie,
.login-wrap .login-main .inputBox .login-password {
  width: 100%;
  height: 60px;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.login-wrap .login-main .inputBox input {
  width: 100%;
  height: 59px;
  display: block;
  border: 0;
  color: #000;
  font-size: 14px;
  /* padding: 22px 0; */
}
.login-wrap .login-main .inputBox .login-password .loginulisopen {
  position: absolute;
  height: 100%;
  font-size: 12px;
  color: #fbb02b;
  top: 50%;
  right: 0;
  margin-top: -10px;
}
.login-wrap .login-main .inputBox .login-password .loginulisopen img {
  width: 20px;
}
.logoBtn {
  margin: 30px 0 0;
}
.btn_blue {
  width: 305.2px;
  display: block;
  height: 45px;
  background: #5c6df9;
  line-height: 46px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  margin: 25px 35px;
  border-radius: 5px;
}
.loginBot {
  text-align: center;
  height: 16px;
  width: 100%;
  margin-top: 30%;
}
.loginReg {
  display: inline-table;
}
.loginReg p {
  float: left;
  font-size: 12px;
  line-height: 12px;
  color: #999;
}
.loginReg p.line {
  padding: 0 10px;
}
.loginReg p {
  float: left;
  font-size: 12px;
  line-height: 12px;
  color: #999;
}
</style>
