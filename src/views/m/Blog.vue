<!--
 * @Author: yaoyuting
 * @Date: 2021-04-14 20:32:42
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-02 22:22:38
 * @Descripttion: 
-->
<template>
  <div class="Blog" v-if="blogList.length > 0">
    <div class="banner">
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
        </div>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="24" v-for="blog in blogList" :key="blog.blogId">
          <el-card class="box-card">
            <div class="images">
              <img :src="blog.images" alt="" />
            </div>
            <div class="main">
              <div class="top">{{blog.blogTitle}}</div>
              <div class="medile" v-html="blog.text"></div>
              <div class="bottom">
                <div class="username">{{blog.createBy}}</div>
                <div class="date">{{blog.createTime}}</div>
              </div>
              <div class="btn">
                <router-link :to="{path: '/m/Blog/Details', query: {id: blog.blogId}}">
                  <el-button type="text">More</el-button>
                </router-link>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { GetBlogList } from '@/assets/server/api.js';
import { baseURL } from '@/utils/utils';
export default {
  data() {
    return {
      blogList: []
    }
  },
  created () {
    this.getBlogList();
  },
  methods: {
    async getBlogList() {
      const data = await GetBlogList()
      if(data.code === 0) {
        data.rows.forEach( item => {
          item.images = baseURL + item.images
          item.text = item.text
                    .replace(/\n/g, "<br>") ;
        })
        this.blogList = data.rows
      } else {
        this.$message.error(data.msg)
      }
    },
  },
};
</script>

<style lang="less" scoped>
.Blog {
  .banner {
    height: 550px;
    background-image: url("../../assets/images/index/背景@2x.png");
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
        // margin: 0 300px;
        margin: 20px;
        .date {
            line-height: 50px;
            font-size: 12px;
        }
        .title {
            font-size: 20px;
            font-weight: bold;
            line-height: 30px;
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
    width: 750px;
    margin: 0 auto;
    .box-card {
      border-radius: 20px;
      padding: 10px;
      padding-bottom: 0px;
      box-sizing: border-box;
      margin: 30px 35px;
      .images {
        img {
          height: 225px;
          width: 100%;
        }
      }
      .main {
        margin: 10px;
        margin-bottom: 0px;
        .top {
          font-size: 14px;
          font-weight: bold;
        }
        .medile {
          font-size: 14px;
          height: 80px;
          margin-bottom: 20px;
          overflow: hidden;
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
        }
        .btn {
          text-align: center;
          .el-button {
            color: #333;
          }
        }
      }
    }
  }
}
</style>
