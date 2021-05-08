<!--
 * @Author: yaoyuting
 * @Date: 2020-03-20 19:30:58
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-08 08:00:16
 * @Descripttion: 
-->
<template>
  <div class="foot">
    <div class="sub_title">{{ $t("navbar.Connect") }}</div>
    <div class="aboutUs">
      <img src="@/assets/imagesm/index/github@2x.png" alt="" />
      <img src="@/assets/imagesm/index/github@2x.png" alt="" />
      <img src="@/assets/imagesm/index/github@2x.png" alt="" />
      <img src="@/assets/imagesm/index/github@2x.png" alt="" />
      <img src="@/assets/imagesm/index/github@2x.png" alt="" />
      <div class="email">{{ $t("navbar.Email") }}：tech@uenc.net</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.foot {
  position: relative;
  left: 0;
  bottom: 0;
  height: 132px;
  width: 750px;
  // padding: 20px 30px 0;
  background: #2d2d2d;
  .sub_title {
    text-align: left !important;
    margin-left: 30px;
    font-size: 24px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    color: #ffffff;
    line-height: 34px;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .aboutUs {
    display: flex;
    justify-content: flex-start;
    height: 28px;
    line-height: 28px;
    margin-left: 30px;
    img {
      height: 16px;
      width: 16px;
      margin-right: 40px;
      margin-top: 6px;
    }
    .email {
      font-size: 20px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 300;
      text-align: center;
      color: #ffffff;
      line-height: 28px;
    }
  }
}
</style>
