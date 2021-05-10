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
        <span class="iconfont icongithub"></span>
        <span class="iconfont iconfeishu"></span>
        <span class="iconfont iconfacebook"></span>
        <span class="iconfont icontuite"></span>
        <span class="iconfont iconweibo"></span>
        <div class="email">{{ $t("navbar.Email") }}：tech@uenc.net</div>
      </div>
    </div>
    <!-- <div class="bottom">COPYRIGHT 2019. ALL RIGHTS RESERVED</div> -->
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
  height: 396px;
  width: 1140px;
  color: #D8D8D8;
  .top {
    margin-top: 120px;
    .subTitle {
      text-align: left !important;
      line-height: 56px;
      margin-bottom: 36px;
    }
    .aboutUs {
      display: flex;
      span{
        font-size: 32px;
        margin-right: 42px;
      }
      .email {
        line-height: 30px;
        font-size: 28px;
        margin-left: 30px;
      }
    }
  }
}
</style>