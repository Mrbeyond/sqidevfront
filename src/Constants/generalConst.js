export const header=()=>{
  let token;
  try {

    token = window.atob(window.atob(window.localStorage.token));
    return {Authorization: `Bearer ${token}`};  
  } catch (e) {
    return false;
  }
};