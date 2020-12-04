<template>
  <div >
    <div>子组件：{{value}}</div>
    <label>请输入姓名：</label> <input type="text" v-model="value" @input="$emit('input', $event.target.value)">
    <br>
    <input type="text" v-model="value">
  </div>
</template>

<script>

export default {
  name: 'parent',
  computed :{
   
  },
  props:['value'],
  created:function () {
    
  },
  methods:{
    inputFn(){

    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
