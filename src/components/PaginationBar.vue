<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :page-sizes="[10, 20, 30, 40]"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    :total="1000"
  >
  </el-pagination>
</template>

<script>
export default {
    name:'PaginationBar',
    props:['CurrentChange','SizeChange'],
    methods: {
      handleSizeChange(val) {
        this.SizeChange(val)
        
      },
      handleCurrentChange(val) {
       this.CurrentChange(val)
      }
    },
};
</script>

<style>
</style>