<template>
  <div :class="headerclass ? 'header' : 'header top'">
    <div class="content">
      <div class="logo">
        <router-link to="/pc/Index"
          ><img src="@/assets/images/index/logo@2x.png" alt=""
        /></router-link>
      </div>
      <div class="nav">
        <el-menu
          v-if="isShowMenu"
          router
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          mode="horizontal"
          active-text-color="#fff"
        >
          <template v-for="navItem in navList">
            <el-submenu
              v-if="navItem && navItem.submenus"
              :key="navItem.id"
              :index="String(navItem.id)"
            >
              <template slot="title"
                >{{ type === "zh" ? navItem.text : navItem.texten }}
              </template>
              <template v-for="submenu in navItem.submenus">
                <el-menu-item
                  :index="submenu.submenuUrl"
                  :key="submenu.submenuName"
                  v-if="submenu.submenuNameen !== 'Vote'"
                >
                  <span
                    style="display: block"
                    v-if="submenu.submenuName == '中文'"
                    @click="changelang('zh')"
                    >{{ submenu.submenuName }}</span
                  >
                  <span
                    style="display: block"
                    v-else-if="submenu.submenuName == 'English'"
                    @click="changelang('en')"
                    >{{ submenu.submenuName }}</span
                  >
                  <span v-else>
                    {{ type === "zh" ? submenu.submenuName : submenu.submenuNameen }}
                  </span>
                </el-menu-item>
              </template>
            </el-submenu>
            <el-menu-item v-else :index="navItem.menuUrl" :key="navItem.id">{{
              type === "zh" ? navItem.text : navItem.texten
            }}</el-menu-item>
          </template>
        </el-menu>
        <div class="proposal" v-if="pathType === 'proposal'">
          <el-menu
            router
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            mode="horizontal"
            active-text-color="#fff"
          >
            <el-menu-item index="/pc/community/Proposal">{{type === "zh" ?'提案':'Proposal'}}</el-menu-item>
            <el-menu-item index="/pc/community/Vote">{{type === "zh" ?'投票':'Vote'}}</el-menu-item>
          </el-menu>
        </div>
        <!-- <div class="goBack" v-if="!isShowMenu && isGoback">
          <el-button type="text" @click="goBack"> 返回 </el-button>
        </div> -->
        <div class="login" v-if="isLogin">
          <el-button plain size="small" @click="login" class="login_style">{{type === "zh" ?'登录/注册':'Login/Register'}}</el-button>
        </div>
        <div class="login" v-if="!isLogin">
          <el-menu class="el-menu-vertical-demo" mode="horizontal" active-text-color="#fff">
            <el-submenu index="userInfo">
              <template slot="title">{{ userName }} </template>
              
              <el-menu-item index="2-2" v-if="usersStatus == '1'" @click="check"
                >{{type === "zh" ?'绑定钱包':'Bind Wallet'}}</el-menu-item
              >
              <el-menu-item index="2-3" v-else @click="getUsersAddress">{{type === "zh" ?'查看钱包':'Check Wallet'}}</el-menu-item>
              <el-menu-item index="2-1" @click="logout">{{type === "zh" ?'退出登录':'Log out'}}</el-menu-item>

            </el-submenu>
          </el-menu>
        </div>
        <div class="internationalization">
          <el-button type="text" size="small" @click="changelang">En/中文</el-button>
        </div>
      </div>
    </div>
    <div
      :class="dialogVisible ? 'block dialog' : 'none dialog'"
      id="dialog"
      :style="`width:100vw;height:100vh`"
    >
      <div class="details">
        <div class="close" @click="close"><i class="el-icon-close"></i></div>
        <Login
          ref="login"
          @close="close"
          @showUserInfo="showUserInfo"
          v-if="dialogType == 'login'"
        ></Login>
        <CheckUser v-if="dialogType == 'check'" @close="close"></CheckUser>
        <ShowMoney v-if="dialogType == 'money'" @close="close" :moneyAddress="moneyAddress"></ShowMoney>
      </div>
    </div>
    
  </div>
