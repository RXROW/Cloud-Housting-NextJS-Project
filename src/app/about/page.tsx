/* eslint react/no-unescaped-entities: "off" */
import React from 'react';
import Image from 'next/image';
import cloud_Image from '../../../public/cloud-hosting.png';



 

const page = () => {
   return (
    <div className="max-w-screen-xl mt-16 mx-auto p-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">About Us</h1>
      <div className="flex flex-col items-center justify-center">
        <Image 
          src={cloud_Image} 
          alt="Cloud Hosting" 
          className="rounded-lg shadow-lg"
          width={600}
          height={400}
          priority
        />
        <p className="mt-6 text-lg text-gray-700 max-w-2xl text-center">
          Our cloud hosting services offer unmatched reliability and performance.
          Whether you're running a small website or a large application, we provide 
          scalable and secure hosting solutions to meet your needs.
        </p>
      </div>
    </div>
  );
}

export default page
 