##### 项目名称：华夏信财

##### 演示：

​	1、官网：https://wap.huaxiaxincai.com/#/

​	2、上线网址：39.99.33.29:2019

​	3、GitHub仓库地址：git@github.com:gzh51904/Huaxiaxincai.git

##### 团队与分工：

​	1、团队：组长：江宇达，成员：张晓逗、周育盛、王玮瑄

​	2、负责模块说明：

​		① 王玮瑄
​			首页：

​				1最顶部-消息、签到
​      				2-轮播图
​       				3-基本连接（会员中心…）
​       				4-公告（自动切换公告内容，点击进入公告列表）
​       				5-热门推荐（ “立即加入”链接）
​       				6-华夏信财携手存管银行（链接）
​       				7-华信宝、定信宝（链接跳转至“项目”）
​       				8-信息披露（下面的小图可左右滑动，点击进入数据分析）
​       				9-底部 

​		② 周育盛 
​			"发现"页：

​				1-顶部 （积分商城…均可跳转）
​       				2-签到（点击进入签到页面，进度条）
​       				3-热门商品（点击上面部分进入积分商城，点击相应商品进入详情页）
​       				4-热门活动（点击上面部分进入活动列表，点击相应的图进入相应活动页面，轮播图）
​       				5-精彩阅读（点击进入热门文章列表，点击相应文章进入文章页面） 

​				6-合并项目

​		③ 张晓逗
​			"我的"页：

​				1-头像会员（点击进入账户设置）、消息列表（点击进入消息列表）
​       				2-资产（点击进入资产分析）、收益（点击问号出现提示）、余额、动态背景
​       				3-提现、充值（点击弹出提示）
​       				4-警告（点击进入账户开通）
​       				5-优惠券（点击进入服务提醒）
​       				6-我的订单…银行卡（点击进入相应页面）
​       				7-底部点击跳转至相应页面
​       				PS：登录提示页面 

​		④ 江宇达
​			"项目"页：
​       				1-刷新加载数据 

​      			 	2-点击进入项目详情

​				3-细节完善

​       				PS：写接口、爬数据、登录、注册页、后台管理系统....

​	3、项目目录说明：

│配置文件:
│
│  .eslintrc.js
│  .gitignore
│  babel.config.js
│  list.txt
│  package-lock.json
│  package.json
│  README.md
│  vue.config.js
│  
├─public
│      favicon.ico
│      index.html
│      
│接口文件：
│
├─server   （配置）
│  │  config.json
│  │  server.js
│  │  
│  ├─db
│  │      index.js
│  │      mongo.js
│  │      
│  ├─dump （数据库）
│  │  └─Huaxia
│  │          items.bson
│  │          items.metadata.json
│  │          users.bson
│  │          users.metadata.json
│  │          
│  ├─routers  （接口路由）
│  │      index.js
│  │      login.js
│  │      project.js
│  │      reg.js
│  │      upload.js
│  │      
│  └─utils
│          index.js
│          token.js
│   
│主要内容文件：
│       
└─src
    │  App.vue
    │  main.js
    │  
    ├─assets
    │  │  logo.png
    │  │  
    │  ├─css
    │  │  │  base.css	（基本样式）
    │  │  │  
    │  │  └─iconfont	  （字体图标）
    │  │          iconfont.css
    │  │          iconfont.eot
    │  │          iconfont.js
    │  │          iconfont.svg
    │  │          iconfont.ttf
    │  │          iconfont.woff
    │  │          iconfont.woff2
    │  │          
    │  └─img  （图片文件）
    │          
    ├─components  （组件）
    │      BotList.vue
    │      Footer.vue
    │      Header.vue
    │      publiclist.vue
    │      settinglist.vue
    │      
    ├─img
    │     
    │      
    ├─js 
    │      bus.js
    │      rem.js
    │      
    ├─pages	（项目页面）
    │      AboutHuaXia.vue
    │      account.vue
    │      ActivityList.vue
    │      bankCard.vue
    │      bill.vue
    │      coupon.vue
    │      date.vue
    │      Discovery.vue
    │      efficacy.vue
    │      holding.vue
    │      Home.vue
    │      index.vue
    │      Itemdetails.vue
    │      kitson.vue
    │      Login.vue
    │      mine.vue
    │      News.vue
    │      newsList.vue
    │      Notice.vue
    │      noticelist.vue
    │      order.vue
    │      Project.vue
    │      quit.vue
    │      Reg.vue
    │      setting.vue
    │      Sign.vue
    │      userinf.vue
    │      
    └─routers	（路由）
            index.js