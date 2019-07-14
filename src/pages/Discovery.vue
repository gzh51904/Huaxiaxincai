<template>  
    <div id="discovery" class="clearfix">
        <router-view></router-view>
        <Header :keywork="key"></Header>
        <div class="indexMenus">
            <div v-for="item in indexMenus">
                <img :src="item.imgUrl" alt="">
                <p>{{item.text}}</p>
            </div>
        </div>
        <div class="discoveryMainContent">
            <div class="signIn">
                <div class="top">
                    <p>今日未签到</p>
                    <p>距离额外奖励还差3天</p>
                    <p class="icon"></p>
                </div>
                <div class="bottom">
                    <p class="line"></p>
                    <li class="arrow1">                
                        <div></div>
                        <span>第一天</span> 
                    </li>
                    <li class="arrow2">
                        
                        <div></div>
                        <span>第二天</span>
                    </li>
                    <li class="arrow3">
                        
                        <div></div>
                        <span>第三天</span>
                    </li>
                    <li class="arrow4">
                        
                        <div></div>
                        <span>第四天</span>
                    </li>
                    <li class="arrow5">
                        
                        <div></div>
                        <span>第五天</span>
                    </li>
                </div>
            </div>
            <div class="hotProduct">
                <div class="title"><p>热门商品</p><i><img src="https://wap.huaxiaxincai.com/img/icon/arrow.png" alt=""></i></div>             
                <ul class="hotConpon">
                    <li v-for="item in hotProduct">
                        <img :src="item.mobileMallUrl" alt="">
                        <p>{{item.proName}}</p>
                        <p>{{item.requirePoint}}</p>
                    </li>
                </ul>
              
            </div>
            <div class="hotActivity">
                <div class="title"><p>热门活动</p><i><img src="https://wap.huaxiaxincai.com/img/icon/arrow.png" alt=""></i></div>             
                <div class="hotConpon">
                   <mt-swipe :auto="4000">
                        <mt-swipe-item v-for="item in hotActivity"><img :src="item.mobileListUrlText" alt=""></mt-swipe-item>
             
                    </mt-swipe>         
                </div>
              
            </div>
              <div class="hotNews">
                <div class="title" @click="toNewsList"><p>精彩阅读</p><i><img src="https://wap.huaxiaxincai.com/img/icon/arrow.png" alt=""></i></div>             
                <ul class="newsList">
                    <li class="news" v-for="item in hotNews">
                        <p>{{item.title}}</p> <img :src="item.realMbContentUrl" alt="">
                    </li>  
                </ul>
              
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Vue from 'vue';
import Header from "../components/Header.vue";
import axios from "axios"
import { Swipe, SwipeItem } from 'mint-ui';
// import 'mint-ui/lib/style.css'
import "mint-ui/lib/style.css"
import Footer from "../components/Footer.vue"
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import Menu1 from "../assets/img/findIndexMenu1.png";
import Menu2 from "../assets/img/findIndexMenu2.png";
import Menu3 from "../assets/img/findIndexMenu3.png";
export default {
    name:"Discovery",
    data(){
        return {
            indexMenus:[
                {
                    imgUrl:Menu1,
                    text:'积分商城',
                    key:"creditShop"
                }, {
                    imgUrl:Menu2,
                    text:'积分商城',
                    key:"creditShop"
                },{
                    imgUrl:Menu3,
                    text:'积分商城',
                    key:"creditShop"
                }
            ],
            hotProduct:'',
            hotActivity:'',
            hotNews:'',
            key:"Discovery"
        }

          
    },
    components:{
        Header,
        Footer
    },
    methods:{
        toNewsList(){
            this.$router.push({name:'newsList'})
        }
    }
    ,
    async created(){
        let data=await axios.post('https://wap.huaxiaxincai.com/caifu-web-open-mall/mallproductconfig/selectIsHotMallProductList?page=1&rows=3')
        // console.log(data.data.data)
        this.hotProduct=data.data.data;

        let data1 = await axios.post('https://wap.huaxiaxincai.com/caifu-web-open-platform/activity/findActivityRecordList?page=1&rows=3')
        // console.log(data1.data.data)
        this.hotActivity=data1.data.data;

        let data2 = await axios.post('https://wap.huaxiaxincai.com/caifu-web-open-platform/content/selectNewsList?page=1&rows=3&type=4')
    // console.log(data2.data.data)
        this.hotNews=data2.data.data;
    }
    
   
   
}
</script>
<style lang="scss" scoped>

