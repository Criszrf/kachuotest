<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="list-filter">
      <div class="list-click" @click="cateClick">全部分类</div>
      <div class="list-click" @click="odsClick">智能排序</div>
    </div>
    <div class="normal-content" :style="conHei">
      <div class="shop-list">
        <div class="list-cells" v-for="(item,index) in lists" :key="index">
          <div class="weui-cell shop-cell" @click="url(item.url)">
            <div class="shop-photo">
              <img :src="item.src" alt="">
              <div class="tag">{{item.tag}}</div>
            </div>
            <div class="vux-cell-primary">
              <div class="shop-title">{{item.title}}</div>
              <div class="shop-price">人均{{item.price}}元</div>
              <div class="shop-ts">大型游乐场</div>
            </div>
            <div class="distance">193<span>cm</span></div>
          </div>
        </div>
      </div>
    </div>
    <actionsheet v-model="show1" :menus="menus" @on-click-menu="click" show-cancel></actionsheet>
    <actionsheet v-model="show2" :menus="menus2" @on-click-menu="click" show-cancel></actionsheet>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import { Actionsheet, GroupTitle, SwiperItem, XButton, Cell } from 'vux'

  export default {
    props: [""],
    methods: {
      url(link) {
        this.$router.push(link);
      },
      // 分类
      cateClick () {
        this.show1 = !this.show1
      },
      // 排序
      odsClick () {
        this.show2 = !this.show2
      },
      click (key) {
        console.log(key)
      },
    },
    data() {
      return {
        TitleObjData: {
          titleContent: "玩吧",
          showLeftBack: true,
          showRightMore: false
        },
        show1:false,
        show2:false,
        menus: {
          menu1: '吃吧',
          menu2:'喝吧'
        },
        menus2: {
          menu1: '距离最近',
          menu2:'评论排序'
        },
        lists: [{
          src: require('../../../assets/images/youba.jpg'),
          title: '蓬莱欧乐堡梦幻世界',
          tag: '玩吧',
          price:"12",
          url: '/'
        },{
          src: require('../../../assets/images/youba.jpg'),
          title: '蓬莱欧乐堡梦幻世界',
          tag: '玩吧',
          price:"18",
          url: '/'
        },{
          src: require('../../../assets/images/youba.jpg'),
          title: '蓬莱欧乐堡梦幻世界',
          tag: '玩吧',
          price:"12",
          url: '/'
        }],
      };
    },
    components: {
      Header,
      Actionsheet,
      Cell
    },
    computed: {
      conHei() {
        return {
          height: document.documentElement.clientHeight - 90 + "px"
        };
      }
    },
  };
</script>
<style lang='css' scoped>
  .normal-content {
    width: 100%;
    background: #F5F5F5;
    margin-top:90px;
    overflow: hidden;
    padding: 15px;
    overflow-y: scroll;
    box-sizing: border-box;
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
    color: #222;
    position: absolute;
    left: -4px;
    top: -4px;
    padding: 0 8px;
    height:20px;
    line-height: 20px;
    font-size: 12px;
    background:#FFDE00;
    border-radius:4px 0px 16px 0px;
  }
  .list-filter{
    position: absolute;
    top: 45px;
    width: 100%;
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
    background-color: #FFFFFF;
    box-shadow:0px 5px 20px 0px rgba(0,101,255,0.06);
    height: 45px;
    padding: 0 15px;
  }
  .list-click{
    position: relative;
    padding-right: 20px;
    line-height: 1.4;
    color: #222222;
    font-size: 14px;
    background: url(../../../assets/images/down@2x.png) right center no-repeat;
    background-size: 14px 8px;
  }







</style>
