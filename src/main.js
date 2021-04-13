import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
import router from './router.js'
Vue.use(ElementUI);
new Vue({
  //一定要注入到vue的实例对象上
  router, 
  render: h => h(App),
}).$mount('#app')
