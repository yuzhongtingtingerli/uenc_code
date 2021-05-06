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
      <div class="placeholder">编号：{{ ProposaData.id }}</div>
      <div class="details">
        <div class="title">{{ ProposaData.title }}</div>
        <div class="createBy">提案人：{{ ProposaData.createBy }}</div>
        <div class="date">创建时间：{{ ProposaData.createTime }}</div>
        <div class="status">状态：{{ getStatus(ProposaData.status) }}</div>
        <div class="votes" v-if="$route.query.type === 'vote'">
          <div
            class="left"
            :style="`color: ${ProposaData.userPollStatus === 0 ? 'green' : '#ccc'}`"
          >
            ({{ ProposaData.approve ? ProposaData.approve : 0 }})赞成
          </div>
          <div class="meddile">
            <div
              class="approve"
              :style="
                `height: 10px;background-color: ${
                  ProposaData.userPollStatus === 0 ? 'green' : '#ccc'
                }; width: ${
                  ProposaData.approve
                    ? ((ProposaData.approve + ProposaData.oppose) / ProposaData.approve) * 100
                    : 0
                }%`
              "
            ></div>
            <div
              class="oppose"
              :style="
                `height: 10px;background-color: red; width: ${
                  ProposaData.oppose
                    ? ((ProposaData.approve + ProposaData.oppose) / ProposaData.oppose) * 100
                    : 0
                }%`
              "
            ></div>
          </div>
          <div class="right" style="color: red;">
            反对 ({{ ProposaData.oppose ? ProposaData.oppose : 0 }})
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <el-card class="box-card">
        <div class="lebelTitle">摘要</div>
        <div class="text" v-html="ProposaData.summary"></div>
      </el-card>
      <el-card class="box-card">
        <div class="lebelTitle">目标</div>
        <div class="text">{{ ProposaData.target }}</div>
        <div class="lebelTitle">计划</div>
        <div class="text">{{ ProposaData.plan }}</div>
        <div class="lebelTitle">预算</div>
        <div class="text">{{ ProposaData.budget }}</div>
      </el-card>
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
  //   height: 350px;
  background-image: url("../../../assets/images/index/背景@2x.png");
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  .placeholder {
    margin: 0 120px;
    align-items: flex-end;
    display: flex;
    padding-bottom: 20px;
    padding-top: 100px;
    box-sizing: border-box;
  }
  .details {
    border-top: 1px solid #fff;
    margin: 0 120px;
    margin-bottom: 10px;
    .date {
      line-height: 50px;
      font-size: 14px;
    }
    .title {
      font-size: 40px;
      font-weight: bold;
      line-height: 60px;
    }
    .text {
      font-size: 12px;
      line-height: 20px;
      height: 100px;
      overflow: hidden;
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
      height: 10px;
      width: 500px;
      border-radius: 20px;
      overflow: hidden;
      margin: 20px 20px;
    }
  }
}
.content {
  margin: 0 120px;
  font-size: 14px;
  .box-card {
    border-radius: 20px;
    padding: 30px;
    margin-bottom: 30px;
  }
  .lebelTitle {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .text {
    margin-bottom: 30px;
  }
}
</style>
