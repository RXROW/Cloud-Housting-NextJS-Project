import React from 'react'
import AddArticleForm from './AddArticleForm'
import { cookies } from 'next/headers';
import { verifyTokenForPage } from '@/utils/verifyToken';
import { redirect } from 'next/navigation';
 
function Admin() {
  const token = cookies().get("JwtToken")?.value || "";
  const payload = verifyTokenForPage(token);
  if(payload?.isAdmin===false || payload===null  ) redirect("/")
  return (
    <div className="fix-height mt-40 flex items-center justify-center px-5 lg:px-20">
    <div className="shadow p-4 bg-blue-200 rounded w-full">
      <h2 className="text-xl lg:text-2xl text-gray-700 font-semibold mb-4">
        Add New Article
      </h2>
      <AddArticleForm />
    </div>
  </div>
  )
}

 

export default Admin