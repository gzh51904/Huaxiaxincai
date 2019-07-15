<template>
    <div id="content" v-html="innerH.pcContent">
       
    </div>
</template>
<script>
import axios from "axios";

export default {
    name:"Notice",
    data(){
        return{
            innerH:""
        }
    },
    async created(){
        
        let data = await axios.post("https://wap.huaxiaxincai.com/caifu-web-open-platform/content/getNews?newsId=696")
        // console.log(data.data.data.pcContent)
        this.innerH =data.data.data
        
    }
 
}
</script>
<style lang="scss" scoped>

</style>
