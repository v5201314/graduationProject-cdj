<template>
  <table id="tab1">
    <tr class="tableHeader">
      <th>序列</th>
      <th>用户姓名</th>
      <th>手机号码</th>
      <th>操作</th>
    </tr>
    <tr v-for="(data, index) in showData" :key="data.id">
      <td>{{ index }}</td>
      <td>{{ data.userName }}</td>
      <td>{{ data.phoneNumber }}</td>
      <td><el-button type="primary"  @click="dialogVisible = true" >详情</el-button></td>
    </tr>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </table>
</template>

<script>
export default {
  name: "UserInfo",
  props: ["showData"],
  data() {
      return {
        dialogVisible: false
      };
    },
  methods: {
    chakan(id) {
      console.log(id);
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  },
};
</script>

<style lang="less">
#tab1 {
  width: 100%;
  .tableHeader {
    background-color: #8bcfeb;
    th {
      border-radius: 5px;
    }
  }
  tr {
    text-align: center;
    td {
      padding: 3px;
      background-color: #ebeaea;
      border-radius: 5px;
    }
  }
}
</style>