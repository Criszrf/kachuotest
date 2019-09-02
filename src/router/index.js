import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/CashWithdrawal',
      name: 'CashWithdrawal',
      component: resolve => require(['@/components/pages/kachuouser/CashWithdrawal'], resolve),
    },
    {
      path: '/GuideList', // 在线导游
      name: 'GuideList',
      component: resolve => require(['@/components/pages/garden/GuideList'], resolve),
    },
    {
      path: '/DynamicDetails', // 动态详情
      name: 'DynamicDetails',
      component: resolve => require(['@/components/pages/garden/DynamicDetails'], resolve),
    },
    {
      path: '/ScenicContent',// 景区介绍
      name: 'ScenicContent',
      component: resolve => require(['@/components/pages/garden/ScenicContent'], resolve),
    },
    {
      path: '/RememberList', // 记住
      name: 'RememberList',
      component: resolve => require(['@/components/pages/garden/RememberList'], resolve),
    },
    {
      path: '/RememberCont', // 记住详情
      name: 'RememberCont',
      component: resolve => require(['@/components/pages/garden/RememberCont'], resolve),
    },
    {
      path: '/KnowList', // 了解
      name: 'KnowList',
      component: resolve => require(['@/components/pages/garden/KnowList'], resolve),
    },
    {
      path: '/KnowCont', // 了解详情
      name: 'KnowCont',
      component: resolve => require(['@/components/pages/garden/KnowCont'], resolve),
    },
    {
      path: '/commentBar', // commentBar
      name: 'commentBar',
      component: resolve => require(['@/components/pages/garden/commentBar'], resolve),
    },
    {
      path: '/TakeAwayList', // 带走的
      name: 'TakeAwayList',
      component: resolve => require(['@/components/pages/garden/TakeAwayList'], resolve),
    },
    {
      path: '/TakeinList', // 地方特色
      name: 'TakeinList',
      component: resolve => require(['@/components/pages/garden/TakeinList'], resolve),
    },
    {
      path: '/GardenService', // 游园服务
      name: 'GardenService',
      component: resolve => require(['@/components/pages/garden/GardenService'], resolve),
    },
    {
      path: '/EatList', // 吃吧
      name: 'EatList',
      component: resolve => require(['@/components/pages/garden/EatList'], resolve),
    },
    {
      path: '/PlayList', // 玩吧
      name: 'PlayList',
      component: resolve => require(['@/components/pages/garden/PlayList'], resolve),
    },
    {
      path: '/Residelist', // 住吧
      name: 'Residelist',
      component: resolve => require(['@/components/pages/garden/Residelist'], resolve),
    },
    {
      path: '/TourList', // 游吧
      name: 'TourList',
      component: resolve => require(['@/components/pages/garden/TourList'], resolve),
    },
    {
      path: '/GuideContent', // 导游详情
      name: 'GuideContent',
      component: resolve => require(['@/components/pages/garden/GuideContent'], resolve),
    },
  ]
})

VueRouter.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
}
