<!--
 * @Author: yaoyuting
 * @Date: 2021-04-18 18:04:59
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-10 10:53:43
 * @Descripttion: 
-->
<template>
  <div class="Proposal">
    <div class="banner">
      <div class="sub_title">欢迎发布新的提案</div>
      <div class="search">
        <div class="tpp">
          <input
            type="text"
            v-model="searchForm.title"
            class="el-input__inner"
            placeholder="输入提案标题"
          />
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
            ><el-button type="primary"><i class="el-icon-plus"></i> 发布</el-button></router-link
          >
        </div>
      </div>
    </div>
    <div class="detalis_bg">
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
  .banner {
    height: 372 * 2px;
    background-image: url("../../assets/imagesm/ta/banner.png");
    background-size: cover;
    background-position: center center;
    padding: 0 32px;
    .sub_title {
      font-size: 44px;
      font-family: PingFang-SC-Heavy, PingFang-SC;
      font-weight: 800;
      color: #ffffff;
      line-height: 60px;
      margin-bottom: 28px;
      padding-top: 148 * 2px;
    }
    .search {
      .tpp {
        margin-bottom: 54px;
        .el-input__inner {
          line-height: 64px;
          width: 343 * 2px;
          height: 38 * 2px;
          background: #ffffff;
          border-radius: 8px;
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 34px;
          margin-bottom: 30px;
        }
        .select_style {
          width: 126 * 2px;
          height: 76px;
          background: #ffffff;
          border-radius: 8px;
        }
      }
      .bottom {
        text-align: center;
        margin-bottom: 120px;
        display: flex;
        justify-content: space-around;
        .el-button {
          padding: 0;
          margin: 0;
          width: 109 * 2px;
          height: 64px;
          border-radius: 8px;
          border: 4px solid #ffffff;
          background-color: rgba(0, 0, 0, 0);
          font-size: 28px !important;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
        }
      }
    }
  }
  .detalis_bg {
    background-image: url("../../assets/imagesm/ta/bg.png");
    // background-size: cover;
    // background-position: center center;
    background-size: 750px;
  }
  .details {
    cursor: pointer;
    padding-bottom: 86px;
    .top {
      display: flex;
      justify-content: flex-start;
      height: 77*2px;
      padding-top: 48px;
      .num {
        width: 72px;
        height: 72px;
        line-height: 72px;
        text-align: center;
        background: #6624fa;
        border-radius: 12px;
        margin-left: 30px;
        margin-right: 30px;
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
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
      line-height: 34px;
      background: #f6f6f6;
      .bottom {
        display: flex;
        justify-content: space-between;
      }
      .text {
        height: 206px;
        overflow: hidden;
        margin-top: 20px;
      }
    }
  }
}
</style>

<style lang="less">
.banner {
  .el-input {
    position: static;
  }
  .el-select {
    position: static;
  }
  .el-input__suffix {
    position: static;
    margin-left: -60px;
  }
  .el-input__inner {
    font-size: 24px !important;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 34px;
  }
}
</style>
