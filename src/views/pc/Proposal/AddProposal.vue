<!--
 * @Author: yaoyuting
 * @Date: 2021-04-18 18:50:34
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-04-27 08:26:44
 * @Descripttion: 
-->
<template>
  <div class="AddProposal">
    <div class="banner">
      <div class="title w1300">发 起 提 案</div>
    </div>
    <div class="content">
      <div class=" w1300">
        <el-form :model="proposalForm" ref="proposalRef" :rules="rules" class="demo-form-inline">
          <el-form-item label="云应用名称" prop="name">
            <el-input v-model="proposalForm.name"></el-input>
          </el-form-item>
          <el-form-item label="提案标题" prop="title">
            <el-input v-model="proposalForm.title"></el-input>
          </el-form-item>
          <el-form-item label="提案人" prop="name">
            <el-input v-model="proposalForm.name"></el-input>
          </el-form-item>
          
          <el-form-item label="背景摘要" prop="summary">
            <div class="editor">
              <quill-editor
                v-model="proposalForm.summary"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)"
                style="height: 300px; margin: 40px 0 100px;"
              >
              </quill-editor>
            </div>
          </el-form-item>
          <el-form-item label="目标" prop="target">
            <el-input v-model="proposalForm.target"></el-input>
          </el-form-item>
          <el-form-item label="计划" prop="plan">
            <el-input v-model="proposalForm.plan"></el-input>
          </el-form-item>
          <el-form-item label="预算" prop="budget">
            <el-input v-model="proposalForm.budget"></el-input>
          </el-form-item>
          <el-form-item label="投票结束时间" prop="deadline">
            <el-date-picker v-model="proposalForm.deadline" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <div class="btn" @click="release">确认发布</div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
class ProposalForm {
  constructor() {
    this.name = "";
    this.title = "";
    this.summary = "";
    this.target = "";
    this.plan = "";
    this.budget = "";
    this.deadline = "";
    this.createBy = "admin";
  }
}
const rules = {
  name: [
    { required: true, message: '请输入内容', trigger: 'blur' },
  ],
  title: [
    { required: true, message: '请输入内容', trigger: 'blur' },
  ],
  summary: [
    { required: true, message: '请输入内容', trigger: 'blur' },
  ],
  target: [
    { required: true, message: '请输入内容', trigger: 'blur' },
  ],
  plan: [
    { required: true, message: '请输入内容', trigger: 'blur' },
  ],
  budget: [
    { required: true, message: '请输入内容', trigger: 'blur' },
  ],
  deadline: [
    { type: 'date', required: true, message: '请选择时间', trigger: 'blur' }
  ],
  
}
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { AddProposal } from "@/assets/server/api.js";
import {FormatTime} from '@/utils/utils.js'
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      proposalForm: new ProposalForm(),
      content: "",
      editorOption: {},
      rules
    };
  },
  methods: {
    async release() {
      this.$refs.proposalRef.validate(async valid=>{
        if (valid) {
          const FormData = {...this.proposalForm}
          FormData.deadline = FormatTime(FormData.deadline, 'Y-M-D h:m:s')
          const data = await AddProposal(FormData)
          if (data.code === 0) {
            this.proposalForm = new ProposalForm()
            this.$router.back(-1)
          } else {
            this.$message.error(data.msg);
          }
        }
      })
      
    },
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {} // 内容改变事件
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  }
};
</script>
<style lang="less">
  .AddProposal{
    .editor{
      margin-top: 64px;
    }
    .el-form-item__label{
      font-size: 32px;
      color: #333333;
      width: 100%;
      text-align: left;
      padding: 12px 0;
    }
    .el-form-item__error{
        font-size: 20px;
      }
    .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before{
      color: #633EFF;
    }
     .el-input__inner{
      width: 671px;
      height: 60px;
      font-size: 24px;
      border: 1px solid #616161;
      border-radius: 5px;
      .el-input__icon{
        font-size: 20px;
      }
      
    }
    .el-date-editor.el-input,
    .el-date-editor .el-input__inner{
      width: 350px;
    }
  }
</style>
<style lang="less" scoped>
.AddProposal {
  padding-bottom: 344px;
  .banner{
    height: 900px;
    background-image: url("../../../assets/images/index/AddProposal.png");
    background-size: cover;
    background-position: center center;
    overflow: hidden;
    .title{
      font-size: 80px;
      color: #ffffff;
      margin-top: 230px;
    }
  }
  .title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .content{
    background-image: url("../../../assets/images/index/proposalbg.png");
    background-size: cover;
    background-position: center center;
  }
  .demo-form-inline {
    border-radius: 85px;
    color: #000;
    padding: 160px 132px;
    margin-top: -360px;
  }
  .btn {
    text-align: center;
    width: 480px;
    height: 70px;
    line-height: 70px;
    opacity: 1;
    background: #4b3eff;
    border-radius: 4px;
    font-size: 28px;
    color: #fff;
    margin: 160px auto 0;
    cursor: pointer;
  }
}
</style>
