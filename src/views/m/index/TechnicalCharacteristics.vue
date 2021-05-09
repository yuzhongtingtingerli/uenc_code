<!--
 * @Author: yaoyuting
 * @Date: 2021-04-11 17:01:27
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-09 14:12:50
 * @Descripttion: 
-->
<template>
  <div class="TechnicalCharacteristics">
    <router-link to="/m/Technology"
      ><div class="sub_title">{{ $t("index.TechnicalTitle") }}</div></router-link
    >
    <div class="details">
      <div class="list">
        <div class="num">01</div>
        <div class="bgc"></div>
        <div class="title">{{ $t("index.Structure") }}</div>
        <div class="content">{{ $t("index.StructureText") }}</div>
        <div class="images">
          <img src="@/assets/imagesm/index/配图3.png" alt="" />
        </div>
      </div>
      <div class="list">
        <div class="num">02</div>
        <div class="bgc"></div>
        <div class="title">{{ $t("index.Algorithm") }}</div>
        <div class="content">{{ $t("index.AlgorithmText") }}</div>
        <div class="images">
          <img src="@/assets/imagesm/index/配图4.png" alt="" />
        </div>
      </div>
      <div class="list">
        <div class="num">03</div>
        <div class="bgc"></div>
        <div class="title">{{ $t("index.Hybrid") }}</div>
        <div class="content">{{ $t("index.HybridText") }}</div>
        <div class="images">
          <img src="@/assets/imagesm/index/配图5.png" alt="" />
        </div>
      </div>
      <div class="list">
        <div class="num">04</div>
        <div class="bgc"></div>
        <div class="title">{{ $t("index.WASM") }}</div>
        <div class="content">{{ $t("index.WASMText") }}</div>
        <div class="images">
          <img src="@/assets/imagesm/index/配图6.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.TechnicalCharacteristics {
  margin-top: 94px;
  padding-bottom: 92px;
  .sub_title {
    font-size: 34px;
    font-family: PingFang-SC-Heavy, PingFang-SC;
    font-weight: 800;
    color: #6624fa;
    line-height: 48px;
    margin-left: 30px;
    margin-bottom: 20px;
  }
  .details {
    margin: 0 30px;
    padding-bottom: 48px;
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
        width: 268px;
        height: 234px;
      }
    }
    .list:nth-child(2) {
      img {
        width: 270px;
        height: 270px;
      }
    }
    .list:nth-child(3) {
      img {
        width: 536px;
        height: 184px;
      }
    }
    .list:nth-child(4) {
      img {
        width: 268px;
        height: 262px;
      }
    }
  }
}
</style>
