<template>
  <div id="commodityList" class="yuanjiao">
    <div class="head yuanjiao">
      <h1>精选商品推荐</h1>
    </div>
    <CommodityItem v-for="item in commodityList" :key="item.id" :commodityItem="item"></CommodityItem>
  </div>
</template>

<script>
import CommodityItem from "@/components/CommodityItem.vue";
import { getData} from "@/utils";
export default {
  name: "CommodityList",
  components: {
    CommodityItem,
  },
  data(){
    return{
      commodityList:[
        ]
    }
  },
  mounted(){
    this.getCommodity();
  },
 methods:{
  getCommodity() {
      getData("commoditys",20,0,1).then(
        (response) => {
          this.commodityList = response;
        },
        (error) => {
          this.$message.error(error);
        }
      );
    },
 }

};
</script>

<style scoped lang="less">
#commodityList {
  background-color: #fff;
  width: 100%;
  margin-bottom:5px ;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  justify-content: space-evenly;
 
  .head{
    width: 100%;
    height: 60px;
    background-color: pink;
    
    display: flex;
     h1{
      margin: auto auto;
      display:inline-block;
     }
  }
}
</style>