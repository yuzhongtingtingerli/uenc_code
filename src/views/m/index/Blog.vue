<!--
 * @Author: yaoyuting
 * @Date: 2021-04-11 18:24:56
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-06 22:33:31
 * @Descripttion: 
-->
<template>
  <div class="Blog">
    <div class="sub_title">{{ $t("index.Blog") }}</div>
    <div class="scroll">
      <div class="details">
        <el-card class="box-card" v-for="blog in blogList" :key="blog.blogId">
          <div class="images">
            <img :src="blog.images" alt="" />
          </div>
          <div class="content">
            <div class="title">{{ blog.blogTitle }}</div>
            <div class="text" v-html="blog.text"></div>
            <div class="bottom">
              <div class="username">{{ blog.createBy }}</div>
              <div class="date">{{ blog.createTime.split(" ")[0] }}</div>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogList: {
      type: Array
    }
  }
};
</script>

<style lang="less" scoped>
.Blog {
  .sub_title {
    margin-top: 64px;
    margin-bottom: 32px;
    margin-left: 30px;
    font-size: 28px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    color: #333333;
    line-height: 40px;
  }
  .scroll {
    overflow-x: scroll;
    .details {
      margin-left: 30px;
      height: 396px;
      display: inline-flex;

      .box-card {
        width: 320px;
        margin-right: 16px;
        img {
          height: 180px;
          width: 320px;
        }
        .content {
          padding: 20px;
          .title {
            font-size: 24px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            color: #333333;
            line-height: 40px;
          }
          .text {
            height: 96px;
            overflow: hidden;
            font-size: 20px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #333333;
            line-height: 32px;
          }
          .bottom {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            font-size: 20px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #8d8a9a;
            line-height: 28px;
          }
        }
      }
    }
  }
}
</style>
