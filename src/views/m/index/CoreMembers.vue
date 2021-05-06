<!--
 * @Author: yaoyuting
 * @Date: 2021-04-12 21:25:05
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-02 21:29:30
 * @Descripttion: 
-->
<template>
  <div class="CoreMembers">
    <div class="level2title">{{ $t("index.members") }}</div>
    <div class="banner">
      <el-row :gutter="20">
        <el-col :span="4" v-for="msember in msemberList" :key="msember.usersId">
          <img :src="msember.images" alt="" @click="tab(msember.usersId)" />
        </el-col>
      </el-row>
    </div>
    <div v-if="introduce">
      <el-card class="box-card">
        <div class="name">{{ introduce.userName }}</div>
        <div class="position">{{ introduce.job }}</div>
        <div class="about">{{ introduce.introduction }}</div>
      </el-card>
    </div>
    <div class="horizontal_center">
      <el-button type="primary" size="mini" round @click="goMore()">了解更多</el-button>
    </div>
    
  </div>
</template>

<script>
import { GetMsemberDetail } from "@/assets/server/api.js";
export default {
  data() {
    return {
      introduce: null
    };
  },
  props: {
    msemberList: {
      type: Array
    }
  },
  created() {
    this.introduce = this.msemberList[0];
  },
  methods: {
    async tab(id) {
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
  margin: 50px 0;
  .level2title {
    border-bottom: 1px solid #ccc;
    // line-height: 60px;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
  .box-card {
    padding: 30px;
    margin-bottom: 50px;
  }
  .banner {
    .el-col {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      height: 80px;
      width: 80px;
      cursor: pointer;
      border-radius: 50%;
    }
  }
  .name {
    // margin-top: 60px;
    font-size: 26px;
    font-weight: bold;
    line-height: 40px;
  }
  .position {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 20px;
  }
  .about {
    font-size: 14px;
  }
}
</style>
