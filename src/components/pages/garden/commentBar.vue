<template>
  <div>
    <div class="send-form">
      <x-input title="" class="weui-send" placeholder="说点什么吧...">
        <x-button slot="right" class="send-button"></x-button>
      </x-input>
    </div>
  </div>
</template>

<script>
  import { XInput ,XButton  } from 'vux'
  export default {
    components: {
      XInput,
      XButton
    }
  }
</script>

<style>
  .send-form{
    height:55px;
    background:rgba(255,255,255,1);
    box-shadow:0px -10px 20px 0px rgba(0,101,255,0.08);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .weui-send input{
    background-color: #F5F5F5;
    border-radius: 4px;
    height: 35px;
    line-height:35px;
    padding: 0 15px;
  }
  .send-button{
    width: 35px;
    height: 35px;
    background:url(../../../assets/images/Send.png) center no-repeat;
    background-size: contain;
    background-color: transparent!important;
    border: 0!important;
  }
  .send-form .weui-cell__ft{
    margin-left: 15px;
  }
  .send-button:active{
    background-color: transparent!important;
    border: 0!important;
  }
  .send-button:after{
    display: none;
  }
</style>
