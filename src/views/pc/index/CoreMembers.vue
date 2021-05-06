<!--
 * @Author: yaoyuting
 * @Date: 2021-04-12 21:25:05
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-02 12:09:56
 * @Descripttion: 
-->
<template>
  <div class="CoreMembers">
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="level2title">{{ $t("index.members") }}</div>
        <div class="banner">
          <el-row :gutter="20">
            <el-col :span="6" v-for="msember in msemberList" :key="msember.usersId">
              <img :src="msember.images" alt="" @click="tab(msember.usersId)" />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24"><el-button type="primary" round @click="goMore()">了解更多</el-button></el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12" :offset="2" class="all_center">
        <div v-if="introduce">
          <div class="name">{{ introduce.userName }}</div>
          <div class="position">{{ introduce.job }}</div>
          <div class="about">{{ introduce.introduction }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { GetMsemberDetail } from '@/assets/server/api.js';
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
  created () {
    this.introduce = this.msemberList[0];
  },
  methods: {
    async tab(id) {
      const data = await GetMsemberDetail(id)
      if(data.code === 0) {
        this.introduce = data.data
      } else {
        this.$message.error('接口错误！')
      }
    },
    goMore() {
      this.$router.push({
        path: '/pc/CoreMembersDetails'
      })
    }
  }
};
</script>

<style lang="less" scoped>
.CoreMembers {
  margin: 100px 0;
  .level2title {
    border-bottom: 1px solid #ccc;
    line-height: 60px;
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
    margin-top: 60px;
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
