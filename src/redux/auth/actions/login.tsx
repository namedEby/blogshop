import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from '..';
import {setToken} from './../index'


export const LOGIN = createAsyncThunk(
    moduleName + '/LOGIN',
    async (payload: { username: string, password: string }, { dispatch, getState }) => {
      const ENDPOINT = "https://wp.planetmedia.dev/wp-json/api/v1/token";
  
      try {
        const response = await fetch(ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });
  
        if (response.ok) {
          const data = await response.json();
          dispatch(setToken({token:data.jwt_token}))
          localStorage.setItem('token',data.jwt_token)
         
            
        } else {
         
          console.log(response);
        }
      } catch (error) {
      
        console.error(error);
      }
    }
  );
  