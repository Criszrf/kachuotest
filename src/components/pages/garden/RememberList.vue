<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <div class="v-cells">
        <router-link :to="item.url" class="v-cell" v-for="(item,index) in list">
          <div class="v-main">
            <img :src="item.src" alt="">
            <div class="v-time">12:24</div>
          </div>
          <div class="v-footer">
            <div class="v-title">{{item.title}}</div>
            <div class="v-meta">
              <div class="v-comment">{{item.comment}}</div>
              <div class="v-cared">{{item.cared}}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import {
    Panel
  } from 'vux'
  import {
    Rater
  } from 'vux'

  export default {
    props: [""],
    methods: {
      url(link) {
        this.$router.push(link);
      }
    },
    data() {
      return {
        TitleObjData: {
          titleContent: "记住的",
          showLeftBack: true,
          showRightMore: false
        },
        list: [{
          src: require('../../../assets/images/jizhu.jpg'),
          title: '一字文化解读“徽”',
          comment: 12,
          cared: 14,
          url: '/RememberCont'
        },{
          src: require('../../../assets/images/jizhu.jpg'),
          title: '一字文化解读“徽”',
          comment: 12,
          cared: 14,
          url: '/RememberCont'
        },{
          src: require('../../../assets/images/list1.png'),
          title: '一字文化解读“徽”',
          comment: 12,
          cared: 14,
          url: '/RememberCont'
        },{
          src: require('../../../assets/images/jizhu.jpg'),
          title: '一字文化解读“徽”',
          comment: 12,
          cared: 14,
          url: '/RememberCont'
        }],
      };
    },
    components: {
      Header,
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
  .wrap /deep/ .vux-header{
    box-shadow:0px 5px 10px 0px rgba(0,101,255,0.08);
  }
  .normal-content {
    width: 100%;
    background: #fff;
    margin-top: 45px;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
  }

  .v-cells {
    padding: 15px;
  }

  .v-cell {
    display: block;
    color: #222222;
    margin-bottom: 30px;
  }

  .v-main {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
  }

  .v-time {
    position: absolute;
    right: 10px;
    bottom: 10px;
    padding: 0 10px;
    height:25px;
    line-height: 25px;
    background:rgba(0,0,0,.8);
    opacity:0.7;
    color: #FFFFFF;
    border-radius:25px;
  }

  .v-main:after {
    width: 50px;
    height: 50px;
    content: ' ';
    background: url(../../../assets/images/play@2x.png) no-repeat;
    background-size: contain;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -25px;
    margin-left: -25px;
    z-index: 1;
  }
  .v-footer{
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
    margin-top: 12px;
  }
  .v-cell .v-title{
    font-size: 20px;
  }
  .v-meta{
    height: 20px;
  }
  .v-meta div{
    float: left;
    line-height: 20px;
    font-size: 16px;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: contain;
    padding-left: 24px;
  }
  .v-meta .v-comment{
    background-image: url(../../../assets/images/comment@2x.png);
  }
  .v-meta .v-cared{
    background-image: url(../../../assets/images/xin.png);
    margin-left: 20px;
  }

</style>
