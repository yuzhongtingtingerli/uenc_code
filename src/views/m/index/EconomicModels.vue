<!--
 * @Author: yaoyuting
 * @Date: 2021-04-11 18:05:00
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-07 20:09:37
 * @Descripttion: 
-->
<template>
  <div class="EconomicModels">
    <div class="sub_title">{{ $t("index.MdelTitle") }}</div>
    <div class="details">
      <div class="list">
        <div class="left">
          <div class="title">{{ $t("index.Distribution") }}</div>
          <div class="content">{{ $t("index.DistributionText") }}</div>
        </div>
        <div class="images"><img src="@/assets/imagesm/index/配图7@2x.png" alt="" /></div>
      </div>
      <div class="list">
        <div class="images"><img src="@/assets/imagesm/index/配图8@2x.png" alt="" /></div>
        <div class="right">
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
  background-image: url('../../../assets/imagesm/index/背景3_1@2x.png');
  padding: 0 30px;
  padding-bottom: 76px;
  .sub_title {
    padding-top: 40px;
    margin-bottom: 30px;
    font-size: 28px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    color: #333333;
    line-height: 40px;
  }
  .list {
    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;
    .left {
      margin-right: 90px;
    }
    .right {
      margin-left: 36px;
    }
    .title {
      font-size: 24px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #333333;
      line-height: 34px;
      margin-bottom: 14px;
    }
    .content {
      font-size: 20px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #333333;
      line-height: 32px;
      opacity: 0.7;
    }
    .images {
      width: 214px;
      height: 176px;
      background: #d8e9ff;
      padding: 20px;
      img {
        width: 156px;
        height: 136px;
      }
    }
  }
}
</style>
