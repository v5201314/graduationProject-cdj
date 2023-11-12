<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      //管理展示哪个页面 1:登录注册页面 2:管理员界面 3:商家界面 4:用户界面
      route: 4,
    };
  },
};
</script>

<style lang="less">
/*全局去除默认样式*/
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

/*去除列表默认样式*/
ul,
ol,
textarea {
    list-style: none;
}

/*去除默认的倾斜效果*/
em,
i {
    font-style: normal;
}

/*去除a标签默认下划线，并设置文字颜色*/
a {
    text-decoration: none;
    color: #333;
}

/*设置img的垂直对齐方式为居中对齐，去除img默认下间隙*/
img {
    vertical-align: middle;
}

/*去除input默认样式*/
input,
textarea {
    border: none;
    outline: none;
    color: #333;
}

p{
  cursor:default;
}

#tab1 {
    width: 100%;
  
    .tableHeader {
      background-color: #8bcfeb;
      th {
        border-radius: 5px;
      }
    }
    tr {
      text-align: center;
      .ge {
        padding: 3px;
        background-color: #ebeaea;
        border-radius: 5px;
      }
    }
    }
</style>
