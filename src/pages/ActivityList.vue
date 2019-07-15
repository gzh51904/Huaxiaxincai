<template>
       <div class="container">        
        <h2 class="title">热门新闻</h2>
        <ul
            class="newsList"    
            infinite-scroll-distance="5"
            infinite-scroll-immediate-check="flase"
            >
            <!-- <li @click='goto(item.id)' > -->
           <li class="findactcen_list mar_pad"  v-for="item in list" :key="item.id">
                    <!-- ngIf: data.mobileShowMethod==1 --><a ng-if="data.mobileShowMethod==1" :href="item.mobileDetailUrl" class="">
                        <p class="findactcen_listtit ng-binding">{{item.activityName}}</p>
                        <!-- ngIf: data.status=='是' --><p class="findactcen_listtype" v-if="item.status=='是'">HOT</p>
                        <!-- ngIf: data.status=='否' --><p class="findactcen_listtype" v-if="item.status=='否'">已结束</p>

                        <p class="findactcen_listdate ng-binding">{{item.beginTimeText}}到{{item.endTimeText}}</p>
                        <img :src="item.mobileListUrlText" class="findactcen_listimg" >
                        <p class="findactcen_hint ng-binding">{{item.describes}} </p>
                        <p class="find_arrow">
                            <span style="display: block">立即查看
                                <span class="arrow_icon"></span>
                            </span>
                        </p>
                    </a><!-- end ngIf: data.mobileShowMethod==1 -->
                    <!-- ngIf: data.mobileShowMethod==2 -->
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
    data(){
        return{
            list:"",
        }
    },
    async created(){
        console.log(123)
            let {data} = await axios.post('https://wap.huaxiaxincai.com/caifu-web-open-platform/activity/findActivityRecordList?page=1&rows=10')
            // console.log(data.data.data)
            this.list = data.data
    }

}
</script>
<style lang="scss" scoped>
.findactcen_list {
    position: relative;
    background: #fff;
}
.mar_pad {
    margin-top: 10px;
    padding: 0 15px;}

.findactcen_listtit {
    color: #5c6df9;
    font-size: 14px;
    line-height: 14px;
    padding-top: 15px;
}
.findactcen_listtype {
    position: absolute;
    top: 15px;
    right: 15px;
    height: 20px;
    border: 1px solid #aaa;
    color: #aaa;
    font-size: 12px;
    line-height: 18px;
    padding: 0 13px;
}
.findactcen_listdate {
    margin: 11px 0 14px;
    font-size: 12px;
    line-height: 12px;
}
.findactcen_listimg {
    display: block;
    width: 100%;
}
.findactcen_hint {
    color: #aaa;
    font-size: 14px;
    line-height: 42px;
}
.find_arrow {
    position: relative;
    height: 42px;
    border-top: 1px solid #f4f4f4;
    font-size: 14px;
    line-height: 42px;}
    .findactcen_listtype {
    position: absolute;
    top: 15px;
    right: 15px;
    height: 20px;
    border: 1px solid #aaa;
    color: #aaa;
    font-size: 12px;
    line-height: 18px;
    padding: 0 13px;
}
</style>

