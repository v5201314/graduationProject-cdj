<template>
  <el-header class="cdjHeader">
    <h1 class="systemName">CDJ系统-{{ leixing===1?'管理员':'商家' }}</h1>
    <div class="demo-type userBar">
        <p class="admin" >{{$store.state.userInfo.userName||'请登录' }}</p>
        <el-dropdown>
          <el-avatar icon="el-icon-user-solid"></el-avatar>
          <el-dropdown-menu slot="dropdown">
           <el-button @click="logOff">退出登录</el-button>
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
    
  },
  methods:{
    logOff(){
      this.$store.commit('changeUserInfo',{})
      this.$router.push('login')
    }
  }
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