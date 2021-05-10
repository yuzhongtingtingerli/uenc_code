<!--
 * @Author: yaoyuting
 * @Date: 2021-04-16 08:54:18
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-02 10:13:52
 * @Descripttion: 
-->
<template>
  <div class="Login">
    <img class="logo" src="@/assets/images/index/logo.png" alt="" />
    <el-form v-if="type === 'login'" :model="loginForm" class="demo-form-inline">
      <el-form-item label="">
        <el-input v-model="loginForm.loginName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="loginForm.password" placeholder="密码" type="password"></el-input>
      </el-form-item>
      <el-form-item label="">
        <div class="between">
          <el-input v-model="loginForm.code" placeholder="验证码"></el-input>
          <img :src="imgSrc" alt="" @click="getCaptchaImage" />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin" class="submit">登录</el-button>
      </el-form-item>
      <el-form-item label="">
        <div class="between">
          <div class="text" @click="type = 'password'">忘记密码</div>
          <el-checkbox-group v-model="loginForm.autoLogin">
            <el-checkbox label="自动登录" name="type"></el-checkbox>
          </el-checkbox-group>
          <div class="text" @click="type = 'register'">自动注册<i class="el-icon-arrow-right"></i></div>


        </div>
      </el-form-item>
    </el-form>
    <el-form v-if="type === 'register'" :model="registeredForm" class="demo-form-inline">
      <el-form-item label="">
        <el-input v-model="registeredForm.loginName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="registeredForm.phonenumber" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="">
        <div class="between">
          <el-input v-model="registeredForm.code" placeholder="验证码"></el-input>
          <div @click="onSubmit" class="code">发送验证码</div>
        </div>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="registeredForm.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input
          v-model="registeredForm.password"
          placeholder="请输入密码"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input
          v-model="registeredForm.arginPassword"
          placeholder="再次输入密码"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onRegistered" class="submit">注册</el-button>
      </el-form-item>
      <el-form-item label="">
        <div class="between">
          <el-checkbox-group v-model="registeredForm.autoLogin">
            <el-checkbox
              label="我已阅读并同意《隐私政策》和《服务协议》"
              name="type"
            ></el-checkbox>
          </el-checkbox-group>
        </div>
      </el-form-item>
      <div @click="type = 'login'" class="back">返回登陆<i class="el-icon-arrow-right"></i></div>
    </el-form>
    <div class="div"  v-if="type === 'password'">
      <el-form :model="updatePwdForm" class="demo-form-inline">
        <el-form-item label="">
          <el-input v-model="updatePwdForm.phonenumber" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="">
          <div class="between">
            <el-input v-model="updatePwdForm.code" placeholder="验证码"></el-input>
            <div @click="onSubmit" class="code">获取验证码</div>
          </div>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="updatePwdForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="updatePwdForm.arginPassword" type="password" placeholder="再次输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onUpdatePwd" class="submit">确认</el-button>
        </el-form-item>
        <el-form-item>
          <div @click="type = 'login'" class="back">返回</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
class RegisteredForm {
  constructor() {
    this.loginName = "";
    this.email = "";
    this.phonenumber = "";
    this.password = "";
    this.arginPassword = "";
    this.code = "";
    this.autoLogin = false;
  }
}
class LoginForm {
  constructor() {
    this.loginName = "";
    this.password = "";
    this.code = "";
    this.autoLogin = false;
  }
}
class UpdatePwdForm {
  constructor() {
    this.phonenumber = "";
    this.password = "";
    this.code = "";
    this.arginPassword = "";
  }
}
import { Registered, GetCaptchaImage, Login, UpdatePwd } from "@/assets/server/api.js";
export default {
  // props: {
  //   type: {
  //     type: String,
  //     default: 'login'
  //   },
  // },
  data() {
    return {
      type:'login',
      loginForm: new LoginForm(),
      registeredForm: new RegisteredForm(),
      updatePwdForm: new UpdatePwdForm(),
      isForget: false,
      imgSrc: ""
    };
  },
  methods: {
    onSubmit() {},
    async onRegistered() {
      for (const key in this.registeredForm) {
        const element = this.registeredForm[key];
        if (element === "" || !element) {
          return this.$message.error("不能为空");
        }
      }
      if (this.registeredForm.password !== this.registeredForm.arginPassword) {
        return this.$message.error("两次密码输入不一致");
      }
      const data = await Registered({ ...this.registeredForm });
      if (data.code === 0) {
        this.$message.success("注册成功，请登录！");
        this.registeredForm = new RegisteredForm();
      } else {
        this.$message.error(data.msg);
      }
    },
    async getCaptchaImage() {
      const data = await GetCaptchaImage();
      this.imgSrc = window.URL.createObjectURL(data.data);
    },
    async onLogin() {
      for (const key in this.loginForm) {
        const element = this.loginForm[key];
        if ((element === "" || !element) && key !== 'autoLogin' ) {
          return this.$message.error("不能为空");
        }
      }
      const data = await Login({ ...this.loginForm });
      if (data.code === 0) {
        this.$message.success("登录成功！");
        this.$emit('close')
        this.$emit('showUserInfo',data.data)
        localStorage.setItem('username', data.data);
        this.loginForm = new LoginForm();
      } else {
        this.$message.error(data.msg);
      }
    },
    async onUpdatePwd() {
      for (const key in this.updatePwdForm) {
        const element = this.updatePwdForm[key];
        if (element === "" || !element) {
          return this.$message.error("不能为空");
        }
      }
      if (this.updatePwdForm.password !== this.updatePwdForm.arginPassword) {
        return this.$message.error("两次密码输入不一致");
      }
      const data = await UpdatePwd({ ...this.updatePwdForm });
      if (data.code === 0) {
        this.$message.success("密码修改成功，请登录！");
        this.updatePwdForm = new UpdatePwdForm();
      } else {
        this.$message.error(data.msg);
      }
    }
  }
};
</script>
<style lang="less">
  .Login{
    .el-input__inner,input{
      height: 70px;
      font-size: 28px;
    }
    input::placeholder{
      font-size:  28px;
    }
    .el-checkbox__inner{
      width: 22px;
      height: 22px;
    }
    .el-checkbox__input{
      vertical-align: sub;
    }
    .el-checkbox__inner::after{
      height: 14px;
      left: 6px;
      width: 6px;
      top: 0px;
    }
    .el-checkbox__label{
      font-size: 24px;
    }
  }
</style>
<style lang="less" scoped>
.Login{
  text-align: center;
  .logo{
    height: 90px;
    margin: 36px auto;
  }
  .el-button{
    height: 70px;
    background: #4c67ef;
    font-size: 28px;
  }
  
}
.el-tabs__item.is-active {
  font-size: 20px;
}
.submit{
  width: 100%;
}
.back {
  
  font-size: 24px;
  color: #4c67ef;
  text-align: right;
}
.between {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 24px;
  
  .text{
    color: #4c67ef;
  }
  .forget {
    color: #ccc;
  }
  img {
    height: 70px;
    width: 150px;
    margin-left: 10px;
  }
  .code {
    margin-left: 10px;
    width: 220px;
    height: 70px;
    line-height: 70px;
    color: #305bbc;
    font-size: 28px;
  }
}
</style>
