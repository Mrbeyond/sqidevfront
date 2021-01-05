import Axios from 'axios';
import { createStore } from 'vuex'
import { PROXY } from '../Constants/apiConst';
import { header } from '../Constants/generalConst';
import { TEST, AUTHMODAL, STUDENT, CHANGE_LOGIN_STATUS, INTENDED_PAGE,
  AUTH_CONFIRM_ERROR

} from '../Constants/storeConst';

export default createStore({
  state: {
    authModal: false,
    student: null,
    signedIn: false,
    intendedPage: "",
    authConfirmError: false,
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

    intendedRoute: state=>state.intendedPage,

    authConfirmError: state=>state.authConfirmError,

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
      // alert();
    },

    [CHANGE_LOGIN_STATUS](state, payload){
      state.signedIn = payload;
    },

    [INTENDED_PAGE](state, payload){
      state.intendedPage = payload;
    },

    [AUTH_CONFIRM_ERROR](state, payload){
      state.authConfirmError = payload;
    }



    
  },

  actions: {

    [STUDENT]({commit}){

      Axios.get(`${PROXY}/reget_student`, {headers: header()})
      .then(res=>{
        if(res.data.success){
          let payload;
          try {
            payload = JSON.parse(window.atob(window.atob(res.data.data)));
            commit(STUDENT, payload);
            commit(CHANGE_LOGIN_STATUS, true);         
          } catch (e) {
            commit(AUTH_CONFIRM_ERROR, true);
          }
        }else{
          // if(res.data.Error === "void"){
          //   window.localStorage.clear();
          // }
          commit(AUTH_CONFIRM_ERROR, true);
        }
      })
      .catch(err => {
        if(err){
          commit(AUTH_CONFIRM_ERROR, true);
        }
      })
    },

    [TEST]({commit}){
      setTimeout((()=>{
        commit(TEST);

      }),1500)
    },

  },
  
  modules: {
  }
})
