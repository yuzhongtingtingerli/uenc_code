<!--
 * @Author: yaoyuting
 * @Date: 2021-04-18 18:50:34
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-10 11:42:24
 * @Descripttion: 
-->
<template>
  <div class="AddProposal">
    <div class="banner">
      <div class="placeholder"></div>
      <div class="title">发 起 提 案</div>
    </div>

    <div class="content">
      <el-form :model="proposalForm" class="demo-form-inline">
        <el-form-item label="提案人">
          <el-input v-model="proposalForm.name"></el-input>
        </el-form-item>
        <el-form-item label="提案标题">
          <el-input v-model="proposalForm.title"></el-input>
        </el-form-item>
        <el-form-item label="背景摘要">
          <div class="editor">
            <quill-editor
              v-model="proposalForm.summary"
              ref="myQuillEditor"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @change="onEditorChange($event)"
              style="height: 200px; margin: 40px 0 180px;"
            >
            </quill-editor>
          </div>
        </el-form-item>
        <el-form-item label="目标">
          <el-input type="textarea" v-model="proposalForm.target"></el-input>
        </el-form-item>
        <el-form-item label="计划">
          <el-input type="textarea" v-model="proposalForm.plan"></el-input>
        </el-form-item>
        <el-form-item label="预算">
          <el-input v-model="proposalForm.budget"></el-input>
        </el-form-item>
        <el-form-item label="投票结束时间">
          <el-date-picker
            v-model="proposalForm.deadline"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <div class="btn">
            <el-button type="primary" class="submit" @click="release">确认发布</el-button>
          </div>
        </el-form-item>
      </el-form>
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
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { AddProposal } from "@/assets/server/api.js";
import { FormatTime } from "@/utils/utils.js";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      proposalForm: new ProposalForm(),
      content: "",
      editorOption: {}
    };
  },
  methods: {
    async release() {
      this.proposalForm.deadline = FormatTime(this.proposalForm.deadline, "Y-M-D h:m:s");
      const data = await AddProposal(this.proposalForm);
      console.log(data, "data");
      if (data.code === 0) {
        this.proposalForm = new ProposalForm();
        this.$router.back(-1);
      } else {
        this.$message.error(data.msg);
      }
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

<style lang="less" scoped>
.AddProposal {
  .banner {
    height: 227 * 2px;
    background-image: url("../../../assets/imagesm/ta/banner3.png");
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    .placeholder {
      flex: 1;
    }
  }
  .title {
    font-size: 60px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 84px;
    margin-bottom: 110px;
  }
  .content {
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 2px 2px 10px 2px #999;
    color: #000;
    padding: 30px;
    margin-top: -54px;
  }
  .btn {
    text-align: center;
    margin-top: 20px;
    .el-button {
      padding: 0;
      border: none;
      width: 246 * 2px;
      height: 36 * 2px;
      background: #6624fa;
      border-radius: 8px;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 40px;
    }
  }
}
</style>
