<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <div class="inner-wrap">
        <div class="guide-grid">
          <img src="../../../assets/images/daoyouinfo.jpg" alt="">
          <div class="btn-click"><span class="icon-thumb"></span><span>20</span></div>
        </div>
        <div class="bs-panel">
          <div class="bs-panel-body">
            <div class="guid-header">
              <div class="g-name">李小小</div>
              <div class="g-raty">4.0分  17人评价</div>
            </div>
            <div class="bs-raty">
              <rater v-model="data1" star='<i class="star"></i>' active-color="red" :margin="0" disabled></rater>
            </div>
            <div class="bs-style">
              <span>计费方式：每小时50元，3小时起订</span>
            </div>
          </div>
        </div>
        <div class="bs-panel">
          <div class="bs-panel-tit">导游介绍</div>
          <div class="bs-panel-body">
            <div class="j-content" v-if="!toggle">“资质齐全，价格公开透明”“资质齐全，价格公开透公开透明”“资质齐全，价格公开透明”资质公开透啊齐全，价格公开“资质齐全起...</div>
            <div class="j-content" v-if="toggle">“资质齐全，价格公开透明”“资质齐全，价格公开透公开透明”“资质齐全，价格公开透明”资质公开透啊齐全，价格公开“资质齐全起...“资质齐全，价格公开透明”“资质齐全，价格公开透公开透明”“资质齐全，价格公开透明”资质公开透啊齐全，价格公开“资质齐全起...“资质齐全，价格公开透明”“资质齐全，价格公开透公开透明”“资质齐全，价格公开透明”资质公开透啊齐全，价格公开“资质齐全起...“资质齐全，价格公开透明”“资质齐全，价格公开透公开透明”“资质齐全，价格公开透明”资质公开透啊齐全，价格公开“资质齐全起...</div>
          </div>
          <div class="bs-footer">
            <div class="btn-toggle" @click="ckToggle">
              <span v-if="!toggle">展开</span><span v-if="toggle">收起</span>
            </div>
          </div>
        </div>
      </div>
      <div class="message-panel">
        <div class="mess-header">
          <div class="mess-title">评论(2条)</div>
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
      <div class="btn-space">
        <x-button class="btn-default" link="/"><i class="icon-time"></i><span>预约导游</span></x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import {Cell,XButton,Rater } from 'vux'
  import { Group } from 'vux'
  export default {
    props: [""],
    methods: {
      url(link) {
        this.$router.push(link);
      },
      ckToggle() {
        this.toggle = !this.toggle
      }
    },
    data() {
      return {
        TitleObjData: {
          titleContent: "导游详情",
          showLeftBack: true,
          showRightMore: false
        },
        data1:"4",
        toggle:false,
      };
    },
    components: {
      Header,
      Cell,
      Group,
      XButton,
      Rater
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
  .normal-content {
    width: 100%;
    background: #F5F5F5;
    margin-top: 45px;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
  }
  .wrap /deep/ .vux-header {
    box-shadow:0px 5px 10px 0px rgba(0,101,255,0.04);
  }
  .message-panel{
    overflow: hidden;
  }
  .message-panel .mess-group{
    box-shadow:0px 10px 20px 0px rgba(0,101,255,0.04);
    border-radius:8px;
    background-color: #FFFFFF;
    padding: 15px;
    margin-bottom: 10px;
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
    padding: 0 15px;
    margin-bottom: 10px;
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
   .mess-group /deep/ .vux-label{
     font-size: 16px;
     color: #333333;
   }
   .mess-group /deep/ .vux-label-desc{
      font-size: 12px;
     color: #999;
   }
   .cared-number{
     font-size: 16px;
     line-height: 1;
     color: #222222;
     padding-left: 20px;
     background: url(../../../assets/images/xin.png) left center no-repeat;
     background-size: contain;
   }
   .btn-space{padding: 15px;}
   .btn-default{
     height:50px;
     color: #FFFFFF;
     background:rgba(57,118,255,1);
     border-radius:8px;
   }
   .btn-default *{
     display: inline-block;
     vertical-align: middle;
     margin: 0 3px;
   }
   .btn-default .icon-time{
     width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      background-image: url(../../../assets/images/time.png);
      background-size: contain;
   }
   .inner-wrap{
     padding: 15px;
   }
   .bs-panel /deep/ .star{
     display: inline-block;
     width: 16px;
     height: 16px;
     background-repeat: no-repeat;
     background-position: center;
     background-image: url(../../../assets/images/star_off.png);
     background-size: contain;
   }
   .bs-panel /deep/ .is-active .star{
     background-image: url(../../../assets/images/star_on.png);
   }
   .bs-panel{
     background:rgba(255,255,255,1);
     box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
     border-radius:8px;
     overflow: hidden;
     margin-bottom: 10px;
     padding: 15px;
   }
   .guide-grid{
     position: relative;
     box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
     border-radius:8px;
     overflow: hidden;
     margin-bottom: 10px;
   }
  .guide-grid .btn-click{
    width:75px;
    height:30px;
    line-height: 28px;
    background:rgba(255,255,255,1);
    box-shadow:0px 10px 20px 0px rgba(0,101,255,0.06);
    border-radius:30px;
    position: absolute;
    right: 15px;
    bottom: 15px;
    z-index: 11;
    text-align:center;
  }
  .btn-click *{
    display: inline-block;
    vertical-align: middle;
    margin: 0 2px;
  }
  .icon-thumb{
    width: 16px;
    height:16px;
    background: url(../../../assets/images/zan.png) center no-repeat;
    background-size: contain;
  }
  .bs-style span{
    display: inline-block;
    padding: 0 10px;
    border-radius: 25px;
    height: 25px;
    line-height: 25px;
    background-color: #F5F5F5;
    color: #222222;
  }
  .bs-panel-tit{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .guid-header{
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
  .g-raty{
    color: #999999;
    font-size: 14px;
  }
  .g-name{
    font-weight: bold;
    font-size: 20px;
  }
  .bs-raty{
    margin-bottom: 5px;
  }
  .bs-footer{
    text-align: right;
    margin-top: 10px;
  }
  .btn-toggle{
    font-size: 16px;
    font-weight: bold;
  }
</style>
