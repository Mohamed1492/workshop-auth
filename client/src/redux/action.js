import { GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, SINGUP, SINGUP_FAIL, SINGUP_SUCCESS } from "./ActionType";
import axios from "axios"


export const singUpUser=(newUser)=>async(dispatch)=>{
     dispatch({type:SINGUP});
     const res=await axios.post("/user/signUp",newUser)
     try {
        dispatch({
            type:SINGUP_SUCCESS,
            payload:res.data
        })
     } catch (error) {
        console.log(error)
        dispatch({
            type:SINGUP_FAIL,
            payload:error.response.data      })
     }
};

export const loginUser=(user)=>async(dispatch)=>{
    dispatch({type:LOGIN})
    try {
        const res=await axios.post("/user/login",user);
        localStorage.setItem("token",res.data.token);
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data      })
     }
    };

    export const getUserProfile=()=>async(dispatch)=>{
        dispatch({
            type:GET_PROFILE
        })
        const token=localStorage.getItem("token");
        const config={
            headers:{
                Authorization:token
            }
        }
        try {
            const res=await axios.get("/user/get",config);
            dispatch({
                type:GET_PROFILE_SUCCESS,
                payload:res.data
            })
        } catch (error) {
            dispatch({
                type:GET_PROFILE_FAIL,
                payload:error.response.data      })
        }
    }
