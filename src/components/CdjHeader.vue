<template>
  <el-header class="cdjHeader">
    <h1 class="systemName">CDJ系统</h1>
    <div class="demo-type userBar">
        <p class="admin">管理员</p>
      <el-dropdown>
        
        <el-avatar icon="el-icon-user-solid"></el-avatar>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-minus">退出登录</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus"
            >用户设置</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "CdjHeader",
};
</script>

<style lang="less" scoped>
.cdjHeader {
  width: 100%;
  height: 70px !important;
  background-color: #3138f766;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  .systemName {
    display: inline-block;
    margin: 0;
    line-height: 70px;
    
  }
  .userBar {
    display: flex;
    align-items: center;
    .admin{
        margin-right: 6px;
    }
  }
}
</style>