<template>
  <div >
    <br/>
    {{ $t('message') }}
    <br/>
    {{ $t('langTest') }}
    <br/>
    <br/><br/><br/>
    <el-button @click="testbt"> {{ $t('changLanguage') }}</el-button>
    
  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    msg: String
  },
  methods: {
    testbt(){      
      if(localStorage.language&&localStorage.language=="en"){
        this.$i18n.locale="cn"
        localStorage.language="cn"
      }else{
        this.$i18n.locale="en"
        localStorage.language="en"
      }     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
