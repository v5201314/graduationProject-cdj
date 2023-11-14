<template>
  <div>
    <SearchBox :options="options" :receive="receive"></SearchBox>
    <AdminCommodity :showData="userData"></AdminCommodity>
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
import AdminCommodity from "@/components/AdminXp/commodity/AdminCommodity.vue";
import { getData, getTotal } from "@/utils";
export default {
  name: "CommodityManagement",
  components: { AdminCommodity, PaginationBar, SearchBox },
  data() {
    return {
      //用户信息 BusinessInfo 组件需要的数据
      userData: [],
      //分页组件 PaginationBar需要的数据
      size: 10,
      current: 1,
      total: 0,
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
  mounted() {
    this.getCommodity();
    this.getTotalCommodity();
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
      //当页数和展示数发生变化时获取数据
    },
    getCommodity() {
      getData("commoditys", this.size, this.begin,1).then(
        (response) => {
          this.userData = response;
        },
        (error) => {
          this.$message.error(error);
        }
      );
    },
    //获取总商品数
    getTotalCommodity() {
      getTotal("commoditys", 1).then(
        (response) => {
          this.total = response;
        },
        (error) => {
          this.$message.error(error);
        }
      );
    },
  },
  watch: {
    size() {
      //发送网络请求 获取数据
      this.getCommodity();
    },
    current() {
      this.getCommodity();
    },
  },
  computed: {
    //从第几个数据开始查询
    begin() {
      return this.size * (this.current - 1);
    },
  },
};
</script>
  
  <style>
</style>