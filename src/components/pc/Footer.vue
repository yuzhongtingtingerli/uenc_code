<!--
 * @Author: yaoyuting
 * @Date: 2020-03-20 19:30:58
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-04-22 07:52:16
 * @Descripttion: 
-->
<template>
  <div class="foot">
    <div class="top">
      <div class="subTitle">{{ $t("navbar.Connect") }}</div>
      <div class="aboutUs">
        <img src="@/assets/images/index/奖励@2x.png" alt="" />
        <img src="@/assets/images/index/奖励@2x.png" alt="" />
        <img src="@/assets/images/index/奖励@2x.png" alt="" />
        <img src="@/assets/images/index/奖励@2x.png" alt="" />
        <img src="@/assets/images/index/奖励@2x.png" alt="" />
        <img src="@/assets/images/index/奖励@2x.png" alt="" />
        <img src="@/assets/images/index/奖励@2x.png" alt="" />
        <div class="email">{{ $t("navbar.Email") }}：tech@uenc.net</div>
      </div>
    </div>
    <div class="bottom">COPYRIGHT 2019. ALL RIGHTS RESERVED</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.foot {
  position: relative;
  left: 0;
  bottom: 0;
  height: 300px;
  width: 1140px;
  .top {
    margin-top: 70px;
    .subTitle {
      text-align: left !important;
      line-height: 80px;
      margin-left: 15px;
    }
    .aboutUs {
      display: flex;
      justify-content: flex-start;
      img {
        height: 30px;
        margin: 0 15px;
      }
      .email {
        line-height: 30px;
        font-size: 20px;
        margin-left: 30px;
      }
    }
  }
  .bottom {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 72px;
    line-height: 72px;
    text-align: center;
    font-size:14px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    width: 1140px;
    border-top: 1px solid #172838;
  }
  
}
</style>