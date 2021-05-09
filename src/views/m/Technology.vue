<!--
 * @Author: yaoyuting
 * @Date: 2021-04-13 07:55:01
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-09 17:39:49
 * @Descripttion: 
-->
<template>
  <div class="Technology">
    <div class="banner">
      <div class="logo">
        <router-link to="/m/synopsis">
          <!-- <img src="@/assets/imagesm/js/奖励@2x.png" alt=""/> -->
        </router-link>
      </div>
      <div class="content">
        <div class="list">{{ $t("index.index1") }}</div>
      </div>
    </div>
    <div class="introduced">
      <div class="about_bg">
        <div class="about">
          <div class="sub_title">{{ $t("Technology.TechnologyTitle") }}</div>
          <div class="box-card">
            <div class="images"><img src="@/assets/imagesm/js/DHT.png" alt="" /></div>
            <div class="title">
              {{ $t("Technology.DHT") }}
            </div>
            <div class="content">{{ $t("Technology.DHTText") }}</div>
          </div>
          <div class="box-card">
            <div class="images"><img src="@/assets/imagesm/js/共识算法.png" alt="" /></div>
            <div class="title">
              {{ $t("Technology.DPOW") }}
            </div>
            <div class="content">{{ $t("Technology.DPOWText") }}</div>
          </div>
          <div class="box-card">
            <div class="images"><img src="@/assets/imagesm/js/存储.png" alt="" /></div>
            <div class="title">
              {{ $t("Technology.Cross") }}
            </div>
            <div class="content">{{ $t("Technology.CrossaText") }}</div>
          </div>
          <div class="box-card">
            <div class="images"><img src="@/assets/imagesm/js/可验证计算.png" alt="" /></div>
            <div class="title">
              {{ $t("Technology.Verifiable") }}
            </div>
            <div class="content">{{ $t("Technology.VerifiableText") }}</div>
          </div>
        </div>
      </div>
      <div class="features_bg">
        <div class="features">
          <div class="sub_title">{{ $t("Technology.Characteristic") }}</div>
          <div class="details">
            <div class="list">
              <div class="num">01</div>
              <div class="bgc"></div>
              <div class="title">{{ $t("Technology.Decentralization") }}</div>
              <div class="content">{{ $t("Technology.DecentralizationText") }}</div>
              <div class="images">
                <img src="@/assets/imagesm/js/1.png" alt="" />
              </div>
            </div>
            <div class="list">
              <div class="num">02</div>
              <div class="bgc"></div>
              <div class="title">{{ $t("Technology.Privacy") }}</div>
              <div class="content">{{ $t("Technology.PrivacyText") }}</div>
              <div class="images">
                <img src="@/assets/imagesm/js/2.png" alt="" />
              </div>
            </div>
            <div class="list">
              <div class="num">03</div>
              <div class="bgc"></div>
              <div class="title">{{ $t("Technology.concurrency") }}</div>
              <div class="content">{{ $t("Technology.concurrencyText") }}</div>
              <div class="images">
                <img src="@/assets/imagesm/js/3.png" alt="" />
              </div>
            </div>
            <div class="list">
              <div class="num">04</div>
              <div class="bgc"></div>
              <div class="title">{{ $t("Technology.speed") }}</div>
              <div class="content">{{ $t("Technology.speedText") }}</div>
              <div class="images">
                <img src="@/assets/imagesm/js/4.png" alt="" />
              </div>
            </div>
            <div class="list">
              <div class="num">05</div>
              <div class="bgc"></div>
              <div class="title">{{ $t("Technology.cost") }}</div>
              <div class="content">{{ $t("Technology.costText") }}</div>
              <div class="images">
                <img src="@/assets/imagesm/js/5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="path_bg">
        <div class="path">
          <div class="subTitle">{{ $t("Technology.roadmap") }}</div>
          <div class="images">
            <img src="@/assets/imagesm/js/path.png" alt="" />
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
    height: 660px;
    background-image: url("../../assets/imagesm/js/banner.png");
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      width: 634px;
      font-size: 56px;
      font-family: YouSheBiaoTiHei;
      color: #ffffff;
      line-height: 70px;
    }
  }
  .introduced {
    width: 750px;
    .about_bg {
      background-image: url("../../assets/imagesm/js/bg1.png");
      background-size: cover;
      background-position: center center;
    }
    .features_bg {
      background-image: url("../../assets/imagesm/js/bg2.png");
      background-size: cover;
      background-position: center center;
    }
    .path_bg {
      background-image: url("../../assets/imagesm/js/bg3.png");
      background-size: cover;
      background-position: center center;
    }
    .sub_title {
      font-size: 44px;
      font-family: PingFang-SC-Heavy, PingFang-SC;
      font-weight: 800;
      color: #000000;
      border-top: 1px solid #000;
      padding-top: 44px;
    }
    .about {
      padding: 0 30px;
      padding-top: 46px;
      .sub_title {
        margin-bottom: 30px;
      }
      .box-card {
        padding: 0 50px;
        padding-bottom: 100px;
        .images {
          width: 592px;
          height: 342px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            height: 266px;
          }
        }
        .title {
          font-size: 34px;
          font-family: PingFang-SC-Heavy, PingFang-SC;
          font-weight: 800;
          color: #000000;
          line-height: 48px;
          margin-top: 30px;
          margin-bottom: 8px;
        }
        .content {
          font-size: 26px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 44px;
        }
      }
    }
    .features {
      padding: 68px 32px;
      .list {
        .num {
          font-size: 28px;
          font-family: Futura-MediumItalic, Futura;
          font-weight: normal;
          color: #6624fa;
          line-height: 40px;
          margin-bottom: 4px;
        }
        .bgc {
          width: 540px;
          height: 2px;
          opacity: 1;
          background: linear-gradient(270deg, rgba(98, 98, 98, 0), #333333);
        }
        .title {
          font-size: 28px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 40px;
          margin-top: 20px;
          margin-bottom: 40px;
        }
        .content {
          font-size: 24px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 36px;
          margin-top: 8px;
          margin-bottom: 40px;
          opacity: 0.7;
        }
        .images {
          text-align: center;
          margin-top: 40px;
          margin-bottom: 46px;
        }
      }
      .list:nth-child(1) {
        img {
          width: 270px;
          height: 292px;
        }
      }
      .list:nth-child(2) {
        img {
          width: 147 * 2px;
          height: 166 * 2px;
        }
      }
      .list:nth-child(3) {
        img {
          width: 176 * 2px;
          height: 155 * 2px;
        }
      }
      .list:nth-child(4) {
        img {
          width: 209 * 2px;
          height: 159 * 2px;
        }
      }
      .list:nth-child(5) {
        img {
          width: 213 * 2px;
          height: 153 * 2px;
        }
      }
    }
    .path {
      padding: 56px 32px 116px;
      .subTitle {
        font-size: 44px;
        font-family: PingFang-SC-Heavy, PingFang-SC;
        font-weight: 800;
        color: #000000;
        line-height: 60px;
        padding-bottom: 46px;
        text-align: left;
      }
      .images {
        background-color: #fff;
        padding: 44px 22px;
        img {
          width: 315 * 2px;
          height: 474 * 2px;
        }
      }
    }
  }
}
</style>
