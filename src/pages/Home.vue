<template>
  <div>
    <el-container style="height: 620px; border: 1px solid #eee">
      <el-aside width="250px" style="background-color: #909399">
        <el-menu :default-openeds="['1','2' ,'3']" active-text-color="#409EFF"  >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-management"></i>后台管理系统（华夏信财）
            </template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>项目管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" @click.native.prevent.stop="goto('Noob')">新手专享</el-menu-item>
              <el-menu-item index="2-2" @click.native.prevent.stop="goto('Huaxinbao')">华信宝系列</el-menu-item>
              <el-menu-item index="2-3" @click.native.prevent.stop="goto('Dingxinbao')">定信宝系列</el-menu-item>
              <el-menu-item index="2-4" @click.native.prevent.stop="goto('Previous')">往期项目</el-menu-item>
              <el-menu-item index="2-5" @click.native.prevent.stop="goto('Additem')">添加项目</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-user-solid"></i>用户管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click.native.prevent.stop="goto('User')">用户列表</el-menu-item>
              <el-menu-item index="3-2" @click.native.prevent.stop="goto('Adduser')">添加用户</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="#">活动管理</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-link href="#" @click.native.prevent.stop="logout()">退出</el-link>
          </el-breadcrumb>
        </el-header>
        <el-main>
          <router-view />
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="src" ></el-image>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563209474399&di=a5d8891e3bf92f6f5a72d2c646a38c8c&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F95292c370a8c5a87c43e2f4c17af9091656b151518aed-0ceLej_fw658'
    };
  },
  components: {},
  methods: {
    goto(name) {
      console.log(666);
      this.$router.push({ name, params: { a: 10, b: 20 } });
      // this.$router.replace({name:'Noob'});
    },
    logout(){
      this.$router.replace({name:'Login'});
    }
  }
};
</script>
