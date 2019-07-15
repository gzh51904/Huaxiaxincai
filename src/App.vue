<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import {Calendar,ButtonGroup,Button} from 'element-ui'
Vue.use(Calendar);
Vue.use(ButtonGroup)
Vue.use(Button)

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
ul,li{
  list-style: none;
}
#app{
  width: 100%;

}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
