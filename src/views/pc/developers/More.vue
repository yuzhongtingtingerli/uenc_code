<!--
 * @Author: yaoyuting
 * @Date: 2021-04-14 07:36:20
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-09 11:24:45
 * @Descripttion: 
-->
<template>
  <div class="More">
    <div class="more">
      <div class="list">
        <div class="item">
          <div class="images">
            <img src="@/assets/images/index/3-开发者@2x.png" alt="" />
          </div>
          <div class="title">{{ $t("Developer.Run") }}</div>
          <div class="content">{{ $t("Developer.RunText") }}</div>
          <div class="bottom">
            <el-button type="text" round>开始运行节点<i class="el-icon-right"></i></el-button>
          </div>
        </div>
        <div class="item">
          <div class="images">
            <img src="@/assets/images/index/开发者文档@2x.png" alt="" />
          </div>
          <div class="title">{{ $t("Developer.Developer") }}</div>
          <div class="content">{{ $t("Developer.DeveloperText") }}</div>
          <div class="bottom">
            <el-button type="text" round>开始运行节点<i class="el-icon-right"></i></el-button>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="item">
          <div class="images">
            <img src="@/assets/images/index/主网源码@2x.png" alt="" />
          </div>
          <div class="title">{{ $t("Developer.Main") }}</div>
          <div class="content">{{ $t("Developer.MainText") }}</div>
          <div class="bottom">
            <el-button type="text" round>开始运行节点<i class="el-icon-right"></i></el-button>
          </div>
        </div>
        <div class="item">
          <div class="images">
            <img src="@/assets/images/index/接口工具@2x.png" alt="" />
          </div>
          <div class="title">{{ $t("Developer.Interface") }}</div>
          <div class="content">{{ $t("Developer.InterfaceText") }}</div>
          <div class="bottom">
            <el-button type="text" round>开始运行节点<i class="el-icon-right"></i></el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.More {
  background-image: url("../../../assets/images/index/kfz_bg.png");
      background-size: cover;
      background-position: center center;
  .more {
    width: 1300px;
    margin: 0 auto;
    padding-top: 158px;
    padding-bottom: 20px;
    .list {
      display: flex;
      justify-content: space-between;
      margin-bottom: 120px;
      .item {
        img {
          width: 520px;
          height: 520px;
        }
        .title {
          margin-top: 20px;
          font-size: 40px;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 500;
          text-align: left;
          color: #333333;
          line-height: 56px;
        }
        .content {
          margin-top: 20px;
          font-size: 16px;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 500;
          text-align: left;
          color: #333333;
          line-height: 32px;
        }
        .bottom {
          margin-top: 20px;
          .el-button {
            padding: 0;
            margin: 0;
            font-size: 20px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #6624fa;
            line-height: 28px;
          }
        }
      }
    }
  }
}
</style>
