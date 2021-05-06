<!--
 * @Author: yaoyuting
 * @Date: 2021-04-12 21:57:33
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-03 10:16:51
 * @Descripttion: 
-->
<template>
  <div class="Partners">
    <div class="subTitle">{{ $t("index.Partner") }}</div>
    <el-carousel :interval="5000" arrow="always" height="30px" indicator-position="outside">
      <el-carousel-item v-for="(list,index) in partnerList" :key="index">
        <el-row :gutter="20">
          <el-col :span="4" v-for="item in list" :key="item.usersId">
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
    }
  }
};
</script>

<style lang="less" scoped>
.Partners {
  img {
    width: 100%;
    height: 60px;
  }
  .el-row {
    // height: 60px;
    margin-left: 10px !important;
    margin-right: 10px !important;
    box-sizing: border-box;
  }
}
</style>
