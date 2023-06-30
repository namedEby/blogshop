import { createAsyncThunk } from "@reduxjs/toolkit";

import { useSelector } from "react-redux";
import { state } from "../state";
import { RootState, useAppSelector } from "../..";
import { moduleName, setBlogPosts, setPostDetail } from "..";

export const FETCH_POSTS = createAsyncThunk(
  moduleName + "/FETCH_POSTS",
  async (_, { dispatch, getState }) => {
    const ENDPOINT = "https://wp.planetmedia.dev/wp-json/wp/v2/posts/";
    const token = "Bearer " + localStorage.getItem("token");

    try {
      const response = await fetch(ENDPOINT, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (response.ok) {
        const data = await response.json();

        dispatch(setBlogPosts({ posts: data }));
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const FETCH_BLOG_DETAIL = createAsyncThunk(
  moduleName + "/FETCH_BLOG_DETAIL",
  async (payload: { post_id: string }, { dispatch, getState }) => {
    const ENDPOINT = "https://wp.planetmedia.dev/wp-json/wp/v2/posts/" +payload.post_id;
    const token = "Bearer " + localStorage.getItem("token");

    try {
      const response = await fetch(ENDPOINT, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (response.ok) {
        const data = await response.json();

        dispatch(setPostDetail({ postdetail: data }));
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  }
);
