
import { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Blog from '../view/blog'
import Login from '../view/login'


const PrivateRoutes = () => {
  
  const access_token = localStorage.getItem('LOGGED_IN')
  const [uservalidated,setUserValidated] =  useState(false)
  const navigateTo = useNavigate()
  

  useEffect(() => {
    //if access token is not null check the validity of the token , if the token is expired refresh the token using the current refresh token
   
    if (access_token == "true") {
        setUserValidated(true)
    } 
  }, [localStorage.getItem('LOGGED_IN')])
  if (uservalidated) {
    return <Outlet/>
  }  else {
    return  <Login />
  }
}

export default PrivateRoutes
 