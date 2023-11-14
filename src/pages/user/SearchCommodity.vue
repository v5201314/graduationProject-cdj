<template>
 <div>
  <NotResponding v-if="commodityList.length==0"></NotResponding>
  <div id="commodityList" class="yuanjiao" v-else>
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
 </div>
</template>
  
  <script>
import CommodityItem from "@/components/CommodityItem.vue";
import NotResponding from "@/components/NotResponding.vue";
import { getData} from "@/utils";
export default {
  name: "CommodityList",
  props:['keywords'],
  components: {
    CommodityItem,
    NotResponding
  },
  data() {
    return {
      commodityList: [
       
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
    }
  },
  mounted(){
    console.log(this.keywords);
  }
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