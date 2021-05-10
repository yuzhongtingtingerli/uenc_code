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
      <div style="color: red;">注：钱包地址绑定后不可更改，请认真核对</div>
      <div class="btns">
        <div  @click="checkSubmit">绑定</div>
        <div class="r" @click="close()" >取消</div>
      </div>
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

<style lang="less">
  .Check{
    text-align: left;
    .title{
      font-size: 28px;
      color: #313131;
      font-weight: 500;
      padding-bottom: 40px;
    }
    .el-form-item__label{
      font-size: 28px;
      color: #666;
    }
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
    .btns{
      padding: 36px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      div{
        width: 158px;
        height: 70px;
        text-align: center;
        line-height: 70px;
        background: #4b3eff;
        border-radius: 4px;
        font-size: 28px;
        color: #fff;
        margin: 0 26px;
        cursor: pointer;
      }
      .r{
        background: #afb7e0;
      }
    }
  }
</style>
