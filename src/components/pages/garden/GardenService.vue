<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <div class="swiper-main">
        <swiper :list="baseList" height="110px" loop="true" dots-position="center"></swiper>
      </div>
      <flexbox class="cc-flex" :gutter="10">
        <flexbox-item v-for="(item,index) in cates">
          <div class="cc-item" @click="url(item.url)">
            <div class="icon"><img :src="item.img" alt=""></div>
            <div class="text">{{item.tit}}</div>
          </div>
        </flexbox-item>
      </flexbox>
      <div class="shop-list">
        <div class="list-header">
          <div class="list-title">附近商家</div>
          <div class="list-order">排序</div>
        </div>
        <div class="list-cells" v-for="(item,index) in lists" :key="index">
          <div class="weui-cell shop-cell" @click="url(item.url)">
            <div class="shop-photo">
              <img :src="item.src" alt="">
              <div class="tag">{{item.tag}}</div>
            </div>
            <div class="vux-cell-primary">
              <div class="shop-title">{{item.title}}</div>
              <div class="shop-price">人均{{item.price}}元</div>
              <div class="shop-ts">特色：奶茶、冰淇淋</div>
            </div>
            <div class="distance">193<span>cm</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import { Swiper, GroupTitle, SwiperItem, XButton, Cell } from 'vux'
  import { Flexbox, FlexboxItem } from 'vux'
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
          titleContent: "游园服务",
          showLeftBack: true,
          showRightMore: false
        },
        cates : [{
            tit: '吃吧',
            img: require('../../../assets/images/sv1@2x.png'),
            url:'/EatList'
          },{
            tit: '喝吧',
            img: require('../../../assets/images/sv2@2x.png'),url:'/'
          },{
            tit: '玩吧',
            img: require('../../../assets/images/sv3@2x.png'),url:'/PlayList'
          },{
            tit: '住吧',
            img: require('../../../assets/images/sv4@2x.png'),url:'/Residelist'
          },{
            tit: '游吧',
            img: require('../../../assets/images/sv5@2x.png'),url:'/TourList'
          }
        ],
        baseList : [{
          url: 'javascript:',
          img: require('../../../assets/images/svslide.jpg'),
        },{
          url: 'javascript:',
          img: require('../../../assets/images/svslide.jpg'),
        },{
          url: 'javascript:',
          img: require('../../../assets/images/slide.png'),
        }
        ],
        lists: [{
          src: require('../../../assets/images/chiba.jpg'),
          title: '蓬莱小面',
          tag: '吃吧',
          price:"12",
          url: '/'
        },{
          src: require('../../../assets/images/heba.jpg'),
          title: '蜜雪冰城',
          tag: '喝吧',
          price:"18",
          url: '/'
        },{
          src: require('../../../assets/images/chiba.jpg'),
          title: '蓬莱小面',
          tag: '吃吧',
          price:"12",
          url: '/'
        },{
          src: require('../../../assets/images/heba.jpg'),
          title: '蜜雪冰城',
          tag: '吃吧',
          price:"18",
          url: '/'
        }],
      };
    },
    components: {
      Header,
      Swiper,
      SwiperItem,
      Flexbox,
      FlexboxItem,
      Cell
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
    padding: 15px;
    overflow-y: scroll;
    box-sizing: border-box;
  }
  .swiper-main{
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow:0px 6px 10px 0px rgba(0,0,0,0.1);
  }
  .swiper-main img{
    width: 100%;
    height: 110px;
    border-radius: 8px;
  }
  .swiper-main /deep/ .vux-slider > .vux-indicator > a > .vux-icon-dot,
  .swiper-main /deep/ .vux-slider .vux-indicator-right > a > .vux-icon-dot{
    width:15px;
    height:3px;
    background:rgba(34,34,34,1);
    opacity:0.2;
    border-radius:3px;
  }
  .swiper-main /deep/ .vux-slider > .vux-indicator > a > .vux-icon-dot.active,
  .swiper-main /deep/ .vux-slider .vux-indicator-right > a > .vux-icon-dot.active{
    opacity:1;
  }
  .swiper-main /deep/ .vux-slider > .vux-indicator,
  .swiper-main /deep/ .vux-slider .vux-indicator-right{
    bottom: 5px;
  }
  .list-header{
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
    height:55px;
    background:rgba(255,255,255,1);
    box-shadow:0px 5px 10px 0px rgba(0,101,255,0.08);
    border-radius:8px;
    padding: 0 15px;margin-bottom: 10px;
  }
  .list-cells .vux-cell-primary{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
  .list-title{font-size: 16px;font-weight: bold;}
  .list-order{font-size: 14px;}
  .shop-cell{
    background-color: #FFFFFF;
    padding: 20px 15px;
    box-shadow:0px 5px 10px 0px rgba(0,101,255,0.08);
    border-radius:8px;
    overflow: hidden;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }
  .list-cells{margin-bottom: 10px;}
  .shop-photo{position: relative;width: 80px;height: 50px; border-radius: 6px; margin-right: 10px;}
  .shop-photo img{width: 80px;height: 50px; border-radius: 6px;}
  .shop-title{font-weight: bold;font-size: 16px;}
  .shop-price{font-size: 12px;margin-bottom: 10px;}
  .shop-ts{font-size: 12px; background: url(../../../assets/images/shop@2x.png) left center no-repeat;background-size: contain;padding-left: 20px;line-height: 1.2;color: #666666;}
  .distance{
    height:25px;
    line-height: 25px;
    padding: 0 8px;
    background:#F5F5F5;
    border-radius:8px;
    font-size: 14px;
  }
  .distance span{font-size: 12px;}
  .shop-photo .tag{
    color: #FFFFFF;
    position: absolute;
    left: -4px;
    top: -4px;
    padding: 0 8px;
    height:20px;
    line-height: 20px;
    font-size: 12px;
    background:linear-gradient(90deg,rgba(0,0,0,1) 0%,rgba(51,51,51,1) 100%);
    border-radius:4px 0px 16px 0px;
  }
  .cc-item{
    text-align: center;
    display: block;
  }
  .cc-item .icon{
    margin: 0 auto;
    width: 50px;
    height: 50px;
    box-shadow:0px 6px 10px 0px rgba(0,101,255,0.08);
    border-radius:16px;
    overflow: hidden;
    background-color: #FFFFFF;
    padding: 7px;
  }
  .cc-item .icon img{
    background: none;
  }
  .cc-item .text{
    font-size: 14px;
    color: #222222;
    margin-top: 5px;
  }
  .cc-flex{margin-bottom: 20px;}











</style>
