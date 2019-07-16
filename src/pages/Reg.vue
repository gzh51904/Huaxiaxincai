<template>
  <div style="background: #f5f5f5;">
    <van-cell-group :model="ruleForm" ref="ruleForm">
      <van-field
        v-model="ruleForm.phone"
        type="tel"
        maxlength="11"
        placeholder="请输入手机号码"
        @blur="format(ruleForm.phone)"
      />
      <van-field v-model="ruleForm.password" type="password" placeholder="请输入8-36位字母与数字组合密码" />
      <van-field v-model="ruleForm.sms" center clearable placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">获取验证码</van-button>
      </van-field>
      <p class="yuyinC" ng-show="interval == 0">
        收不到验证码？尝试
        <span ng-click="sendVcode(1)">获取语音验证码</span>
      </p>
      <van-field v-model="ruleForm.value" placeholder="请输入邀请码（选填）" />
      <div class="register-bottom">
        <span>
          <img :src="check" @click="changeImg()" />
        </span>
        <p>
          我已阅读并同意
          <a ng-click="goAgreeReg()">《注册服务协议》</a>及
          <a ng-click="goAgreePolicyReg()">《隐私权政策》</a>
        </p>
      </div>
      <p class="btn_blue registBtn" @click="Reg('formName')" :class="{right_password:checkup}">注册</p>
      <p class="login">
        <em @click="goLogin()">已有账号?立即登录</em>
      </p>
    </van-cell-group>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      ruleForm: {
        phone: "",
        password: "",
        sms: "",
        value: "",
        rightphone:""
      },
      check: require("../assets/img/checked.png")
    };
  },
  computed: {
    checkup() {
      //利用正则对密码格式验证
      return /^[A-Za-z0-9]{8,30}$/.test(this.ruleForm.password);
    }
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
    },
    format(phone) {
      //失去焦点验证手机号
      // let validatePass = (rule, value, callback) => {
      //   callback();
      // };
      let reg = /^1[3456789]\d{9}$/;
      if (!reg.test(phone)) {
        Toast("请输入正确的手机号");
        this.ruleForm.phone = "";
      } else {
        let { phone } = this.ruleForm;
        this.$axios
          .get("http://localhost:2019/reg/check", {
            params: {
              phone
            }
          })
          .then(({ data }) => {
            if (data.code == 250) {
              console.log((this.ruleForm.rightphone));
              Toast("账号已注册，请前往登录")
              return  this.ruleForm.rightphone;
            } else {
              console.log(this.ruleForm.rightphone = true)
              return (this.ruleForm.regrightphone = true);
            }
          });
      }
    },
    Reg(formName) {
      if (!this.checkup) {
        Toast("请输入8-36位字母与数字组合密码");
      } else if (this.checkup && (this.ruleForm.rightphone=true)) {
        //有bug，无论前面验证的手机号是否已注册，都能进入到这一步（2019.7.13 11:06）

        // 验证通过，发请求到后端，保存用户名到数据库
            let {phone,password} = this.ruleForm;
            this.$axios.post('/reg',{
                phone,
                password
            }).then(({data})=>{
              console.log(data)
                if(data.code == 1000){
                    this.$router.replace({name:'Login'});
                }
            })
      }else {
          console.log("error submit!!");
          return false;
        }
    }
  }
};
</script>
<style scoped>
body {
    background: none !important;
}
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
/* .registBtn {
  margin: 20px 15px;
} */
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
