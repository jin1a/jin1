<template>
  <div >
      <div id="div1" @click="clikFun1">
          <div id="div2" @click="clikFun2">
              <div id="div3" @click.stop="clikFun3">213123123122113</div>
          </div>
      </div>
  </div>
</template>
<style scoped>
#div1{width: 700px;height: 700px;background: #e9a7a7;text-align: center;margin: auto;}
#div2{width: 500px;height: 500px;background: #cef5a2;text-align: center;margin: auto;}
#div3{width: 300px;height: 300px;background: #a9ebf7;text-align: center;margin: auto;}
</style>

<script>

export default {
  name: 'test',
  data:function(){
    return {
      newScore:this.$store.state.nscore,
      items:[
        {name:"cc",id:3},
        {name:"aa",id:1},
        {name:"bb",id:2}        
      ]
    }
  },
  computed :{
    
  },
  created:function () {
    
  },
  methods:{
    clikFun1(event){        
        console.log(111)
        event.stopPropagation()
    },
    clikFun2(event){
        console.log(2222)
        event.stopPropagation()
    },
    clikFun3(){
        console.log(333)
       // event.stopPropagation()
    }
  }
  
  
}
</script>

