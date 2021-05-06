<!--
 * @Author: yaoyuting
 * @Date: 2021-04-23 07:57:52
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-02 22:25:17
 * @Descripttion: 
-->
<template>
  <div class="Fastoken">
    <div class="banner">
      <div class="content">
        <div class="title">{{ $t("index.bannerTitle") }}</div>
        <div class="list">{{ $t("index.bannerContent") }}</div>
      </div>
    </div>
    <div class="main">
        <div class="about">
            <div class="top">{{ $t("Fastoken.software") }}</div>
            <div class="bottom">{{ $t("Fastoken.provides") }}</div>
        </div>
        <div class="images">
            <img src="@/assets/images/right.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.banner {
  height: 750px;
  background-image: url("../../assets/images/index/背景@2x.png");
  background-size: cover;
  background-position: center center;
  padding-top: 203px;
  .content {
    text-align: center;
    line-height: 30px;
    margin-top: 48px;
    .title {
      font-size: 40px;
      line-height: 60px;
      font-weight: bold;
    }
    .list {
      width: 750px;
      font-size: 30px;
      line-height: 50px;
      margin: 0 auto;
    }
  }
}
.main {
    // display: flex;
    // justify-content: space-between;
    width: 750px;
    padding: 50px;
    .about {
        // width: 365px;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .images {
      text-align: center;
      margin-top: 20px;
        img {
            // width: 300px;
            height: 250px;
        }
    }
}
</style>
