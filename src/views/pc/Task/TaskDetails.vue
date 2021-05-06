<!--
 * @Author: yaoyuting
 * @Date: 2021-04-18 16:40:33
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-04-26 08:09:41
 * @Descripttion: 
-->
<template>
  <div class="TaskDetails" v-if="bountyDetail">
    <div class="titleDate">
      <div class="title">{{ bountyDetail.title }}</div>
      <div class="date">
        完成奖励：<span>{{ bountyDetail.reward }}</span>
      </div>
    </div>
    <div class="text">{{ bountyDetail.description }}</div>
    <div class="num">已报名人数：{{ bountyDetail.applyCount }}</div>
    <div class="githup">Github：{{ bountyDetail.github }}（点击前往）</div>
    <div class="timeSubmit">
      <div class="time">
        报名截止时间：<span>{{ bountyDetail.endTime }}</span>
      </div>
      <div class="submit">
        <el-button type="primary" size="small" @click="apply">报名任务</el-button>
      </div>
    </div>
    <el-dialog title="报名" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>请输入以下信息进行报名</span>
      <el-form :model="applyForm" class="demo-form-inline">
        <el-form-item label="Facebook 或 微信号">
          <el-input v-model="applyForm.Facebook"></el-input>
        </el-form-item>
        <el-form-item label="Github账号">
          <el-input v-model="applyForm.Github"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit" size="small">确 定</el-button>
        <el-button @click="handleClose" size="small">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
class ApplyForm {
  constructor() {
    this.Facebook = ''
    this.Github = ''
  }
}
import { GetBountyDetail, GetBountyApply } from "@/assets/server/api.js";
export default {
  data() {
    return {
      dialogVisible: false,
      bountyDetail: null,
      applyForm: new ApplyForm()
    };
  },
  created() {
    this.getBountyDetail();
  },
  methods: {
    async getBountyDetail() {
      const data = await GetBountyDetail(this.$route.query.id);
      if (data.code === 0) {
        this.bountyDetail = data.data;
      } else {
        this.$message.error("接口错误！");
      }
    },
    handleClose() {
      this.dialogVisible = false;
      this.applyForm = new ApplyForm()
    },
    apply() {
      this.dialogVisible = true;
      this.applyForm.bountyTaskId = this.bountyDetail.taskId
    },
    async submit() {
      for (const key in this.applyForm) {
        const element = this.applyForm[key];
        if (element === "" || !element) {
          return this.$message.error("不能为空");
        }
      }
      const data = await GetBountyApply({ ...this.applyForm });
      if (data.code === 0) {
        this.$message.success("报名成功！");
        this.handleClose()
      } else {
        this.$message.error(data.msg);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.TaskDetails {
  width: 600px;
  margin: 0 auto 100px;
  .titleDate {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    .title {
      font-size: 20px;
      font-weight: bold;
      line-height: 42px;
    }
    .date {
      font-size: 14px;
      span {
        font-size: 30px;
      }
    }
  }
  .text {
    font-size: 14px;
    margin-bottom: 20px;
  }
  .num {
    margin-bottom: 20px;
  }
  .githup {
    margin-bottom: 20px;
  }
  .timeSubmit {
    display: flex;
    justify-content: space-between;
    .el-button {
      padding: 10px 50px;
    }
  }
}
</style>
