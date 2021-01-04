import { createStore } from 'vuex'
import { TEST, AUTHMODAL, STUDENT, CHANGE_LOGIN_STATUS } from '../Constants/storeConst';

export default createStore({
  state: {
    authModal: false,
    student: null,
    signedIn: false,
    test1: 'one',
    ray: [4,5,6,7,8,9,10],
    nose: [{a:5, b:20},{a:4, b:10},{a:0, b:8}],
    add: 0,
  },

  /** This is manually included */
  getters: {
    getOne: state=>{
      return state.test1;
    },

    isIn: state=> state.signedIn,

    student: state=> state.student,     
    
    auth: state=>state.authModal,

    rayId: (state)=>(a)=>{
      return state.ray.filter(data=>data > a);
    },

    noser: state=> state.nose.find(data=>data.a === 5),

  },

  mutations: {

    [TEST](state){
      state.test1 = `${state.test1}-${++state.add}`
    },

    [AUTHMODAL](state){
      state.authModal = !state.authModal;
    },

    [STUDENT](state, payload){
      state.student = payload;
    },

    [CHANGE_LOGIN_STATUS](state, payload){
      state.signedIn = payload;
    },


    
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
