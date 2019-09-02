<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="list-filter">
      <div class="list-click" @click="cateClick">全部</div>
      <div class="list-click" @click="odsClick">智能排序</div>
    </div>
    <div class="normal-content" :style="conHei">
      <div class="guide-list">
        <div class="guide-cell" v-for="(item,index) in list">
          <div class="guide-photo">
            <img :src="item.src" alt="">

            <div :class="'g-tag '+item.tag" v-if="item.tag=='normal'">空闲</div>
            <div :class="'g-tag '+item.tag" v-if="item.tag=='full'">期满</div>
            <div :class="'g-tag '+item.tag" v-if="item.tag=='disable'">休息</div>
          </div>
          <div class="guide-cell-bd">
            <div class="g-name">{{item.name}}</div>
            <div class="g-raty">
              <rater v-model="item.raty" star='<i class="star"></i>' active-color="red" :margin="0" disabled></rater>
            </div>
            <div class="g-comment">17人评论</div>
            <div class="g-str">"{{item.desc}}"</div>
          </div>
          <div class="g-right">
            <div class="g-more">详情</div>
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
  import { Panel } from 'vux'
  import { Rater } from 'vux'
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
          titleContent: "游吧",
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
        list: [{
          src: require('../../../assets/images/daoyou.jpg'),
          tag:"normal",
          name: '李晓晓',
          raty:4,
          desc: '资质齐全，价格公开透明',
          url: '/'
        },{
          src: require('../../../assets/images/daoyou.jpg'),
          tag:"normal",
          name: '李晓晓',
          raty:4,
          desc: '资质齐全，价格公开透明',
          url: '/'
        },{
          src: require('../../../assets/images/daoyou.jpg'),
          tag:"full",
          name: '李晓晓',
          raty:4,
          desc: '资质齐全，价格公开透明',
          url: '/'
        },{
          src: require('../../../assets/images/daoyou.jpg'),
          tag:"disable",
          name: '李晓晓',
          raty:4,
          desc: '资质齐全，价格公开透明',
          url: '/'
        }],
      };
    },
    components: {
      Header,
      Actionsheet,
      Rater,
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
    padding: 15px 0;
    overflow-y: scroll;
    box-sizing: border-box;
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
  .guide-list{overflow: hidden;}
  .guide-cell:first-child{
    margin-top: 0;
  }
  .guide-cell{
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    background:rgba(255,255,255,1);
    box-shadow:0px 5px 10px 0px rgba(0,101,255,0.04);
    border-radius:8px;
    padding: 5px 15px;
    margin-top: 15px;
  }
  .guide-photo{
    position: relative;
    width: 120px;
    height: 120px;
    margin-right: 15px;
    overflow: hidden;
    border-radius: 6px;
  }
  .g-tag{
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    border-bottom-right-radius: 25px;
    background-color: #51D840;
    color: #FFFFFF;
    font-size: 12px;
    width:50px;
    height: 25px;
    line-height: 25px;
    box-sizing: border-box;
    padding-right: 10px;
  }
  .g-tag.full{
    background-color: #FF4D4D;
  }
  .g-tag.disable{
    background-color: #999;
  }
  .guide-photo img{
    border-radius: 6px;
    width: 120px;
    height: 120px;
  }
  .g-name{
    font-size: 18px;
  }
  .g-comment{
    font-size: 12px;
    margin-bottom: 5px;
  }
  .g-more{
    font-size: 14px;
    line-height: 1;
    background: url(../../../assets/images/info@2x.png) left center no-repeat;
    background-size: contain;
    padding-left:16px;
  }
  .g-str{
    background-color: #F5F5F5;
    border-radius: 6px;
    padding: 4px 8px;
    font-size: 12px;
    color: #666666;
    text-align: center;
  }
  .guide-cell-bd{
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
  }
  .guide-cell /deep/ .star{
    display: inline-block;
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(../../../assets/images/star_off.png);
    background-size: contain;
  }
  .guide-cell /deep/ .is-active .star{
    background-image: url(../../../assets/images/star_on.png);
  }
  .g-right{
    height: 100px;
  }
  .guide-cell /deep/ .vux-rater-box{
    width: 20px!important;
  }
</style>
