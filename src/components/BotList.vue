<template>
    <div class="headerBotList">
        <ul>
            <li v-for="item in botlist" :key="item.name">
                <p>
                    <img :src="item.imgurl" alt="">
                </p>
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            botlist:[{
                imgurl:require('../img/accountIndexBotMenu5.png'),
                name:'会员中心'
            },{
                imgurl:require('../img/accountIndexBotMenu2.png'),
                name:'风险测评'
            },{
                imgurl:require('../img/accountIndexBotMenu1.png'),
                name:'账户安全'
            },{
                imgurl:require('../img/accountIndexBotMenu4.png'),
                name:'帮助中心'
            }]
        }
    },

};
</script>
<style>
.headerBotList ul{
    
    height: 75px;
    padding: 17px 15px 10px;
    display: -webkit-box;
    width: 100%;
}
.headerBotList ul li{
    -webkit-box-flex: 1;
    font-size: 12px;
    line-height: 12px;
    color: #000;
    text-align: center;
}
.headerBotList ul li p img{
    width: 26px;
    height: 26px;
    margin: 0 auto 10px;
}
</style>
