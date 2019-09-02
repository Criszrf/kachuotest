<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
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
              <rater v-model="data1" star='<i class="star"></i>' active-color="red" :margin="0" disabled></rater>
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
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import { Panel } from 'vux'
  import { Rater } from 'vux'

  export default {
    props: [""],
    data() {
      return {
        TitleObjData: {
          titleContent: "在线导游",
          showLeftBack: true,
          showRightMore: false
        },
        data1: 4,
        type: '1',
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
  .guide-list{overflow: hidden;}
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
    padding-left:20px;
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
</style>
