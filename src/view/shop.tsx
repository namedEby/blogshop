import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import { productData } from "../constants";
import ProductCard from "../components/productcard";
import Footer from "../components/footer";
import { useAppDispatch } from "../redux";
import { setNavbarText } from "../redux/auth";

const Shop = () => {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(setNavbarText({text:"SHOP"}))
  })
  return (
    <div>
      <Navbar/>
      <div style={{ display: "flex", flexWrap: "wrap" }} className="mt-40">
      {productData.map((item, index) => {
        return (
          <div key={item.id} className="w-full md:w-1/2">
           <ProductCard name ={item.name} subtext={item.subtext} price={item.price} image={item.image}  />
          </div>
        );
      })}
    </div>
    <Footer/>
    </div>
    
  );
};

export default Shop;
