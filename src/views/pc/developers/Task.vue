<!--
 * @Author: yaoyuting
 * @Date: 2021-04-14 07:52:31
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-03 21:48:48
 * @Descripttion: 
-->
<template>
  <div>
    <div class="Task">
      <div class="w1300">
        <div class="subTitle">{{ $t("Developer.Bounty") }}</div>
        <div class="task_const">
          <div class="title">{{ $t("Developer.Mission") }}</div>
          <div class="tasks" v-if="bountyData">
            <div class="box">
              <div class="l">
                <img src="@/assets/images/index/任务@2x.png" alt="" />
              </div>
              <div class="r">
                <div class="text">{{ $t("Developer.Total") }}</div>
                <div class="num">{{bountyData.count}}</div>
              </div>
            </div>
            <div class="box">
              <div class="l">
                <img src="@/assets/images/index/完成@2x.png" alt="" />
              </div>
              <div class="r">
                <div class="text">{{ $t("Developer.Finished") }}</div>
                <div class="num">{{bountyData.end}}</div>
              </div>
            </div>
            <div class="box">
              <div class="l">
                <img src="@/assets/images/index/奖励@2x.png" alt="" />
              </div>
              <div class="r">
                <div class="text">{{ $t("Developer.Award") }}</div>
                <div class="num">{{bountyData.reward}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="task_list">
          <div class="title">{{ $t("Developer.list") }}</div>
          <div class="x">
            <div class="lists">
              <div class="box" v-for="bount in bountyList" :key="bount.taskId">
                <div class="box-title">{{bount.title}}</div>
                <div class="medile">{{bount.introduction}}</div>
                <div class="bottom">
                  <div class="reward">奖励 <span>{{bount.reward}}</span></div>
                  <router-link :to="{path: '/pc/Task/Details', query: {id: bount.taskId}}">
                    <span class="more">了解更多<i class="el-icon-right"></i></span>
                  </router-link>
                </div>
              </div>
              <div class="box" v-for="bount in bountyList" :key="bount.taskId">
                <div class="box-title">{{bount.title}}</div>
                <div class="medile">{{bount.introduction}}</div>
                <div class="bottom">
                  <div class="reward">奖励 <span>{{bount.reward}}</span></div>
                  <router-link :to="{path: '/pc/Task/Details', query: {id: bount.taskId}}">
                    <span class="more">了解更多<i class="el-icon-right"></i></span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="vulnerability">
        <div class="w1300">
            <div class="box">
              <img src="@/assets/images/index/安全漏洞奖励@2x.png" alt="" />
              <div class="content">
                <div class="title">{{ $t("Developer.Security") }}</div>
                <div class="text">{{ $t("Developer.SecurityText") }}</div>
                <div class="text">{{ $t("Developer.SecurityNote") }}</div>
                <div class="copy" @click="copyLink">复制邮箱<i class="el-icon-right"></i></div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { GetBountyList, GetBountyStatistics } from '@/assets/server/api.js';
export default {
  data() {
    return {
      bountyList: [],
      bountyData: null
    }
  },
  created () {
    this.getBountyList();
    this.getBountyStatistics()
  },
  methods: {
    copyLink(){
        var link = "tech@uenc.net";
        var newNode = document.createElement('input');
        newNode.value = link;
        document.body.appendChild(newNode);
        newNode.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        newNode.style.display='none';
        this.$message.success('复制成功');
    },
    async getBountyList() {
      const dataList = await GetBountyList({pageNum: 1,pageSize: 12})
      if(dataList.code === 0) {
        this.bountyList = dataList.rows
      } else {
        this.$message.error(dataList.msg)
      }
    },
    async getBountyStatistics() {
      const data = await GetBountyStatistics()
      if(data.code === 0) {
        this.bountyData = data.data
      } else {
        this.$message.error(data.msg)
      }
    }
  },
};
</script>

<style lang="less" scoped>
.Task {
  border-top: 1px solid #fff;
  background-image: url("../../../assets/images/index/devbg3.png");
  background-size: cover;
  background-position: center center;
  .subTitle{
      margin:175px 0 140px;
      padding-top: 44px;
      border-top: 4px solid #333;
      text-align: left;
      font-weight: 500;font-size: 50px;
    }
  .task_const {
    margin-bottom: 50px;
    .title{
      font-size: 40px;
      text-align: left;
      color: #333333;
      padding-bottom: 50px;
    }
    .tasks{
      display: flex;
      justify-content: space-between;
      .box {
        width: 400px;
        height: 208px;
        background: #fbf6ff;
        display: flex;
        justify-content: center;
        align-items: center;
        .l{
          width: 120px;
          height: 120px;
          background: #e8ddf1;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 60px;
            height: 60px;
          }
        }
        .r{
          padding: 0 30px;
          display: flex;
          flex-direction: column;
          .text{
            color: #0d051f;
            font-size: 20px;
          }
          .num{
            color: #0d051f;
            font-size: 70px;
          }
        }
      }
    }
    
  }
  .task_list {
    padding-bottom: 160px;
    .title{
      font-size: 40px;
      text-align: left;
      color: #333333;
      padding-bottom: 50px;
    }
    .x{
      overflow-x: auto;
    }
    .lists {
      display: inline-flex;
      .box {
        width: 500px;
        height: 448px;
        padding: 50px 40px;
        box-sizing: border-box;
        background: #fbf6ff;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        .box-title{
          font-size: 24px;
          color: #0d051f;
          font-weight: 500;
          color: #0d051f;
          line-height: 30px;
        }
        .medile{
          flex: 1;
          padding: 20px 0;
          border-top: 1px solid #000;
          border-bottom: 1px solid #000;
          font-size: 16px;
          margin: 20px 0 10px;
        }
        .bottom{
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          .reward{
            font-size: 16px;
            color: #0d051f;
            span{
              font-size: 50px;
              color: #0d051f;
            }
          }
          .more{
            color: #6624fa;
            font-size: 16px;
          }
        }
      }
      
    }
  }
  

}
.vulnerability {
  background-image: url("../../../assets/images/index/devbg2.png");
  background-size: cover;
  background-position: center center;
      padding: 160px 0 180px;
      .box{
        display: flex;
        .content{
          width: 650px;
          margin-left: 50px;
          .title {
            font-size: 50px;
            font-weight: 500;
            color: #333333;
            padding: 60px 0;
          }
          .text{
            font-size: 16px;
            color: #333333;
            line-height: 40px;
            margin-bottom: 40px;
          }
          .copy{
            font-size: 16px;
            color: #6624fa;
          }
        }
      }
      img {
        width: 600px;
        height: 700px;
      }
      
  }
</style>
