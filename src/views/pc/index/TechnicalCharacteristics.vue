<!--
 * @Author: yaoyuting
 * @Date: 2021-04-11 17:01:27
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-04-22 07:59:39
 * @Descripttion: 
-->
<template>
  <div class="TechnicalCharacteristics">
    <div class="w1352">
      <div class="subTitle">{{ $t("index.TechnicalTitle") }}</div>
      <div>
        <el-row :gutter="20">
          <el-col :span="8" class="vertical_center">
            <div>
              <p>01</p>
              <div class="level3title">{{ $t("index.Structure") }}</div>
              <div class="content">{{ $t("index.StructureText") }}</div>
            </div>
          </el-col>
          <el-col :span="10" :offset="4" class="vertical_center">
            <img width="390" src="@/assets/images/index/配图3@2x.png" alt="" />
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10" class="vertical_center">
            <img width="390" style="margin-left:120px" src="@/assets/images/index/配图4@2x.png" alt="" />
          </el-col>
          <el-col :span="8" class="vertical_center" :offset="4">
            <div>
              <p>02</p>
              <div class="level3title">{{ $t("index.Algorithm") }}</div>
              <div class="content">{{ $t("index.AlgorithmText") }}</div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8" class="vertical_center">
            <div>
              <p>03</p>
              <div class="level3title">{{ $t("index.Hybrid") }}</div>
              <div class="content">{{ $t("index.HybridText") }}</div>
            </div>
          </el-col>
          <el-col :span="10" :offset="4" class="vertical_center">
            <img width="675" src="@/assets/images/index/配图5@2x.png" alt="" />
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10" class="vertical_center">
            <img width="390" style="margin-left:120px" src="@/assets/images/index/配图6@2x.png" alt="" />
          </el-col>
          <el-col :span="8" class="vertical_center" :offset="4">
            <div>
              <p>04</p>
              <div class="level3title">{{ $t("index.WASM") }}</div>
              <div class="content">{{ $t("index.WASMText") }}</div>
            </div>
          </el-col>
        </el-row>
        <div>
            <router-link to="/pc/Technology" class="btn_style">了解更多技术<i class="el-icon-right"></i></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.TechnicalCharacteristics {
  .subTitle{
    text-align: left;
    margin: 100px 0;
  }
  .vertical_center {
    height: 508px;
    p{
      font-size: 20px;
      color: #0d051f;
      border-bottom: 1px solid #333333;;
    }
    .level3title {
      font-size: 40px;
      color: #333333;
      margin: 36px 0 30px;
    }
    .content {
      font-size: 16px;
      color: #333333;
    }
  }
  .btn_style{
    font-size: 20px;
    color: #6624fa;
    text-align: right;
    display: block;
  }
  
}
</style>
