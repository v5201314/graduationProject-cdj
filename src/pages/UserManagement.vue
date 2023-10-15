<template>
  <div>
    <UserInfo :showData="userData"></UserInfo>
    <PaginationBar :SizeChange="SizeChange" :CurrentChange="CurrentChange"></PaginationBar>
  </div>
</template>

<script>
import PaginationBar from "../components/PaginationBar";
import UserInfo from "../components/user/UserInfo";
export default {
  name: "UserManagement",
  components: { UserInfo, PaginationBar },
  data() {
    return {
        //用户信息 UserInfo组件需要的数据
      userData: [
        { id: "001", userName: "张三", phoneNumber: "13989146775" },
        { id: "002", userName: "余生", phoneNumber: "13989146775" },
        { id: "003", userName: "王五", phoneNumber: "13989146775" },
        { id: "004", userName: "李四", phoneNumber: "13989146775" },
      ],
      size:10,
      current:1,
    };
  },
  methods:{
    SizeChange(value){
        this.size=value
    },
    CurrentChange(value){
        this.current=value
    }
  }
};
</script>

<style>
</style>