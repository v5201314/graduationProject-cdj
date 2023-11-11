<template>
  <div id="commodityItem">
    <a ref="javaScript:;" @click="goDetails(commodityItem)">
      <img class="yuanjiao" src="../assets/xCIoTNipCI.jpg" alt="" />
      <div>
        <span>¥ {{ commodityItem.commodityPrice }}</span>
        <p>{{ commodityItem.commodityIntroduce }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "CommodityItem",
  props: ["commodityItem"],
  methods: {
    //跳转到商品详情页面的方法(商品的信息)
    goDetails(commodityItem) {
      this.$router.push({
        name: "commodityDetail",
        params: { commodityItem },
      });
    },
  },
};
</script>

<style lang="less">
#commodityItem {
  width: 200px;
  margin: 10px;
  height: 300px;

  a {
    border: none;
    text-decoration: none;
    img {
      width: 100%;
      margin-bottom: 3px;
    }

    div {
      span {
        float: left;
        margin: 0 3px;
        color: red;
      }
      p {
        overflow: hidden;
        
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>