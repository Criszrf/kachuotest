<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <div class="video-main">
        <img src="../../../assets/images/shipin.jpg" alt="">
      </div>
      <div class="info-grid">
        <div class="in-title">一字文化解读“仙”</div>
        <div class="in-intro">
          丹崖山上的蓬莱阁，气势恢弘，举目四望，海天 辽阔，山红水碧，云烟飘渺，使人顿生飘飘欲仙 身在“人间仙境”之感。
        </div>
        <div class="in-footer">
          <div class="link-zan">31赞</div>
          <div class="link-star">收藏</div>
        </div>
      </div>
      <div class="message-panel">
        <div class="mess-header">
          <div class="mess-title">推荐商品</div>
        </div>
        <div class="recom-cells">
          <div class="recom-scroll">
            <div class="recom-item">
              <img src="../../../assets/images/tuijian.jpg" alt="">
            </div>
            <div class="recom-item">
              <img src="../../../assets/images/tuijian.jpg" alt="">
            </div>
            <div class="recom-item">
              <img src="../../../assets/images/tuijian.jpg" alt="">
            </div>
            <div class="recom-item">
              <img src="../../../assets/images/tuijian.jpg" alt="">
            </div>
          </div>
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
    <!-- 发送 -->
    <commentBar></commentBar>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import commentBar from "@/components/pages/garden/commentBar.vue";
  import {Cell} from 'vux'
  import { Group} from 'vux'
  import { Scroller } from 'vux'
  export default {
    props: [""],
    data() {
      return {
        TitleObjData: {
          titleContent: "",
          showLeftBack: true,
          showRightMore: false
        },
        "cell-label-color": 16,
      };
    },
    components: {
      commentBar,
      Header,
      Cell,
      Scroller,
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
  .wrap /deep/ .vux-header {
    background: none !important;
  }

  .wrap /deep/ .vux-header .vux-header-left a {
    color: #fff !important
  }

  .wrap /deep/ .vux-header .vux-header-left .left-arrow:before {
    border-color: #fff !important;
  }

  .normal-content {
    width: 100%;
    background: #F5F5F5;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
  }

  .message-panel {
    box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.06);
    border-radius: 8px;
    background-color: #FFFFFF;
    padding: 15px;
    margin-bottom: 10px;
  }

  .message-panel .weui-cell:before {
    display: none;
  }

  .mess-avatar {
    width: 35px;
    height: 35px;
    border-radius: 35px;
    margin-right: 10px;
  }

  .mess-header {
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

  .mess-title {
    color: #222222;
    font-weight: bold;
    font-size: 16px;
  }

  .mess-write {
    width: 90px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #3976FF;
    color: #3976FF;
    border-radius: 30px;
    text-align: center;
  }

  .weui-cells.vux-no-group-title[*] {
    margin-top: 0;
  }

  .weui-cell {
    padding: 5px 0;
  }

  .mess-group {
    position: relative;
    padding: 15px 0;
  }

  .mess-group:before {
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

  .mess-group:first-child:before {
    display: none;
  }

  .mess-group /deep/ .vux-label {
    font-size: 16px;
    color: #333333;
  }

  .mess-group /deep/ .vux-label-desc {
    font-size: 12px;
    color: #999;
  }

  .cared-number {
    font-size: 12px;
    line-height: 1.2;
    color: #222222;
    padding-left: 20px;
    background: url(../../../assets/images/xin.png) left center no-repeat;
    background-size: contain;
  }

  .info-grid {
    box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.06);
    border-radius: 8px;
    background-color: #FFFFFF;
    padding: 15px;
    margin-bottom: 10px;
  }

  .in-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .in-intro {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .in-footer {
    text-align: right;
  }
  .in-footer div{
    display: inline-block;
    margin-left: 50px;
    background-repeat: no-repeat;
    background-position:center top;
    color: #666;
    font-size: 16px;
    padding-top: 24px;
    background-size: 22px 22px;
  }
  .link-zan{background-image: url(../../../assets/images/xin.png);}
  .link-star{background-image: url(../../../assets/images/xignxing.png);}

  .video-main{
    margin-bottom: 5px;
  }

  .recom-cells {
    height: 140px;
    position: relative;
    margin-top: 15px;
  }
  .recom-scroll{
    white-space: nowrap;
    overflow-y: auto;
  }
  .recom-item {
    width: 140px;
    height: 140px;
    display:inline-block;
    margin-left: 10px;
    text-align: center;
  }
  .recom-item img{
    width: 140px;
    height: 140px;
    border-radius: 8px;
  }
  .recom-item:first-child {
    margin-left: 0;
  }

</style>
