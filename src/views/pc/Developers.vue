<!--
 * @Author: yaoyuting
 * @Date: 2021-04-14 07:28:54
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-08 23:01:20
 * @Descripttion: 
-->
<template>
  <div class="Developers">
    <div class="banner">
      <div class="content w1300">
        <div class="title">{{ $t("index.index1") }}</div>
        <router-link to="/">文档 <i class="el-icon-right"></i></router-link>
        <router-link to="/">GitHub <i class="el-icon-right"></i></router-link>
      </div>
    </div>
    <div class="content">
        <More></More>
        <Task></Task>
    </div>
  </div>
</template>

<script>
import More from '@/views/pc/developers/More.vue';
import Task from '@/views/pc/developers/Task.vue';
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
    height: 900px;
    background-image: url("../../assets/images/index/背景@2x.png");
    background-size: cover;
    background-position: center center;
    padding-top: 203px;
    .content{
      padding: 250px 0 0;
      .title{
        font-size: 80px;
        color: #ffffff;
      }
      a{
        color: #fff;
        font-size: 20px;
        margin-right: 80px;
      }
    }
  }
}
</style>
