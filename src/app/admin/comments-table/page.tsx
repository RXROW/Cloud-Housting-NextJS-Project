 
import React from 'react'

function AdminCommentsTable() {
  const comments = [
    { name: 'John Doe', comment: 'Great job!', date: '2024-07-01' },
    { name: 'Jane Smith', comment: 'Very helpful.', date: '2024-07-02' },
    { name: 'Alice Johnson', comment: 'Nice work!', date: '2024-07-03' },
    // Add more comments as needed
  ];

  return (
    <div className='mt-20 h-96 bg-white shadow-md rounded-lg p-6 overflow-y-auto'>
      <h2 className='text-2xl font-semibold mb-4'>Admin Comments Table</h2>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Name</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Comment</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Date</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {comments.map((comment, index) => (
            <tr key={index}>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{comment.name}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{comment.comment}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{comment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminCommentsTable
