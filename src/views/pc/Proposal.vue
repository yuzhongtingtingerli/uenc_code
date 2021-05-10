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
          <router-link class="btn" to="/pc/community/Proposal/Add"
            >+ 发布</router-link
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="content">
      <template v-for="list in proposalList">
        <div class="details" @click="details(list.id)" :key="list.id">
          <div class="head">
            <div class="num">{{list.id}}</div>
            <div class="cen">
              <div class="title">{{list.title}}</div>
              <div class="date">{{list.createTime}}</div>
            </div>
            <div class="status">状态：{{getStatus(list.status)}}</div>
          </div>
          <div class="bottom">
            <div class="text" v-html="list.summary">{{list.summary}}</div>
            <div class="people">提议人:{{list.name}}</div>
          </div>
        </div>
      </template>

      <!-- <div class="page">
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
      </div> -->
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
<style lang="less">
.statusItem.el-select-dropdown__item{
  height: 48px;
  line-height: 48px;
  font-size: 22px;
}
  .Proposal{
    .title_bn{
      width: 670px !important;
      height: 78px;
      input{
        height: 78px;
        font-size: 32px;
      }
      input::placeholder{
        font-size: 32px;
        color: #9a9a9a;
        height: 78px;
        line-height: 78px;
      }       
    }
    
    .status_bn{
      width: 270px !important;
      height: 78px;
      input{
        height: 78px;
        font-size: 32px;
        
      }
      i{
          font-size: 24px!important;
        }
      input::placeholder{
        font-size: 32px;
        color: #9a9a9a;
        height: 78px;
        line-height: 78px;
      } 
      
    }
  }
</style>
<style lang="less" scoped>
.Proposal {
  .search{
    height: 900px;
    background-image: url("../../assets/images/index/背景@2x.png");
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  .content{
    background-image: url("../../assets/images/index/votebg.png");
    background-size: cover;
    background-position: center center;
    overflow: hidden;
    padding-top: 96px ;
  }
  .details {
    width: 1400px;
    cursor: pointer;
    margin: 20px auto;
    
    border-radius: 20px;
    color: #000;
    .head{
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
      .cen{
        flex: 1;
        padding: 0 20px;
        .title{
          font-size: 32px;
          color: #333;
        }
        .date{
          font-size: 24px;
          color: #666;
        }
      }
      .status{
        font-size: 28px;
        color: #323232;
      }
    }
    .bottom{
      background: #f6f6f6;
      padding: 12px 32px;
      margin-top: 34px;
      .text{
        font-size: 24px;
        color: #656565;
      }
      .people{
        font-size: 24px;
        color: #323232;
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
