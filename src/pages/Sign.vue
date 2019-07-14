<template>
    <div class="content">
        <div class="topImg">
           <h2 class="title">签到</h2>
            <div >
                <p>积分<em>0</em></p>
                <p>连续签到<em>1</em>天</p>
                <p>今夜加20积分，距离额外奖励还需<em>4</em>天</p>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'

export default {
    name:"Sign",
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
.content{
    background-color:#F7F7F7;
    
    .topImg{
        background:url('../assets/img/accountTopBack .png') no-repeat;
        background-size: 100% 100%;
        height: 7rem;
        .title{
         margin-bottom:1.2rem;
         font-size: 0.46rem;
         line-height: 1.2rem;
         text-align: center;
         color:#fff;
        }
        div{
            p:first-child{
            background: #fff;
            height: 0.94rem;
            font-size: 0.36rem;
            line-height: 0.94rem;
            padding: 0 0.6rem;
            margin: 0 auto 0.66rem;
            display: table;
            border-radius: 0.47rem;
            color: #ff8f10;
            }
            p:nth-child(2){
             text-align: center;
            font-size: 0.46rem;
            line-height: 0.8rem;
            color: #fff;
            }
            p:nth-child(3){
            text-align: center;
            font-size: 0.46rem;
            line-height: 0.8rem;
            color: #fff;
            }
        }
    }
}
</style>

