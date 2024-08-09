import React from 'react'
import { cookies } from 'next/headers';
import { verifyTokenForPage } from '@/utils/verifyToken';
import { redirect } from 'next/navigation';
function AdminArticlesTable() {
  const token = cookies().get("JwtToken")?.value || "";
  const payload = verifyTokenForPage(token);
  if(payload?.isAdmin===false || payload===null) redirect("/")
  const articles = [
    { title: 'First Article', author: 'John Doe', date: '2024-07-01' },
    { title: 'Second Article', author: 'Jane Smith', date: '2024-07-02' },
    { title: 'Third Article', author: 'Alice Johnson', date: '2024-07-03' },
    // Add more articles as needed
  ];

  return (
    <div className='mt-20 h-96 bg-white shadow-md rounded-lg p-6 overflow-y-auto'>
      <h2 className='text-2xl font-semibold mb-4'>Admin Articles Table</h2>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Title</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Author</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Date</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {articles.map((article, index) => (
            <tr key={index}>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{article.title}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{article.author}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{article.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminArticlesTable
