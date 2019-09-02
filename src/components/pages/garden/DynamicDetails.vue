<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <div class="article-main">
        <div class="article-header">
          <h1 class="title">蓬莱阁迎来暑期游客高峰期，请 注意出行安全</h1>
          <div class="art-time">2019-08-01 09:30</div>
        </div>
        <div class="article-content">
          <p>蓬莱阁历经风雨沧桑，如今已发展成为以古建筑 群为中轴，蓬莱水城和田横山为两翼，四种文化 （神仙文化、精武文化、港口文化、海洋文</p>
          <p><img src="../../../assets/images/content.jpg" alt=""></p>
          <p>蓬莱阁历经风雨沧桑，如今已发展成为以古建筑 群为中轴，蓬莱水城和田横山为两翼，四种文化 （神仙文化、精武文化、港口文化、海洋文蓬莱阁历经风雨沧桑，如今已发展成为以古建筑 群为中轴，蓬莱水城和田横山为两翼，四种文化
            （神仙文化、精武文化、港口文化、海洋文</p>
        </div>
      </div>
      <div class="message-panel">
        <div class="mess-header">
          <div class="mess-title">留言(2条)</div>
          <div class="mess-write">写留言</div>
        </div>
        <div class="mess-body">
          <div class="mess-group">
            <cell @cell-label-color title="木子菲菲" inline-desc="2019-05-24">
              <img slot="icon" class="mess-avatar" src="../../../assets/images/touxiang.jpg">
              <template slot="default">
                <div class="cared-number">12</div>
              </template>
            </cell>
            <cell title="点赞仙文化"></cell>
          </div>
          <div class="mess-group">
            <cell title="木子菲菲" inline-desc="2019-05-24">
              <img slot="icon" class="mess-avatar" src="../../../assets/images/touxiang.jpg">
              <template slot="default">
                <div class="cared-number">12</div>
              </template>
            </cell>
            <cell title="点赞仙文化"></cell>
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
  export default {
    props: [""],
    data() {
      return {
        TitleObjData: {
          titleContent: "动态详情",
          showLeftBack: true,
          showRightMore: false
        },
        "cell-label-color":16,
      };
    },
    components: {
      Header,
      Cell,
      Group
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
  .message-panel{
    box-shadow:0px 10px 20px 0px rgba(0,101,255,0.06);
    border-radius:8px;
    background-color: #FFFFFF;
    padding: 15px;
  }
  .message-panel .weui-cell:before{
    display: none;
  }
  .mess-avatar{
    width: 35px;
    height: 35px;
    border-radius: 35px;
    margin-right: 10px;
  }
  .mess-header{
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .mess-title{
    color: #222222;
    font-weight: bold;
    font-size: 16px;
  }
  .mess-write{
    width:90px;
    height:30px;
    line-height: 30px;
    border:1px solid #3976FF;
    color: #3976FF;
    border-radius:30px;
    text-align: center;
  }
  .weui-cells.vux-no-group-title[*]{
    margin-top: 0;
  }
  .weui-cell{
    padding: 5px 0;
  }
  .mess-group{
    position: relative;
    padding: 15px 0;
  }
  .mess-group:before{
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #d9d9d9;
    color: #d9d9d9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
  .mess-group:first-child:before{
     display: none;
   }
   .mess-group /deep/ .vux-label{
     font-size: 16px;
     color: #333333;
   }
   .mess-group /deep/ .vux-label-desc{
      font-size: 12px;
     color: #999;
   }
   .cared-number{
     font-size: 12px;
     line-height: 1.2;
     color: #222222;
     padding-left: 20px;
     background: url(../../../assets/images/xin.png) left center no-repeat;
     background-size: contain;
   }
</style>
