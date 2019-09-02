<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style lang="less">
@import "~vux/src/styles/reset.less";
.app-box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.router-animate {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.4s ease;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0.5;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
.vux-header{
  background-color: #FFFFFF!important;
}
.vux-header .vux-header-left a, .vux-header .vux-header-left button, .vux-header .vux-header-right a, .vux-header .vux-header-right button{
  color: #333333!important
}
.vux-header .vux-header-left .left-arrow:before{
  border-color:#333!important;
}
.vux-header .vux-header-title{
  color: #333333!important
}
</style>
