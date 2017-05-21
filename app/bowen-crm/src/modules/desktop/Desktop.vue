<template>
  <div>
    <div class="header">
      <div class="fl">{{msg}}</div>
      <a class="fr">退出</a>
    </div>
    <div class="main">
      <div class="main-nav fl">
        <ul>
          <li>
            <router-link to="/hello">Hello</router-link>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
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
        msg: 'Bowen\'s app'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/style/mixin";
  .header{
    box-sizing: border-box;
    width:100%;
    height:50px;
    background-color: $vi-color;
    line-height: 50px;
    vertical-align: middle;
    padding: 0 50px;
  }
  .main{
    box-sizing: border-box;
    min-height: 200px;
    height:80%;
    height:-moz-calc(100% - 75px);
    height:-webkit-calc(100% - 75px);
    height:calc(100% - 75px);
    width:100%;
    .main-nav{
      padding-top: 20px;
      width: 250px;
      border-right: 2px solid $vi-color;

      li:{
        list-style:none;
        text-align:left;
      }
    }
    .main-content{
      width:-moz-calc(100% - 250px);
      width:-webkit-calc(100% - 250px);
      width:calc(100% - 250px);
      border-right: 3px solid $vi-color;
      height: 100%;
      text-align: left;
      padding: 20px;
    }
  }
  .footer{
    height:25px;
    width:100%;
    line-height: 25px;
    vertical-align: middle;
    background-color: $vi-color;

    font-size: 12px;
    text-align: left;
    padding-left: 15px;
    font-weight: bolder;
  }

</style>

