<!--
 * @Author: yaoyuting
 * @Date: 2021-04-11 18:24:56
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-10 19:59:02
 * @Descripttion: 
-->
<template>
  <div class="Blog">
    <div class="w1352 box-card box-card-p20">
      <el-row>
        <el-col :span="4">
          <div class="level2title">{{ $t("index.Blog") }}</div>
          <router-link to="/pc/Blog" class="btn_style"
            >进入博客 <i class="el-icon-right"></i
          ></router-link>
        </el-col>
        <el-col :span="20" class="pr">
          <div class="ra">
            <div class="item" v-for="blog in blogList" :key="blog.blogId" @click="detalis(blog)">
              <div>
                <img :src="blog.images" alt="" />
              </div>
              <div class="m">
                <div class="level4title">{{ blog.blogTitle }}</div>
                <div class="content" v-html="blog.text"></div>
              </div>
              <div class="footerUser">
                <span>{{ blog.createBy }}</span
                >{{ blog.createTime }}
              </div>
              <!-- <div class="btn">
                <router-link :to="{path: '/pc/Blog/Details', query: {id: blog.blogId}}">
                  <el-button type="text" size="mini">More</el-button>
                </router-link>
              </div> -->
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogList: {
      type: Array
    }
  },
  methods: {
    detalis(blog) {
      this.$router.push({
        path: "/pc/Blog/Details",
        query: { id: blog.blogId }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.Blog {
  margin: 448px 0 200px;
  .box-card {
    border-radius: 20px;
    background: #fbf6ff;
    border-radius: 50px 50px 50px 0px 50px;
    padding: 60px 0 0 26px;
    box-sizing: border-box;
    height: 320px;
    .level2title {
      font-size: 40px;
      color: #333333;
      margin-bottom: 80px;
    }
    .btn_style {
      font-size: 20px;
      color: #6624fa;
      display: block;
    }

    .ra {
      padding: 0;
      margin: 0;
      display: inline-flex;
      height: 374px;
      img {
        height: 200px;
        width: 280px;
      }
    }
    .pr {
      overflow-x: scroll;
      margin-top: -180px;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      overflow-x: auto;
    }
    .pr::-webkit-scrollbar {
      display: none;
    }
    .btn {
      text-align: center;
      padding-bottom: 5px;
    }
  }
  .footerUser {
    font-size: 16px;
    color: #8d8a9a;
    display: flex;
    justify-content: space-around;
    padding: 10px 0 19px;
  }
  .item {
    cursor: pointer;
    width: 280px;
    margin-right: 20px;
    padding: 0;
    background: #fff;
    height: 374px;
    .m {
      padding: 0 20px;
    }
    .level4title {
      font-size: 26px;
      color: #333333;
      margin-top: 10px;
      line-height: 37px;
    }
    .content {
      margin-top: 4px;
      font-size: 16px;
      height: 74px;
      line-height: 24px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
}
</style>
