//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
import Questionnaire from "./components/Questionnaire.vue";
import ElDemo from './components/ElDemo.vue';
import HelloWorld from "./components/HelloWorld.vue";

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//定义routes路由的集合，数组类型
const routes = [
    //单个路由均为对象类型，path代表的是路径，component代表组件
  
    
    {
        path: "/",
        component: HelloWorld,
        name:"HelloWorld"
    },{
        path: "/components/ElDemo",
        component: ElDemo,
        name:"ElDemo"
    },
    {
        path: "/components/Questionnaire",
        component: Questionnaire,
        name:"Questionnaire"
    }
]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
    //ES6简写，等于routes：routes
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router