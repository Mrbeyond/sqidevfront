import { createStore } from 'vuex'

export default createStore({
  state: {
    test1: 'one',
  },

  /** This is manually included */
  getters: {
    getOne: state=>{
      return state.test1
    }
  },

  mutations: {
    
  },

  actions: {
  },
  
  modules: {
  }
})
