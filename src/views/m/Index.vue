<!--
 * @Author: yaoyuting
 * @Date: 2019-08-29 23:45:36
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-03 10:14:00
 * @Descripttion: 
-->
<template>
  <div class="index">
    <div class="banner">
      <div class="content">
        <div class="title">{{ $t("index.bannerTitle") }}</div>
        <div class="list">{{ $t("index.bannerContent") }}</div>
      </div>
    </div>
    <div class="content">
      <div class="what">
        <img src="@/assets/images/right.png" alt="" />
        <div class="text">
          <div class="title">{{ $t("index.UENCTitle") }}</div>
          <div class="details">{{ $t("index.UENCContent") }}</div>
        </div>
      </div>
      <div class="overview">
        <el-row class="zi-1">
          <el-col :span="24" class="a_center">
            <img src="@/assets/images/index/奖励@2x.png" alt="" />
            <span class="l_title">{{ $t("index.Network") }}</span>
          </el-col>
          <el-col :span="24">
            <el-row v-if="outcomeData">
              <el-col :span="12" class="h100">
                <div class="center100">
                  <img src="@/assets/images/index/奖励@2x.png" alt="" />
                  <div>
                    <div class="num">{{ outcomeData.block_number || 0 }}</div>
                    <div class="r_title">{{ $t("index.Height") }}</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="12" class="h100">
                <div class="center100">
                  <img src="@/assets/images/index/奖励@2x.png" alt="" />
                  <div>
                    <div class="num">{{ outcomeData.node || 0 }}</div>
                    <div class="r_title">{{ $t("index.Nodes") }}</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="12" class="h100">
                <div class="center100">
                  <img src="@/assets/images/index/奖励@2x.png" alt="" />
                  <div>
                    <div class="num">{{ outcomeData.reward || 0 }}</div>
                    <div class="r_title">{{ $t("index.Award") }}</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="12" class="h100">
                <div class="center100">
                  <img src="@/assets/images/index/奖励@2x.png" alt="" />
                  <div>
                    <div class="num">{{ outcomeData.transaction_number || 0 }}</div>
                    <div class="r_title">{{ $t("index.Number") }}</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="24" class="tac">
                <el-button type="primary" round size="mini">查看主网数据</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <TechnicalCharacteristics></TechnicalCharacteristics>
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
.index {
  /* width: 900px; */
  font-size: 16px;
}
.banner {
  width: 750px;
  height: 750px;
  background-image: url("../../assets/images/index/背景@2x.png");
  background-size: cover;
  background-position: center center;
  padding-top: 203px;
  .content {
    text-align: center;
    line-height: 30px;
    margin-top: 48px;
    width: 750px;
    .title {
      font-size: 40px;
      line-height: 60px;
      font-weight: bold;
    }
    .list {
      // width: 750px;
      font-size: 20px;
      line-height: 50px;
      margin: 0 auto;
    }
  }
}
.content {
  width: 750px;
  margin: 0 auto;
  padding: 0 20px;
}
.what {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    height: 300px;
    margin-bottom: 30px;
  }
  .text {
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      font-weight: bold;
      margin-bottom: 20px;
    }
    .details {
      font-size: 12px;
    }
  }
}
.overview {
  margin: 100px 0;
  img {
    width: 50px;
    height: 50px;
  }
  .tac {
    margin-top: 20px;
  }
  .a_center {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .center100 {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-left: 80px;
    img {
      margin-right: 10px;
    }
  }
  .l_title {
    line-height: 50px;
    font-size: 26px;
    font-weight: bold;
    margin-left: 10px;
  }
  .num {
    font-size: 26px;
    font-weight: bold;
  }
  .r_title {
    font-size: 14px;
  }
  .h100 {
    height: 100px;
    vertical-align: middle;
  }
}
</style>
