<!--
 * @Author: yaoyuting
 * @Date: 2019-08-28 23:45:02
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-09 15:25:24
 * @Descripttion: 
-->
<template>
  <div class="home">
    <div class="Header">
      <Header></Header>
    </div>
    <div class="Main">
      <Main ref="main"></Main>
    </div>
    <div class="Footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/m/Header'
import Main from '@/components/m/Main'
import Footer from '@/components/m/Footer'
import Vue from 'vue';
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu).use(DropdownItem);
export default {
  components: {
    'Header': Header,
    'Main': Main,
    'Footer': Footer,
  },
  name: 'Home',
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.Header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(102, 36, 250, .6);
}
.Main {
  width: 100%;
}
.Footer {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #01192E;
}
</style>
