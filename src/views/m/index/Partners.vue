<!--
 * @Author: yaoyuting
 * @Date: 2021-04-12 21:57:33
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-09 15:07:27
 * @Descripttion: 
-->
<template>
  <div class="Partners">
    <div class="sub_title">{{ $t("index.Partner") }}</div>
    <el-row :gutter="20" >
      <el-col :span="12" v-for="(list, index) in partnerList" :key="index">
        <img :src="list.images" alt="" />
      </el-col>
    </el-row>
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
  padding: 0 30px;
  margin-bottom: 80px;
  .sub_title {
    padding-top: 66px;
    font-size: 34px;
    font-family: PingFang-SC-Heavy, PingFang-SC;
    font-weight: 800;
    color: #6624fa;
    line-height: 48px;
    margin-bottom: 80px;
  }
  img {
    height: 72px;
  }
  .el-row {
    margin-left: 10px !important;
    margin-right: 10px !important;
    box-sizing: border-box;
    .el-col {
      text-align: center;
      margin-bottom: 40px;
    }
  }
}
</style>
