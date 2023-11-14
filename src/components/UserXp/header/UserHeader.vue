<template>
  <div>
    <el-header class="Header">
      <h1 class="systemName">CDJ系统-用户</h1>
      <div class="demo-type userBar">
        <div class="shoppingCart" @click="dialogVisible = true">
          <i class="el-icon-shopping-cart-2"></i>
          <p>购物车</p>
        </div>
        <el-dialog
          title="购物车"
          :before-close="handleClose"
          width="600px"
          :visible.sync="dialogVisible"
          v-if="dialogVisible"
        >
        <!-- 购物车组件 -->
          <ShoppingCart :closeShoppingCart="closeShoppingCart"></ShoppingCart>
        </el-dialog>
        <p class="admin" @click="goLogin">{{$store.state.userInfo.userName||'请登录'  }}</p>
        <el-dropdown>
          <el-avatar icon="el-icon-user-solid"></el-avatar>
          <el-dropdown-menu slot="dropdown">
           <el-button @click="logOff">退出登录</el-button>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
  </div>
</template>
  
  <script>
import ShoppingCart from "./ShoppingCart.vue";
export default {
  name: "CdjHeader",
  components: {
    ShoppingCart,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    //主动关闭购物车
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});

    },
    //前往登录页面
    goLogin(){
      if(this.$store.state.userInfo.id)return;
      this.$router.push('login')
    },
    //前往商品详情页面关闭购物车
    closeShoppingCart(){
      this.dialogVisible=false
    },
    //登出
    logOff(){
      this.$store.commit('changeUserInfo',{})
      this.$router.push({
        name:'login'
      })
    }
  },
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
    .admin {
      margin-right: 6px;
      clear: #d5cfcf;
    }
    .shoppingCart {
      display: flex;
      margin-right: 5px;
      color: red;
      i {
        margin: 3px 2px 0 0;
      }
    }
  }
}
</style> 