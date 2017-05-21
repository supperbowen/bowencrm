<template>
  <div>
    <h3>系统功能列表！</h3>
    <ul>
      <li v-for="item in items"> {{item}}</li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        items: [
          '员工信息',
          '客户信息',
          '客户活动信息',
          '客户活动提醒',
          '意向订单'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/style/mixin";

  li{
    font-size: 15px;
    padding: 15px;
    font-weight: bold;
    color: darkblue;
  }

</style>
