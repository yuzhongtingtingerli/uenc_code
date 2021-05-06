<!--
 * @Author: yaoyuting
 * @Date: 2021-04-14 07:28:54
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-02 22:08:34
 * @Descripttion: 
-->
<template>
  <div class="Developers">
    <div class="banner">
      <div class="logo">
        <router-link to="/m/synopsis"><img src="@/assets/images/index/奖励@2x.png" alt=""/></router-link>
      </div>
      <div class="content">
        <div class="list">{{ $t("index.index1") }}</div>
      </div>
    </div>
    <div class="content">
        <More></More>
        <Task></Task>
    </div>
  </div>
</template>

<script>
import More from '@/views/m/developers/More.vue';
import Task from '@/views/m/developers/Task.vue';
export default {
    components: {
        More,
        Task
    },
};
</script>

<style lang="less" scoped>
.Developers {
  .banner {
    height: 750px;
    background-image: url("../../assets/images/index/背景@2x.png");
    background-size: cover;
    background-position: center center;
    padding-top: 203px;
    .logo {
      width: 348px;
      height: 96px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .content {
      text-align: center;
      line-height: 30px;
      margin-top: 48px;
      .list {
        width: 750px;
        margin: 0 auto;
      }
    }
  }
  .content {
      width: 750px;
      margin: 0 auto;
  }
}
</style>
