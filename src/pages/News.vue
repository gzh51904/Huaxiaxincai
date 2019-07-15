<template>
    <div class="content">
        <div class="title"> <h3>{{newsData.title}}</h3>
                <span>{{newsData.updateTimeStr}}</span></div>
        <div class="newsContent" v-html="newsData.wapContent"></div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:"News",
    data(){
        return{
            newsData:{}
        }
    },
    async created(){
        let id = this.$route.params.id
        // console.log(this.$route.params)
        let {data} = await axios.post('https://wap.huaxiaxincai.com/caifu-web-open-platform/content/getNews?newsId='+id)
        // console.log(data.data.wapContent)
        this.newsData  = data.data

    }
}
</script>
<style lang="scss" scoped>

.title{
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
    }

</style>
