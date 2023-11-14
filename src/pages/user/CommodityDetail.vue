<template>
  <div>
    <NotRespondingVue v-if="!commodityItem"></NotRespondingVue>
  <div id="commodityDetail" v-else>
    <div class="left"><img src="@/assets/xCIoTNipCI.jpg" alt="" /></div>
    <div class="right">
      <p>{{ commodityItem.commodityIntroduce }}</p>
      <span class="price">¥ {{ commodityItem.commodityPrice }}</span>
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
        <span>数量:</span>
        <div class="quantity">
          <button
            :disabled="quantityPurchased < 2"
            @click="quantityPurchased--"
          >
            -
          </button>
          <input type="text" v-model="quantityPurchased" />
          <button @click="quantityPurchased++">+</button>
        </div>
      </div>
      <div>
        <el-button type="info">立即购买</el-button>
        <el-button
          type="primary"
          @click="addCart"
          :disabled="quantityPurchased <= 0"
          >加入购物车</el-button
        >
      </div>
    </div>
  </div>
  </div>
 
</template>

<script>
import NotRespondingVue from '@/components/NotResponding.vue';
export default {
  name: "commodityDetail",
  components:{
    NotRespondingVue
  },
  props: ["commodityItem"],
  data() {
    return {
      //购买数量
      quantityPurchased: 1,
    };
  },
  methods:{
    //添加商品到购物车
    addCart(){
      //给商品添加上购买数量
      console.log(this.commodityItem);
      //不要直接修改 props的数据 创建一个新的对象
      var shuju={
        ...this.commodityItem
      } 
      shuju.commodityQuantity=this.quantityPurchased
      shuju.isChoose=false
      //如果 shoppingCart 已经存在就读取其中的值 否则创建一个新的数组
      var shoppingCart=JSON.parse(localStorage.getItem('shoppingCart'))||[]
      shoppingCart.push(shuju)
      console.log(shoppingCart);
      //存储购物车
      localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))
    }
  }
};
</script>

<style scoped lang="less">
#commodityDetail {
  display: flex;
  justify-content: center;
  margin: 30px 0;
  .left {
    width: 20%;
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
      .quantity {
        button {
          width: 20px;
        }
        input {
          width: 20px;
          border: 1px solid black;
          text-align: center;
        }
      }
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