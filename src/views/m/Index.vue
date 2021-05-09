<!--
 * @Author: yaoyuting
 * @Date: 2019-08-29 23:45:36
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-09 15:01:49
 * @Descripttion: 
-->
<template>
  <div class="index">
    <div class="content">
      <div class="banner">
        <div class="text">可让全世界任何一台计算机 并入的区块链网</div>
      </div>
      <div class="what_bg">
        <div class="what">
          <div class="text">
            <div class="title">{{ $t("index.UENCTitle") }}</div>
            <div class="details">{{ $t("index.UENCContent") }}</div>
          </div>
          <div class="bottom">
            <img src="@/assets/imagesm/index/配图1.png" alt="" />
          </div>
        </div>
        <div class="fast">
          <div class="title">经济 快速 安全</div>
          <div class="text">
            简单高效的算法实现低成本介入流通，自主发明新型DPOW共识机制让出块及验证更加快速，UTXO技术保障了UENC用户链上交易的安全可信
          </div>
          <div class="left">
            <img src="@/assets/imagesm/index/配图2.png" alt="" />
          </div>
        </div>
      </div>
      <div class="bg_style">
        <div class="overview">
          <div class="title">
            {{ $t("index.Network") }}
          </div>
          <div class="overview_con" v-if="outcomeData">
            <div class="line">
              <div class="center">
                <div class="num">{{ outcomeData.block_number || 0 }}</div>
                <div class="r_title">{{ $t("index.Height") }}</div>
              </div>
              <div class="center">
                <div class="num">{{ outcomeData.reward || 0 }}</div>
                <div class="r_title">{{ $t("index.Award") }}</div>
              </div>
            </div>
            <div class="line">
              <div class="center">
                <div class="num">{{ outcomeData.node || 0 }}</div>
                <div class="r_title">{{ $t("index.Nodes") }}</div>
              </div>
              <div class="center">
                <div class="num">{{ outcomeData.transaction_number || 0 }}</div>
                <div class="r_title">{{ $t("index.Number") }}</div>
              </div>
            </div>
          </div>
          <div class="btn">
            <el-button type="text" class="btn_style"
              >查看主网数据<i class="el-icon-right"></i
            ></el-button>
          </div>
        </div>
        <TechnicalCharacteristics></TechnicalCharacteristics>
      </div>
      <EconomicModels></EconomicModels>
      <Blog :blogList="blogList" v-if="blogList.length > 0"></Blog>
      <CoreMembers :msemberList="msemberList" v-if="msemberList.length > 0"></CoreMembers>
      <Partners :partnerList="partnerList" v-if="partnerList.length > 0"></Partners>
    </div>
  </div>
</template>

<script>
import TechnicalCharacteristics from "@/views/m/index/TechnicalCharacteristics.vue";
import EconomicModels from "@/views/m/index/EconomicModels.vue";
import Blog from "@/views/m/index/Blog.vue";
import CoreMembers from "@/views/m/index/CoreMembers.vue";
import Partners from "@/views/m/index/Partners.vue";
import {
  GetBlogList,
  GetMsemberList,
  GetPartnerList,
  GetProjectOutcome
} from "@/assets/server/api.js";
import { baseURL } from "@/utils/utils";
import { log } from "util";
export default {
  components: {
    TechnicalCharacteristics,
    EconomicModels,
    Blog,
    CoreMembers,
    Partners
  },
  data() {
    return {
      msemberList: [],
      baseURL: baseURL,
      outcomeData: null,
      blogList: [],
      partnerList: []
    };
  },
  created() {
    this.getProjectOutcome();
    this.getBlogList();
    this.getMsemberList();
    this.getPartnerList();
  },
  methods: {
    async getProjectOutcome() {
      const data = await GetProjectOutcome();
      if (data.code === 0) {
        this.outcomeData = data.data;
      } else {
        this.$message.error(data.msg);
      }
    },
    async getBlogList() {
      const data = await GetBlogList();
      if (data.code === 0) {
        data.rows.forEach(item => {
          item.images = baseURL + item.images;
          item.text = item.text.replace(/\n/g, "<br>");
        });
        this.blogList = data.rows;
      } else {
        this.$message.error(data.msg);
      }
    },
    async getMsemberList() {
      const dataList = await GetMsemberList();
      if (dataList.code === 0) {
        dataList.rows.forEach(item => {
          item.images = baseURL + item.images;
        });
        this.msemberList = dataList.rows;
      } else {
        this.$message.error("接口错误！");
      }
    },
    async getPartnerList() {
      const dataList = await GetPartnerList();
      if (dataList.code === 0) {
        dataList.rows.forEach(item => {
          item.images = baseURL + item.images;
        });
        // let list = [];
        // for (let index = 1; index < dataList.rows.length + 1; index++) {
        //   list.push(dataList.rows[index - 1]);
        //   if (index % 6 == 0) {
        //     this.partnerList.push(list);
        //     list = [];
        //   }
        // }
        // this.partnerList.push(list);
        this.partnerList = dataList.rows
      } else {
        this.$message.error(dataList.msg);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 750px;
  .banner {
    height: 660px;
    background-image: url("../../assets/imagesm/index/index_bg.png");
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
}
.what_bg {
  background-image: url("../../assets/imagesm/index/what_bg.png");
  background-size: cover;
  background-position: center center;
  .what {
    // background-color: pink;
    .text {
      padding: 0 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        font-size: 34px;
        font-family: PingFang-SC-Heavy, PingFang-SC;
        font-weight: 800;
        color: #6624fa;
        margin-top: 64px;
        margin-bottom: 40px;
      }
      .details {
        font-size: 20px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #333333;
        line-height: 40px;
        margin-bottom: 8px;
      }
    }
    .bottom {
      text-align: center;
      margin-top: 20px;
      img {
        width: 382px;
        height: 284px;
      }
    }
  }
  .fast {
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      text-align: center;
      margin-top: 60px;
      margin-bottom: 20px;
      font-size: 28px;
      font-family: PingFang-SC-Heavy, PingFang-SC;
      font-weight: 800;
      color: #000000;
      line-height: 28px;
    }
    .text {
      font-size: 26px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      line-height: 44px;
    }
    .left {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 54px;
      img {
        width: 382px;
        height: 352px;
      }
    }
  }
}
.bg_style {
  background-image: url("../../assets/imagesm/index/main_bg.png");
  background-size: cover;
  background-position: center center;
}
.overview {
  padding-top: 64px;
  .title {
    font-size: 34px;
    font-family: PingFang-SC-Heavy, PingFang-SC;
    font-weight: 800;
    color: #6624fa;
    line-height: 48px;
    margin-left: 30px;
    margin-bottom: 72px;
  }
  .overview_con {
    display: flex;
    justify-content: flex-start;
    .line:nth-child(1) {
      margin-left: 72px;
    }
    .line {
      border-left: 2px solid #333333;
      width: 336px;
      height: 240px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .center {
        margin-left: 18px;
        .num {
          font-size: 34px;
          font-family: Helvetica-Bold, Helvetica;
          font-weight: bold;
          color: #333333;
          line-height: 40px;
          margin-bottom: 12px;
        }
        .r_title {
          font-size: 20px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 28px;
          margin-bottom: 12px;
        }
      }
    }
  }
  .btn {
    text-align: right;
    margin-right: 30px;
    margin-top: 60px;
    .el-button {
      font-size: 32px !important;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #6624FA;
      line-height: 44px;
    }
  }
}
</style>
