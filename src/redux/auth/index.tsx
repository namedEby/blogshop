import { createSlice } from "@reduxjs/toolkit";
import { state } from "./state";

export const moduleName = "auth";

export const slice = createSlice({
  name: moduleName,
  initialState: state,
  reducers: {
    setToken: (state, action) => {
      state.TOKEN = action.payload.token;
    },
    setBlogPosts: (state, action) => {
      state.POSTS = action.payload.posts;
    },
    setPostDetail: (state, action) => {
      state.POSTDETAIL = action.payload.postdetail
    },
    setNavbarText:(state,action)=>{
      state.NAVBARTEXT = action.payload.text
    }
  },
});

export const { setToken, setBlogPosts ,setPostDetail,setNavbarText } = slice.actions;

export default slice.reducer;
