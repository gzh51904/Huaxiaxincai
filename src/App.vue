<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Vue from "vue";
import Home from "./pages/Home.vue";
export default {
  name: "app",
  components: {
    Home
  },

};
</script>

<style>
html,
body,
ul,
li,
ol,
dl,
dd,
dt,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
img,
input {
  margin: 0;
  padding: 0;
}
ul,
li,
ol {
  list-style: none;
}
</style>
