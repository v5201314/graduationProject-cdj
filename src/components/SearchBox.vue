<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入搜索内容，按回车键确认"
      @keyup.enter="add"
    />
    <el-select v-model="searchClass" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
</template>
 
 <script>
export default {
  name: "SearchBox",
  props: ["receive",'options'],
  data(){
    return{
        searchClass: ''
    }
  },
  methods: {
    add(event) {
      //校验数据是否合法(不能为空)
      if (!event.target.value.trim()) return alert("输入不能为空");
      this.receive(event.target.value,this.searchClass);
      event.target.value = "";
    },
  },
};
</script>
 
 <style scoped>
/*header*/
.todo-header input {
  width:35%;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
 