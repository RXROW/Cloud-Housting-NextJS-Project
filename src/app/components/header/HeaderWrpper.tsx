"use client";
import { DOMAIN } from '@/utils/constants';
import axios from 'axios';
import React from 'react'
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter(); 
  const handleLogout = async () => {
    try {
      await axios.get(`${DOMAIN}/api/users/logout`);
      router.replace("/");  
      router.refresh();  

    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
            <button
                 onClick={handleLogout}
                  className="bg-rose-600 text-white p-2 rounded-sm hover:bg-rose-800 transition"
                >
                  Logout
                </button>
    </div>
  )
}
