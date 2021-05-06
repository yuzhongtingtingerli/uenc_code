<!--
 * @Author: yaoyuting
 * @Date: 2021-04-11 17:01:27
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-04-22 07:59:39
 * @Descripttion: 
-->
<template>
  <div class="TechnicalCharacteristics">
    <div class="subTitle">{{ $t("index.TechnicalTitle") }}</div>
    <div>
      <el-row :gutter="20">
        <el-col :span="8" class="vertical_center">
          <div>
            <div class="level3title">{{ $t("index.Structure") }}</div>
            <div class="content">{{ $t("index.StructureText") }}</div>
          </div>
        </el-col>
        <el-col :span="10" :offset="4" class="vertical_center">
          <img src="@/assets/images/right.png" alt="" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="10" class="vertical_center">
          <img src="@/assets/images/right.png" alt="" />
        </el-col>
        <el-col :span="8" class="vertical_center" :offset="4">
          <div>
            <div class="level3title">{{ $t("index.Algorithm") }}</div>
            <div class="content">{{ $t("index.AlgorithmText") }}</div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8" class="vertical_center">
          <div>
            <div class="level3title">{{ $t("index.Hybrid") }}</div>
            <div class="content">{{ $t("index.HybridText") }}</div>
          </div>
        </el-col>
        <el-col :span="10" :offset="4" class="vertical_center">
          <img src="@/assets/images/right.png" alt="" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="10" class="vertical_center">
          <img src="@/assets/images/right.png" alt="" />
        </el-col>
        <el-col :span="8" class="vertical_center" :offset="4">
          <div>
            <div class="level3title">{{ $t("index.WASM") }}</div>
            <div class="content">{{ $t("index.WASMText") }}</div>
          </div>
        </el-col>
      </el-row>
      <div class="tac">
          <router-link to="/pc/Technology"><el-button type="primary" round>了解更多技术</el-button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.TechnicalCharacteristics {
  margin: 100px 0;
  .vertical_center {
    height: 360px;
  }
  .level3title {
    font-size: 18px;
    line-height: 50px;
  }
  .content {
    font-size: 14px;
  }
  img {
    height: 260px;
    width: 400px;
  }
}
</style>
