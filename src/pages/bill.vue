<template>
    <div>
        <div class="tradRecSelect">
            <div class="tradRecSelectCen">
                <p class="tradRecSelectCenText">筛选</p>
            </div>
        </div>
        <div class="nullMsg">
            <p class="nullIconImg"></p>
            <p class="nullText">您暂时还没有发生任何交易记录</p>
            <p class="nullText" style="margin-top: 10px;">不妨去挑选一款合适的产品吧</p>
            <p class="indexProOneBtn nullBtn">去看看</p>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.tradRecSelect {
  padding: 19px 15px;
}
.tradRecSelectCen {
  height: 14px;
  color: #666;
  font-size: 14px;
  line-height: 14px;
}
.tradRecSelectCen .tradRecSelectCenText {
  float: right;
}
.nullMsg {
    margin-top: 20%;
}
.nullMsg p{
    text-align: center;
}
.nullMsg .nullIconImg {
    background: url(../img/nullIconImg.png) no-repeat;
    width: 133px;
    height: 88px;
    background-size: 100% 100%;
    margin: 0 auto;
}
.nullMsg .nullText {
    margin-top: 30px;
    text-align: center;
    font-size: 14px;
    color: #333;
    line-height: 14px;
}
.nullMsg .nullText {
    margin-top: 30px;
    text-align: center;
    font-size: 14px;
    color: #333;
    line-height: 14px;
}
.nullMsg .nullBtn {
    width: 70%;
    margin-top: 10px;
}
.indexProOneBtn {
    background: url(../img/button.png) no-repeat center;
    background-size: 100% 100%;
    height: 75px;
    width: 304px;
    margin: 12px auto 0;
    text-align: center;
    color: #fff;
    line-height: 72px;
    font-size: 18px;
}
</style>
