<!--
 * @Author: yaoyuting
 * @Date: 2021-04-14 07:28:54
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-09 17:51:48
 * @Descripttion: 
-->
<template>
  <div class="Developers">
    <div class="banner">
      <div class="text">这里是一段开发者方面的文案关于开发者的文</div>
    </div>
    <div class="content">
      <More></More>
      <Task></Task>
    </div>
  </div>
</template>

<script>
import More from "@/views/m/developers/More.vue";
import Task from "@/views/m/developers/Task.vue";
export default {
  components: {
    More,
    Task
  }
};
</script>

<style lang="less" scoped>
.Developers {
  .banner {
    height: 660px;
    background-image: url("../../assets/imagesm/kfz/banner.png");
    background-size: cover;
    background-position: center center;
    .text {
      padding-top: 222px;
      font-size: 50px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: #ffffff;
      line-height: 78px;
      letter-spacing: 2px;
      margin: 0 32px;
    }
  }
}
</style>
