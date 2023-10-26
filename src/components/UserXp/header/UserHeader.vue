<template>
    <el-header class="Header">
      <h1 class="systemName">CDJ系统-用户</h1>
      <div class="demo-type userBar">
        <div class="shoppingCart">
            <i class="el-icon-shopping-cart-2"></i>
            <p>购物车</p>
        </div>
       
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
      //1 为管理员 2 为商家
    props:['leixing'],
    data(){
      return{
      
      }
    }
  };
  </script>
  
  <style lang="less" scoped>
  .Header {
    width: 100%;
    height: 54px !important;
    background-color: #3138f766;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    .systemName {
      display: inline-block;
      margin: 0;
      line-height: 54px;
      
    }
    .userBar {
      display: flex;
      align-items: center;
      .admin{
          margin-right: 6px;
          clear: #d5cfcf;
      }
      .shoppingCart{
        display: flex;
       margin-right:5px;
       color: red;
       i{
        margin: 3px 2px 0 0;
       }
      }
    }
  }
  </style> 