</template>
<script>
import { navList } from "@/assets/server/navServer.js";
import { WebLogout, CheckUsersStatus ,GetUsersAddress} from "@/assets/server/api.js";
import Login from "./Login.vue";
import CheckUser from "./CheckUser.vue";
import ShowMoney from "./ShowMoney.vue";
export default {
  components: {
    Login,
    CheckUser,
    ShowMoney
  },
  watch: {
    $route: {
      // 监听路由，页面跳页处理路由并且让当前页面的路由对应到 default-active 从而显示当前菜单选中状态
      handler: function(val, oldVal) {
        this.getShowMenu(val.path);
      },
      // 深度观察监听
      deep: true
    }
  },
  data() {
    return {
      moneyAddress:'',
      navList: navList,
      headerclass: true,
      type: "",
      dialogVisible: false,
      width: "",
      height: "",
      isShowMenu: true,
      pathType: "",
      isGoback: true,
      pathList: [
        {
          type: "proposal",
          path: "/pc/community/Proposal",
          isGoback: false
        },
        {
          type: "proposal",
          path: "/pc/community/Vote",
          isGoback: false
        },
        {
          type: "proposal",
          path: "/pc/community/Proposal/Add",
          isGoback: true
        },
        {
          type: "proposal",
          path: "/pc/community/Proposal/Details",
          isGoback: true
        },
        {
          type: "task",
          path: "/pc/Task/Details",
          isGoback: true
        },
        {
          type: "CoreMembersDetails",
          path: "/pc/CoreMembersDetails",
          isGoback: true
        }
      ],
      isLogin: true,
      userName: "",
      dialogType: "",
      usersStatus: ""
    };
  },
  created() {
    const [width, height] = [window.innerWidth, window.innerHeight];
    this.width = width;
    this.height = height;
    this.getShowMenu(this.$route.path);
    this.userName = localStorage.getItem("username");
    if (this.userName) {
      this.isLogin = false;
    }
    this.checkUsersStatus();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    this.type = this.$i18n.locale;
    // 监听（绑定）滚轮 滚动事件
  },
  methods: {
    async getUsersAddress(){
      const data = await GetUsersAddress(this.userName);
      if (data.code==0) {
        this.moneyAddress = data.data
        this.dialogType = 'money'
        this.dialogVisible = true;
      }
    },
    async checkUsersStatus() {
      const data = await CheckUsersStatus(this.userName);
      this.usersStatus = data.data;
      localStorage.setItem("usersStatus", data.data);
    },
    logout() {
      this.$confirm("确定退出当前账号?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          const data = await WebLogout();
          if (data.code == "0") {
            this.$message({
              type: "success",
              message: "退出成功!"
            });
            localStorage.setItem("username", "");
            this.isLogin = true;
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    },
    getShowMenu(path) {
      let isShowMenu = true;
      let pathType = "";
      let isGoback = true;
      for (const item of this.pathList) {
        if (path === item.path) {
          isShowMenu = false;
          pathType = item.type;
          isGoback = item.isGoback;
          break;
        }
      }
      this.isShowMenu = isShowMenu;
      this.pathType = pathType;
      this.isGoback = isGoback;
    },
    goBack() {
      this.$router.back(-1);
      this.isShowMenu = true;
    },
    login() {
      this.dialogVisible = true;
      this.dialogType = "login";
      this.$nextTick(()=>{
        this.$refs.login.getCaptchaImage();
      })
    },
    check() {
      this.dialogVisible = true;
      this.dialogType = "check";
    },
    close() {
      this.dialogVisible = false;
      this.checkUsersStatus()
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    changelang() {
      let type = "";
      if (this.type == "en") {
        type = "zh";
      }
      if (this.type == "zh") {
        type = "en";
      }
      sessionStorage.setItem("locale", type);
      this.type = sessionStorage.getItem("locale");
      this.$i18n.locale = sessionStorage.getItem("locale");
    },
    handleScroll() {
      // 页面滚动距顶部距离
      var scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 100) {
        this.headerclass = false;
      } else {
        this.headerclass = true;
      }
    },
    showUserInfo(name) {
      this.isLogin = false;
      this.userName = name;
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  z-index: 2;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0);
  .logo {
    margin-left: 40px;
    img {
      height: 64px;
      margin-top: 25px;
    }
  }
}
.content {
  height: 100px;
  // width: 1140px;
  margin: 0 auto;
  line-height: 100px;
  display: flex;
  justify-content: space-between;
  .nav {
    display: flex;
    justify-content: flex-start;
    margin-right: 40px;
    .el-button {
      background-color: rgba(0, 0, 0, 0);
      margin: 0 20px;
      font-size: 20px;
      text-align: center;
      color: #ffffff;
    }
  }
  .login_style {
    width: 120px;
    height: 40px;
    opacity: 1;
    // border: 1px solid #ffffff;
    border-radius: 11px;
    // line-height: 40px;
  }
}
.top {
  background: rgba(1, 25, 46, 0.7);
}
.dialog {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .details {
    width: 600px;
    background-color: #fff;
    position: relative;
    border-radius: 10px;
    color: #000;
    overflow: hidden;
    padding: 20px 40px;
    box-sizing: border-box;
    .close {
      position: absolute;
      right: 32px;
      top: 32px;
      font-size: 26px;
      cursor: pointer;
      color: #305bbc;
    }
  }
}
.none {
  display: none;
}
.block {
  display: flex;
}
</style>

<style lang="less">

.el-menu-vertical-demo {
  /* margin-top: 25px; */
  background-color: rgba(0, 0, 0, 0);
  padding: 20px 0;
  box-sizing: border-box;
  .el-menu--horizontal{
    border-bottom: 0px solid #000;
     .el-menu-item {
      height: 56px;
      line-height: 56px;
    }
    
  }
  .el-submenu__icon-arrow{
    font-size: 16px;
  }
  
  .el-submenu__title i{
    color: #fff;
  }
}
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{
    margin-left: 0;
  }
.el-menu.el-menu--horizontal {
  border-bottom: 0px solid #000;
}

.el-submenu.is-opened .el-submenu__title {
  background-color: rgba(0, 0, 0, 0);
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 56px;
  line-height: 56px;
  /* width: 100px; */
  text-align: center;
}

.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: rgba(0, 0, 0, 0);
  font-size: 26px;
  text-align: left;
  color: #ffffff;
  line-height: 56px;
}
.el-submenu__title .el-menu--horizontal {
  background-color: #1d3244;
}
.el-menu--horizontal .el-menu{
  background-color: #01192e;
  width: 220px;
  .el-menu-item {
    background-color: #01192e;
    width: 220px;
    height: 56px;
    font-size: 18px;
    line-height: 56px;
    border: none;
  }
  .el-menu-item:hover {
    font-size: 26px;
    text-align: left;
    color: #ffffff;
    border: none;
  }
}
 
.el-menu {
  background-color: rgba(0, 0, 0, 0);
}
.el-menu--horizontal > .el-submenu:last-child {
  border: none
}


.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border: none;
}
.el-menu--horizontal > .el-menu-item {
  font-size: 26px;
  text-align: center;
  color: #ffffff;
  line-height: 56px;
  margin: 0 20px;
}
.login{
  .el-submenu{
  }
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  font-size: 26px;
  text-align: center;
  color: #ffffff;
  line-height: 56px;
}

</style>
