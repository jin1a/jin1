<template>
  <div >
    <nevElInput v-model="nameNew"></nevElInput>
    <div>父组件：{{nameNew}}</div>


    <br><br>
    <div>以下为多选框</div>
    <div>
      <newCheckbox v-model="newChBox"></newCheckbox>
      <div>复选父组件：{{newChBox}}</div>
    </div>
  </div>
</template>

<script>
import nevElInput from './nevElInput'
import newCheckbox from './newCheckbox'
export default {
  data:function(){
    return{
      nameNew:"",
      newChBox:""
    }
  },  
  name: 'parent',
  components:{nevElInput,newCheckbox},
  computed :{
   
  },
  created:function () {
    
  },
  methods:{
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
