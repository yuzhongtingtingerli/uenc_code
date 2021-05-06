<!--
 * @Author: yaoyuting
 * @Date: 2021-04-16 08:54:18
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-02 18:35:54
 * @Descripttion: 
-->
<template>
  <div class="Check">
    <div class="title">绑定钱包</div>
    <el-form :model="checkForm" class="demo-form-inline">
      <el-form-item label="转入钱包地址">
        <el-input v-model="path" disabled></el-input>
      </el-form-item>
      <el-form-item label="转入UENC数量">
        <el-input v-model="checkForm.balance" disabled></el-input>
      </el-form-item>
      <el-form-item label="个人钱包地址">
        <el-input v-model="checkForm.address" placeholder="请输入你的钱包地址"></el-input>
      </el-form-item>
      <el-form-item label="交易哈希">
        <el-input v-model="checkForm.hash" placeholder="请输入交易哈希"></el-input>
      </el-form-item>
      <div style="text-align: center;color: red;">注：钱包地址绑定后不可更改，请认真核对</div>
      <el-form-item style="text-align: right;">
        <el-button type="primary" @click="checkSubmit">绑定</el-button>
        <el-button type="info" @click="close()" >取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
class CheckForm {
  constructor() {
    this.balance = 28;
    this.address = "";
    this.hash = "";
  }
}
import { BindWallet } from "@/assets/server/api.js";
export default {
  data() {
    return {
      checkForm: new CheckForm(),
      path: 'asdfghjhgfdsasdf'
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async checkSubmit() {
      let loginName = localStorage.getItem("username");
      for (const key in this.checkForm) {
        const element = this.checkForm[key];
        if (element === "" || !element) {
          return this.$message.error("不能为空");
        }
      }
      this.checkForm.loginName = loginName;
      const data = await BindWallet({ ...this.checkForm });
      if (data.code === 0) {
        this.$message.success("钱包绑定成功！");
        this.$emit("close");
        this.checkForm = new CheckForm();
      } else {
        this.$message.error(data.msg);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.title {
    line-height: 50px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
}
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
    height: 40px;
    width: 80px;
    margin-left: 10px;
  }
  .code {
    margin-left: 10px;
  }
}
</style>
