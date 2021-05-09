<!--
 * @Author: yaoyuting
 * @Date: 2021-04-14 20:32:42
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-04-25 21:11:51
 * @Descripttion: 
-->
<template>
  <div class="Blog" v-if="blogList.length > 0">
    <div class="banner">
        <div class="placeholder"></div>
        <div class="details">
            <div class="title">{{blogList[0].blogTitle}}</div>
            <div class="date">{{blogList[0].createTime}} {{blogList[0].createBy}}</div>
            <div class="text" v-html="blogList[0].text"></div>
            <div class="btns">
                <router-link class="btn" :to="{path: '/pc/Blog/Details', query: {id: blogList[0].blogId}}">
                  More
                </router-link>
                <div  class="btn">订阅</div>
            </div>
        </div>
    </div>
    <div class="content">
      <div class="w1352 w">
        <div class="box-card" v-for="blog in blogList" :key="blog.blogId">
          <router-link :to="{path: '/pc/Blog/Details', query: {id: blog.blogId}}">
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
              <!-- <div class="btn">
                <router-link :to="{path: '/pc/Blog/Details', query: {id: blog.blogId}}">
                  <el-button type="text">More</el-button>
                </router-link>
              </div> -->
            </div>
          </router-link>
        </div>
        <div class="box-card"></div>
        <div class="box-card"></div>
      </div>
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
    height: 900px;
    background-image: url("../../assets/images/index/blogbg.png");
    background-size: cover;
    background-position: center center;
    padding-top: 203px;
    display: flex;
    flex-direction: column;
    .placeholder {
        flex: 1;
    }
    .details {
      color: #fff;
        margin: 0 300px;
        .date {
            font-size: 16px;
        }
        .title {
            font-size: 40px;
        }
        .text {
            font-size: 18px;
            height: 100px;
            overflow: hidden;
        }
        .btns {
            margin: 50px 0 76px;
            text-align: right;
            display: flex;
            justify-content: flex-end;
            .btn {
                font-size: 24px;
                color: #ffffff;
                width: 140px;
                text-align: center;
                height: 54px;
                line-height: 54px;
                background: linear-gradient(90deg,#4d71ff, #003cfb);
                border-radius: 33px;
                margin-left: 50px;
            }
        }
    }
  }
  .content{
    background: sandybrown;
  }
  .w {
    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 150px 0;
    .box-card {
      width: 420px;
      border-radius: 20px;
      padding: 10px 0;
      padding-bottom: 40px;
      box-sizing: border-box;
      .images {
        img {
          height: 300px;
          width: 100%;
        }
      }
      .main {
        background: #fff;
        padding: 10px 30px;
        .top {
          font-size: 26px;
        }
        .medile {
          font-size: 16px;
          color: #8179a1;
          height: 80px;
          margin-bottom: 20px;
          overflow: hidden;
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          color: #8179a1;
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
