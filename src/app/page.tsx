"use client";

import { useEffect } from "react";
import Hero from "./components/home/Hero";
import WebHostingPlan from "./components/home/WebHostingPlan";
import { ToastContainer } from "react-toastify";
 
 
 
const Home =  () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
   
  
 
  }, []);
 
  return (
    <div className=" max-w-screen-xl mt-16  mx-auto p-6">
  
      <Hero/>
      <WebHostingPlan/>
   
      Home Page
      <h1>Hello World With Next JS</h1>
    </div>
  );
};

export default Home;
