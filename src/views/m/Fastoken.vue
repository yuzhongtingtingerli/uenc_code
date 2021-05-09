<!--
 * @Author: yaoyuting
 * @Date: 2021-04-23 07:57:52
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-09 20:02:36
 * @Descripttion: 
-->
<template>
  <div class="Fastoken">
    <div class="banner">
      <div class="left">
        <img src="@/assets/imagesm/xz/手机展示.png" alt="" />
      </div>
      <div class="right">
        <div class="title">Fastoken数据钱包</div>
        <div class="content">安全好用，功能强大</div>
        <div class="images">
          <img src="@/assets/imagesm/xz/二维码.png" alt="" />
        </div>
        <div class="text">扫描二维码，下载APP</div>
      </div>
    </div>
    <div class="mainbg">
      <div class="main">
        <div class="about">
          <div class="list">{{ $t("Fastoken.software") }}</div>
          <div class="list">{{ $t("Fastoken.provides") }}</div>
        </div>
        <div class="images">
          <img src="@/assets/imagesm/xz/配图1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.banner {
  height: 660px;
  background-image: url("../../assets/imagesm/xz/banner.png");
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: flex-start;
  .left {
    padding-top: 97 * 2px;
    padding-left: 20px;
    img {
      width: 159 * 2px;
      height: 177 * 2px;
    }
  }
  .right {
    padding-top: 266px;
    .title {
      font-size: 46px;
      font-family: PingFang-SC-Heavy, PingFang-SC;
      font-weight: 800;
      color: #ffffff;
      line-height: 64px;
    }
    .content {
      font-size: 26px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #ccc;
      line-height: 36px;
      text-align: right;
      margin-top: 22px;
    }
    .images {
      margin-top: 60px;
      text-align: center;
      img {
        width: 62 * 2px;
        height: 62 * 2px;
      }
    }
    .text {
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ccc;
      line-height: 28px;
      margin-top: 12px;
      text-align: center;
    }
  }
}
.mainbg {
  background-image: url("../../assets/imagesm/xz/bg.png");
  background-size: cover;
  background-position: center center;
}
.main {
  padding: 60px 32px 114px;
  .about {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .list {
      font-size: 26px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 44px;
      margin-bottom: 60px;
    }
  }
  .images {
    text-align: center;
    margin-top: 8px;
    img {
      width: 247*2px;
      height: 183*2px;
    }
  }
}
</style>
