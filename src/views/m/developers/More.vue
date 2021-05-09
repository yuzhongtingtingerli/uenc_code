<!--
 * @Author: yaoyuting
 * @Date: 2021-04-14 07:36:20
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-09 18:20:47
 * @Descripttion: 
-->
<template>
  <div class="More">
    <div class="more">
      <div class="list">
        <div class="images">
          <img src="@/assets/imagesm/kfz/配图.png" alt="" srcset="" />
        </div>
        <div class="title">{{ $t("Developer.Run") }}</div>
        <div class="content">{{ $t("Developer.RunText") }}</div>
        <div class="btn">
          <el-button type="text">开始运行节点<i class="el-icon-right"></i></el-button>
        </div>
      </div>
      <div class="list">
        <div class="images">
          <img src="@/assets/imagesm/kfz/配图2.png" alt="" srcset="" />
        </div>
        <div class="title">{{ $t("Developer.Developer") }}</div>
        <div class="content">{{ $t("Developer.DeveloperText") }}</div>
        <div class="btn">
          <el-button type="text">了解更多<i class="el-icon-right"></i></el-button>
        </div>
      </div>
      <div class="list">
        <div class="images">
          <img src="@/assets/imagesm/kfz/配图3.png" alt="" srcset="" />
        </div>
        <div class="title">{{ $t("Developer.Main") }}</div>
        <div class="content">{{ $t("Developer.MainText") }}</div>
        <div class="btn">
          <el-button type="text">查看更多<i class="el-icon-right"></i></el-button>
        </div>
      </div>
      <div class="list">
        <div class="images">
          <img src="@/assets/imagesm/kfz/配图4.png" alt="" srcset="" />
        </div>
        <div class="title">{{ $t("Developer.Interface") }}</div>
        <div class="content">{{ $t("Developer.InterfaceText") }}</div>
        <div class="btn">
          <el-button type="text">查看更多<i class="el-icon-right"></i></el-button>
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
  background-image: url("../../../assets/imagesm/kfz/bg1.png");
  background-size: cover;
  background-position: center center;
  .more {
    padding: 52px 76px 80px;
    .list {
      margin-bottom: 68px;
      .images {
        width: 300 * 2px;
        height: 186 * 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
      }
      .title {
        font-size: 34px;
        font-family: PingFang-SC-Heavy, PingFang-SC;
        font-weight: 800;
        color: #000000;
        line-height: 48px;
        margin-top: 40px;
        margin-bottom: 8px;
      }
      .content {
        font-size: 26px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 44px;
        margin-bottom: 24px;
      }
      .btn {
        .el-button {
          padding: 0;
          margin: 0;
          font-size: 32px !important;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #6624fa;
          line-height: 44px;
        }
      }
    }
    .list:nth-child(1) {
      img {
        width: 131 * 2px;
        height: 131 * 2px;
      }
    }
    .list:nth-child(2) {
      img {
        width: 141 * 2px;
        height: 149 * 2px;
      }
    }
    .list:nth-child(3) {
      img {
        width: 151 * 2px;
        height: 156 * 2px;
      }
    }
    .list:nth-child(4) {
      img {
        width: 150 * 2px;
        height: 154 * 2px;
      }
    }
  }
}
</style>
