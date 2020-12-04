const getters = {
  getClassName (state,getters,rootState){
    console.log("state,getters,rootState",state,getters,rootState)
    return state.className
  },
  getStudentName (state,getters,rootState){
    console.log("state,getters,rootState",state,getters,rootState)
    return state.useName
  },
  getScore(state){
    return state.score
  },
  getScore2(state){
    return state.nscore
  }
}
export default getters
