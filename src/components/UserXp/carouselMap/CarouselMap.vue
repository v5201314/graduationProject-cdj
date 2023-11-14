<template>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item>
     <img class="ked" src="../../../assets/0134f5599bdf49a80121ad7bb3ab1c.jpg@2o.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item>
     <img class="ked" src="../../../assets/013e175febd6a511013ee04d4e63e5.jpg@2o.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item>
     <img class="ked" src="../../../assets/014d105978da02a8012193a3d2a344.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item>
     <img class="ked" src="../../../assets/01d1db5abb4042a801218207ac8271.jpg@1280w_1l_2o_100sh.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item>
     <img class="ked" src="../../../assets/jianyuehuazhuangpinlunbotupsd-30670873_1.jpg" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    name:'CarouselMap',
    data(){
      return{
        carouselMap:[
          '../../../assets/01d1db5abb4042a801218207ac8271.jpg@1280w_1l_2o_100sh.jpg'
        ]
      }
    }

}
</script>

<style>
.ked{
  height: 100%;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>