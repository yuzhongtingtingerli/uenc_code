<!--
 * @Author: yaoyuting
 * @Date: 2019-08-29 23:45:36
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-10 19:53:47
 * @Descripttion: 
-->
<template>
  <div class="index">
    <div class="banner">
      <div class="b_content">
        <div class="title">{{ $t("index.bannerContent") }}</div>
      </div>
    </div>
    <div class="content1">
      <div class="what">
        <div class="text">
          <div class="title">{{ $t("index.UENCTitle") }}</div>
          <div class="details">{{ $t("index.UENCContent") }}</div>
        </div>
        <img width="566" src="@/assets/images/index/1-1.png" alt="" />
      </div>
      <div class="what">
        <img width="566" src="@/assets/images/index/1-2.png" alt="" />
        <div class="text">
          <div class="title">{{ $t("index.EFSTitle") }}</div>
          <div class="details">{{ $t("index.EFSContent") }}</div>
        </div>
      </div>
    </div>
    <div class="content_bg">
      <div class="w1352">
        <div class="overview">
          <el-row class="zi-1">
            <el-col :span="24" class="a_center">
              <span class="l_title">{{ $t("index.Network") }}</span>
            </el-col>
            <el-col :span="24">
              <el-row v-if="outcomeData">
                <el-col :span="12" class="h100">
                  <div class="center100">
                    <div class="num">{{ outcomeData.block_number || 0 }}</div>
                    <div class="r_title">{{ $t("index.Height") }}</div>
                  </div>
                  <div class="center100">
                    <div class="num">{{ outcomeData.reward || 0 }}</div>
                    <div class="r_title">{{ $t("index.Award") }}</div>
                  </div>
                </el-col>
                <el-col :span="12" class="h100">
                  <div class="center100">
                    <div class="num">{{ outcomeData.node || 0 }}</div>
                    <div class="r_title">{{ $t("index.Nodes") }}</div>
                  </div>
                  <div class="center100">
                    <div class="num">{{ outcomeData.transaction_number || 0 }}</div>
                    <div class="r_title">{{ $t("index.Number") }}</div>
                  </div>
                </el-col>
                <el-col :span="24">
                  <el-button type="text" class="btn_style">{{ $t("index.Lookmore") }}<i class="el-icon-right"></i></el-button>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
      <TechnicalCharacteristics></TechnicalCharacteristics>
    </div>
    <EconomicModels></EconomicModels>
    <Blog :blogList="blogList" v-if="blogList.length > 0"></Blog>
    <CoreMembers :msemberList="msemberList" v-if="msemberList.length > 0"></CoreMembers>
    <Partners :partnerList="partnerList" v-if="partnerList.length > 0"></Partners>
  </div>
</template>

<script>
import TechnicalCharacteristics from "@/views/pc/index/TechnicalCharacteristics.vue";
import EconomicModels from "@/views/pc/index/EconomicModels.vue";
import Blog from "@/views/pc/index/Blog.vue";
import CoreMembers from "@/views/pc/index/CoreMembers.vue";
import Partners from "@/views/pc/index/Partners.vue";
import {
  GetBlogList,
  GetMsemberList,
  GetPartnerList,
  GetProjectOutcome
} from "@/assets/server/api.js";
import { baseURL } from "@/utils/utils";
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
        this.partnerList = dataList.rows;
      } else {
        this.$message.error(dataList.msg);
      }
    }
  }
};
</script>
<style lang="less">
.w1352 {
  width: 1352px;
  margin: 0 auto;
}
.w1300 {
  width: 1300px;
  margin: 0 auto;
}
</style>
<style lang="less" scoped>
.index {
  /* width: 900px; */
  font-size: 16px;
}
.banner {
  height: 900px;
  background-image: url("../../assets/images/index/背景@2x.png");
  background-size: cover;
  background-position: center center;
  padding-top: 203px;
  .b_content {
    line-height: 30px;
    margin-top: 48px;
    .title {
      font-size: 80px;
      font-family: Helvetica, Helvetica-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 96px;
      width: 960px;
      margin-left: 318px;
    }
  }
}
.content1 {
  background-image: url("../../assets/images/index/indexbg1.png");
  background-size: cover;
  background-position: center center;
}
.what {
  // background-image: url("../../assets/images/index/背景4@2x.png");
  // background-size: cover;
  // background-position: center center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 124px 0 42px;
  // margin: 100px 0;
  .text {
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 84px;
    .title {
      font-size: 50px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #333333;
      line-height: 70px;
      margin-bottom: 40px;
    }
    .details {
      opacity: 1;
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #333333;
      line-height: 40px;
    }
  }
}
.content_bg {
  background-image: url("../../assets/images/index/indexbg4.png");
  background-size: cover;
  background-position: center center;
  padding-bottom: 300px;
  padding-top: 100px;
}
.overview {
  img {
    width: 50px;
    height: 50px;
  }
  .a_center {
    height: 200px;
    display: flex;
    align-items: center;
  }
  .center100 {
    margin-left: 20px;
  }
  .l_title {
    font-size: 50px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    color: #333333;
    line-height: 70px;
  }
  .num {
    font-size: 70px;
    font-family: Helvetica, Helvetica-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 84px;
    margin-bottom: 10px;
  }
  .r_title {
    font-size: 20px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 28px;
    margin-bottom: 50px;
  }
  .h100 {
    height: 360px;
    vertical-align: middle;
    border-left: 1px solid #333333;
  }
  .btn_style {
    margin-top: 40px;
    text-align: left !important;
  }
}
</style>
