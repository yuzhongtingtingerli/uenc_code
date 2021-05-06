<!--
 * @Author: yaoyuting
 * @Date: 2021-04-11 18:24:56
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-04-27 07:17:27
 * @Descripttion: 
-->
<template>
  <div class="Blog">
    <el-card class="box-card box-card-p20">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="level2title">{{ $t("index.Blog") }}</div>
          <router-link to="/pc/Blog"><el-button type="primary" size="small" round>进入博客 ></el-button></router-link>
        </el-col>
        <el-col :span="21" class="pr">
          <div class="ra">
            <el-card class="box-card box-card-p0" v-for="blog in blogList" :key="blog.blogId">
              <div class="p5">
                <img :src="blog.images" alt="" />
              </div>
              <div class="m10">
                <div class="level4title">{{blog.blogTitle}}</div>
                <div class="content" v-html="blog.text"></div>
              </div>
              <div class="btn">
                <router-link :to="{path: '/pc/Blog/Details', query: {id: blog.blogId}}">
                  <el-button type="text" size="mini">More</el-button>
                </router-link>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    blogList: {
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped>
.Blog {
  margin: 300px 0;
  .box-card {
    border-radius: 20px;
    .level2title {
      margin-bottom: 50px;
    }
    .ra {
      height: 330px;
      padding: 0;
      display: inline-flex;
      img {
        height: 120px;
        width: 100%;
      }
    }
    .pr {
        height: 280px;
        overflow-x: scroll;
        overflow-y: hidden;
        transform: translateY(-100px);
    }
    .content {
      font-size: 12px;
      height: 82px;
      overflow: hidden;
    }
    .btn {
      text-align: center;
      padding-bottom: 5px;
    }
  }
  .box-card-p20 {
    padding: 40px;
    height: 280px;
    overflow: visible;
  }
  .box-card-p0 {
    height: 280px;
    width: 250px;
    margin: 0 10px;
    padding: 0;
    box-sizing: border-box;
  }
}
</style>
