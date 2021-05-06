<!--
 * @Author: yaoyuting
 * @Date: 2021-04-13 07:55:01
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-04-22 08:28:30
 * @Descripttion: 
-->
<template>
  <div class="Technology">
    <div class="banner">
      <div class="logo">
        <router-link to="/pc/synopsis"><img src="@/assets/images/index/奖励@2x.png" alt=""/></router-link>
      </div>
      <div class="content">
        <div class="list">{{ $t("index.index1") }}</div>
      </div>
    </div>
    <div class="introduced">
      <div class="about">
        <div class="subTitle">{{ $t("Technology.TechnologyTitle") }}</div>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <div class="level3title">
                <div class="icon"><img src="@/assets/images/right.png" alt="" /></div>
                {{ $t("Technology.DHT") }}
              </div>
              <div class="content">{{ $t("Technology.DHTText") }}</div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div class="level3title">
                <div class="icon"><img src="@/assets/images/right.png" alt="" /></div>
                {{ $t("Technology.DPOW") }}
              </div>
              <div class="content">{{ $t("Technology.DPOWText") }}</div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div class="level3title">
                <div class="icon"><img src="@/assets/images/right.png" alt="" /></div>
                {{ $t("Technology.Cross") }}
              </div>
              <div class="content">{{ $t("Technology.CrossaText") }}</div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div class="level3title">
                <div class="icon"><img src="@/assets/images/right.png" alt="" /></div>
                {{ $t("Technology.Verifiable") }}
              </div>
              <div class="content">{{ $t("Technology.VerifiableText") }}</div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="features">
        <div class="subTitle">{{ $t("Technology.Characteristic") }}</div>
        <el-row :gutter="20">
          <el-col :span="12">
            <ul>
              <li>
                <div class="title5leve">{{ $t("Technology.Decentralization") }}</div>
                <div class="content">{{ $t("Technology.DecentralizationText") }}</div>
              </li>
              <li>
                <div class="title5leve">{{ $t("Technology.Privacy") }}</div>
                <div class="content">{{ $t("Technology.PrivacyText") }}</div>
              </li>
              <li>
                <div class="title5leve">{{ $t("Technology.concurrency") }}</div>
                <div class="content">{{ $t("Technology.concurrencyText") }}</div>
              </li>
              <li>
                <div class="title5leve">{{ $t("Technology.speed") }}</div>
                <div class="content">{{ $t("Technology.speedText") }}</div>
              </li>
              <li>
                <div class="title5leve">{{ $t("Technology.cost") }}</div>
                <div class="content">{{ $t("Technology.costText") }}</div>
              </li>
            </ul>
          </el-col>
          <el-col :span="12">
            <div class="all_center">
              <img src="@/assets/images/right.png" alt="" />
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="path">
          <div class="subTitle">{{ $t("Technology.roadmap") }}</div>
          <div class="all_center">
            <img src="@/assets/images/right.png" alt="" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.Technology {
  .banner {
    height: 750px;
    background-image: url("../../assets/images/index/背景@2x.png");
    background-size: cover;
    background-position: center center;
    padding-top: 203px;
    .logo {
      width: 348px;
      height: 96px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .content {
      text-align: center;
      line-height: 30px;
      margin-top: 48px;
      .list {
        width: 900px;
        margin: 0 auto;
      }
    }
  }
  .introduced {
    width: 1000px;
    margin: 0 auto;
    .about {
      margin-bottom: 150px;
      .el-card {
        margin: 30px 20px;
        padding: 50px;
        height: 360px;
        box-sizing: border-box;
        border-radius: 30px;
        .level3title {
          text-align: center;
          margin-bottom: 30px;
          position: relative;
          .icon {
            position: absolute;
            top: 0;
            left: 0;
            img {
              width: 40px;
              height: 40px;
            }
          }
        }
        .content {
          font-size: 14px;
          line-height: 30px;
        }
      }
    }
    .features {
        margin-bottom: 200px;
      .subTitle {
        text-align: left !important;
      }
      .all_center {
          height: 450px;
        img {
          width: 390px;
          height: 330px;
        }
      }
      li {
        // list-style-image: url(images/disc.gif);
        list-style-type: circle;
      }
      .title5leve {
        line-height: 50px;
      }
      .content {
        font-size: 12px;
      }
    }
    .path {
        .subTitle {
            text-align: left !important;
        }
        .all_center {
          height: 700px;
        }
    }
  }
}
</style>
