<template>
  <div class="hello">
    <ul>
      <li>
        <a href="">
        </a>
      </li>
      <li>
        <router-link to="/GuideList">在线导游</router-link>
      </li>
      <li>
        <router-link to="/DynamicDetails">动态详情</router-link>
      </li>
      <li>
        <router-link to="/ScenicContent">景区介绍</router-link>
      </li>
      <li>
        <router-link to="/RememberList">记住</router-link>
      </li>
      <li>
        <router-link to="/RememberCont">记住详情</router-link>
      </li>
      <li>
        <router-link to="/KnowList">了解</router-link>
      </li>
      <li>
        <router-link to="/KnowCont">了解详情</router-link>
      </li>
      <li>
        <router-link to="/TakeAwayList">带走的</router-link>
      </li>
      <li>
        <router-link to="/TakeinList">地方特色</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 30px;
}
a {
  color: #42b983;
}
</style>
