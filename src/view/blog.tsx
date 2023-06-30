import React, { useEffect } from "react";

import Navbar from "../components/navbar";
import { blogData } from "../constants";
import Blogcard from "../components/blogcard";
import { useState } from "react";
import { blogbaseimage } from "../assets";
import Footer from "../components/footer";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux";
import { FETCH_POSTS } from "../redux/auth/actions/blog";
import { stat } from "fs";


const Blog = () => {
  const [count, setcount] = useState(0);
  const [changeCard, setChangeCard] = useState(false);
  const posts = useAppSelector((state)=>state.auth)
  const navigateTo = useNavigate()
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(FETCH_POSTS()).then(()=>{
     
    })
  },[])
  return (
    <div>
      <Navbar />
      
      <div  className=" flex flex-wrap mt-40 p-2">
        {blogData.map((item, index) => {
          return (
            <div onClick={()=>navigateTo('/blogdetails')} key={item.id}  className="w-full md:w-1/2">
              
                <Blogcard
                  category={item.category}
                  text={item.text}
                  image={item.image}
                  carddirection={item.carddirection}
                 
                />
              
            </div>
          );
        })}
      </div>
      <div className="w-full h-full relative">
        <img
          src={blogbaseimage}
          className="object-cover w-full h-full object-center"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#210006] opacity-50"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
