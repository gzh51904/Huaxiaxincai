<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Menu,
  MenuItem,
  Dropdown,
  MenuItemGroup,
  Submenu,
  Container,
  Header,
  Aside,
  Main,
  DropdownItem,
  DropdownMenu,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Link,
  Button,
  Form,
  FormItem,
  Pagination,
  Image
} from "element-ui";

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Dropdown);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Link);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Pagination);
Vue.use(Image);

export default {
  name: "app",
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
.el-breadcrumb {
  font-size: 14px;
  line-height: 60px;
}
.el-breadcrumb__separator {
  margin: 0 9px;
  font-weight: 700;
  color: #909360;
}
.el-menu {
  border-right: solid 1px #e6e6e6;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: #909399;
}
.el-submenu__title {
  font-size: 14px;
  color: #000000;
}
.el-submenu__title i {
  color: #000000;
}
.el-menu-item {
  font-size: 14px;
  color: #000000;
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-pagination {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  margin-top: 10px;
  font-weight: 700;
  float: right;
}
.el-menu-item.is-active {
  color: #000000;
}
.el-image__inner {
  /* width: 850px;
  height: 510px; */
  width: 100%;
  height: 100%;
}
</style>
