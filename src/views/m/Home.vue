<!--
 * @Author: yaoyuting
 * @Date: 2019-08-28 23:45:02
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-07 17:11:41
 * @Descripttion: 
-->
<template>
  <div class="home">
    <div class="Header">
      <Header></Header>
    </div>
    <div class="Main">
      <Main></Main>
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
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="less">
.home {
  /* width: 1920px; */
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
}
.Header {
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  flex: 1;
}
.Main {
  width: 100%;
  // height: 100%;
  // margin-top: 190px;
  background-color: rgba(0, 0, 0, 0);
}
.Footer {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #01192E;
  flex: 1;
}
</style>
