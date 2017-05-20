<template>
  <div>
    <el-row >
      Bowen's Crm
    </el-row>
    <el-row>
      <el-col :xs="2" :md="2" :sm="2" :lg="2">

      </el-col>
      <el-col  :xs="10" :md="10" :sm="10" :lg="10">
        <el-card class="box-card">
          <div class="text item">
            梁灿伦<br>15914321678
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      footer
    </el-row>
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

</style>

