import apiClient from "@/lib/api-client";
import { LOGIN_ROUTE, SIGNUP_ROUTE, USERINFO } from "@/utils/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoogedIn:localStorage.getItem('isLoggedIn') || false,
    data:{}
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(signup.fulfilled,(state,action)=>{
            localStorage.setItem("data",JSON.stringify(action?.payload));
            localStorage.setItem("isLoggedIn",true);
            return{
                ...state,
                isLoggedIn: true,
                data : action?.payload
            }
        })
        .addCase(login.fulfilled,(state,action)=>{
            localStorage.setItem("data",JSON.stringify(action?.payload));
            localStorage.setItem("isLoggedIn",true);
            state.isLoggedIn = true;
            state.data = action?.payload;
        })
        // .addCase(logout.fulfilled, (state) => {
        //     localStorage.clear();
        //     state.data = {}
        //     state.isLoggedIn = false;

        // })
    }
})
export const signup = createAsyncThunk("/signup",async(data)=>{
   try {
    const res  = apiClient.post(SIGNUP_ROUTE,data);
    return (await res).data
   } catch (error) {
    console.log(error)
   }
})
export const login = createAsyncThunk("/login",async(data)=>{
    try {
     const res  = apiClient.post(LOGIN_ROUTE,data);
     return (await res).data
    } catch (error) {
     console.log(error)
    }
 })
export const getUserDetails = createAsyncThunk("/userInfo",async(data)=>{
    try {
     const res  = apiClient.get(USERINFO);
     return (await res).data
    } catch (error) {
     console.log(error)
    }
 })

export default authSlice.reducer;