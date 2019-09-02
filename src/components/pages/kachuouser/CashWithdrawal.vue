<template>
<div class="wrap">
<Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="normal-content" :style="conHei">
      <div class="cs-card">
        <div class="add-bank">
          <img src="../../../assets/images/plbicon@2x.png" alt="">
          <div class="cs-text">添加银行卡</div>
        </div>
      </div>
      <div class="cs-card">
        <div class="cs-tip">账户余额将提现到银行卡</div>
        <div class="cs-body">
           <x-input title='￥' type="tel"></x-input>
        </div>
        <div class="cs-footer">
          <div class="cs-less">账户余额：￥195.00</div>
          <div class="cs-link">提现记录</div>
        </div>
      </div>
      <div class="btn-space">
        <x-button>立即提现</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { XInput, Group, XButton, Cell } from 'vux'
import { Card } from 'vux'
export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "提现",
        showLeftBack: true,
        showRightMore: false
      },
    };
  },
  components: {
     XInput,
    XButton,
    Group,
    Cell,
    Header,
    Card
  },
  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },
};
</script>
<style lang='css' scoped>
.normal-content{
  width: 100%;
  background: #F5F5F5;
  margin-top: 45px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 15px;
  box-sizing: border-box;
}
.cs-card{
  background:rgba(255,255,255,1);
  box-shadow:0px 10px 20px 0px rgba(0,101,255,0.08);
  border-radius:8px;
  margin-bottom: 20px;
  padding:0 20px;
}
.add-bank{
  line-height: 1;
  text-align: center;
  color: #666666;
  font-size: 14px;
  padding:0 0 20px 0;
}
.add-bank img{
  width: 108px;
  height: 108px;
  background:none;
}
.btn-space .weui-btn_default{
  background:rgba(57,118,255,1);
  border-radius:8px;
  color: #FFFFFF;
  height: 50px;
  line-height: 50px;
}
.btn-space .weui-btn_default:active{
  background:rgba(34,102,255,1);
  color: #FFFFFF;
}
.cs-footer{
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
  padding: 15px 0;
  border-top: 1px solid #E5E5E5;
  font-size: 14px;
}
.cs-less{
  color: #999999;
}
.cs-link{
  color: #3976FF;
}
.cs-card .weui-cell{
  padding: 5px 0 15px 0;
}
.cs-card .pfuhao{
  font-weight: bold;
  font-size: 28px;
  line-height: 1;
  color: #222222;
}
.weui-cells{
  margin-top: 0!important;
}
.cs-tip{
  padding: 15px 0;
  color: #666666;
  font-size: 14px;
}
</style>
