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
        <!-- <div class="text" v-html="blogData.text"></div> -->
        <div class="btn">
          <el-button type="primary">订阅</el-button>
        </div>
      </div>
    </div>
    <div class="content" v-html="blogData.text"></div>
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
  height: 550px;
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
    border-top: 1px solid #fff;
    margin: 0 300px;
    .date {
      line-height: 50px;
      font-size: 14px;
    }
    .title {
      font-size: 40px;
      font-weight: bold;
      line-height: 60px;
    }
    .text {
      font-size: 12px;
      line-height: 20px;
      height: 100px;
      overflow: hidden;
    }
    .btn {
      margin: 20px 0;
      .el-button {
        padding: 10px 50px;
      }
    }
  }
}
.content {
    width: 1100px;
    margin: 50px auto 100px;
    font-size: 14px;
}
</style>
