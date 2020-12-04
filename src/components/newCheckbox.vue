<template>
  <div >
    <div>子组件：{{value}}</div>
    <label>单选：</label> <input type="checkbox" v-model="checkBoxVal" value="tt" @change="inputFn">
    <input type="text" v-model="checkBoxVal">
  </div>
</template>

<script>

export default {
  name: 'parent',
  data:function(){
    return{
      checkBoxVal:""      
    }
  },
  computed :{
   
  },
  props:['value'],
  created:function () {
    
  },
  methods:{
    inputFn : function(e){
      console.log("this.$event.target.value",e)      
      this.$emit('input', this.checkBoxVal)
    }
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
