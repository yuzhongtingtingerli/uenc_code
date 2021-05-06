<!--
 * @Author: yaoyuting
 * @Date: 2021-04-16 08:54:18
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-03 22:59:17
 * @Descripttion: 
-->
<template>
  <div class="Login">
    <el-tabs v-model="activeName" @tab-click="handleClick" v-if="!isForget">
      <el-tab-pane label="登录" name="first">
        <el-form :model="loginForm" class="demo-form-inline">
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
              <el-checkbox-group v-model="loginForm.autoLogin">
                <el-checkbox label="下次自动登录" name="type"></el-checkbox>
              </el-checkbox-group>
              <el-button type="text" @click="onForget(true)" class="forget">忘记密码</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="注册" name="second">
        <el-form :model="registeredForm" class="demo-form-inline">
          <el-form-item label="">
            <el-input v-model="registeredForm.loginName" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="registeredForm.phonenumber" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="">
            <div class="between">
              <el-input v-model="registeredForm.code" placeholder="验证码"></el-input>
              <el-button type="text" @click="onSubmit" class="code">获取验证码</el-button>
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
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <div class="forget" v-else>
      <el-form :model="updatePwdForm" class="demo-form-inline">
        <el-form-item label="">
          <el-input v-model="updatePwdForm.phonenumber" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="">
          <div class="between">
            <el-input v-model="updatePwdForm.code" placeholder="验证码"></el-input>
            <el-button type="text" @click="onSubmit" class="code">获取验证码</el-button>
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
          <el-button type="text" @click="onForget(false)" class="submit">返回</el-button>
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
  data() {
    return {
      activeName: "first",
      loginForm: new LoginForm(),
      registeredForm: new RegisteredForm(),
      updatePwdForm: new UpdatePwdForm(),
      isForget: false,
      imgSrc: ""
    };
  },
  created () {
    this.getCaptchaImage();
  },
  methods: {
    handleClick() {},
    onSubmit() {},
    onForget(type) {
      this.isForget = type;
    },
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
        this.activeName = 'first'
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
        this.activeName = 'first'
        this.onForget(false)
        this.updatePwdForm = new UpdatePwdForm();
      } else {
        this.$message.error(data.msg);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.el-tabs__item.is-active {
  font-size: 20px;
}
.submit {
  width: 100%;
}
.between {
  display: flex;
  justify-content: space-between;
  .forget {
    color: #ccc;
  }
  img {
    height: 80px;
    width: 160px;
    margin-left: 10px;
  }
  .code {
    margin-left: 10px;
  }
}
.forget {
  padding-top: 100px;
}
</style>
