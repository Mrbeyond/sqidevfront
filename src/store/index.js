import { createStore } from 'vuex'

export default createStore({
  state: {
    test1: 'one',
    ray: [4,5,6,7,8,9,10],
    nose: [{a:5, b:20},{a:4, b:10},{a:0, b:8}]
  },

  /** This is manually included */
  getters: {
    getOne: state=>{
      return state.test1
    },

    rayId: (state)=>(a)=>{
      return state.ray.filter(data=>data > a);
    },

    noser: state=> state.nose.find(data=>data.a === 5)
  },

  mutations: {
    
  },

  actions: {
  },
  
  modules: {
  }
})
