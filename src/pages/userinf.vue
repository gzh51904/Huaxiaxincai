<template>
    <div>
        <ul>
            <li style="line-height:75px">
                <span>头像</span>
                <span></span>
                <div class="touxiang">
                    <img src="../img/headPower.png" alt="">
                </div>
            </li>
            <li>
                <span>真实姓名</span>
                <span></span>
                <span>尚未认证</span>
            </li>
            <li>
                <span>户籍地址</span>
                <span></span>
                <span>请填写户籍地址</span>
            </li>
            <li>
                <span>教育水平</span>
                <span></span>
                <span>请选择</span>
            </li>
            <li>
                <span>婚姻状况</span>
                <span></span>
                <span>请选择婚姻状况</span>
            </li>
            <li>
                <span>职业信息</span>
                <span></span>
                <span>请填写职业信息</span>
            </li>
            <li>
                <span>居住地址</span>
                <span></span>
                <span>请填写居住地址</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
ul{
    width: 100%;
    box-sizing: border-box;
    padding-left: 15px;
}
ul li{
    width: 100%;
    padding-right: 15px;
    border-bottom: 1px solid #ececec;
    font-size: 16px;
    line-height: 50px;
} 
ul li span:nth-child(1){
    color: #333;
}
 ul li span:nth-child(2){
    float: right;
    margin-right: 10px;
    width: 8px;
    height: 15px;
    background: url(../img/arrow.png) no-repeat;
    background-size: 100%;
    margin-top: 18px;
}
ul li:nth-child(1) span:nth-child(2){
    margin-top: 28px;
}
.touxiang{
    width: 50px;
    height: 50px;
    float: right;
    margin-right: 15px;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    top: 13px;
}
.touxiang img{
    width: 50px;
    height: 50px;
    display: block;
}
ul li span:nth-child(3){
    font-size: 14px;
    color: #aaa;
    float: right;
    margin-right: 15px;
}
</style>
