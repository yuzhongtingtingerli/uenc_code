<!--
 * @Author: yaoyuting
 * @Date: 2021-04-12 21:57:33
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-02 11:56:35
 * @Descripttion: 
-->
<template>
  <div class="Partners">
    <div class="subTitle">{{ $t("index.Partner") }}</div>
    <el-carousel :interval="5000" arrow="always" height="60px" indicator-position="outside">
      <el-carousel-item v-for="item in partnerList.length%6+1" :key="item">
        <el-row :gutter="20">
          <el-col :span="4" v-for="item in partnerList" :key="item.usersId">
            <img :src="item.images" alt="" />
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    partnerList: {
      type: Array
    },
  },
};
</script>

<style lang="less" scoped>
.Partners {
    img {
        width: 100%;
        height: 60px;
    }
    .el-row {
        margin-left: 50px !important;
        margin-right: 50px !important;
        box-sizing: border-box;
    }
}
</style>
