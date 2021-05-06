<!--
 * @Author: yaoyuting
 * @Date: 2021-04-12 21:25:05
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-02 17:25:28
 * @Descripttion: 
-->
<template>
  <div class="CoreMembers">
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="level2title">{{ $t("navbar.TeamMembers") }}</div>
        <div class="banner">
          <el-row :gutter="20">
            <el-col :span="6" v-for="msember in msemberList" :key="msember.usersId">
              <img :src="msember.images" alt="" @click="tab(msember.usersId)" />
            </el-col>
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
import { GetMsemberDetail, GetMsemberLists } from "@/assets/server/api.js";
import { baseURL } from '@/utils/utils';
export default {
  data() {
    return {
      msemberList: [],
      introduce: null
    };
  },
  created() {
    this.getMsemberList();
  },
  methods: {
    async getMsemberList() {
      const dataList = await GetMsemberLists();
      if (dataList.code === 0) {
        dataList.rows.forEach(item => {
          item.images = baseURL + item.images;
        });
        this.msemberList = dataList.rows;
        this.introduce = this.msemberList[0];
      } else {
        this.$message.error("接口错误！");
      }
    },
    async tab(id) {
      const data = await GetMsemberDetail(id);
      if (data.code === 0) {
        this.introduce = data.data;
      } else {
        this.$message.error("接口错误！");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.CoreMembers {
  width: 900px;
  margin: 200px auto;
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
