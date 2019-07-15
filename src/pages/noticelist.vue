<template>
  <div class="hxxc">
    <div class="notifylist" v-for="list in marqueeList" :key="list.id">
      <p class="notifytitle">{{list.name}}</p>
      <p class="notifytime">{{list.time}}</p>
      <span class="notifyicon"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      marqueeList: [
        {
          name: "【清凉节加息1%】活动公告",
          id: 1,
          time: "2019年07月09日 18:00"
        },
        {
          name: "【建党节加息0.6%】活动公告",
          id: 2,
          time: "2019年06月30日 22:00"
        },
        {
          name: "关于平台系统升级维护公告",
          id: 3,
          time: "2019年06月27日 16:00"
        },
        {
          name: "关于客服升级维护公告",
          id: 4,
          time: "2019年06月20日 17:30"
        },
        {
          name: "【清凉节加息1%】活动公告",
          id: 5,
          time: "2019年07月09日 18:00"
        },
        {
          name: "【建党节加息0.6%】活动公告",
          id: 6,
          time: "2019年06月30日 22:00"
        },
        {
          name: "关于平台系统升级维护公告",
          id: 7,
          time: "2019年06月27日 16:00"
        },
        {
          name: "关于客服升级维护公告",
          id: 8,
          time: "2019年06月20日 17:30"
        },
        {
          name: "【清凉节加息1%】活动公告",
          id: 9,
          time: "2019年07月09日 18:00"
        },
        {
          name: "【建党节加息0.6%】活动公告",
          id: 10,
          time: "2019年06月30日 22:00"
        },
        {
          name: "关于平台系统升级维护公告",
          id: 11,
          time: "2019年06月27日 16:00"
        },
        {
          name: "关于客服升级维护公告",
          id: 12,
          time: "2019年06月20日 17:30"
        },
        {
          name: "【清凉节加息1%】活动公告",
          id: 13,
          time: "2019年07月09日 18:00"
        },
        {
          name: "【建党节加息0.6%】活动公告",
          id: 14,
          time: "2019年06月30日 22:00"
        },
        {
          name: "关于平台系统升级维护公告",
          id: 15,
          time: "2019年06月27日 16:00"
        },
        {
          name: "关于客服升级维护公告",
          id: 16,
          time: "2019年06月20日 17:30"
        }
      ]
    };
  }
};
</script>

<style>
.hxxc {
  background: #fff;
  padding: 0 15px;
}
.notifylist {
  border-bottom: 1px solid #eee;
  padding: 13px 0;
  position: relative;
  padding-right: 15px;
}
.notifytitle {
  font-size: 16px;
  color: #000;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.notifytime {
  color: #999;
  line-height: 12px;
  margin-top: 10px;
  font-size: 12px;
}
.notifyicon {
  width: 8px;
  height: 15px;
  background: url(../img/arrow.png) no-repeat;
  background-size: 100%;
  margin-top: -8px;
  position: absolute;
  right: 0;
  top: 50%;
}
</style>
