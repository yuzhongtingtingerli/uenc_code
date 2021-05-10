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
    <div class="lists">
      <div class="w1352">
        <div class="list1 list">
          <div class="img">
            <img width="716" src="@/assets/images/index/1-7.png" alt="" />
          </div>
          <div class="content">
            <div class="title">{{ $t("index.Distribution") }}</div>
            <div class="text">{{ $t("index.DistributionText") }}</div>
          </div>
        </div>
        <div class="list2 list">
          <div class="content">
            <div class="title">{{ $t("index.Economic") }}</div>
            <div class="text">{{ $t("index.EconomicText") }}</div>
          </div>
          <div class="img">
            <img width="600" src="@/assets/images/index/1-8.png" alt="" />
          </div>
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
  margin: 200px 0 100px;
  .subTitle {
    padding-left: 460px;
    margin-bottom: 40px;
  }
  .lists {
    background-image: url("../../../assets/images/index/indexbg2.png");
    background-size: cover;
    background-position: center center;
  }
  .list {
    display: flex;
    padding: 0 26px;
    .img {
      width: 800px;
      height: 660px;
      background: #d8e9ff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .content {
      box-sizing: border-box;
      width: 570px;
      height: 440px;
      padding: 0 40px;
      background: #ffffff;
      .title {
        font-size: 40px;
        color: #1b104b;
        margin: 112px 0 40px;
      }
      .text {
        font-size: 16px;
        color: #8179a1;
        line-height: 40px;
      }
    }
  }
  .list1 {
    padding-bottom: 360px;
    .img {
      margin-top: -116px;
    }
    .content {
      margin-top: 300px;
      margin-left: -52px;
    }
  }
  .list2 {
    .content {
      margin-top: -220px;
      margin-right: -52px;
      z-index: 1;
    }
    .img {
      margin-bottom: -116px;
    }
  }
}
</style>
