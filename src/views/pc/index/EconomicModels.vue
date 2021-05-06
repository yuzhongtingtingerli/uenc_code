<!--
 * @Author: yaoyuting
 * @Date: 2021-04-11 18:05:00
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-04-22 07:57:03
 * @Descripttion: 
-->
<template>
  <div class="EconomicModels">
    <div class="subTitle">{{ $t("index.MdelTitle") }}</div>
    <el-row :gutter="20">
      <el-col :span="11">
        <el-card class="box-card">
            <div class="level3title">{{ $t("index.Distribution") }}</div>
            <div class="content">{{ $t("index.DistributionText") }}</div>
            <div><img src="@/assets/images/right.png" alt="" /></div>
        </el-card>
      </el-col>
      <el-col :span="11" :offset="2">
        <el-card class="box-card">
            <div class="level3title">{{ $t("index.Economic") }}</div>
            <div class="content">{{ $t("index.EconomicText") }}</div>
            <div><img src="@/assets/images/right.png" alt="" /></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.EconomicModels {
  margin: 100px 0;
  .subTitle {
      margin-bottom: 40px;
  }
  .box-card {
      padding: 30px;
      border-radius: 20px;
      .level3title {
          line-height: 40px;
      }
      .content {
          font-size: 14px;
          line-height: 20px;
      }
      img {
          margin-top: 30px;
          height: 150px;
      }
  }
}
</style>