#discovery{
    background-color: #F7F7F7;
    overflow: hidden;
      &::after {
            content: '';
            display: block;
            clear: both;
        }
    .indexMenus{
        display:flex;
        position:fixed;
        width: 100%; 
        height: 3.55rem;
         background-color:#fff;
         top:1.33rem;
         margin-bottom: 0.3rem;
         z-index: 100;
        div{
            flex:1;
            padding:0.67rem 0.96rem 0;
            img{
                width: 1.62rem;
            }
            p{
                font-size: 0.4rem;
                font-weight: bolder;
                color:#2C2C2C;
                padding-top:0.5rem;
            }
        }
    }
    .discoveryMainContent{
        margin-top:5.19rem;
        .signIn{
            padding:0.45rem 0.43rem 0 ;
            background-color: #fff;
            margin-bottom:0.3rem;
            .top{
                height: 1.95rem;
                background: url('../assets/img/findSignBg.png') no-repeat;
                background-size: 100% 100%;
                position: relative;
                p:first-child{
                    text-align: center;
                    color:#fff;
                    font-size: 0.5rem;
                    padding:0.46rem 0 0.25rem 0;
                    font-weight:bolder;
                }
                p:nth-child(2){
                    text-align: center;
                    color:#fff;
                    font-size: 0.35rem;
                    opacity: 0.8;
                     font-weight:bolder;
                }
                p:last-child{
                    position: absolute;
                    width: 1.21rem;
                    height:1.21rem ;
                    background: url('../assets/img/findSign.png') no-repeat;                
                    background-size: 100% 100%;
                    top:0.37rem;
                    right: 0.33rem;
                }
            }
            .bottom{
                position: relative;
                display:flex;
                height: 2.35rem;
                position: relative;
                margin: 0 0.63rem;
                .line{
                    
                    text-align: center;
                     border:0.02rem solid #EDEDED;
                     text-align: center;
                     margin-top:0.89rem;
                    height: 0;
                     width: 100%;
                }
                li{
                    flex:1;   
                    padding-top: 0.56rem;
                   position: absolute;
                    div{                       
                        margin:0 auto;
                        padding:0;
                        vertical-align: middle;              
                        width: 0.64rem;
                        height: 0.64rem;
                        background: url('../assets/img/findSignArrow.png') no-repeat;
                         background-color: #fff;
                        background-size: contain;
                        z-index: 2;
                        
                    }  
                    span{
                        display: inline-block;
                        padding-top: 0.36rem;
                        color:#9D9D9D;
                        font-size: 0.3rem;
                        font-weight: bolder;
                    }           
                }
                 .arrow1{
                     div{
                         margin:0;
                     }
                }
                .arrow2{
                     left:2rem;
                }
                 .arrow3{
                     left:4rem;
                }
                .arrow4{
                     left:6rem;
                }
                .arrow5{
                     right:0;
                    
                     div{
                         float: right;
                     }
                     span{
                         clear: both;
                         float: right;
                     
                        
                     }
                }
            }
        }
        .hotProduct{
            margin-bottom: 0.3rem;
            background-color: #fff;
            .title{
                height: 0.64rem;
                padding-top: 0.76rem;
                padding-left: 0.45rem;   
                position: relative;            
                p{
                    font-size: 0.5rem;
                    color:#000;
                    font-weight: bolder;
                }
                i{
                    position:absolute;
                    top:0.76rem;
                    right:0.5rem;               
                    img{                     
                    height: 0.5rem;
                    }
                }
            }
            .hotConpon{
                display: flex;
                padding-top:0.6rem;
                li{
                    flex:1;
                    text-align: center;
                    img{
                        width: 2.62rem;
                        
                    }
                    p:first-of-type{
                        font-size: 0.34rem;
                        padding-top:0.2rem;
                        padding-bottom: 0.2rem;
                        font-weight: bold;
                        color:#000;
                    }
                    p:last-of-type{
                        font-size: 0.28rem;
                        padding-bottom: 0.5rem;
                        font-weight: bold;
                        color:#9D9D9D;
                    }
                }
            }
        }
        .hotActivity{
            margin-bottom: 0.3rem;
            background-color: #fff;
            .title{
                height: 0.64rem;
                padding: 0.76rem 0.45rem 0.4rem;            
                position: relative;            
                p{
                    font-size: 0.5rem;
                    color:#000;
                    font-weight: bolder;
                }
                i{
                    position:absolute;
                    top:0.76rem;
                    right:0.5rem;               
                    img{                     
                    height: 0.5rem;
                    }
                }
            }
            .hotConpon{
               height: 4rem;
               text-align: center;
               img{
                   height: 3rem;
               }
               
                    // .is-active{
                    //     background:red;
                    // }
                    .mint-swipe-indicator{
                        background-color:red;
                    }                            
            }
        }
        .hotNews{
            margin-bottom: 1.3rem;
            background-color: #fff;
            .title{
                height: 0.64rem;
                padding: 0.76rem 0.45rem 0.4rem;            
                position: relative;                
                p{
                    font-size: 0.5rem;
                    color:#000;
                    font-weight: bolder;
                }
                i{
                    position:absolute;
                    top:0.76rem;
                    right:0.5rem;               
                    img{                     
                    height: 0.5rem;
                    }
                }
            }
            .newsList{
               padding: 0 0.45rem;
               .news{
                    border-top:0.02rem solid #DCDCDC;
                    position: relative;
                   
                    p{
                         height: 2.1rem;
                         width: 8rem;
                        font-size: 0.42rem;
                        color:#000;
                        font-weight: bolder;
                        display: table-cell;
                        vertical-align: middle;
                    }
                    img{
                        position: absolute;
                        right:0;
                        top:0.30rem;
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                }
              
            }
        }
    }
}
</style>

