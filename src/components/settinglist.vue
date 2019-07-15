<template>
    <ul>
        <li v-for="item in settinglist" :key="item.id" @click="goto('userinf')">
            <span>{{item.name}}</span>
            <span></span>
        </li>
        
    </ul>
</template>
<script>

export default {
  props: ['settinglist'],
//   data(){
//       return{
//           dat:this.setting
//       }
//   },
  methods: {
    goto(name) {
      this.$router.push({
          name,
      })
    }
  }
};
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

</style>
