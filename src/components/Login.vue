<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="formRef"
        label-width="0px"
        class="form"
      >
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user"
            v-model="loginForm.username"
            placeholder="Username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            placeholder="Password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item class="buttons">
          <el-button type="primary" @click="login">Login</el-button>
          <!-- <el-button type="info">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        // input rules
        username: [
          { required: true, message: "Please input username", trigger: "blur" },
        ],
        password: [
          {
            required: true,
            message: "Password can't be blank",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      // login
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("submit error!");
          return false;
        }
      });
    },
    reset() {
      // reset the form
      this.$refs.formRef.resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 50%;
  height: 50%;
  background-color: white;
  border-radius: 1%;
  position: absolute;
  //   left: 25%;
  //   top: 25%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 5px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      height: 100%;
      width: 100%;
      background-color: #eee;
      border-radius: 50%;
    }
  }
  .form {
    position: absolute;
    width: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .buttons {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 80%);
  }
}
</style>
