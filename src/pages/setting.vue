<template>
    <div class="setting">
      <ul>
        <li @click="goto('userinf')">
            <span>个人信息</span>
            <span></span>
        </li>
         <li @click="goto('userinf')">
            <span>会员中心</span>
            <span></span>
        </li>
         <li @click="goto('userinf')">
            <span>账户安全</span>
            <span></span>
        </li>
         <li @click="goto('userinf')">
            <span>风险测评</span>
            <span></span>
        </li>
         <li @click="goto('userinf')">
            <span>银行卡</span>
            <span></span>
        </li>
         <li @click="goto('userinf')">
            <span>帮助中心</span>
            <span></span>
        </li>
         <li @click="goto('userinf')">
            <span>意见反馈</span>
            <span></span>
        </li>
    </ul>
    <ul style="margin-top:10px">
        <li>
            <span>关于华夏信团</span>
            <span></span>
        </li>
    </ul>
    <p class="closeReg">退出登录</p>
    </div>
</template>
<script>
export default {
    // data(){
    //     return{
    //         setting:[
    //             {
    //                 id:1,
    //                 name:'个人信息'
    //             },
    //               {
    //                 id:2,
    //                 name:'会员中心'
    //             },
    //               {
    //                 id:3,
    //                 name:'账户安全'
    //             },
    //               {
    //                 id:4,
    //                 name:'风险测评'
    //             },
    //               {
    //                 id:5,
    //                 name:'银行卡'
    //             },
    //               {
    //                 id:6,
    //                 name:'帮助中心'
    //             },
    //               {
    //                 id:7,
    //                 name:'意见反馈'
    //             },
    //         ]
    //     }
    // },
    methods:{
        goto(name){
           this.$router.push({
               name,
           })
        }
    }
    
}
</script>
<style scoped>
.setting{
    width: 100%;
    max-width: 750px;
    margin: 10px auto 0;
}
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
.closeReg{
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


</style>
