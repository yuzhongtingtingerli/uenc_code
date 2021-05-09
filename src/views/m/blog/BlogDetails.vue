<!--
 * @Author: yaoyuting
 * @Date: 2021-04-25 20:37:07
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-09 22:42:03
 * @Descripttion: 
-->
<template>
  <div class="BlogDetails">
    <div class="banner">
      <div class="placeholder"></div>
      <div class="details">
        <div class="date">{{ blogData.createTime }} / {{ blogData.createBy }}</div>
        <div class="title">{{ blogData.blogTitle }}</div>
        <!-- <div class="text" v-html="blogData.text"></div> -->
        <div class="btn">
          <el-button type="primary">订阅</el-button>
        </div>
      </div>
    </div>
    <div class="content_bg">
      <div class="content" v-html="blogData.text"></div>
    </div>
  </div>
</template>

<script>
import { GetBlogDetail } from "@/assets/server/api.js";
import { baseURL } from "@/utils/utils";
export default {
  data() {
    return {
      blogData: []
    };
  },
  created() {
    this.getBlogList(this.$route.query.id);
  },
  methods: {
    async getBlogList(id) {
      const data = await GetBlogDetail(id);
      if (data.code === 0) {
        data.data.images = baseURL + data.data.images;
        data.data.text = data.data.text.replace(/\n/g, "<br>");
        this.blogData = data.data;
      } else {
        this.$message.error(data.msg);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.banner {
  height: 660px;
  background-image: url("../../../assets/imagesm/bk/banner2.png");
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  .placeholder {
    flex: 1;
  }
  .details {
    margin: 20px;
    .date {
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      margin-bottom: 28px;
    }
    .title {
      font-size: 62px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      margin-bottom: 80px;
    }
    .text {
      font-size: 12px;
      line-height: 20px;
      height: 100px;
      overflow: hidden;
    }
    .btn {
      .el-button {
        padding: 0;
        width: 160px;
        height: 62px;
        background: linear-gradient(90deg, #4d71ff 0%, #003cfb 100%);
        border-radius: 38px;
        line-height: 62px;
        border: none;
        font-size: 28px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        line-height: 40px;
        margin-bottom: 68px;
      }
    }
  }
}
.content_bg {
  width: 750px;
  flex-wrap: wrap;
  background-image: url("../../../assets/imagesm/bk/bg2.png");
  background-size: 750px;
  // background-position: center center;
}
.content {
  padding: 54px 32px;
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #656565;
  line-height: 36px;
}
</style>
