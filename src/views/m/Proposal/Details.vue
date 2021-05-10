<!--
 * @Author: yaoyuting
 * @Date: 2021-04-25 20:37:07
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-10 11:22:54
 * @Descripttion: 
-->
<template>
  <div class="ProposaDetails">
    <div class="banner">
      <div class="placeholder"></div>
      <div class="details">
        <div class="createBy">提案人：{{ ProposaData.createBy }}</div>
        <div class="date">创建时间：{{ ProposaData.createTime }}</div>
        <div class="status">状态：{{ getStatus(ProposaData.status) }}</div>
        <div class="num">编号：{{ ProposaData.id }}</div>
        <div class="title">{{ ProposaData.title }}</div>
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
                    ? (
                        (ProposaData.approve / (ProposaData.approve + ProposaData.oppose)) *
                        100
                      ).toFixed(2)
                    : 0
                }%`
              "
            ></div>
            <div
              class="oppose"
              :style="
                `height: 10px;background-color: ${
                  ProposaData.userPollStatus === 0 ? 'red' : '#ccc'
                }; width: ${
                  ProposaData.oppose
                    ? (
                        (ProposaData.oppose / (ProposaData.approve + ProposaData.oppose)) *
                        100
                      ).toFixed(2)
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
    <div class="content_bg">
      <div class="content">
        <div class="top">
          <div class="lebelTitle">摘要</div>
          <div class="bg"></div>
        </div>
        <div class="text" v-html="ProposaData.summary"></div>
        <div class="top">
          <div class="lebelTitle">目标</div>
          <div class="bg"></div>
        </div>
        <div class="text">{{ ProposaData.target }}</div>
        <div class="top">
          <div class="lebelTitle">计划</div>
          <div class="bg"></div>
        </div>
        <div class="text">{{ ProposaData.plan }}</div>
        <div class="top">
          <div class="lebelTitle">预算</div>
          <div class="bg"></div>
        </div>
        <div class="text">{{ ProposaData.budget }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetProposaDetail, GetDictProposaData } from "@/assets/server/api.js";
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
  height: 660px;
  background-image: url("../../../assets/imagesm/ta/banner2.png");
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  .placeholder {
    flex: 1;
  }
  .details {
    padding: 30px;
    margin-bottom: 10px;
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ccc;
    line-height: 60px;
    .title {
      font-size: 60px;
      font-family: PingFang-SC-Heavy, PingFang-SC;
      font-weight: 800;
      color: #ffffff;
      line-height: 84px;
      margin-top: 46px;
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
      width: 400px;
      border-radius: 20px;
      overflow: hidden;
      margin: 20px 20px;
    }
  }
}
.content_bg {
  background-image: url("../../../assets/imagesm/ta/bg2.png");
  background-size: 750px;
}
.content {
  padding-bottom: 120px;
  .top {
    height: 128px;
    padding-top: 54px;
    padding-bottom: 24px;
  }
  .lebelTitle {
    font-size: 36px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 50px;
    margin-left: 30px;
  }
  .bg {
    margin-left: 30px;
    width: 97 * 2px;
    height: 16px;
    margin-top: -20px;
    background: linear-gradient(270deg, rgba(141, 146, 255, 0), #5459ff);
  }
  .text {
    padding: 32px;
    background: #f6f6f6;
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #656565;
    line-height: 40px;
  }
}
</style>
