<template>
  <div id="commodityDetail">
    <div class="left"><img src="@/assets/xCIoTNipCI.jpg" alt="" /></div>
    <div class="right">
      <p>的时空结构i哦温哥华我i给你我i绕太阳</p>
      <span class="price">¥ 324</span>
      <div class="commodityColor">
        <span>颜色:</span>
        <div class="chooseColor">
          <span>红色</span>
          <span>绿色</span>
          <span>白色</span>
          <span>黑色</span>
        </div>
      </div>
      <div>
        <span>尺寸:</span>
        <div class="sizeColor">
          <span>L</span>
          <span>XL</span>
          <span>XXL</span>
          <span>S</span>
        </div>
      </div>
      <div>
        <el-button type="info">立即购买</el-button>
        <el-button type="primary">加入购物车</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commodityDetail",
};
</script>

<style scoped lang="less">
#commodityDetail {
  display: flex;
  justify-content: center;
  .left {
    width: 20vw;
    margin-right: 30px;
    img {
      width: 100%;
      padding: 10px 20px;
    }
  }
  .right {
    & > p {
      font-size: 18px;
      cursor: pointer;
    }
    .price {
      font-size: 30px;
      color: red;
    }
    div {
      margin-top: 5pxpx;
      height: 60px;
      div {
        display: inline-block;
        span {
          display: inline-block;
          width: 50px;
          text-align: center;
          border-radius: 5px;
          margin: 0 10px;
          background-color: #ddd;
          cursor: pointer;
        }
      }
    }
  }
}
</style>