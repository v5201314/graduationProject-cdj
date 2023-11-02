<template>
  <div id="commodityList" class="yuanjiao">
    <div class="head yuanjiao">
      <div>
        <el-select v-model="sort" placeholder="综合排序">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <CommodityItem
      v-for="item in commodityList"
      :key="item.id"
      :commodityItem="item"
    ></CommodityItem>
  </div>
</template>
  
  <script>
import CommodityItem from "@/components/CommodityItem.vue";
export default {
  name: "CommodityList",
  components: {
    CommodityItem,
  },
  data() {
    return {
      commodityList: [
        {
          commodityId: "001",
          commodityImg: "../../assets/xCIoTNipCI.jpg",
          commodityPrice: 322,
          commoditySales: 3000,
          commodityIntroduce: "d设计稿i供货商陆军部队所鼓舞黑i给你看论文",
        },
        {
          commodityId: "002",
          commodityImg: "../../assets/xCIoTNipCI.jpg",
          commodityPrice: 322,
          commoditySales: 3000,
          commodityIntroduce: "d设计稿i供货商陆军部队所鼓舞黑i给你看论文",
        },
        {
          commodityId: "003",
          commodityImg: "../../assets/xCIoTNipCI.jpg",
          commodityPrice: 322,
          commoditySales: 3000,
          commodityIntroduce: "d设计稿i供货商陆军部队所鼓舞黑i给你看论文",
        },
        {
          commodityId: "004",
          commodityImg: "../../assets/xCIoTNipCI.jpg",
          commodityPrice: 322,
          commoditySales: 3000,
          commodityIntroduce: "d设计稿i供货商陆军部队所鼓舞黑i给你看论文",
        },
        {
          commodityId: "005",
          commodityImg: "../../assets/xCIoTNipCI.jpg",
          commodityPrice: 322,
          commoditySales: 3000,
          commodityIntroduce: "d设计稿i供货商陆军部队所鼓舞黑i给你看论文",
        },
        {
          commodityId: "006",
          commodityImg: "../../assets/xCIoTNipCI.jpg",
          commodityPrice: 322,
          commoditySales: 3000,
          commodityIntroduce: "d设计稿i供货商陆军部队所鼓舞黑i给你看论文",
        },
        {
          commodityId: "007",
          commodityImg: "../../assets/xCIoTNipCI.jpg",
          commodityPrice: 322,
          commoditySales: 3000,
          commodityIntroduce: "d设计稿i供货商陆军部队所鼓舞黑i给你看论文",
        },
        {
          commodityId: "008",
          commodityImg: "../../assets/xCIoTNipCI.jpg",
          commodityPrice: 322,
          commoditySales: 3000,
          commodityIntroduce: "d设计稿i供货商陆军部队所鼓舞黑i给你看论文",
        },
        {
          commodityId: "009",
          commodityImg: "../../assets/xCIoTNipCI.jpg",
          commodityPrice: 322,
          commoditySales: 3000,
          commodityIntroduce: "d设计稿i供货商陆军部队所鼓舞黑i给你看论文",
        },
      ],
      options: [
        {
          value: "综合排序",
          label: "综合排序",
        },
        {
          value: "热度",
          label: "热度",
        },
        {
          value: "价格升序",
          label: "价格升序",
        },
        {
          value: "价格降序",
          label: "价格降序",
        },
      ],
      sort: "",
    };
  },
};
</script>
  
  <style scoped lang="less">
#commodityList {
  background-color: #fff;
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  justify-content: space-evenly;

  .head {
    width: 100%;
    height: 60px;
    background-color: pink;

    display: flex;
    div {
      margin: auto 0;
    }
  }
}
</style>