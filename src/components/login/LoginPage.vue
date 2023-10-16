<template>
  <div class="bgi">
    <div class="box">
      <el-select
        class="chooseUser"
        v-model="searchClass"
        placeholder="用户类型"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <button class="handoff" @click="changState">
        {{ loginPage ? "去注册" : "去登录" }}
      </button>
      <h1>CDJ{{ dynamicInfo }}页面</h1>
      <form name="form1" action="/tomcat1/Enroll">
        <div class="inputs">
          <input type="text" name="username" value="用户名" />
          <input type="text" name="password" value="密码" />
          <input v-if="!loginPage" type="text" value="确认密码" />
          <input type="text" name="vcode" placeholder="验证码" />
          <img alt="验证码" src="/tomcat1/vcode" />
          <input type="button" :value="dynamicInfo" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      loginPage: true,
      dynamicInfo: "登录",
      options: [
        {
          value: "1",
          label: "普通用户",
        },
        {
          value: "2",
          label: "商家",
        },
        {
          value: "3",
          label: "管理员",
        },
      ],
      searchClass: "普通用户",
    };
  },
  methods: {
    changState() {
      this.loginPage = !this.loginPage;
      if (this.loginPage) {
        this.dynamicInfo = "登录";
      } else {
        this.dynamicInfo = "注册";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.chooseUser {
  position: absolute;
  width: 110px;
  left: 9px;
  top: 25px;
  border-radius: 50%;
  box-sizing: content-box;
  padding: 0;
}
.bgi {
  background-image: url(../../assets/3.jpg);
  background-size: cover;
  width: 100vw;
  height: 100vh;
  padding-top: 10vh;
}
.box {
  position: relative;
  box-sizing: content-box;
  .handoff {
    position: absolute;
    width: 45px;
    height: 45px;
    right: 25px;
    top: 25px;
    // background-color: #7dc7eb;
    background-color: orange;
    border-radius: 50%;
    box-sizing: content-box;
    padding: 0;
  }
  form {
    .inputs {
      text-align: center;
      img {
        width: 148px;
        height: 30px;
        margin: 6px 35px;
        background-color: pink;
      }
    }
  }
}

.box {
  width: 300px;
  height: 400px;
  margin: auto;
  padding: 40px;
  opacity: 0.5;
  background-color: #fff;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: inset 1px 0px 4px 7px #d4cbcb;

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: pink;
    overflow: hidden;
    img {
      width: 100px;
      height: 100px;
    }
  }
  h1 {
    font-size: 20px;
  }
  form {
    .inputs {
      input {
        width: 150px;
        height: 30px;
        margin: 15px 35px 0;
        padding-left: 8px;
        border-radius: 25px;
        background-color: #fff;
        color: rgb(175, 175, 175);
        box-shadow: 2px 1px 3px 2px #c2c7d0 inset;
        &:last-child {
          margin: 8px 35px 0;
          box-shadow: 3px 3px 6px 2px #c2c7d0;
          background-color: #7dc7eb;
          color: black;
        }
      }
      a {
        width: 150px;
        height: 30px;
        margin: 15px 35px 0;
        font-size: 10px;
        &:hover {
          color: red;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>