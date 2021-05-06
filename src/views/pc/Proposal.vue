<!--
 * @Author: yaoyuting
 * @Date: 2021-04-18 18:04:59
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-03 21:46:40
 * @Descripttion: 
-->
<template>
  <div class="Proposal">
    <div class="search">
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="">
          <el-input
            v-model="searchForm.title"
            placeholder="输入提案标题"
            style="width: 320px"
          ></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-select
            v-model="searchForm.status"
            placeholder="选择提案状态"
            clearable
            style="width: 320px"
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
          <router-link to="/pc/community/Proposal/Add"
            ><el-button type="primary">发布+</el-button></router-link
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="content">
      <template v-for="list in proposalList">
        <div class="details" @click="details(list.id)" :key="list.id">
          <div class="num">{{list.id}}</div>
          <div class="title">{{list.title}}</div>
          <div class="text" v-html="list.summary">{{list.summary}}</div>
          <div class="bottom">
            <div class="people">提议人:{{list.name}}</div>
            <div class="date">创建时间：{{list.createTime}}</div>
            <div class="status">状态：{{getStatus(list.status)}}</div>
          </div>
        </div>
      </template>

      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          background
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { GetProposalList, GetDictList } from "@/assets/server/api.js";
import { log } from 'util';
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
        dataList.rows.forEach( item => {
          item.summary = item.summary
                    .replace(/\n/g, "<br>") ;
        })
        this.proposalList = dataList.rows;
        this.total = dataList.total
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
      this.getProposalList()
    },
    getStatus(type) {
      let label = '无状态'
      for (const key of this.statusList) {
        if(key.dictValue == type) {
          label = key.dictLabel
          break;
        }
      }
      return label
    },
    details(id) {
      this.$router.push({
        path: '/pc/community/Proposal/Details',
        query: {id:id,type: 'Proposal'}
      })
    },
    handleSizeChange(val) {
      this.searchForm.pageSize = val
      this.getProposalList()
    },
    handleCurrentChange(val) {
      this.searchForm.pageNum = val
      this.getProposalList()
    }
  }
};
</script>

<style lang="less" scoped>
.Proposal {
  width: 900px;
  margin: 200px auto;
  .el-button {
    padding-left: 30px;
    padding-right: 30px;
    margin-left: 20px;
  }
  .details {
    cursor: pointer;
    margin-top: 20px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 2px 2px 10px 2px #999;
    color: #000;
    position: relative;
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
    }
    .text {
      padding: 0 20px;
      font-size: 14px;
      margin-bottom: 20px;
    }
    .bottom {
      padding: 0 20px;
      display: flex;
      padding-bottom: 10px;
      font-weight: bold;
      font-size: 14px;
      .people {
        flex: 1;
      }
      .status {
        flex: 1;
        text-align: right;
      }
    }
  }
  .page {
    margin-top: 50px;
    text-align: center;
  }
}
</style>
