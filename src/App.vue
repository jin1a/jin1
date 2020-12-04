<template>
  <div id="app">
    <router-view></router-view>
    <!-- <img src="./assets/logo.png">
    <br/>
    {{ $t('message') }}
    {{ $t('langTest') }}
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button @click="testbt"> el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//import ELEMENT from './plugins/element.js'
//import Vue from 'vue'
export default {
  name: 'app',
  components: {
    //HelloWorld
  },
  created:function(){
    
    console.log("ttt")
  },
  methods: {
    // testbt(){
    //   console.log("ooopp")
    //   if(localStorage.language&&localStorage.language=="en"){
    //     this.$i18n.locale="cn"
    //     localStorage.language="cn"
    //   }else{
    //     this.$i18n.locale="en"
    //     localStorage.language="en"
    //   }
     
    //   //Vue.locale('en', ELEMENT.lang.en)
    //   console.log("ooopp22")
    // }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
