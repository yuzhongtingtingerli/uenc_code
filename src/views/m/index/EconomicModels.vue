<!--
 * @Author: yaoyuting
 * @Date: 2021-04-11 18:05:00
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-09 14:46:23
 * @Descripttion: 
-->
<template>
  <div class="EconomicModels">
    <div class="sub_title">{{ $t("index.MdelTitle") }}</div>
    <div class="details">
      <div class="list">
        <div class="images"><img src="@/assets/imagesm/index/配图7.png" alt="" /></div>
        <div class="item">
          <div class="title">{{ $t("index.Distribution") }}</div>
          <div class="content">{{ $t("index.DistributionText") }}</div>
        </div>
      </div>
      <div class="list">
        <div class="images"><img src="@/assets/imagesm/index/配图8.png" alt="" /></div>
        <div class="item">
          <div class="title">{{ $t("index.Economic") }}</div>
          <div class="content">{{ $t("index.EconomicText") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.EconomicModels {
  // background-color: pink;
  background-size: cover;
  background-position: center center;
  background-image: url("../../../assets/imagesm/index/jj_bg.png");
  padding: 0 30px;
  padding-bottom: 76px;
  .sub_title {
    padding-top: 66px;
    font-size: 34px;
    font-family: PingFang-SC-Heavy, PingFang-SC;
    font-weight: 800;
    color: #6624fa;
    line-height: 48px;
  }
  .list {
    padding: 0 30px;
    padding-bottom: 80px;
    margin-top: 52px;
    .images {
      width: 624px;
      height: 380px;
      background: #d8e9ff;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 334px;
        height: 292px;
      }
    }
    .item {
      padding: 32px 16px;
      background-color: #fff;
      .title {
        font-size: 26px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 36px;
        margin-bottom: 12px;
      }
      .content {
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 40px;
        opacity: 0.7;
      }
    }
  }
}
</style>
