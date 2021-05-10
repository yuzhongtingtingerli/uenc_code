<!--
 * @Author: yaoyuting
 * @Date: 2021-04-18 18:04:59
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-10 20:28:52
 * @Descripttion: 
-->
<template>
  <div class="Proposal">
    <div class="search">
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="">
          <el-input
            class="title_bn"
            v-model="searchForm.title"
            placeholder="输入提案标题"
            style="width: 320px"
          ></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-select
            class="status_bn"
            v-model="searchForm.status"
            placeholder="选择提案状态"
            clearable
            style="width: 320px"
          >
            <el-option
              class="statusItem"
              v-for="item in statusList"
              :key="item.dictValue"
              :label="item.dictLabel"
              :value="item.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <span class="btn" @click="search">查询</span>
        </el-form-item>
      </el-form>
    </div>
    <div class="content">
      <div class="w1300">
        <template v-for="list in proposalList">
          <div class="details" :key="list.id">
            <div class="head">
              <div class="num">{{ list.id }}</div>
              <div class="cen">
                <div class="title" @click="details(list.id)">{{ list.title }}</div>
                <div class="bottom">
                  <div class="people">提议人:{{ list.name }}</div>
                  <div class="date">投票截止时间：{{ list.deadline }}</div>
                  <div class="status">状态：{{ getStatus(list.status) }}</div>
                </div>
              </div>
            </div>

            <div class="text" v-html="list.summary">{{ list.summary }}</div>

            <div class="votes">
              <div class="num">
                <span>{{ list.approve }}</span>
                <span class="r">{{ list.oppose }}</span>
              </div>
              <div class="meddile">
                <div
                  class="approve"
                  :style="
                    `width: ${
                      list.approve
                        ? (
                            (Number(list.approve) / (list.approve + Number(list.oppose))) *
                            100
                          ).toFixed(2)
                        : 0
                    }%`
                  "
                ></div>
                <div class="center" v-if="list.approve > 0 && list.oppose > 0"></div>
                <div
                  class="oppose"
                  :style="
                    ` width: ${
                      list.oppose
                        ? (
                            (list.oppose / (Number(list.approve) + Number(list.oppose))) *
                            100
                          ).toFixed(2)
                        : 0
                    }%`
                  "
                ></div>
              </div>
              <div class="foot">
                <div @click="isPoll(1, list)">
                  {{ list.userPollStatus === 1 ? "已" : "" }}赞成
                  <img src="@/assets/images/icon/点赞 (1).png" alt="" />
                </div>
                <div @click="isPoll(2, list)" class="r">
                  <img src="@/assets/images/icon/点赞.png" alt="" />{{
                    list.userPollStatus === 2 ? "已" : ""
                  }}反对
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>

      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="total"
          background
        >
        </el-pagination>
      </div>
    </div>
    <el-dialog
      custom-class="vote-dialog"
      title="投票数量"
      :visible="dialogVisible"
      width="600px"
      :before-close="close"
    >
      <el-input v-model="numPoll" placeholder="请输入投票数量（不小于1000）"></el-input>
      <div slot="footer" class="dialog-footer">
        <div class="dialog-btn" @click="getPoll">绑 定</div>
        <div class="dialog-btn close" @click="close">取 消</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { GetPollList, GetDictList, GetPoll, DetailInfo } from "@/assets/server/api.js";
