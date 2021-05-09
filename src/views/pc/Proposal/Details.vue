<!--
 * @Author: yaoyuting
 * @Date: 2021-04-25 20:37:07
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-03 21:41:32
 * @Descripttion: 
-->
<template>
  <div class="ProposaDetails">
    <div class="banner">
      <div class="details">
        <div>提案人：{{ ProposaData.createBy }}</div>
        <div>创建时间：{{ ProposaData.createTime }}</div>
        <div>状态：{{ getStatus(ProposaData.status) }}</div>
        <div>编号：{{ ProposaData.id }}</div>

        <div class="title">{{ ProposaData.title }}</div>
        <div class="votes" v-if="$route.query.type === 'vote'&&false">
          
          <div class="meddile">
            <div
              class="approve"
              :style="
                `width: ${
                  ProposaData.approve
                    ? ((ProposaData.approve + ProposaData.oppose) / ProposaData.approve) * 100
                    : 0
                }%`
              "
            ></div>
            <div
              class="oppose"
              :style="
                `width: ${
                  ProposaData.oppose
                    ? ((ProposaData.approve + ProposaData.oppose) / ProposaData.oppose) * 100
                    : 0
                }%`
              "
            ></div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="content">
      <div class="w1300">
        <div>
          <div class="title">摘要</div>
          <div class="text" v-html="ProposaData.summary"></div>
        </div>
        <div>
          <div class="title">目标</div>
          <div class="text">{{ ProposaData.target }}</div>
        </div>
        <div>
          <div class="title">计划</div>
          <div class="text">{{ ProposaData.plan }}</div>
        </div>
        <div>
          <div class="title">预算</div>
          <div class="text">{{ ProposaData.budget }}</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { GetProposaDetail, GetDictProposaData, GetPoll } from "@/assets/server/api.js";
import { baseURL } from "@/utils/utils";
export default {
  data() {
    return {
      ProposaData: [],
      statusProposaData: []
    };
  },
  created() {
    this.getProposaProposaData(this.$route.query.id);
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
        this.getProposaProposaData(this.$route.query.id);
      } else {
        this.$message.error(dataList.msg);
      }
    },
    async getProposaProposaData(id) {
      const data = await GetProposaDetail(id);
      if (data.code === 0) {
        this.ProposaData = data.data;
      } else {
        this.$message.error(data.msg);
      }
    },
    async getDictProposaData() {
      const dataProposaData = await GetDictProposaData({ dictType: "sys_proposal_status" });
      if (dataProposaData.code === 0) {
        this.statusProposaData = dataProposaData.rows;
      } else {
        this.$message.error(dataProposaData.msg);
      }
    },
    getStatus(type) {
      let label = "无状态";
      for (const key of this.statusProposaData) {
        if (key.dictValue == type) {
          label = key.dictLabel;
          break;
        }
      }
      return label;
    }
  }
};
</script>

<style lang="less" scoped>
.banner {
  height: 900px;
  background-image: url("../../../assets/images/index/voteD.png");
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  
  .details {
    margin: 260px 274px;
    margin-bottom: 10px;
    color: #fff;
    font-size: 26px;
    line-height: 60px;
    .title {
      margin-top: 70px;
      font-weight: bold;
      font-size: 80px;
    }
  }
  .votes {
    margin-top: 74px;
    .meddile {
      border-radius: 56px;
      height: 112px;
      overflow: hidden;
      background: #ccc;
      display: flex;
      .approve{
        height: 112px;
        background: linear-gradient(90deg,#4d71ff, #003cfb);
      }
      .oppose{
        height: 112px;
        background: linear-gradient(270deg,#f78069, #ed4038);
      }
    }
  }
}
.content {
  background-image: url("../../../assets/images/index/votebg.png");
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  padding: 180px 0;
  .title{
    font-size: 32px;
    color: #333333;
    position: relative;
    margin-top: 60px;
  }
  .title::before{
    position: absolute;
    left: 0;
    bottom: 8px;
    content: '';
    width: 97px;
    height: 7px;
    background: linear-gradient(270deg,rgba(141,146,255,0.00), #5459ff);
  }
  .text{
    background: #f9f9f9;
    padding: 20px;
    font-size: 24px;
    color: #656565;
    line-height: 40px;
    margin-top: 22px;
  }
}
</style>
