<!--
 * @Author: yaoyuting
 * @Date: 2021-04-11 17:01:27
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-08 07:49:07
 * @Descripttion: 
-->
<template>
  <div class="TechnicalCharacteristics">
    <router-link to="/m/Technology"><div class="sub_title">{{ $t("index.TechnicalTitle") }}</div></router-link>
    <div class="details">
      <div class="list">
        <div class="num">01</div>
        <div class="bgc"></div>
        <div class="title">{{ $t("index.Structure") }}</div>
        <div class="content">{{ $t("index.StructureText") }}</div>
      </div>
      <div class="list">
        <div class="num">02</div>
        <div class="bgc"></div>
        <div class="title">{{ $t("index.Algorithm") }}</div>
        <div class="content">{{ $t("index.AlgorithmText") }}</div>
      </div>
      <div class="list">
        <div class="num">03</div>
        <div class="bgc"></div>
        <div class="title">{{ $t("index.Hybrid") }}</div>
        <div class="content">{{ $t("index.HybridText") }}</div>
      </div>
      <div class="list">
        <div class="num">04</div>
        <div class="bgc"></div>
        <div class="title">{{ $t("index.WASM") }}</div>
        <div class="content">{{ $t("index.WASMText") }}</div>
      </div>
      <!-- <div class="btn">
        <router-link to="/m/Technology">
          <el-button type="text" class="btn_style"
            >了解更多技术<i class="el-icon-right"></i
          ></el-button>
        </router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.TechnicalCharacteristics {
  margin-top: 100px;
  padding-bottom: 92px;
  .sub_title {
    font-size: 28px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    color: #333333;
    line-height: 40px;
    margin-left: 36px;
  }
  .details {
    margin: 48px 30px 0;
    .list {
      .num {
        font-size: 24px;
        font-family: Futura, Futura-MediumItalic;
        font-weight: MediumItalic;
        text-align: left;
        color: #6624fa;
        line-height: 30px;
        margin-bottom: 6px;
      }
      .bgc {
        width: 540px;
        height: 2px;
        opacity: 1;
        background: linear-gradient(270deg, rgba(98, 98, 98, 0), #333333);
      }
      .title {
        font-size: 24px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: left;
        color: #333333;
        line-height: 34px;
        margin-top: 20px;
      }
      .content {
        font-size: 20px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: left;
        color: #333333;
        line-height: 40px;
        margin-top: 12px;
        margin-bottom: 30px;
        opacity: 0.7;
      }
      
    }
  }
}
</style>
