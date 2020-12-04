import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginMessage:{},
    useName:"小明",
    className:'高一（3）班',
    score:0,
    nscore:10,
  },
  getters,
  // getters: {
  //   // ...
  //   // doneTodosCount: (state, getters) => {
  //   //   return getters.doneTodos.length
  //   // }
  //   getName1: (state, getters, rootState)=>{
  //     console.log("state,getters,rootState",state,getters,rootState)
  //     return state.className
  //   }
  // }, 
  mutations,
  actions: {
  },
  modules: {
  }
})
