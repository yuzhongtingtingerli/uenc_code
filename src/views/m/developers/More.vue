<!--
 * @Author: yaoyuting
 * @Date: 2021-04-14 07:36:20
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-02 22:10:35
 * @Descripttion: 
-->
<template>
  <div class="More">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card">
          <div class="top">
            <div class="left">
              <div class="level3title">{{ $t("Developer.Run") }}</div>
              <div class="textcommon">{{ $t("Developer.RunText") }}</div>
            </div>
            <div class="right">
              <img src="@/assets/images/right.png" alt="" />
            </div>
          </div>
          <div class="bottom">
            <el-button type="primary" round size="mini">开始运行节点</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card class="box-card">
          <div class="top">
            <div class="left">
              <div class="level3title">{{ $t("Developer.Developer") }}</div>
              <div class="textcommon">{{ $t("Developer.DeveloperText") }}</div>
            </div>
            <div class="right">
              <img src="@/assets/images/right.png" alt="" />
            </div>
          </div>
          <div class="bottom">
            <el-button type="primary" round size="mini">开始运行节点</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card class="box-card">
          <div class="top">
            <div class="left">
              <div class="level3title">{{ $t("Developer.Main") }}</div>
              <div class="textcommon">{{ $t("Developer.MainText") }}</div>
            </div>
            <div class="right">
              <img src="@/assets/images/right.png" alt="" />
            </div>
          </div>
          <div class="bottom">
            <el-button type="primary" round size="mini">开始运行节点</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card class="box-card">
          <div class="top">
            <div class="left">
              <div class="level3title">{{ $t("Developer.Interface") }}</div>
              <div class="textcommon">{{ $t("Developer.InterfaceText") }}</div>
            </div>
            <div class="right">
              <img src="@/assets/images/right.png" alt="" />
            </div>
          </div>
          <div class="bottom">
            <el-button type="primary" size="small" round>开始运行节点</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.More {
    padding: 20px;
  .box-card {
    padding: 30px 50px;
    box-sizing: border-box;
    margin: 30px 15px;
    .top {
      display: flex;
      justify-content: space-between;
      .left {
        .level3title {
          line-height: 50px;
        }
      }
      .right {
        img {
          width: 136px;
          height: 126px;
        }
      }
    }
  }
}
</style>
