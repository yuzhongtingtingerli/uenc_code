<!--
 * @Author: yaoyuting
 * @Date: 2021-04-18 18:04:59
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-07 21:45:38
 * @Descripttion: 
-->
<template>
  <div class="Proposal">
    <div class="sub_title">欢迎为提案投票</div>
    <div class="search">
      <div class="tpp">
        <el-input
          v-model="searchForm.title"
          placeholder="输入投票标题"
          class="input_style"
        ></el-input>
        <el-select v-model="searchForm.status" placeholder="选择投票状态" class="select_style">
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
        <!-- <router-link to="/m/community/Proposal/Add"
          ><el-button type="primary">发布</el-button></router-link
        > -->
      </div>
    </div>
    <template v-for="list in proposalList">
      <div class="details" :key="list.id">
        <div class="top" @click="details(list.id)">
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
        <div class="votes">
          <div class="top">
            <div class="left">{{ list.approve }}</div>
            <div class="right">{{ list.oppose }}</div>
          </div>
          <div class="meddile">
            <div
              :class="`${list.userPollStatus === 0 ? 'approve' : 'approve selected'}`"
              :style="
                `width: ${
                  list.approve
                    ? ((list.approve / (list.approve + list.oppose)) * 100).toFixed(2)
                    : 0
                }%`
              "
            ></div>
            <div
              :class="`${list.userPollStatus === 0 ? 'oppose' : 'oppose selected'}`"
              :style="
                `background-color: ${list.userPollStatus === 0 ? 'red' : '#ccc'}; width: ${
                  list.oppose ? ((list.oppose / (list.approve + list.oppose)) * 100).toFixed(2) : 0
                }%`
              "
            ></div>
          </div>
          <div class="bottom">
            <el-button type="primary" @click="getPoll(list, 1)" class="approve">赞成</el-button>
            <el-button type="primary" @click="getPoll(list, 2)" class="oppose">反对</el-button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { GetPollList, GetDictList, GetPoll } from "@/assets/server/api.js";
import { log } from "util";
export default {
  data() {
    return {
      searchForm: {
        title: "",
        status: "2",
        pageNum: 1,
        pageSize: 10
      },
      statusList: [],
      currentPage: 1,
      proposalList: []
    };
  },
  mounted() {
    this.getProposalList();
    this.getDictList();
  },
  created() {
    let loginName = localStorage.getItem("username");
    this.searchForm.loginName = loginName;
  },
  methods: {
    async getPoll(item, type) {
      let loginName = localStorage.getItem("username");
      if (item.userPollStatus != "0") {
        return this.$message.warning("已投票，请勿重复投递！");
      }
      const data = await GetPoll({
        loginName: loginName,
        proposalId: item.id,
        status: type
      });
      if (data.code === 0) {
        this.$message.error("投票成功！");
        this.getProposalList();
      } else {
        this.$message.error(dataList.msg);
      }
    },
    async getProposalList() {
      const dataList = await GetPollList(this.searchForm);
      if (dataList.code === 0) {
        dataList.rows.forEach(item => {
          item.summary = item.summary.replace(/\n/g, "<br>");
        });
        this.proposalList = dataList.rows;
      } else {
        this.$message.error(dataList.msg);
      }
    },
    async getDictList() {
      const dataList = await GetDictList({ dictType: "sys_poll_status" });
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
    add() {},
    details(id) {
      this.$router.push({
        path: "/m/community/Proposal/Details",
        query: { id: id, type: "vote" }
      });
    },
    handleSizeChange(val) {
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
    .votes {
      margin-top: 20px;
      padding: 0 30px;
      .top {
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        font-family: PingFangSC, PingFangSC-Light;
        font-weight: 300;
        color: #053ffb;
        line-height: 34px;
        .left {
          color: #053ffb;
        }
        .right {
          color: #f46e5b;
        }
      }
      .meddile {
        height: 42px;
        display: flex;
        justify-content: space-between;
        .approve {
          overflow: hidden;
          border-radius: 56px;
          background: linear-gradient(90deg, #4d71ff, #003cfb);
        }
        .approve::before {
          -moz-transform: translateY(100%) rotate(180deg);
          -webkit-transform: translateY(100%) rotate(180deg);
          -ms-transform: translateY(100%) rotate(180deg);
          transform: translateY(100%) rotate(180deg);
          bottom: 0;
          content: "";
        }
        .oppose {
          overflow: hidden;
          border-radius: 56px;
          background: linear-gradient(270deg, #f78069, #ed4038);
        }
        .selected {
          background-color: #ccc;
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        .el-button {
          width: 166px;
          height: 54px;
          opacity: 1;
          margin: 0;
          padding: 0;
          font-size: 24px;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 500;
          text-align: center;
          color: #ffffff;
        }
        .approve {
          border-radius: 200px;
          background: linear-gradient(90deg, #4d71ff, #003cfb);
        }
        .oppose {
          border-radius: 200px;
          background: linear-gradient(270deg, #f78069, #ed4038);
        }
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
