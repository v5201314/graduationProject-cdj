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
      <form name="form1" action="/Enroll">
        <div class="inputs">
          <input
            type="text"
            v-model="userName"
            placeholder="用户名"
            @blur="userNameVerify"
          />
          <input
            type="password"
            v-model="password"
            placeholder="密码"
            @blur="passwordVerify"
          />
          <input
            v-if="!loginPage"
            type="password"
            placeholder="确认密码"
            @blur="confirmPassword"
          />
          <input type="text" v-model="vcode" placeholder="验证码" />
          <img
            alt="验证码"
            :src="serveUrl + '/vcode/' + updataVcode"
            @click="updataVcode++"
          />
          <input type="button" :value="dynamicInfo" @click="submitForm" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { SERVE_URL,SERVE_URL_DD } from "@/static";
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      //请求路径
      serveUrl: SERVE_URL,
      //点击更新验证码
      updataVcode: 1,
      //是否显示注册页面
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
      searchClass: "1",
      userName: "",
      password: "",
      vcode: null,
      //验证用户名的正则
      regexp: /^[a-zA-Z0-9]{5,13}$/,
      //验证密码的正则
      pwdz: /^[a-zA-Z0-9]{6,13}$/,
    };
  },
  methods: {
    //改变登录与注册
    changState() {
      this.loginPage = !this.loginPage;
      this.updataVcode++;
      if (this.loginPage) {
        this.dynamicInfo = "登录";
      } else {
        this.dynamicInfo = "注册";
      }
    },
    //校验用户名是否合法
    userNameVerify() {
      if (this.regexp.test(this.userName)) {
        if (!this.loginPage) {
          //发送网络请求 查看用户名是否存在
          axios
            .post(
              SERVE_URL_DD +
                "/UserName" +
                `?username=${this.userName}`
            )
            .then(
              (response) => {},
              (error) => {
                //用户名存在的话就显示错误信息
                this.$message.error(error.response.data);
                this.userName = "";
              }
            );
        }
      } else {
        this.$message.error("用户名不合法，请输入5-13位，包含大小写字母和数字");
        this.userName = "";
      }
    },
    //校验密码是否合法
    passwordVerify() {
      if (this.pwdz.test(this.password)) {
      } else {
        this.$message.error("密码不合法,请输入6-13位，包含大小写字母和数字");
        this.password = "";
      }
    },
    //确认密码
    confirmPassword(event) {
      if (this.password !== event.target.value) {
        this.$message.error("两次密码不同");
        event.target.value = "";
      }
    },
    //提交表单
    submitForm() {
      if (this.userName && this.password && this.vcode) {
        if (this.loginPage) {
          //登录表单
          axios
            .post(
              SERVE_URL_DD +
                "/Login" +
                `?username=${this.userName}&password=${this.password}&vcode=${this.vcode}`
            )
            .then(
              (response) => {
                if (response.status === 200) {
                  this.$message.success("登录成功");
                  //存储登录信息
                  this.$store.commit("changeUserInfo", response.data);
                  //跳转到主页
                  //根据不同的权限，跳转
                  if (response.data.permissions == 1) {
                    this.$router
                      .push({
                        name: "commodityList",
                       
                      })
                      .catch((val) => {
                        console.log(val);
                      });
                  }else if(response.data.permissions == 2){
                    this.$router
                      .push({
                        name: "business",
                       
                      })
                      .catch((val) => {
                        console.log(val);
                      });
                  }else{
                  this.$router
                      .push({
                        path: "/admin",
                       
                      })
                      .catch((val) => {
                        console.log(val);
                      });
                }
                }
              },
              (error) => {
                console.log("请求失败了", error.message);
              }
            );
        } else {
          //注册表单
          axios
            .post(
              SERVE_URL_DD +
                "/Enroll" +
                `?username=${this.userName}&password=${this.password}&vcode=${this.vcode}&searchClass=${this.searchClass}`
            )
            .then(
              (response) => {
                this.$message.success(response.data);
                this.updataVcode++;
              },
              (error) => {
                console.log("请求失败了", error.message);
              }
            );
        }
      } else {
        this.$message.error("请完善表单");
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