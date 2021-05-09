<template>
  <div class="header">
    <div class="content">
      <div class="title">UENC</div>
      <div class="navLists" @click="showNav">
        <img src="@/assets/imagesm/index/奖励@2x.png" alt="" />
      </div>
    </div>
    <div class="navTag" v-if="show">
      <!-- <div class="navtitle">
        <div class="text">{{ type === "zh" ? "导航" : "navigation" }}</div>
        <div class="back" @click="show = false">
          <img src="@/assets/images/no.png" alt="" />
        </div>
      </div> -->
      <div
        class="navitems"
        v-for="(navItem, index) in navList"
        :key="navItem.text"
        @click="navchange(navItem)"
      >
        <div class="text" v-if="navItem.menuUrl">
          <router-link :to="navItem.menuUrl">{{
            type === "zh" ? navItem.text : navItem.texten
          }}</router-link>
        </div>
        <div class="text" v-else>
          {{ type === "zh" ? navItem.text : navItem.texten }}
        </div>
        <!-- <div class="go"><img src="@/assets/images/go.png" alt="" /></div> -->
      </div>
      <div class="navitems" @click="login" v-if="isLogin">
        <div class="text">登录/注册</div>
      </div>
      <div class="navitems" v-if="!isLogin">
        <div class="text" @click="showUserMenu">{{ userName }}</div>
        <!-- <div class="go"><img src="@/assets/images/go.png" alt="" /></div> -->
      </div>
      <div class="navitems" @click="changelang"><div class="text">En/中文</div></div>
      <!-- <div class="kong" @click="back"></div> -->
    </div>
    <div class="navTagitem" v-if="userMenu"></div>
    <div class="navTagitem" v-if="showsubmenu">
      <template v-if="userMenu">
        <div class="navitems" v-if="usersStatus == '1'" @click="check">绑定钱包</div>
        <div class="navitems" @click="logout">退出登录</div>
      </template>
      <template v-else>
        <div
          class="navitems"
          v-for="(navItem, index) in submenu.submenus"
          :key="navItem.submenuName"
        >
          <div class="text">
            <router-link v-if="navItem.submenuUrl" :to="navItem.submenuUrl"
              ><span @click="back">{{
                type === "zh" ? navItem.submenuName : navItem.submenuNameen
              }}</span></router-link
            >
            <span
              style="display: block"
              v-if="navItem.submenuName == '中文'"
              @click="changelang('zh')"
              >{{ navItem.submenuName }}</span
            >
            <span
              style="display: block"
              v-else-if="navItem.submenuName == 'English'"
              @click="changelang('en')"
              >{{ navItem.submenuName }}</span
            >
          </div>
        </div>
      </template>

      <!-- <div class="kong" @click="back"></div> -->
    </div>
    <div
      :class="dialogVisible ? 'block dialog' : 'none dialog'"
      id="dialog"
      :style="`width:${width}px;height:${height}px`"
    >
      <div class="details">
        <div class="close" @click="close">x</div>
        <Login
          ref="login"
          @close="close"
          @showUserInfo="showUserInfo"
          v-if="dialogType == 'login'"
        ></Login>
        <CheckUser v-if="dialogType == 'check'" @close="close"></CheckUser>
      </div>
    </div>
  </div>
</template>
<script>
import { navList } from "@/assets/server/navServer.js";
import { WebLogout, CheckUsersStatus } from "@/assets/server/api.js";
import Login from "./Login.vue";
import CheckUser from "./CheckUser.vue";
export default {
  components: {
    Login,
    CheckUser
  },
  data() {
    return {
      navList: navList,
      headerclass: true,
      submenu: null,
      show: false,
      showsubmenu: false,
      type: "",
      userName: "",
      isLogin: true,
      dialogType: "",
      dialogVisible: false,
      width: "",
      height: "",
      userMenu: false,
      usersStatus: ""
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    this.type = this.$i18n.locale;
    this.userName = localStorage.getItem("username");
    if (this.userName) {
      this.isLogin = false;
    }
    // 监听（绑定）滚轮 滚动事件
  },
  created() {
    const [width, height] = [window.innerWidth, window.innerHeight];
    this.width = width;
    this.height = height;
    this.userName = localStorage.getItem("username");
    if (this.userName) {
      this.isLogin = false;
    }
    this.checkUsersStatus();
  },
  methods: {
    showUserMenu(item) {
      this.userMenu = true;
      this.show = false;
      this.showsubmenu = true;
    },
    showUserInfo(name) {
      this.isLogin = false;
      this.userName = name;
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
    login() {
      this.dialogVisible = true;
      this.show = false;
      this.showsubmenu = false;
      this.dialogType = "login";
    },
    check() {
      this.dialogVisible = true;
      this.dialogType = "check";
    },
    close() {
      this.dialogVisible = false;
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
      this.show = false;
      this.showsubmenu = false;
    },
    handleScroll() {
      // 页面滚动距顶部距离
      var scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 190) {
        this.headerclass = false;
      } else {
        this.headerclass = true;
      }
    },
    showNav() {
      let show = this.show;
      this.userMenu = false;
      this.show = !show;
      this.showsubmenu = false;
    },
    back() {
      // if(!this.show) return
      this.userMenu = false;
      this.show = false;
      this.showsubmenu = false;
    },
    navchange(name) {
      this.submenu = name;
      this.show = false;
      if (name.menuUrl) {
        this.showsubmenu = false;
      } else {
        this.showsubmenu = true;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  height: 90px;
  box-sizing: border-box;
  position: relative;
  .content {
    position: relative;
    .title {
      height: 90px;
      line-height: 90px;
      font-size: 16px;
      font-family: Helvetica, Helvetica-Regular;
      font-weight: 400;
      text-align: center;
      color: #121518;
    }
    .navLists {
      position: absolute;
      right: 34px;
      top: 34px;
      img {
        width: 36px;
        height: 36px;
      }
    }
  }
}
.navTag {
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  right: 0;
  top: 90px;
  z-index: 999;
  width: 236px;
  height: auto;
  display: flex;
  flex-direction: column;

  .kong {
    flex: 1;
  }
}
.navTagitem {
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  right: 0;
  top: 90px;
  z-index: 999;
  width: 236px;
  height: auto;
  display: flex;
  flex-direction: column;
  .kong {
    flex: 1;
  }
}
.top {
  background: rgba(1, 25, 46, 0.7);
}
.nav {
  /* display: none; */
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.navtitle {
  height: 80px;
  line-height: 80px;
  background-color: #fff;
  color: #000;
  text-align: center;
  border-bottom: 1px solid #000;
}
.navitems {
  opacity: 0.6;
  background: #000000;
  // background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 60px;
  .text {
    text-align: center;
    font-size: 28px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
    line-height: 40px;
    padding: 10px 0;
    // opacity: 0.6;
    a {
      display: block;
      font-size: 28px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 400;
      text-align: center;
      color: #ffffff;
      line-height: 40px;
      // opacity: 0.6;
    }
    span {
      display: block;
    }
  }
}
.dialog {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  .details {
    width: 100%;
    margin: 200px auto;
    background-color: #fff;
    position: relative;
    border-radius: 10px;
    color: #000;
    overflow: hidden;
    padding: 20px 40px;
    box-sizing: border-box;
    .close {
      position: absolute;
      right: 0;
      top: 0;
      height: 50px;
      width: 50px;
      text-align: center;
      line-height: 50px;
      cursor: pointer;
      background-color: #ccc;
      border-radius: 0 0 0 10px;
      color: #fff;
    }
  }
}
.none {
  display: none;
}
.block {
  display: block;
}
</style>
