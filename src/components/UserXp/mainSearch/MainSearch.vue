<template>
  <div id="mainSearch">
   <div>
    <input type="text" placeholder="你想要找什么宝贝">
    <el-button type="primary">搜索</el-button>
   </div>
  </div>
</template>

<script>
export default {
  name: "MainSearch",
};
</script>

<style lang="less">
#mainSearch{
  position:sticky;
  top: 0;
  width: 100%;
  height: 60px;
  background-color:rgba(240, 244, 244, 0.981);
  display: flex;
  z-index: 999;
  &>div{
    width: 60%;
    height: 40px;
  
    margin: auto auto;
    border-radius: 6px;
    overflow: hidden;
    input{
      width: 90%;
      height: 100%;
      padding-left: 4px;
    }
    button{
      width: 10%;
    }
  }
}
</style>