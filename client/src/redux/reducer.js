import { GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, SINGUP, SINGUP_FAIL, SINGUP_SUCCESS } from "./ActionType"

const init={
    user:null,
    error:null,
    loading:false,
    token:localStorage.getItem("token"),
    isAuth:false
}

export const userReducer=(state=init,{type,payload})=>{
    switch (type) {
        case SINGUP:
        case LOGIN:
        case GET_PROFILE:
        return {
            ...state,loading:true
              };
              case SINGUP_FAIL:
              case LOGIN_FAIL:
              case GET_PROFILE_FAIL:
              return {
                ...state,loading:false,error:payload
              };
              case SINGUP_SUCCESS:
              return {
                ...state,loading:false,error:null,user:payload
              };
              case LOGIN_SUCCESS:
              return {
                ...state,
                loading:false,
                error:null,
                user:payload.user,
                token:payload.token,
                
              };
              case GET_PROFILE_SUCCESS:
              return {
                ...state,loading:false,error:null,user:payload,isAuth:true
              }
            
          
        default:
           return state
    }
}