<!--
 * @Author: yaoyuting
 * @Date: 2021-04-18 18:04:59
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-03 22:20:51
 * @Descripttion: 
-->
<template>
  <div class="Proposal">
    <div class="search">
      <el-form :model="searchForm" class="demo-form-inline">
        <el-form-item label="">
          <el-input v-model="searchForm.title" placeholder="输入投票标题"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-select
            v-model="searchForm.status"
            placeholder="选择投票状态"
            clearable
            style="width: 100%"
          >
            <el-option
              v-for="item in statusList"
              :key="item.dictValue"
              :label="item.dictLabel"
              :value="item.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="content">
      <template v-for="list in proposalList">
        <div class="details" :key="list.id">
          <div class="num">{{ list.id }}</div>
          <div class="title" @click="details(list.id)">{{ list.title }}</div>
          <div class="text" v-html="list.summary">{{ list.summary }}</div>
          <div class="bottom">
            <div class="people">提议人:{{ list.name }}</div>
            <div class="date">投票截止时间：{{ list.deadline }}</div>
            <div class="status">状态：{{ getStatus(list.status) }}</div>
          </div>
          <div class="votes">
            <div
              class="left"
              @click="getPoll(list, 1)"
              :style="`color: ${list.userPollStatus === 0 ? 'green' : '#ccc'}`"
            >
              {{
                list.approve ? ((list.approve / (list.approve + list.oppose)) * 100).toFixed(2) : 0
              }}% 赞成
            </div>
            <div class="meddile">
              <div
                class="approve"
                :style="
                  `height: 10px;background-color: ${
                    list.userPollStatus === 0 ? 'green' : '#ccc'
                  }; width: ${
                    list.approve
                      ? ((list.approve / (list.approve + list.oppose)) * 100).toFixed(2)
                      : 0
                  }%`
                "
              ></div>
              <div
                class="oppose"
                :style="
                  `height: 10px;background-color: ${
                    list.userPollStatus === 0 ? 'red' : '#ccc'
                  }; width: ${
                    list.oppose
                      ? ((list.oppose / (list.approve + list.oppose)) * 100).toFixed(2)
                      : 0
                  }%`
                "
              ></div>
            </div>
            <div class="right" style="color: red;" @click="getPoll(list, 2)">
              反对
              {{
                list.oppose ? ((list.oppose / (list.approve + list.oppose)) * 100).toFixed(2) : 0
              }}%
            </div>
          </div>
        </div>
      </template>

      <!-- <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[2, 5, 10, 20]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          background
        >
        </el-pagination>
      </div> -->
    </div>
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
        status: "",
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
  created () {
    let loginName = localStorage.getItem("username");
    this.searchForm.loginName = loginName
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
  padding: 30px;
  margin: 50px auto;
  .el-button {
    // padding-left: 30px;
    // padding-right: 30px;
    // margin-left: 20px;
    width: 100%;
  }
  .details {
    margin-top: 20px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 2px 2px 10px 2px #999;
    color: #000;
    position: relative;
    overflow: hidden;
    .num {
      position: absolute;
      top: 0;
      left: 0;
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: purple;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      border-radius: 20px 0 0 0;
    }
    .title {
      line-height: 40px;
      text-align: center;
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }
    .text {
      padding: 0 20px;
      font-size: 14px;
      margin-bottom: 20px;
    }
    .bottom {
      padding: 0 20px;
      // display: flex;
      padding-bottom: 10px;
      font-weight: bold;
      font-size: 14px;
      .people {
        // flex: 1;
      }
      .status {
        // flex: 1;
        // text-align: right;
      }
    }
    .votes {
      height: 50px;
      line-height: 50px;
      font-size: 12px;
      background-color: #efefef;
      margin: 10px 30px;
      display: flex;
      justify-content: center;
      .meddile {
        display: flex;
        justify-content: flex-start;
        height: 10px;
        width: 300px;
        border-radius: 20px;
        overflow: hidden;
        margin: 20px 20px;
      }
    }
  }
  .page {
    margin-top: 50px;
    text-align: center;
  }
}
</style>
