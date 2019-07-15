<template>
    <div class="myBank-wrap">
        <div class="bank-ensure">
            <div class="add-bank-color">
                <span></span>
                <span>添加银行卡</span>
            </div>
        </div>
        <div class="tips_content">
				<p>温馨提示：</p>
				<p><span class="tips_span"></span>为减少账户风险，每个用户仅能绑定1张提现银行卡，此银行卡将作为唯一的提现银行卡；</p>
				<p><span class="tips_span"></span>用户充值时可在存管银行页面添加充值银行卡；</p>
				<p><span class="tips_span"></span>有提现处理中交易时不允许删除提现银行卡；</p>
				<p><span class="tips_span"></span>如有疑问，请联系客服：4000-466-600（工作日：9:00-18:00）</p>
			</div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>

.myBank-wrap .bank-ensure {
    font-size: 14px;
    line-height: 75px;
    color: #aaa;
    text-align: center;
    line-height: 150px;
    padding: 0 15px;
}
.myBank-wrap .add-bank-color {
    border-radius: 5px;
    padding: 35px 0;
    height: 150px;
}
.myBank-wrap .bank-ensure span:nth-child(1){
    width: 27px;
    height: 27px;
    background: url(../img/bank-ensure.png) no-repeat;
    background-size: 100%;
}
.myBank-wrap .bank-ensure span {
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
    margin-left: 5px;
}
.tips_content {
    margin: 30px 15px;
    line-height: 25px;
    color: #666;
    font-size: 14px;
}
.tips_span {
    width: 3px;
    height: 3px;
    background: #666;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    margin-right: 3px;
}
</style>
