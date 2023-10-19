<template>
  <div>
    <SearchBox :options="options" :receive="receive"></SearchBox>
    <UserInfo :showData="userData"></UserInfo>
    <PaginationBar
      :SizeChange="SizeChange"
      :CurrentChange="CurrentChange"
    ></PaginationBar>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import PaginationBar from "@/components/PaginationBar";
import UserInfo from "@/components/AdminXp/user/UserInfo";
export default {
  name: "UserManagement",
  components: { UserInfo, PaginationBar, SearchBox },
  data() {
    return {
      //用户信息 UserInfo组件需要的数据
      userData: [
        { id: "001", userName: "张三", phoneNumber: "13989146775" },
        { id: "002", userName: "余生", phoneNumber: "13989146775" },
        { id: "003", userName: "王五", phoneNumber: "13989146775" },
        { id: "004", userName: "李四", phoneNumber: "13989146775" },
      ],
      //分页组件 PaginationBar需要的数据
      size: 10,
      current: 1,
      //搜索组件需要的数据
      options: [
        {
          value: "用户名",
          label: "用户名",
        },
        {
          value: "手机号",
          label: "手机号",
        },
      ],
    };
  },
  methods: {
    SizeChange(value) {
      this.size = value;
    },
    CurrentChange(value) {
      this.current = value;
    },
    //搜索方法 (搜索内容，搜索类)
    receive(value,searchClass) {
      this.searchKey = value;
      console.log(value,searchClass);
    },
  },
};
</script>

<style>
</style>