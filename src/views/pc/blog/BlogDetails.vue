<!--
 * @Author: yaoyuting
 * @Date: 2021-04-25 20:37:07
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-04-25 21:11:33
 * @Descripttion: 
-->
<template>
  <div class="BlogDetails">
    <div class="banner">
      <div class="placeholder"></div>
      <div class="details">
        <div class="date">{{ blogData.createTime }} / {{ blogData.createBy }}</div>
        <div class="title">{{ blogData.blogTitle }}</div>
        <div class="btn">订阅</div>
      </div>
    </div>
    <div class="content">
      <div class="w1300" v-html="blogData.text"></div>
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
        data.data.text = data.data.text
          .replace(/\n/g, "<br>");
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
  height: 900px;
  background-image: url("../../../assets/images/index/背景@2x.png");
  background-size: cover;
  background-position: center center;
  padding-top: 203px;
  display: flex;
  flex-direction: column;
  .placeholder {
    flex: 1;
  }
  .details {
    margin: 0 274px;
    color: #fff;
    .date {
      font-size: 26px;
      margin-bottom: 20px;
    }
    .title {
      font-size: 80px;
      margin-bottom: 70px;
    }
    .btn {
      width: 141px;
      height: 54px;
      line-height: 54px;
      text-align: center;
      background: linear-gradient(90deg,#4d71ff, #003cfb);
      border-radius: 33px;
      font-size: 24px;
      margin-bottom: 136px;
    }
  }
}
.content {
    margin: 50px 0 100px;
    font-size: 14px;
}
</style>
