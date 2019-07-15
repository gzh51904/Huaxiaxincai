<template>
    <div class="container">        
        <h2 class="title">热门新闻</h2>
        <ul
            class="newsList"    
            infinite-scroll-distance="5"
            infinite-scroll-immediate-check="flase"
            >
            <li v-for="item in list" @click='goto(item.id)' :key="item.id">
                <h3>{{item.title}}</h3>
                <span>{{item.updateTimeStr}}</span>
                <img :src="item.realMbContentUrl" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui';
import { Header } from 'mint-ui';
import axios from 'axios';
import Vue from 'vue'
Vue.component(Header.name, Header);
Vue.use(InfiniteScroll);
export default {
    name:"newsList",
    data(){
        return{
            list:""
        }
    },
    methods:{
        goto(id){
            this.$router.push({name:"News",params:{id}})
        }
    },
    async created(){
        console.log(123)
            let data = await axios.post('https://wap.huaxiaxincai.com/caifu-web-open-platform/content/selectNewsList?page=1&rows=10&type=4')
            console.log(data.data.data)
            this.list = data.data.data
    }


}
</script>
<style lang="scss" scoped>
.container{
    background-color: #F7F7F7;
}
    .title{
         background-color: #fff;
         margin-bottom:0.3rem;
         font-size: 0.46rem;
         line-height: 1.2rem;
         text-align: center;
    }
    .newsList{
        
        li{
            background-color: #fff;
            // height: 5.42rem;
            padding: 0.52rem 0.44rem 0.44rem;
            margin-bottom:0.3rem;
            h3{
                font-size: 0.44rem;
                color: #000;
                font-weight: bold;
            }
            span{
                line-height: 1.10rem;
                font-size: 0.34rem;
                font-weight: bold;
                color:#BDBDBD;
                
            }
            img{
                width: 100%;
            }
        }
    }
</style>
