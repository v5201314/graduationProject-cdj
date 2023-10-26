<template>
    <div>
      <SearchBox :options="options" :receive="receive"></SearchBox>
      <AdminCommodity :showData="userData"></AdminCommodity>
      <PaginationBar
        :SizeChange="SizeChange"
        :CurrentChange="CurrentChange"
      ></PaginationBar>
    </div>
  </template>
  
  <script>
  import SearchBox from "@/components/SearchBox.vue";
  import PaginationBar from "@/components/PaginationBar";
  import AdminCommodity from "@/components/AdminXp/commodity/AdminCommodity.vue";
  export default {
    name: "CommodityManagement",
    components: { AdminCommodity, PaginationBar, SearchBox },
    data() {
      return {
        //用户信息 BusinessInfo 组件需要的数据
        userData: [
          { id: "001", commodityName: "华硕-vivobook",classify:'电脑', quantity:2333, },
          { id: "002", commodityName: "vivo",classify:'手机', quantity:263, },
          { id: "003", commodityName: "娃哈哈",classify:'食品', quantity:2911, },
        ],
        //分页组件 PaginationBar需要的数据
        size: 10,
        current: 1,
        //搜索组件需要的数据
        options: [
          {
            value: "商品名",
            label: "商品名",
          },
          {
            value: "分类",
            label: "分类",
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