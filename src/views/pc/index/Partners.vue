<!--
 * @Author: yaoyuting
 * @Date: 2021-04-12 21:57:33
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-02 11:56:35
 * @Descripttion: 
-->
<template>
  <div class="Partners">
    <div class="w1352">
      <div class="subTitle">{{ $t("index.Partner") }}</div>
      <!-- <el-carousel :interval="5000" arrow="always" height="60px" indicator-position="outside">
        <el-carousel-item v-for="item in partnerList.length%6+1" :key="item">
          
        </el-carousel-item>
      </el-carousel> -->
      <div class="imgs">
        <div v-for="item in partnerList" :key="item.images">
          <img :src="item.images" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    partnerList: {
      type: Array
    },
  },
};
</script>

<style lang="less" scoped>
.Partners {
   margin: 80px 0 200px;
    .imgs{
      display: flex;
      img {
        height: 50px;
      }
    }
}
</style>
