<template>
  <div id="commodityItem">
    <button>
    <img class="yuanjiao" src="../assets/xCIoTNipCI.jpg" alt="" />
    <div>
      <span>¥ {{ commodityItem.commodityPrice }}</span>
      <p>{{ commodityItem.commodityIntroduce }}</p>
    </div>
  </button>
  </div>
</template>

<script>
export default {
  name: "CommodityItem",
  props:['commodityItem'],
};
</script>

<style lang="less">
#commodityItem {
  width: 200px;
  margin: 10px;
  height: 300px;
  background-color:rgb(221, 225, 227);
 
  button{
    border: none;
  img {
    width: 100%;
    margin-bottom:3px;
  }

  div {
    span {
      float: left;
      margin: 0 3px;
      color:red;
    }
  }
}
}
</style>