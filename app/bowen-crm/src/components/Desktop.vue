<template>
  <div>
    <div class="header">
      <div class="fl">Bowen's crm</div>
      <a class="fr">退出</a>
    </div>
    <div class="main">
      <div class="main-nav fl"></div>
      <div class="main-content fr"></div>
    </div>
    <div class="footer">
      mini crm for test
    </div>
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

<style scoped>
  .header{
    box-sizing: border-box;
    width:100%;
    height:50px;
    background-color: #f7ba2a;
    line-height: 50px;
    vertical-align: middle;
    padding: 0 50px;
  }
  .main{
    min-height: 200px;
    height:80%;
    height:-moz-calc(100% - 100px);
    height:-webkit-calc(100% - 100px);
    height:calc(100% - 100px);
    width:100%;
  }
  .footer{
    height:50px;
    width:100%;
    background-color: #f7ba2a;
  }

</style>

