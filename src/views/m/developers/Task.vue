<!--
 * @Author: yaoyuting
 * @Date: 2021-04-14 07:52:31
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-09 19:30:46
 * @Descripttion: 
-->
<template>
  <div class="Task">
    <div class="sub_title">{{ $t("Developer.Bounty") }}</div>
    <div class="task_const">
      <div class="title">{{ $t("Developer.Mission") }}</div>
      <div class="details">
        <div class="list">
          <div class="left">
            <img src="@/assets/imagesm/kfz/任务.png" alt="" srcset="" />
          </div>
          <div class="right">
            <div class="level3title">{{ $t("Developer.Total") }}</div>
            <div class="num">{{ bountyData && bountyData.count }}</div>
          </div>
        </div>
        <div class="list">
          <div class="left">
            <img src="@/assets/imagesm/kfz/完成.png" alt="" srcset="" />
          </div>
          <div class="right">
            <div class="level3title">{{ $t("Developer.Finished") }}</div>
            <div class="num">{{ bountyData && bountyData.end }}</div>
          </div>
        </div>
        <div class="list">
          <div class="left">
            <img src="@/assets/imagesm/kfz/奖励.png" alt="" srcset="" />
          </div>
          <div class="right">
            <div class="level3title">{{ $t("Developer.Award") }}</div>
            <div class="num">{{ bountyData && bountyData.reward }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="task_list">
      <div class="title">{{ $t("Developer.list") }}</div>
      <div class="scroll">
        <div class="details">
          <el-card class="box-card" v-for="bount in bountyList" :key="bount.taskId">
            <div class="title">{{ bount.title }}</div>
            <div class="medile">{{ bount.introduction }}</div>
            <div class="bottom">
              <div class="reward">
                奖励：<span>{{ bount.reward }}</span>
              </div>
              <router-link :to="{ path: '/m/Task/Details', query: { id: bount.taskId } }">
                <el-button type="text">了解更多<i class="el-icon-right"></i></el-button>
              </router-link>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <div class="vulnerabilitybg">
      <div class="vulnerability">
        <div class="title">{{ $t("Developer.Security") }}</div>
        <div class="content">{{ $t("Developer.SecurityText") }}</div>
        <div class="content">{{ $t("Developer.SecurityNote") }}</div>
        <div class="btn">
          <el-button type="text" @click="copyLink">复制邮箱<i class="el-icon-right"></i></el-button>
        </div>
        <div class="all_center">
          <div class="images all_center">
            <img src="@/assets/imagesm/kfz/安全漏洞奖励.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetBountyList, GetBountyStatistics } from "@/assets/server/api.js";
export default {
  data() {
    return {
      bountyList: [],
      bountyData: null
    };
  },
  created() {
    this.getBountyList();
    this.getBountyStatistics();
  },
  methods: {
    async getBountyList() {
      const dataList = await GetBountyList({ pageNum: 0, pageSize: 12 });
      if (dataList.code === 0) {
        this.bountyList = dataList.rows;
      } else {
        this.$message.error(dataList.msg);
      }
    },
    async getBountyStatistics() {
      const data = await GetBountyStatistics();
      if (data.code === 0) {
        this.bountyData = data.data;
      } else {
        this.$message.error(data.msg);
      }
    },
    copyLink() {
      var link = "tech@uenc.net";
      var newNode = document.createElement("input");
      newNode.value = link;
      document.body.appendChild(newNode);
      newNode.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      newNode.style.display = "none";
      this.$message.success("复制成功");
    }
  }
};
</script>

<style lang="less" scoped>
.Task {
  .sub_title {
    margin: 0 32px;
    margin-top: 80px;
    padding-top: 40px;
    font-size: 44px;
    font-family: PingFang-SC-Heavy, PingFang-SC;
    font-weight: 800;
    color: #000000;
    border-top: 1px solid #000;
  }
  .title {
    font-size: 34px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #323232;
    line-height: 48px;
    margin-top: 60px;
    margin-bottom: 28px;
  }
  .task_const {
    margin: 0 32px;
    .details {
      display: flex;
      justify-content: space-between;
      .list {
        width: 94 * 2px;
        height: 49 * 2px;
        background: #fbf6ff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .left {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #e8ddf1;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 30px;
            height: 30px;
          }
        }
        .level3title {
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 36px;
          text-align: center;
        }
        .num {
          font-size: 28px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 40px;
          text-align: center;
        }
      }
    }
  }
  .task_list {
    margin-left: 32px;
    .scroll {
      overflow-x: scroll;
      .details {
        display: inline-flex;
        margin-bottom: 84px;
        .box-card {
          width: 600px;
          // height: 272 * 2px;
          background: #fbf6ff;
          margin-right: 20px;
          padding: 0 44px;
          padding-bottom: 52px;
          .title {
            font-size: 28px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #0d051f;
            line-height: 40px;
            border-bottom: 1px solid #000;
            padding-bottom: 34px;
            margin-bottom: 30px;
          }
          .medile {
            height: 98 * 2px;
            overflow: hidden;
            font-size: 20px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #0d051f;
            line-height: 36px;
            border-bottom: 1px solid #000;
            padding-bottom: 34px;
            margin-bottom: 24px;
          }
          .bottom {
            display: flex;
            justify-content: space-between;
            .reward {
              font-size: 20px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #0d051f;
              line-height: 28px;
              span {
                font-size: 60px;
                font-family: Helvetica;
                color: #0d051f;
                line-height: 72px;
              }
            }
            .el-button {
              font-size: 24px !important;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #6624fa;
              line-height: 34px;
            }
          }
        }
      }
    }
  }
  .vulnerabilitybg {
    background-image: url("../../../assets/imagesm/kfz/bg2.png");
    background-size: cover;
    background-position: center center;
    .vulnerability {
      margin: 0 32px;
      padding-bottom: 130px;
      .title {
        padding-top: 56px;
        font-size: 44px;
        font-family: PingFang-SC-Heavy, PingFang-SC;
        font-weight: 800;
        color: #000000;
        line-height: 60px;
      }
      .content {
        font-size: 26px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 40px;
        margin-bottom: 40px;
      }
      .btn {
        text-align: right;
      }
      .el-button {
        font-size: 32px !important;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #6624fa;
        line-height: 44px;
      }
      .images {
        width: 234 * 2px;
        height: 273 * 2px;
        background: #ffffff;
        margin-top: 60px;
        img {
          width: 196 * 2px;
          height: 195 * 2px;
        }
      }
    }
  }
}
</style>
