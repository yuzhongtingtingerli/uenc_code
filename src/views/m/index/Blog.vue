<!--
 * @Author: yaoyuting
 * @Date: 2021-04-11 18:24:56
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-02 22:33:31
 * @Descripttion: 
-->
<template>
  <div class="Blog">
    <el-card class="box-card box-card-p20">
      <div class="pr">
        <div class="ra">
          <el-card class="box-card box-card-p0" v-for="blog in blogList" :key="blog.blogId">
            <div class="p5">
              <img :src="blog.images" alt="" />
            </div>
            <div class="m10">
              <div class="level4title">{{ blog.blogTitle }}</div>
              <div class="content" v-html="blog.text"></div>
            </div>
            <div class="btn">
              <router-link :to="{ path: '/m/Blog/Details', query: { id: blog.blogId } }">
                <el-button type="text" size="mini">More</el-button>
              </router-link>
            </div>
          </el-card>
        </div>
      </div>
      <div class="bottom">
        <div class="level2title">{{ $t("index.Blog") }}</div>
        <router-link to="/m/Blog"
          ><el-button type="primary" size="mini" round>进入博客 ></el-button></router-link
        >
      </div>
    </el-card>
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
  margin: 300px 0;
  .box-card {
    border-radius: 20px;
    .bottom {
      display: flex;
      justify-content: flex-start;
      transform: translateY(-90px);
    }
    .level2title {
      margin-right: 50px;
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
      transform: translateY(-120px);
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
    padding: 20px;
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
