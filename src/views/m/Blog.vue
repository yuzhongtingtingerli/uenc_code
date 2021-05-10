<!--
 * @Author: yaoyuting
 * @Date: 2021-04-14 20:32:42
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-09 20:59:56
 * @Descripttion: 
-->
<template>
  <div class="Blog" v-if="blogList.length > 0">
    <div class="banner">
<<<<<<< HEAD
      <div class="placeholder"></div>
      <div class="details">
        <div class="title">{{ blogList[0].blogTitle }}</div>
        <div class="date">{{ blogList[0].createTime }} / {{ blogList[0].createBy }}</div>

        <div class="text" v-html="blogList[0].text"></div>
        <div class="btn">
          <router-link :to="{ path: '/m/Blog/Details', query: { id: blogList[0].blogId } }">
            <el-button type="primary">More</el-button>
          </router-link>
          <el-button type="primary" style="margin-left: 10px">订阅</el-button>
=======
        <div class="placeholder"></div>
        <div class="details">
            <div class="date">{{blogList[0].createTime}} / {{blogList[0].createBy}}</div>
            <div class="title">{{blogList[0].blogTitle}}</div>
            <div class="text"  v-html="blogList[0].text"></div>
            <div class="btn">
                <router-link :to="{path: '/m/Blog/Details', query: {id: blogList[0].blogId}}">
                  <el-button type="primary">More</el-button>
                </router-link>
                <el-button type="primary" style="margin-left: 10px">订阅</el-button>
            </div>
>>>>>>> 4ce108bd35c2b657f62b30a280bf1504e95fa379
        </div>
      </div>
    </div>
    <div class="content_bg">
      <div class="content">
        <div class="lists">
          <div class="list" v-for="blog in blogList" :key="blog.blogId" @click="detalis(blog)">
            <div class="images">
              <img :src="blog.images" alt="" />
            </div>
            <div class="main">
              <div class="top">{{ blog.blogTitle }}</div>
              <div class="medile" v-html="blog.text"></div>
              <div class="bottom">
                <div class="username">{{ blog.createBy }}</div>
                <div class="date">{{ blog.createTime.split(' ')[0] }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetBlogList } from "@/assets/server/api.js";
import { baseURL } from "@/utils/utils";
export default {
  data() {
    return {
      blogList: []
    };
  },
  created() {
    this.getBlogList();
  },
  methods: {
    async getBlogList() {
      const data = await GetBlogList();
      if (data.code === 0) {
        data.rows.forEach(item => {
          item.images = baseURL + item.images;
          item.text = item.text.replace(/\n/g, "<br>");
        });
        this.blogList = data.rows;
      } else {
        this.$message.error(data.msg);
      }
    },
    detalis(blog) {
      this.$router.push({
        path: "/m/Blog/Details",
        query: { id: blog.blogId }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.Blog {
  .banner {
    height: 409 * 2px;
    background-image: url("../../assets/imagesm/bk/banner背景.png");
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    .placeholder {
      flex: 1;
    }
    .details {
      // margin: 0 300px;
      margin: 20px;
      .date {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        margin-bottom: 20px;
      }
      .title {
        font-size: 62px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        margin-bottom: 32px;
      }
      .text {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 46px;
        max-height: 116 * 2px;
        overflow: hidden;
      }
      .btn {
        margin: 20px 0;
        .el-button {
          width: 160px;
          height: 62px;
          padding: 0;
          line-height: 62px;
          text-align: center;
          background: linear-gradient(90deg, #4d71ff 0%, #003cfb 100%);
          border-radius: 40px;
          border: none;
          font-size: 28px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #ffffff;
        }
      }
    }
  }
  .content_bg {
    background-image: url("../../assets/imagesm/bk/bg.png");
    background-size: cover;
    background-position: center center;
  }
  .content {
    padding: 82px 32px 114px;
    .lists {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .list {
        width: 320px;
        margin-bottom: 42px;
        img {
          width: 320px;
          height: 182px;
        }
        .main {
          background-color: #fff;
          padding: 18px 10px;
          .top {
            font-size: 26px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #333333;
            margin-bottom: 14px;
          }
          .medile {
            font-size: 20px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            line-height: 32px;
            height: 96px;
            overflow: hidden;
            margin-bottom: 12px;
          }
          .bottom {
            display: flex;
            justify-content: space-between;
            font-size: 20px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #8d8a9a;
            line-height: 28px;
          }
        }
      }
    }
  }
}
</style>
