<template>
<div class="out">
  <div class="titleList">
    <ul>
      <li><router-link :to="{path:'/pageList/parent'}"> 1、自定义组件v-model</router-link></li>
      <li><router-link :to="{path:'/pageList/testI18n'}">2、国际化</router-link></li>
      <li><router-link :to="{path:'/pageList/maopao'}">3、vue事件冒泡</router-link></li>
      <li><router-link :to="{path:'/pageList/mock'}">4、mock数据</router-link></li>
    </ul>
  </div>
  <div class="contents">
    <router-view></router-view>
  </div>  
</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style scoped>
.out{display: flex;}
.titleList{width:200px;border-right:#ccc 1px solid;padding-right: 20px;}
.titleList ul{border: 0;margin: 0;padding: 0;}
.titleList li{list-style-type: none;text-align: left;padding: 5px 10px 5px 10px;border-bottom: #ccc dashed 1px ;}
.titleList a{text-decoration: none;color: #333;}
.contents{flex: 1;}
</style>
