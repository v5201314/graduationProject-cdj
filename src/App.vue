<template>
  <div>
    <template v-if="route === 1">
      <LoginPage></LoginPage>
    </template>
    <template v-if="route === 2">
      <AdminApp></AdminApp>
    </template>
    <template v-if="route === 3">
      <BusinessApp></BusinessApp>
    </template>
    <template v-if="route === 4">
      <UserAppVue></UserAppVue>
    </template>
  </div>
</template>

<script>
import AdminApp from "./components/AdminXp/AdminApp";
import LoginPage from "./components/login/LoginPage.vue";
import BusinessApp from "./components/BusinessXp/BusinessApp.vue";
import UserAppVue from './components/UserXp/UserApp.vue';
export default {
  name: "App",
  components: {
    AdminApp,
    LoginPage,
    BusinessApp,
    UserAppVue
  },
  data() {
    return {
      //管理展示哪个页面 1:登录注册页面 2:管理员界面 3:商家界面 4:用户界面
      route: 4,
    };
  },
};
</script>

<style >
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
</style>
