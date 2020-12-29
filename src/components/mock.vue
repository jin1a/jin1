<template>
  <div >
    mock 数据 console.log()打印
    <br><br><br><br>
    <button @click="getDdata">调取mock数据</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data:function(){
    return{
      nameNew:"",
      newChBox:""
    }
  },  
  name: 'parent', 
  computed :{
   
  },
  created:function () {
    
  },
  methods:{
    getDdata(){
      axios.get('/home/bb').then(function(res){
        console.log(res,"sucess");
      })
      .catch(function(err){
        console.log(err,'error');
      });
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
