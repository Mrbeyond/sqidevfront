import { createStore } from 'vuex'
import { TEST, AUTHMODAL } from '../Constants/storeConst';

export default createStore({
  state: {
    authModal: false,
    test1: 'one',
    ray: [4,5,6,7,8,9,10],
    nose: [{a:5, b:20},{a:4, b:10},{a:0, b:8}],
    add: 0,
  },

  /** This is manually included */
  getters: {
    getOne: state=>{
      return state.test1
    },

    rayId: (state)=>(a)=>{
      return state.ray.filter(data=>data > a);
    },

    noser: state=> state.nose.find(data=>data.a === 5),
    auth: state=>state.authModal,

  },

  mutations: {

    [TEST](state){
      state.test1 = `${state.test1}-${++state.add}`
    },

    [AUTHMODAL](state){
      state.authModal = !state.authModal;
    }


    
  },

  actions: {

    [TEST]({commit}){
      setTimeout((()=>{
        commit(TEST);

      }),1500)
    },
  },
  
  modules: {
  }
})
