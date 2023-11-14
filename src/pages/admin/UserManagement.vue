<template>
  <div>
    <SearchBox :options="options" :receive="receive"></SearchBox>
    <UserInfo :showData="userData"></UserInfo>
    <PaginationBar
      :SizeChange="SizeChange"
      :CurrentChange="CurrentChange"
      :total="total"
    ></PaginationBar>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import PaginationBar from "@/components/PaginationBar";
import UserInfo from "@/components/AdminXp/user/UserInfo";
import { getData,getTotal } from "@/utils";
export default {
  name: "UserManagement",
  components: { UserInfo, PaginationBar, SearchBox },
  data() {
    return {
      //用户信息 UserInfo组件需要的数据
      userData: [],
      //分页组件 PaginationBar需要的数据
      size: 10,
      current: 1,
      total:0,
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
  mounted(){
    this.getUsers()
    this.getTotalUser()
  },
  methods: {
    SizeChange(value) {
      this.size = value;
    },
    CurrentChange(value) {
      this.current = value;
    },
    //搜索方法 (搜索内容，搜索类)
    receive(value, searchClass) {
      this.searchKey = value;
      console.log(value, searchClass);
    },
    //当页数和展示数发生变化时获取数据
   getUsers(){
   getData('user',this.size,this.begin,1).then( (response) => {
              this.userData=response
            },
            (error) => {
                //用户名存在的话就显示错误信息
                this.$message.error(error);
            })
   },
    //获取总人数
    getTotalUser(){
      getTotal('user',1).then( (response) => {
              this.total=response
            },
            (error) => {
                //用户名存在的话就显示错误信息
                this.$message.error(error);
            })
    }
  },
  watch: {
    size() {
      //发送网络请求 获取数据
      this.getUsers()
    },
    current(){
      this.getUsers()
    }
  },
  computed:{
    //从第几个数据开始查询
    begin(){
      return this.size*(this.current-1)
    }
  }
};
</script>

<style>
</style>