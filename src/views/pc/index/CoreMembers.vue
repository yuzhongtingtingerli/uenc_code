<!--
 * @Author: yaoyuting
 * @Date: 2021-04-12 21:25:05
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-02 12:09:56
 * @Descripttion: 
-->
<template>
  <div class="CoreMembers">
    <div class="w1352 flex">
      <div class="userList">
        <div class="level2title">{{ $t("index.members") }}</div>
        <div class="banner">
            <div :class="introduce.usersId === msember.usersId?'border':''"  v-for="msember in msemberList" :key="msember.usersId">
              <img :src="msember.images" alt="" @click="tab(msember.usersId)" />
            </div>
            <!-- <div><el-button type="primary" round @click="goMore()">了解更多</el-button></div> -->
        </div>
      </div>
      <div class="center">
          <div class="name">{{ introduce.userName }}</div>
          <div class="position">{{ introduce.job }}</div>
          <div class="about">{{ introduce.introduction }}</div>
      </div>
    </div>
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
  background-image: url("../../../assets/images/index/indexbg3.png");
  background-size: cover;
  background-position: center center;
  margin: 100px 0;
  padding: 146px 0;
  height: 800px;
  box-sizing: border-box;
  .flex{
    display: flex;
    .userList{
      width: 720px;
    }
  }
  
  .level2title {
    line-height: 60px;
    font-size: 50px;
    color: #333333;
    line-height: 70px;
    margin-bottom: 106px;
  }
  .banner {
     display: flex;
     align-items: center;
     flex-wrap: wrap;
    div {
      width: 110px;
      height: 110px;
      margin-right: 40px;
      margin-bottom: 40px;
      border-radius: 50%;
      background:#ffffff;
    }
    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
      border-radius: 50%;
      z-index: 1;
    }
    .border{
      border: 1px solid #ffffff;
      box-shadow: 0 0px 12px 0 rgba(0, 0, 0, 0.6);

    }
  }
  .center{
    width: 632px;
    height: 348px;
    background: #ffffff;
    margin-top: 106px;
    padding: 60px;
    box-sizing: border-box;
    text-align: left;
    .name {
      font-size: 50px;
      font-weight: bold;
      line-height: 70px;
    }
    .position {
      font-size: 30px;
      line-height: 42px;
      margin-bottom: 30px;
    }
    .about {
      font-size: 16px;
      line-height: 30px;
    }
  }
  
}
</style>
