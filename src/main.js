/*
 * @Author: yaoyuting
 * @Date: 2019-08-28 21:56:10
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-05-06 07:44:52
 * @Descripttion: 
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/reset.css'
import '@/views/pc/common.less'
// import '@/canvas.js'
import i18n from '@/i18n/i18n.js'

import ElementUI from 'element-ui';
import {goPAGE} from './utils/utils';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/iconfont/iconfont.css';
import '@/assets/iconfont/iconfont.js';

import plugin from './utils/Bus';
Vue.use(plugin);

let classify = goPAGE()

Vue.use(ElementUI);

Vue.config.productionTip = false;

// if(goPAGE() == 'pc') {
//   router.push({path:'/pc/Index'})
// } else {
//   router.push({path:'/m/Index'})
// }

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  if(to.fullPath.indexOf(classify) == -1){
    next(`/${classify}`)
  }

  // next('/'+classify+'/Index')
  
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
  
})
