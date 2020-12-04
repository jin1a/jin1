<template>
  <div >
    <span v-pre>{{ this will not be compiled }}</span>
    <br>
    <span>{{this.$store.state.useName}}</span>
    <br>
    <br>
    <div>学生姓名：{{getStudentName}}</div>
    <br>
    <div>班级：{{getClassName}}</div>
    <br>
    <div>分数：{{getScore}}</div>
    <div>分数2：{{newScore}},{{getScore2}}</div>
    <div>分数2：<input type="text" v-model="newScore"> </div>
    <br>
    <button @click="addScore">加10分</button>
    <br>
    <ul >
      <li v-for="item in items" v-bind:key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
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
    ...mapGetters(['getClassName','getStudentName','getScore','getScore2'])    
  },
  created:function () {
    this.mtScore()
  },
  methods:{
    ...mapMutations([
      'mtScore', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    ]),
    addScore(){     
      this.mtScore()
    }
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
