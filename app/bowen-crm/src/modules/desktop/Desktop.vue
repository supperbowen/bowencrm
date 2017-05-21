<template>
  <div>
    <div class="header">
      <div class="fl">{{msg}}</div>
      <a class="fr">退出</a>
    </div>
    <div class="main">
      <div class="main-nav fl">
        <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
          <el-menu-item index="1" v-for="nav in navs" :key="nav.route">
            <router-link :to="nav.route">
              <i class="el-icon-message"></i>
              {{nav.title}}
            </router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="main-content fr">
        <router-view></router-view>
      </div>
    </div>
    <footer class="footer">
      by 梁灿伦 2017-5-21
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'desktop',
    data () {
      return {
        msg: 'Bowen Crm',
        navs: [
          {route: '/hello', title: '欢迎'},
          {route: '/employee', title: '员工信息'},
          {route: '/customer', title: '客户信息'},
          {route: '/activies', title: '客户活动'},
          {route: '/quote', title: '意向订单'},
          {route: '/about', title: '关于'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/style/mixin";

  .header {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    background-color: $vi-color;
    line-height: 50px;
    vertical-align: middle;
    padding: 0 20px;
  }

  .main {
    box-sizing: border-box;
    min-height: 200px;
    height: 80%;
    height: -moz-calc(100% - 75px);
    height: -webkit-calc(100% - 75px);
    height: calc(100% - 75px);
    width: 100%;
    .main-nav {

      width: 250px;
      border-right: 2px solid $vi-color;
      text-align: left;

      font-size: 15px;
      li {
        border-bottom: solid 1px #fefefe;
        padding: 15px 0 3px 0;
      }
    }
    .main-content {
      width: -moz-calc(100% - 250px);
      width: -webkit-calc(100% - 250px);
      width: calc(100% - 250px);
      border-right: 3px solid $vi-color;
      height: 100%;
      text-align: left;
      padding: 20px;
    }
  }

  .footer {
    height: 25px;
    width: 100%;
    line-height: 25px;
    vertical-align: middle;
    background-color: $vi-color;

    font-size: 12px;
    text-align: left;
    padding-left: 15px;
    font-weight: bolder;
  }

</style>

