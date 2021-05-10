<template>
  <div class="Devdocument">
    <div class="banner">
      <div class="content w1300">
        <div class="title">{{ $t("Developer.DevDoc") }}</div>
      </div>
    </div>
    <div class="cont">
      <div class="w1300">
        <div class="l">
          <el-collapse>
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>与现实生活一致</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈；</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策</div>
              <div>结果可控</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="c">
          <div class="title">UENC开发者文档标题</div>
          <div class="text">
            响百月子青口再都精决其团办列往常前风备统改资毛温片主约成千解写每知价别这识时业体记便流验本层度林群使任运回例集议。布常称小斯团大识响斗志按将片铁见信接问千七记生织干义自没准达据就影论交必也把种看变质料取说铁引空公新军走龙济国山装交农身取线号较组众新意价位。
          </div>
          <div class="title">UENC开发者文档标题</div>
          <div class="text">
            响百月子青口再都精决其团办列往常前风备统改资毛温片主约成千解写每知价别这识时业体记便流验本层度林群使任运回例集议。布常称小斯团大识响斗志按将片铁见信接问千七记生织干义自没准达据就影论交必也把种看变质料取说铁引空公新军走龙济国山装交农身取线号较组众新意价位。
          </div>
          <div class="title">UENC开发者文档标题</div>
          <div class="text">
            响百月子青口再都精决其团办列往常前风备统改资毛温片主约成千解写每知价别这识时业体记便流验本层度林群使任运回例集议。布常称小斯团大识响斗志按将片铁见信接问千七记生织干义自没准达据就影论交必也把种看变质料取说铁引空公新军走龙济国山装交农身取线号较组众新意价位。
          </div>
        </div>
        <div class="r">
          <div>XXXXXX</div>
          <div>XXXXXX</div>
          <div>XXXXXX</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less">
    .Devdocument {
        .el-collapse{
            border: none;
        }
        .el-collapse-item__wrap{
            border: none;
        }
        .el-collapse-item__header{
            font-size: 18px;
             border: none;
             color: #666;
        }
        .el-collapse-item__content{
            color: #666;
            div{
                line-height: 48px;
                font-size: 14px;
            }
        }
    }
</style>
<style lang="less" scoped>
.Devdocument {
  .banner {
    height: 900px;
    background-image: url("../../assets/images/index/Devdocumentba.png");
    background-size: cover;
    background-position: center center;
    padding-top: 203px;
    .content {
      padding: 250px 0 0;
      .title {
        font-size: 80px;
        color: #ffffff;
      }
    }
  }
  .cont {
    background-image: url("../../assets/images/index/Devdocumentbg.png");
    background-size: cover;
    background-position: center center;
    .w1300 {
      display: flex;
      .l{
          width: 200px;
          margin-top: 174px;
          
      }
      .c {
        flex: 1;
        padding: 80px 100px 300px 60px;
        .title {
          margin-bottom: 30px;
          font-size: 40px;
          color: #000;
          line-height: 56px;
          text-align: center;
        }
        .text {
          margin-bottom: 100px;
          color: #545353;
          font-size: 32px;
          line-height: 45px;
        }
      }
      .r {
        width: 130px;
        height: 158px;
        box-shadow: 3px 12px 20px 0px rgba(75, 62, 255, 0.19);
        margin-top: 174px;
        background: #f4f3ff;
        border-radius: 10px;
        div {
          text-align: center;
          font-size: 18px;
          color: #666;
          line-height: 50px;
        }
      }
    }
  }
}
</style>