import { log } from "util";
export default {
  data() {
    return {
      statusPoll: "",
      itemPoll: null,
      numPoll: "",
      searchForm: {
        title: "",
        status: "",
        pageNum: 1,
        pageSize: 10
      },
      statusList: [],
      currentPage: 1,
      proposalList: [],
      total: 0,
      dialogVisible: false,
      pollNumber: 0,
      poll: false,
      exec: false
    };
  },
  created() {
    let loginName = localStorage.getItem("username");
    this.searchForm.loginName = loginName;
  },
  mounted() {
    this.getProposalList();
    this.getDictList();
  },
  methods: {
    async isPoll(status, list) {
      this.statusPoll = status;
      this.itemPoll = list;
      const data = await DetailInfo({
        loginName: this.searchForm.loginName,
        id: list.id
      });
      if (data.code == 0) {
        this.pollNumber = data.data.pollNumber;
        this.poll = data.data.poll;
        this.exec = data.data.exec;
        if (this.poll) {
          if (this.pollNumber / 1 < 1000) {
            this.$message.error("余额至少1000以上才可以投票哦！");
          } else {
            this.dialogVisible = true;
          }
        } else {
          this.$message.error("您没有投票权限！");
        }
      }
    },
    close() {
      this.statusPoll = 0;
      this.dialogVisible = false;
      this.itemPoll = null;
      this.numPoll = "";
    },
    async getPoll() {
      let loginName = localStorage.getItem("username");
      if (this.itemPoll.userPollStatus != "0") {
        return this.$message.warning("已投票，请勿重复投递！");
      }
      if (this.numPoll < 1000) {
        return this.$message.warning("投票数量不得小于1000");
      }
      const data = await GetPoll({
        loginName: loginName,
        proposalId: this.itemPoll.id,
        status: this.statusPoll,
        num: this.numPoll,
        mark: this.itemPoll.status
      });
      if (data.code === 0) {
        this.$message.success("投票成功！");
        this.getProposalList();
        this.close();
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
        this.total = dataList.total;
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
    details(id) {
      this.$router.push({
        path: "/pc/community/Proposal/Details",
        query: { id: id, type: "vote", exec: this.exec }
      });
    },
    handleSizeChange(val) {
      this.searchForm.pageSize = val;
      this.getProposalList();
    },
    handleCurrentChange(val) {
      this.searchForm.pageNum = val;
      this.getProposalList();
    }
  }
};
</script>
<style lang="less">
.statusItem.el-select-dropdown__item {
  height: 48px;
  line-height: 48px;
  font-size: 22px;
}
.Proposal {
  .title_bn {
    width: 670px !important;
    height: 78px;
    input {
      height: 78px;
      font-size: 32px;
    }
    input::placeholder {
      font-size: 32px;
      color: #9a9a9a;
      height: 78px;
      line-height: 78px;
    }
  }

  .status_bn {
    width: 270px !important;
    height: 78px;
    input {
      height: 78px;
      font-size: 32px;
    }
    i {
      font-size: 24px !important;
    }
    input::placeholder {
      font-size: 32px;
      color: #9a9a9a;
      height: 78px;
      line-height: 78px;
    }
  }
}
.vote-dialog {
  width: 600px;
  height: 417px;
  border-radius: 25px;
  .el-dialog__header {
    padding: 30px 60px;
    .el-dialog__title {
      font-size: 28px;
    }
    .el-dialog__headerbtn {
      top: 30px;
    }
    .el-dialog__close {
      font-size: 26px;
      color: #305bbc;
    }
  }
  .el-dialog__body {
    padding: 40px 60px 60px;
    .el-input__inner {
      width: 480px;
      height: 70px;
      background: #ffffff;
      border: 1px solid #999999;
      border-radius: 3px;
      font-size: 24px;
      border: 1px solid #999999;
    }
  }
  .el-dialog__footer {
    padding-ottom: 60px;
    .dialog-footer {
      display: flex;
      justify-content: center;
    }

    .dialog-btn {
      width: 158px;
      line-height: 70px;
      height: 70px;
      text-align: center;
      background: #4c67ef;
      border-radius: 4px;
      font-size: 28px;
      color: #ffffff;
      margin: 0 28px;
      cursor: pointer;
    }
    .close {
      background: #afb7e0;
    }
  }
}
</style>
<style lang="less" scoped>
.Proposal {
  .btn {
    width: 200px;
    height: 78px;
    border: 2px solid #ffffff;
    border-radius: 10px;
    font-size: 32px;
    text-align: center;
    color: #ffffff;
    line-height: 78px;
    display: inline-block;
    margin-right: 20px;
  }
  .search {
    height: 900px;
    background-image: url("../../assets/images/index/voteBanner.png");
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    background-image: url("../../assets/images/index/votebg.png");
    background-size: cover;
    background-position: center center;
    overflow: hidden;
  }
  .details {
    margin-top: 86px;
    .head {
      display: flex;
      align-items: center;
      .num {
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        background-color: #5459ff;
        color: #fff;
        font-size: 32px;
        font-weight: bold;
        border-radius: 6px;
      }
      .cen {
        padding: 0 10px;
        flex: 1;
        .title {
          font-size: 32px;
          color: #333;
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          font-size: 24px;
          color: #323232;
        }
      }
    }
    .text {
      padding: 18px 10px;
    }
    .votes {
      .num {
        display: flex;
        justify-content: space-between;
        font-size: 44px;
        color: #053ffb;
        .r {
          color: #f1594c;
        }
      }
      .meddile {
        height: 40px;
        border-radius: 56px;
        overflow: hidden;
        background: #ccc;
        display: flex;
        .approve {
          height: 40px;
          background: linear-gradient(90deg, #4d71ff, #003cfb);
        }
        .oppose {
          height: 40px;
          background: linear-gradient(270deg, #f78069, #ed4038);
        }
      }
      .foot {
        display: flex;
        justify-content: space-between;
        margin-top: 14px;
        div {
          width: 164px;
          height: 54px;
          background: linear-gradient(90deg, #4d71ff, #003cfb);
          border-radius: 56px;
          font-size: 24px;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          img {
            width: 24px;
            margin: 0 6px;
          }
        }
        .r {
          background: linear-gradient(270deg, #f78069, #ed4038);
        }
      }
    }
  }
  .page {
    margin-top: 150px;
    text-align: center;
    margin-bottom: 160px;
  }
}
</style>
