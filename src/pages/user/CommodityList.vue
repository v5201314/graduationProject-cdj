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
export default {
  name: "CommodityList",
  components: {
    CommodityItem,
  },
  data(){
    return{
      commodityList:[
        {commodityId:'001',commodityImg:'../../assets/xCIoTNipCI.jpg',commodityPrice:322,commodityIntroduce:'d设计稿i供货商陆军部队所鼓舞黑i给你看论文'},
        {commodityId:'002',commodityImg:'../../assets/xCIoTNipCI.jpg',commodityPrice:322,commodityIntroduce:'d设计稿i供货商陆军部队所鼓舞黑i给你看论文'},
        {commodityId:'003',commodityImg:'../../assets/xCIoTNipCI.jpg',commodityPrice:322,commodityIntroduce:'d设计稿i供货商陆军部队所鼓舞黑i给你看论文'},
        {commodityId:'004',commodityImg:'../../assets/xCIoTNipCI.jpg',commodityPrice:322,commodityIntroduce:'d设计稿i供货商陆军部队所鼓舞黑i给你看论文'},
        {commodityId:'005',commodityImg:'../../assets/xCIoTNipCI.jpg',commodityPrice:322,commodityIntroduce:'d设计稿i供货商陆军部队所鼓舞黑i给你看论文'},
        {commodityId:'006',commodityImg:'../../assets/xCIoTNipCI.jpg',commodityPrice:322,commodityIntroduce:'d设计稿i供货商陆军部队所鼓舞黑i给你看论文'},
        {commodityId:'007',commodityImg:'../../assets/xCIoTNipCI.jpg',commodityPrice:322,commodityIntroduce:'d设计稿i供货商陆军部队所鼓舞黑i给你看论文'},
        {commodityId:'008',commodityImg:'../../assets/xCIoTNipCI.jpg',commodityPrice:322,commodityIntroduce:'d设计稿i供货商陆军部队所鼓舞黑i给你看论文'},
        {commodityId:'009',commodityImg:'../../assets/xCIoTNipCI.jpg',commodityPrice:322,commodityIntroduce:'d设计稿i供货商陆军部队所鼓舞黑i给你看论文'},
      ]
    }
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