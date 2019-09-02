<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <tab active-color="#222" :line-width="2" default-color="#999" bar-active-color="#3976FF" v-model="index">
        <tab-item class="vux-center" v-for="(item, index) in tabList" :key="index" @on-item-click="getItem(index);" :class="{active:index == iscur}">
          <div class="tab-item-text">{{item}}</div>
        </tab-item>
      </tab>
      <div class="tab-panel" v-if="this.index == 0">
        <div class="article-main">
          <div class="tab-header"><span>介绍</span></div>
          <div class="article-content">
            <p>蓬莱阁历经风雨沧桑，如今已发展成为以古建筑 群为中轴，蓬莱水城和田横山为两翼，四种文化 （神仙文化、精武文化、港口文化、海洋文</p>
            <p><img src="../../../assets/images/content.jpg" alt=""></p>
            <p>蓬莱阁历经风雨沧桑，如今已发展成为以古建筑 群为中轴，蓬莱水城和田横山为两翼，四种文化 （神仙文化、精武文化、港口文化、海洋文蓬莱阁历经风雨沧桑，如今已发展成为以古建筑 群为中轴，蓬莱水城和田横山为两翼，四种文化
              （神仙文化、精武文化、港口文化、海洋文</p>
          </div>
        </div>
      </div>
      <div class="tab-panel" v-if="this.index == 1">
        <div class="article-main">
          <div class="tab-header"><span>服务项</span></div>
          <div class="article-content">
            <p>蓬莱阁历经风雨沧桑，如今已发展成为以古建筑 群为中轴，蓬莱水城和田横山为两翼，四种文化 （神仙文化、精武文化、港口文化、海洋文</p>
            <p><img src="../../../assets/images/content.jpg" alt=""></p>
            <p>蓬莱阁历经风雨沧桑，如今已发展成为以古建筑 群为中轴，蓬莱水城和田横山为两翼，四种文化 （神仙文化、精武文化、港口文化、海洋文蓬莱阁历经风雨沧桑，如今已发展成为以古建筑 群为中轴，蓬莱水城和田横山为两翼，四种文化
              （神仙文化、精武文化、港口文化、海洋文</p>
          </div>
        </div>
      </div>
      <div class="tab-panel" v-if="this.index == 2">
        <div class="article-main">
          <div class="tab-header"><span>安全提示</span></div>
          <div class="article-content">
            <p>蓬莱阁历经风雨沧桑，如今已发展成为以古建筑 群为中轴，蓬莱水城和田横山为两翼，四种文化 （神仙文化、精武文化、港口文化、海洋文</p>
            <p><img src="../../../assets/images/content.jpg" alt=""></p>
            <p>蓬莱阁历经风雨沧桑，如今已发展成为以古建筑 群为中轴，蓬莱水城和田横山为两翼，四种文化 （神仙文化、精武文化、港口文化、海洋文蓬莱阁历经风雨沧桑，如今已发展成为以古建筑 群为中轴，蓬莱水城和田横山为两翼，四种文化
              （神仙文化、精武文化、港口文化、海洋文</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import {Cell } from 'vux'
  import { Group } from 'vux'
  import { Tab, TabItem } from 'vux'
  export default {
    props: [""],
    data() {
      return {
        TitleObjData: {
          titleContent: "景区介绍",
          showLeftBack: true,
          showRightMore: false
        },
        index:0,
        tabList: ['景区介绍', '服务项','安全提示'],
        iscur:0,
      };
    },
    methods: {
        getItem(index){
          this.iscur = index;
          console.log(this.iscur)
        }
    },
    components: {
      Header,
      Cell,
      Group,
      Tab,
      TabItem
    },
    computed: {
      conHei() {
        return {
          height: document.documentElement.clientHeight - 45 + "px"
        };
      }
    },
  };
</script>
<style lang='css' scoped>
  .vux-header /deep/ {
    box-shadow:0px 10px 20px 0px rgba(0,101,255,0.08);
  }
  .normal-content {
    width: 100%;
    background: #F5F5F5;
    margin-top: 45px;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
  }
  .article-content{
    overflow: hidden;
  }
  .article-content p{
    margin-bottom: 25px;
    font-size: 16px;
  }
  .article-content p:last-child{
    margin-bottom: 0;
  }
  .article-main{
    background-color: #FFFFFF;
    margin-bottom: 10px;
    padding: 15px;
  }
  .article-header{
    margin-bottom: 24px;
  }
  .article-header .title{
    font-size:24px;
    color: #222222;
    font-weight:bold;
    line-height: 1.5;
    margin-bottom:5px;
  }
  .art-time{
    color: #999;
    font-size: 12px;
  }
  .vux-tab .vux-tab-item{
    background:none;
  }
  .vux-tab .vux-tab-item.vux-tab-selected{
    font-size: 16px;
    font-weight: bold;
  }
  .tab-header{
    position: relative;
    margin-bottom: 15px;
    line-height: 1.4;
  }
  .tab-header span{
    position: relative;
    z-index: 1;
    display: inline-block;
    font-size:20px;
    font-weight:bold;
  }
  .tab-header:after{
    content: '　';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width:42px;
    height:8px;
    background:rgba(209,223,255,1);
    border-radius:8px;
  }
  .vux-tab-wrap /deep/ .vux-tab-container{
    box-shadow:0px 10px 20px 0px rgba(0,101,255,0.08);
  }
</style>
