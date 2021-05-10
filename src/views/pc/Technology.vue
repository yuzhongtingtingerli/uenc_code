<!--
 * @Author: yaoyuting
 * @Date: 2021-04-13 07:55:01
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-09 10:32:10
 * @Descripttion: 
-->
<template>
  <div class="Technology">
    <div class="banner">
      <div class="content w1300">
        <div class="title">{{ $t("index.index1") }}</div>
        <router-link to="/">了解更多关于技术 <i class="el-icon-right"></i></router-link>
        <router-link to="/">白皮书 <i class="el-icon-right"></i></router-link>
      </div>
    </div>
    <div class="introduced">
      <div class="about_bg">
        <div class="about">
          <div class="sub_title">{{ $t("Technology.TechnologyTitle") }}</div>
          <div class="list">
            <div class="item">
              <div class="images">
                <img src="@/assets/images/index/网状网络@2x.png" alt="" />
              </div>
              <div class="title">{{ $t("Technology.DHT") }}</div>
              <div class="content">{{ $t("Technology.DHTText") }}</div>
            </div>
            <div class="item">
              <div class="images">
                <img src="@/assets/images/index/共识算法@2x.png" alt="" />
              </div>
              <div class="title">{{ $t("Technology.DPOW") }}</div>
              <div class="content">{{ $t("Technology.DPOWText") }}</div>
            </div>
          </div>
          <div class="list">
            <div class="item">
              <div class="images">
                <img src="@/assets/images/index/存储技术@2x.png" alt="" />
              </div>
              <div class="title">{{ $t("Technology.Cross") }}</div>
              <div class="content">{{ $t("Technology.CrossaText") }}</div>
            </div>
            <div class="item">
              <div class="images">
                <img src="@/assets/images/index/可验证计算@2x.png" alt="" />
              </div>
              <div class="title">{{ $t("Technology.Verifiable") }}</div>
              <div class="content">{{ $t("Technology.VerifiableText") }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="features_bg">
        <div class="features">
          <div class="sub_title">{{ $t("Technology.Characteristic") }}</div>
          <div class="list">
            <div class="item">
              <div class="num">01</div>
              <div class="title">{{ $t("Technology.Decentralization") }}</div>
              <div class="content">{{ $t("Technology.DecentralizationText") }}</div>
            </div>
            <div class="images">
              <img src="@/assets/images/index/去中心化@2x.png" alt="" />
            </div>
          </div>
          <div class="list">
            <div class="images">
              <img src="@/assets/images/index/隐私及安全@2x.png" alt="" />
            </div>
            <div class="item">
              <div class="num">02</div>
              <div class="title">{{ $t("Technology.Privacy") }}</div>
              <div class="content">{{ $t("Technology.PrivacyText") }}</div>
            </div>
          </div>
          <div class="list">
            <div class="item">
              <div class="num">03</div>
              <div class="title">{{ $t("Technology.concurrency") }}</div>
              <div class="content">{{ $t("Technology.concurrencyText") }}</div>
            </div>
            <div class="images">
              <img src="@/assets/images/index/高并发@2x.png" alt="" />
            </div>
          </div>
          <div class="list">
            <div class="images">
              <img src="@/assets/images/index/高速度@2x.png" alt="" />
            </div>
            <div class="item">
              <div class="num">04</div>
              <div class="title">{{ $t("Technology.speed") }}</div>
              <div class="content">{{ $t("Technology.speedText") }}</div>
            </div>
          </div>
          <div class="list">
            <div class="item">
              <div class="num">05</div>
              <div class="title">{{ $t("Technology.cost") }}</div>
              <div class="content">{{ $t("Technology.costText") }}</div>
            </div>
            <div class="images">
              <img src="@/assets/images/index/低成本@2x.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="path_bg">
        <div class="path">
          <div class="subTitle">{{ $t("Technology.roadmap") }}</div>
          <div class="images">
            <img src="@/assets/images/index/路线图.png" alt="" />
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
.Technology {
  .banner {
    height: 900px;
    background-image: url("../../assets/images/index/tecBanner.png");
    background-size: cover;
    background-position: center center;
    padding-top: 203px;
    .content{
      padding: 250px 0 0;
      .title{
        font-size: 80px;
        color: #ffffff;
      }
      a{
        color: #fff;
        font-size: 20px;
        margin-right: 80px;
      }
    }
  }
  .introduced {
    .about_bg {
      background-image: url("../../assets/images/index/js_bg.png");
      background-size: cover;
      background-position: center center;
    }
    .features_bg {
      background-image: url("../../assets/images/index/tx_bg.png");
      background-size: cover;
      background-position: center center;
    }
    .path_bg {
      background-image: url("../../assets/images/index/path_bg.png");
      background-size: cover;
      background-position: center center;
    }
    .sub_title {
      border-top: 4px solid #0d051f;
      font-size: 50px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #0d051f;
      padding-top: 40px;
    }
    .about {
      width: 1300px;
      margin: 0 auto;
      padding-top: 140px;
      padding-bottom: 165px;
      .list {
        display: flex;
        justify-content: space-between;
        margin-top: 60px;
        margin-bottom: 20px;
        .item {
          width: 520px;
          .images {
            width: 520px;
            height: 300px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .title {
            font-size: 40px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #0d051f;
            margin-top: 10px;
          }
          .content {
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #0d051f;
            line-height: 32px;
            margin-top: 30px;
          }
        }
      }
    }
    .features {
      width: 1300px;
      margin: 0 auto;
      padding-top: 117px;
      padding-bottom: 200px;
      .list {
        display: flex;
        justify-content: space-between;
        .item {
          width: 480px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .num {
            font-size: 20px;
            font-family: Futura, Futura-MediumItalic;
            font-weight: MediumItalic;
            text-align: left;
            color: #0d051f;
            line-height: 27px;
            border-bottom: 1px solid #0d051f;
          }
          .title {
            font-size: 40px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #0d051f;
            line-height: 56px;
            margin-top: 37px;
            margin-bottom: 30px;
          }
          .content {
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #0d051f;
            line-height: 32px;
          }
        }
      }
      .list:nth-child(2) {
        img {
          width: 463px;
          height: 498px;
        }
      }
      .list:nth-child(3) {
        img {
          width: 434px;
          height: 497px;
        }
      }
      .list:nth-child(4) {
        img {
          width: 501px;
          height: 440px;
        }
      }
      .list:nth-child(5) {
        img {
          width: 536px;
          height: 409px;
        }
      }
      .list:nth-child(6) {
        img {
          width: 530px;
          height: 375px;
        }
      }
    }
    .path {
      width: 1300px;
      margin: 0 auto;
      padding-top: 140px;
      padding-bottom: 160px;
      .subTitle {
        font-size: 50px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: left;
        color: #0d051f;
        line-height: 70px;
        margin-bottom: 74px;
      }
      .images {
        background-color: #fff;
        img {
          width: 1300px;
          height: 2000px;
        }
      }
    }
  }
}
</style>
