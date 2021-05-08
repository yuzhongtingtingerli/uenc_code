<!--
 * @Author: yaoyuting
 * @Date: 2021-04-18 18:04:59
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-07 19:36:14
 * @Descripttion: 
-->
<template>
  <div class="Proposal">
    <div class="sub_title">欢迎发布新的提案</div>
    <div class="search">
      <div class="tpp">
        <el-input
          v-model="searchForm.title"
          placeholder="输入提案标题"
          class="input_style"
        ></el-input>
        <el-select v-model="searchForm.status" placeholder="选择提案状态" class="select_style">
          <el-option
            v-for="item in statusList"
            :key="item.dictValue"
            :label="item.dictLabel"
            :value="item.dictValue"
          ></el-option>
        </el-select>
      </div>
      <div class="bottom">
        <el-button type="primary" @click="search">查询</el-button>
        <router-link to="/m/community/Proposal/Add"
          ><el-button type="primary">发布</el-button></router-link
        >
      </div>
    </div>
    <template v-for="list in proposalList">
      <div class="details" @click="details(list.id)" :key="list.id">
        <div class="top">
          <div class="num">{{ list.id }}</div>
          <div class="right">
            <div class="title">{{ list.title }}</div>
            <div class="date">{{ list.createTime }}</div>
          </div>
        </div>
        <div class="content">
          <div class="bottom">
            <div class="people">提议人:{{ list.name }}</div>
            <div class="status">状态：{{ getStatus(list.status) }}</div>
          </div>
          <div class="text" v-html="list.summary">{{ list.summary }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { GetProposalList, GetDictList } from "@/assets/server/api.js";
import { log } from "util";
export default {
  data() {
    return {
      searchForm: {
        title: "",
        status: "",
        pageNum: 1,
        pageSize: 10
      },
      statusList: [],
      currentPage: 1,
      proposalList: [],
      total: 0
    };
  },
  mounted() {
    this.getProposalList();
    this.getDictList();
  },
  methods: {
    async getProposalList() {
      const dataList = await GetProposalList(this.searchForm);
      if (dataList.code === 0) {
        dataList.rows.forEach(item => {
          item.summary = item.summary.replace(/\n/g, "<br>");
        });
        this.proposalList = dataList.rows;
        this.total = dataList.total;
      } else {
        this.$message.error(dataList.msg);
      }
    },
    async getDictList() {
      const dataList = await GetDictList({ dictType: "sys_proposal_status" });
      if (dataList.code === 0) {
        this.statusList = dataList.rows;
      } else {
        this.$message.error(dataList.msg);
      }
    },
    search() {
      this.getProposalList();
    },
    getStatus(type) {
      let label = "无状态";
      for (const key of this.statusList) {
        if (key.dictValue == type) {
          label = key.dictLabel;
          break;
        }
      }
      return label;
    },
    details(id) {
      this.$router.push({
        path: "/m/community/Proposal/Details",
        query: { id: id, type: "Proposal" }
      });
    },
    handleSizeChange(val) {
      this.searchForm.pageSize = val;
      this.getProposalList();
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="less" scoped>
.Proposal {
  width: 750px;
  padding-top: 60px;
  .sub_title {
    font-size: 28px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    color: #333333;
    line-height: 40px;
    margin-left: 30px;
    margin-bottom: 28px;
  }
  .search {
    .tpp {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 30px;
      .el-input {
        width: auto;
      }
    }
    .bottom {
      text-align: center;
      margin-bottom: 120px;
      .el-button {
        padding: 0;
        margin: 0;
        width: 160px;
        height: 64px;
        line-height: 64px;
        opacity: 1;
        background: #4c67ef;
        border: 4px solid #ffffff;
        border-radius: 20px;
        font-size: 24px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #ffffff;
        line-height: 34px;
      }
    }
  }
  .details {
    cursor: pointer;
    color: #000;
    margin-bottom: 60px;
    .top {
      display: flex;
      justify-content: flex-start;
      .num {
        margin-left: 34px;
        width: 72px;
        height: 72px;
        opacity: 1;
        background: #5459ff;
        border-radius: 12px;
        font-size: 24px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: center;
        color: #ffffff;
        line-height: 72px;
        margin-right: 30px;
      }
      .title {
        font-size: 28px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: left;
        color: #333333;
        line-height: 40px;
        margin-bottom: 8px;
      }
      .date {
        font-size: 24px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #666666;
        line-height: 34px;
      }
    }
    .content {
      margin-top: 24px;
      padding: 30px;
      font-size: 24px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #656565;
      line-height: 36px;
      background: #f6f6f6;
      .bottom {
        display: flex;
        justify-content: space-between;
      }
      .text {
        height: 180px;
        overflow: hidden;
        margin-top: 20px;
      }
    }
  }
}
</style>

<style lang="less">
.input_style {
  margin-left: 30px;
  .el-input__inner {
    line-height: 64px;
    width: 510px;
    height: 64px;
    background: #f3f4f5;
    border-radius: 8px;
  }
}
.select_style {
  margin-left: 10px;
  .el-input__inner {
    border: none;
    width: 202px;
    height: 64px;
    font-size: 20px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #9a9a9a;
    // line-height: 64px;
    padding-left: 0;
  }
  .el-input__icon {
    line-height: 64px;
  }
}
</style>
