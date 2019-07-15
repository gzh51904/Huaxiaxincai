<template>
    <div id="header">
        <div class="content clearfix">
            <h1 >{{getTitle()}}</h1>
            <p class="iconfont icon-qiandao" v-if="keywork=='Home'" ></p>
            <p class="iconfont icon-lingdang" v-if="keywork=='Home'" @click="goto"></p>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
// import VueLoader from 'vue-loader'
export default {
    name:'Header',
    props:{
        keywork: {
            type:String,
            default:'Home'
        }
    },
    data(){
        return {
            show:[
                {
                    title:"华夏信财",
                    key:"Home"
                },{
                    title:"优选计划",
                    key:"Item"
                },{
                    title:"发现",
                    key:"Discovery"
                }
            ]
        }
    },
    methods:{
        getTitle(){
            var current =this.show.filter(item=>{              
                return item.key==this.keywork
            })[0];
            return current? current.title:this.keywork
        },
        goto(){
            this.$router.push({name:'Notice'})
        }
    }

}
</script>



<style lang="scss" scoped>

    #header{
        position: fixed ;
        height: 0.94rem;
        padding-top:0.36rem;
        background-color: #fff;
        width: 100%;
        box-shadow: 0 0.04rem 0.04rem #F7F9F8;
        z-index: 1000;
        .content{
            overflow: hidden;
            h1{
                float: left;
                font-size: 0.54rem;
                font-weight: bolder;
                padding-left: 0.54rem;
                color: #000;
                padding-top: 0.06rem;
            }
            p:first-of-type{
                font-size: 0.6rem;
                float:right;      
                padding:0 0.76rem 0 0.48rem;
                          
            }
            p:last-of-type{
                font-size: 0.6rem;
                float:right;                
            }

        }
    }
</style>



