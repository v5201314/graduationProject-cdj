<template>
  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <router-link   to="/UserManagement" active-class="is-active" > <el-menu-item router index="UserManagement">
          <template slot="title"
            ><i class="el-icon-s-custom"></i>用户管理</template
          >
        </el-menu-item></router-link>
        <router-link   to="/BusinessManagement" ><el-menu-item index="2">
          <template slot="title"
            ><i class="el-icon-s-shop"></i>商家管理</template
          >
        </el-menu-item></router-link>
        
        <el-menu-item  index="3">
          <template slot="title"
            ><i class="el-icon-s-goods"></i>商品管理</template
         >
        </el-menu-item>
        <el-menu-item index="4">
          <template slot="title"
            ><i class="el-icon-s-claim"></i>订单管理</template
          >
          
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>   
      <!-- 通过路由决定渲染哪个组件 -->
      <!-- <UserManagement></UserManagement> -->
   <router-view></router-view>
    </el-main>
  
  </el-container>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style>
</style>