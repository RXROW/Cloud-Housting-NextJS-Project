"use client";

import { useEffect } from "react";
 
 
const Home = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  return (
    <div>
   
      Home Page
      <h1>Hello World With Next JS</h1>
    </div>
  );
};

export default Home;
