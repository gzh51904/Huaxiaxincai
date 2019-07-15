<template>
    <div><div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
		<div class="register-wrap" style="padding-top:0px">
			<div class="openBankAccountTop">
			</div>
			<div class="register-top m_10">
				 
				<div class="register-moblie ">
					<input type="text" placeholder="请输入姓名" class="ng-pristine ng-untouched ng-valid">
				
				</div>
				<div class="register-moblie openBankEnter" style="border-top:none;">
						<p id="indentityId">身份证</p>
						<span class="openBankEnterIcon" ></span>
				</div> 
				<div class="register-code register-title">
				<input type="text" placeholder="请输入证件号码" class="ng-pristine ng-untouched ng-valid">
				</div>
			</div>
			<div class="register-top m_10">
	
				<div class="register-title openBankEnter">
					<input type="text" placeholder="请输入手机号码" class="ng-pristine ng-untouched ng-valid">
				</div>
				
			</div>
			<div class="register-wrap" style="padding-top:0px;">
				<div class="register-bottom" >
					<span>
					</span>
					
					<p>我已阅读并同意<a ng-click="goAgree()">《授权委托书》</a></p>
				</div>
			</div>
		<p class="btn_blue openBankAccountBtn btn_gray">立即开通</p>
			
			<p style="margin-top: 10px;text-align: center;color: #5c6df9;font-size: 12px;margin-bottom:20px;" ng-click="goEnter()">前往企业开户<span class="goAccount"></span></p>

		</div>
    </div></div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.register-wrap {
    /* width: 100%; */
    max-width: 750px;
    height: 100%;
    margin: 0 auto;
    padding-top: 10px;
}
.openBankAccountTop {
    background: url(../img/openBankTopBgs.png) no-repeat;
    height: 106px;
    background-size: 100% 100%;
    padding-top: 44px;
}
.register-wrap .register-top {
    /* width: 100%; */
    padding-left: 15px;
    background-color: #fff;
    margin-bottom: 10px;
}
.m_10 {
    margin-top: 10px;
}
.register-wrap .register-top .register-moblie {
    /* width: 100%; */
    height: 50px;
    border-bottom: 1px solid #f2f2f2;
}
.register-wrap .register-top .register-moblie input {
    font-size: 14px;
    color: #333;
}
.register-wrap .register-top input {
    width: 100%;
    outline: none;
    border: 0;
    background-color: #fff;
    font-size: 14px;
    display: block;
    padding: 17px 0;
}
.register-wrap .register-top .register-moblie {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #f2f2f2;
}
.openBankEnter {
    position: relative;
    border-top: 1px solid #f4f4f4;
    font-size: 14px;
    line-height: 50px;
}
.openBankEnter .openBankEnterIcon {
    margin-right: 15px;
    position: absolute;
    top: 50%;
    background: url(../img/arrow.png) no-repeat;
    width: 8px;
    height: 15px;
    margin-top: -5px;
    right: 0;
    background-size: contain;
}
.register-wrap .register-top .register-code {
    /* width: 100%; */
    height: 50px;
    position: relative;
}
.register-wrap .register-bottom {
    /* width: 100%; */
    padding: 0 15px;
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
}
.register-wrap .register-bottom span {
    width: 12.5px;
    height: 12.5px;
    background: url(../img/checked.png) no-repeat;
    background-size: 100%;
    margin-right: 5px;
    margin-top: 2px;
    float: left;
}
.register-wrap .register-bottom p {
    color: #999;
}
.register-wrap .register-bottom p a {
    color: #5c6df9;
}
.openBankAccountBtn {
    margin: 20px 15px 0;
}
.btn_gray {
    background: #d5d5d5;
}
.btn_blue {
    display: block;
    height: 45px;
    line-height: 46px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    margin: 25px 15px;
    border-radius: 5px;
}
.goAccount {
    background: url(../img/rightIcon.png) no-repeat;
    width: 8px;
    height: 15px;
    margin-top: -5px;
    background-size: contain;
    display: inline-block;
    margin-left: 7px;
    vertical-align: bottom;
}
</style>
