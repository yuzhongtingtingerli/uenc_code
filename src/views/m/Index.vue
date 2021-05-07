<!--
 * @Author: yaoyuting
 * @Date: 2019-08-29 23:45:36
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-07 17:02:55
 * @Descripttion: 
-->
<template>
  <div class="index">
    <div class="content">
      <div class="what">
        <div class="text">
          <div class="title">{{ $t("index.UENCTitle") }}</div>
          <div class="details">{{ $t("index.UENCContent") }}</div>
        </div>
        <div class="bottom">
          <img src="@/assets/imagesm/index/首页1@2x.png" alt="" />
        </div>
      </div>
      <div class="fast">
        <div class="left">
          <img src="@/assets/imagesm/index/首页2@2x.png" alt="" />
        </div>
        <div class="right">
          <div class="title">经济 快速 安全</div>
          <div class="text">
            简单高效的算法实现低成本介入流通，自主发明新型DPOW共识机制让出块及验证更加快速，UTXO技术保障了UENC用户链上交易的安全可信
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
      <!-- <Partners :partnerList="partnerList" v-if="partnerList.length > 0"></Partners> -->
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
        let list = [];
        for (let index = 1; index < dataList.rows.length + 1; index++) {
          list.push(dataList.rows[index - 1]);
          if (index % 6 == 0) {
            this.partnerList.push(list);
            list = [];
          }
        }
        this.partnerList.push(list);
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
}
.what {
  background-color: pink;
  .text {
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      margin-top: 60px;
      font-size: 28px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #333333;
      line-height: 28px;
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
    text-align: right;
    margin-right: 20px;
    img {
      width: 270px;
      height: 202px;
    }
  }
}
.fast {
  display: flex;
  justify-content: space-between;
  .left {
    margin-left: 70px;
    margin-top: 70px;
    img {
      width: 288px;
      height: 242px;
    }
  }
  .right {
    width: 300px;
    margin-right: 22px;
    .title {
      text-align: center;
      font-size: 28px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      color: #333333;
      line-height: 28px;
      margin-top: 100px;
      margin-bottom: 8px;
    }
    .text {
      font-size: 20px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 40px;
    }
  }
}
.bg_style {
  background-color: lightblue;
}
.overview {
  padding-top: 160px;
  .title {
    font-size: 28px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    color: #333333;
    line-height: 40px;
    margin-left: 30px;
    margin-bottom: 40px;
  }
  .overview_con {
    display: flex;
    justify-content: flex-start;
    .line:nth-child(1) {
      margin-left: 110px;
    }
    .line:nth-child(2) {
      margin-left: 40px;
    }
    .line {
      border-left: 2px solid #333333;
      .center {
        margin-left: 18px;
        .num {
          font-size: 20px;
          font-family: Helvetica, Helvetica-Regular;
          font-weight: 400;
          text-align: left;
          color: #333333;
          line-height: 24px;
          margin-bottom: 20px;
          margin-top: 10px;
        }
        .r_title {
          font-size: 24px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #333333;
          line-height: 24px;
          margin-bottom: 30px;
        }
      }
    }
  }
  .btn {
    text-align: right;
    margin-right: 40px;
    margin-top: 20px;
    .btn_style {
      font-size: 24px !important;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #6624fa;
      line-height: 34px;
    }
  }
}
</style>
