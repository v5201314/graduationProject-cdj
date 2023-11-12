<template>
  <div id="shoppingCart">
    <div class="sC_top">
      <p class="prompt" v-if="total===0">你的购物车空空如也。。。</p>
      <table id="tab1" v-else>
        <tr class="tableHeader">
          <th>选择</th>
          <th>商品信息</th>
          <th>单价</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
        <tr class="tableBody" v-for="goods in shoppingCart" :key="goods.id">
          <td class="ge">
            <input
              type="checkbox"
              :checked="goods.isChoose"
              @change="changeCheck(goods.commodityId)"
            />
          </td>
          <a href="javaScript:;" @click="goDetails(goods)">
            <td class="ge info">
              <img src="@/assets/xCIoTNipCI.jpg" alt="" />
              <p>{{ goods.commodityIntroduce }}</p>
            </td>
          </a>
          <td class="ge">
            <p class="jiage">￥{{ goods.commodityPrice }}</p>
          </td>
          <td class="ge">{{ goods.commodityQuantity }}</td>
          <td class="ge">
            <el-button type="danger" @click="deleteCommodity(goods.commodityId)"
              >删除</el-button
            >
          </td>
        </tr>
      </table>
    </div>
    <div class="sC_bottom">
      <label>
        <input type="checkbox" id="quanxuan" v-model="isAll" />
        全选
      </label>
      <p>
        已选择：<span>{{ selectTotal }}</span
        >件商品
      </p>
      <p>共计：<span>￥{{ totalAmount }}</span></p>
      <el-button type="success" :disabled="selectTotal==0">支付</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props:['closeShoppingCart'],
  data() {
    return {
      shoppingCart: JSON.parse(localStorage.getItem('shoppingCart'))||[]
    };
  },
  methods: {
    //跳转到商品详情页面的方法(商品的信息)
    goDetails(commodityItem) {
      console.log(111);
      //先关闭购物车
      this.closeShoppingCart()
      this.$router.push({
        name: "commodityDetail",
        params: { commodityItem },
      }).catch((val)=>{console.log(val);})
    },
    //改变对应商品的勾选状态
    changeCheck(id) {
      this.shoppingCart.forEach((item) => {
        if (item.commodityId == id) {
          item.isChoose = !item.isChoose;
        }
      });
    },
    //改变所有商品的勾选状态
    changeAllCheck(value) {
      this.shoppingCart.forEach((item) => {
        item.isChoose = value;
      });
    },
    //删除对应的商品
    deleteCommodity(id){
     this.shoppingCart=this.shoppingCart.filter((item)=>{
        return item.commodityId!=id
      })
    }
  },
  computed: {
    //购物车的商品总数
    total() {
      return this.shoppingCart.length;
    },
    //计算选择的商品数量
    selectTotal() {
      return this.shoppingCart.reduce((pre, current) => {
        return pre + (current.isChoose ? 1 : 0);
      }, 0);
    },
    //控制全选按钮
    isAll: {
      get() {
        return this.total === this.selectTotal;
      },
      set(value) {
         this.changeAllCheck(value)
      },
      
    },
    //计算总金额
    totalAmount(){
        return this.shoppingCart.reduce((pre, current) => {
        return pre + (current.isChoose ? current.commodityQuantity*current.commodityPrice : 0);
      }, 0);
      }

  },
  watch: {
    shoppingCart: {
      deep: true,
      handler(Value) {
        localStorage.setItem('shoppingCart',JSON.stringify(Value))
      },
    },
  },
};
</script>

<style lang="less">
#shoppingCart {
  .sC_top {
    .tableBody {
      .info {
        display: flex;
        justify-content: space-around;
        img {
          width: 100px;
          height: 98px;
        }
        p {
          width: 80px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }
      }
      .ge {
        .jiage {
          color: red;
        }
      }
    }
  }
  .prompt{
    width:100%;
    height: 80px;
    text-align: center;
    line-height: 80px;
  }
  .sC_bottom {
    display: flex;
    label {
      height: 40px;
      line-height: 40px;
    }
    p {
      margin: auto;
      span {
        color: red;
        font-size: 20px;
      }
    }
  }
}
</style>