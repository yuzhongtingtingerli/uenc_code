<!--
 * @Author: yaoyuting
 * @Date: 2021-04-14 07:52:31
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-02 22:18:45
 * @Descripttion: 
-->
<template>
  <div class="Task">
    <div class="subTitle">{{ $t("Developer.Bounty") }}</div>
    <div class="task_const">
      <div class="level2title">{{ $t("Developer.Mission") }}</div>
      <el-row :gutter="20" v-if="bountyData">
        <el-col :span="24">
          <el-card class="box-card">
            <div class="dfsp">
              <div class="all_center">
                <img src="@/assets/images/right.png" alt="" />
              </div>
              <div class="other">
                <div class="level3title">{{ $t("Developer.Total") }}</div>
                <div class="num">{{ bountyData.count }}</div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card">
            <div class="dfsp">
              <div class="all_center">
                <img src="@/assets/images/right.png" alt="" />
              </div>
              <div class="other">
                <div class="level3title">{{ $t("Developer.Finished") }}</div>
                <div class="num">{{ bountyData.end }}</div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card">
            <div class="dfsp">
              <div class="all_center">
                <img src="@/assets/images/right.png" alt="" />
              </div>
              <div class="other">
                <div class="level3title">{{ $t("Developer.Award") }}</div>
                <div class="num">{{ bountyData.reward }}</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="task_list">
      <div class="level2title">{{ $t("Developer.list") }}</div>
      <div class="lists">
        <el-carousel :interval="5000" arrow="always" height="110px" indicator-position="outside">
          <el-carousel-item v-for="bount in bountyList" :key="bount.taskId">
            <el-card class="box-card">
              <div class="top">
                <div class="title">{{ bount.title }}</div>
                <div class="reward">
                  奖励：<span>{{ bount.reward }}</span>
                </div>
              </div>
              <div class="medile">{{ bount.introduction }}</div>
              <div class="bottom">
                <router-link :to="{ path: '/m/Task/Details', query: { id: bount.taskId } }">
                  <el-button type="text">了解更多></el-button>
                </router-link>
              </div>
            </el-card>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="vulnerability">
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="all_center">
              <img src="@/assets/images/right.png" alt="" />
            </div>
          </el-col>
          <el-col :span="24">
            <div class="title">{{ $t("Developer.Security") }}</div>
            <div class="content">{{ $t("Developer.SecurityText") }}</div>
            <div class="content">{{ $t("Developer.SecurityNote") }}</div>
            <div style="text-align: center"><el-button type="primary" size="mini" round>复制邮箱</el-button></div>
          </el-col>
        </el-row>
      </el-card>
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
    }
  }
};
</script>

<style lang="less" scoped>
.Task {
  padding: 0 30px;
  .task_const {
    margin-bottom: 50px;
    .box-card {
      padding: 30px 50px;
      box-sizing: border-box;
      border-radius: 20px;
      margin-bottom: 30px;
      .dfsp {
        display: flex;
        justify-content: space-around;
        .all_center {
          img {
            width: 88px;
            height: 88px;
          }
        }
        .other {
          .num {
            text-align: center;
            font-size: 40px;
            font-weight: bold;
            margin-top: 10px;
          }
        }
      }
    }
  }
  .task_list {
    .lists {
      .box-card {
        padding: 10px 50px;
        box-sizing: border-box;
        margin: 10px 0px;
        border-radius: 20px;
        .top {
          display: flex;
          justify-content: space-between;
          .title {
            font-weight: bold;
            line-height: 50px;
          }
          .reward {
            font-size: 14px;
            span {
              font-size: 30px;
            }
          }
        }
        .medile {
          font-size: 12px;
          height: 50px;
          overflow: hidden;
        }
        .bottom {
          text-align: right;
        }
      }
      .el-row {
        .el-col:nth-child(1) {
          .box-card {
            margin-right: 15px;
          }
        }
        .el-col:nth-child(2) {
          .box-card {
            margin-left: 15px;
          }
        }
        .el-col:nth-child(3) {
          .box-card {
            margin-right: 15px;
          }
        }
        .el-col:nth-child(4) {
          .box-card {
            margin-left: 15px;
          }
        }
      }
    }
  }
  .vulnerability {
    .box-card {
      border-radius: 20px;
      padding: 50px;
      box-sizing: border-box;
      img {
        width: 300px;
        height: 250px;
      }
      .title {
        font-size: 36px;
        font-weight: bold;
        text-align: center;
      }
      .content {
        font-size: 14px;
        // line-height: 30px;
        margin-bottom: 20px;
        margin-top: 20px;
        margin-right: 50px;
      }
      .all_center {
        height: 290px;
      }
    }
  }

  .level3title {
    font-size: 20px;
  }
  .level2title {
    margin-bottom: 50px;
  }
}
</style>
