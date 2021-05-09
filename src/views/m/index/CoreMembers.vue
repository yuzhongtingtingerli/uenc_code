<!--
 * @Author: yaoyuting
 * @Date: 2021-04-12 21:25:05
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-09 14:59:30
 * @Descripttion: 
-->
<template>
  <div class="CoreMembers">
    <router-link to="/m/CoreMembersDetails"
      ><div class="sub_title">{{ $t("index.members") }}</div></router-link
    >
    <div class="banner">
      <el-row :gutter="20">
        <el-col :span="6" v-for="msember in msemberList" :key="msember.usersId">
          <img
            :src="msember.images"
            alt=""
            :class="msember.usersId == id ? 'active' : ''"
            @click="tab(msember.usersId)"
          />
        </el-col>
      </el-row>
    </div>
    <div v-if="introduce" class="content">
      <div class="top">
        <div class="name">{{ introduce.userName }}</div>
        <div class="position">{{ introduce.job }}</div>
      </div>

      <div class="about">{{ introduce.introduction }}</div>
    </div>
    <!-- <div class="horizontal_center">
      <el-button type="primary" size="mini" round @click="goMore()">了解更多</el-button>
    </div> -->
  </div>
</template>

<script>
import { GetMsemberDetail } from "@/assets/server/api.js";
export default {
  data() {
    return {
      introduce: null,
      id: ""
    };
  },
  props: {
    msemberList: {
      type: Array
    }
  },
  created() {
    this.introduce = this.msemberList[0];
    this.id = this.msemberList[0].usersId;
  },
  methods: {
    async tab(id) {
      this.id = id;
      const data = await GetMsemberDetail(id);
      if (data.code === 0) {
        this.introduce = data.data;
      } else {
        this.$message.error("接口错误！");
      }
    },
    goMore() {
      this.$router.push({
        path: "/m/CoreMembersDetails"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.CoreMembers {
  margin: 90px 30px 80px;
  .sub_title {
    font-size: 34px;
    font-family: PingFang-SC-Heavy, PingFang-SC;
    font-weight: 800;
    color: #6624fa;
    line-height: 48px;
    margin-bottom: 60px;
  }
  .banner {
    .el-col {
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 32px;
    }
    img {
      height: 112px;
      width: 112px;
      cursor: pointer;
      border-radius: 50%;
    }
    .active {
      height: 140px;
      width: 140px;
    }
  }
  .content {
    .top {
      display: flex;
      justify-content: flex-start;
      margin-top: 32px;
      font-size: 28px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #333333;
      line-height: 40px;
      .name {
        margin-right: 20px;
      }
    }
    .about {
      margin-top: 20px;
      font-size: 24px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 36px;
    }
  }
}
</style>
