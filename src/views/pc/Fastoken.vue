<!--
 * @Author: yaoyuting
 * @Date: 2021-04-23 07:57:52
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-04-23 08:15:28
 * @Descripttion: 
-->
<template>
  <div class="Fastoken">
    <div class="banner">
      <div class="content w1300">
        <img src="@/assets/images/index/手机@2x.png" alt="">
        <div class="r">
          <div class="title">{{ $t("Fastoken.Wallet") }}</div>
          <div class="list">{{ $t("Fastoken.Safe") }}</div>
          <div class="box">
            <div class="flex"></div>
            <div class="code">
              <img src="@/assets/images/index/appCode.png" alt="">
              <span>{{ $t("Fastoken.Scan") }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="w1300">
        <div class="about">
            <div class="top">{{ $t("Fastoken.software") }}</div>
            <div class="bottom">{{ $t("Fastoken.provides") }}</div>
        </div>
        <img src="@/assets/images/index/6-1.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.banner {
  height: 900px;
  background-image: url("../../assets/images/index/Fastoken.png");
  background-size: cover;
  background-position: center center;
  padding-top: 203px;
  padding-bottom: 16px;
  box-sizing: border-box;
  .content {
    color: #fff;
    display: flex;
    .r{
      display: flex;
      flex-direction: column;
      margin-left: -48px;

    }
    img   {
      width: 645px;
      height: 700px;
    }
    .box{
      flex: 1;
      display: flex;
      .flex{
        flex: 1;
      }
    }
    .code{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      img{
        width: 167px;
        height: 167px;
        margin-top: 60px;
      }
      span{
        padding: 20px 0;
        font-size: 26px;
      }
    }
    .title {
      font-size: 80px;
      margin-top: 60px;
    }
    .list {
      margin-top: 30px;
      font-size: 40px;
    }
  }
}
.main {
    
    padding: 130px 0 176px;
    background-image: url("../../assets/images/index/Fastokenbg.png");
    background-size: cover;
    background-position: center center;
    .w1300{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .about {
      width: 700px;
      font-size: 16px;
      color: #333333;
      line-height: 40px;
      .top{
        margin-bottom: 40px;
      }
    }
    img {
        width: 548px;
    }
}
</style>
