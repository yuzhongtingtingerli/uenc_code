<!--
 * @Author: yaoyuting
 * @Date: 2021-04-12 21:25:05
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-02 17:25:28
 * @Descripttion: 
-->
<template>
  <div>
    <div class="banner">
      <div class="b_content"></div>
    </div>
    <div class="CoreMembers">
      <div class="w1300">
        <div>
          <div class="title">{{ $t("navbar.TeamMembers") }}</div>
          <div class="imgs">
            <div
              class="img"
              v-for="msember in msemberList"
              :key="msember.usersId"
            >
              <img :src="msember.images" alt="" @click="tab(msember.usersId)" />
            </div>
          </div>
        </div>
        <div class="r">
          <div v-if="introduce">
            <div class="name">{{ introduce.userName }}</div>
            <div class="position">{{ introduce.job }}</div>
            <div class="about">{{ introduce.introduction }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetMsemberDetail, GetMsemberLists } from "@/assets/server/api.js";
import { baseURL } from "@/utils/utils";
export default {
  data() {
    return {
      msemberList: [],
      introduce: null,
    };
  },
  created() {
    this.getMsemberList();
  },
  methods: {
    async getMsemberList() {
      const dataList = await GetMsemberLists();
      if (dataList.code === 0) {
        dataList.rows.forEach((item) => {
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
    },
  },
};
</script>

<style lang="less" scoped>
.banner {
  height: 736px;
  background-image: url("../../assets/images/index/CoreMembersDetailsbg.png");
  background-size: cover;
  background-position: center center;
}
.CoreMembers {
  padding: 246px 0;
  background-image: url("../../assets/images/index/CoreMembersbg.png");
  background-size: cover;
  background-position: center center;
  .w1300 {
    display: flex;
  }
  .title {
    font-size: 50px;
    color: #333333;
  }
  .imgs {
    display: flex;
    flex-wrap: wrap;
    width: 600px;
    margin-top: 106px;
    .img {
      width: 110px;
      height: 110px;
      margin-right: 40px;
      margin-bottom: 40px;
      img {
        height: 110px;
        width:  110px;
        cursor: pointer;
        border-radius: 50%;
      }
    }
  }
  .r{
    padding-top: 176px;
    padding-left: 200px;
  }
  .name {
    font-size: 50px;
  }
  .position {
    font-size: 30px;
  }
  .about {
    font-size: 16px;
    margin-top: 30px;
  }
}
</style>
