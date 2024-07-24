import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

interface Comment {
  id: number;
  name: string;
  date: string;
  body: string;
}

const staticComments: Comment[] = [
  {
    id: 1,
    name: "John Doe",
    date: "2023/8/6",
    body: "This is a great article! I learned a lot.",
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "2023/8/6",
    body: "Thank you for sharing this information.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    date: "2023/8/6",
    body: "Interesting read, I enjoyed it.",
  },
];

const CommentItems: React.FC = () => {
  const comments = staticComments;

  const handleUpdate = (id: number) => {
    console.log(`Update comment with id ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete comment with id ${id}`);
  };

  return (
    <div className="my-8">
      <h1 className='text-lg p-2 font-semibold text-gray-800'>All Comments</h1>
      {comments.length > 0 ? (
        comments.map(comment => (
          <div
            key={comment.id}
            className="border p-4 mb-4 bg-white shadow-lg rounded-lg flex items-start"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {comment.name}
              </h3>
              <p className="text-gray-600">{comment.body}</p>
              <p className="mt-2 text-gray-500 text-sm">
                {comment.date}
              </p>
            </div>
            <div className="ml-4 flex flex-col items-center gap-4 space-y-2">
              <button
                onClick={() => handleUpdate(comment.id)}
                className="text-blue-500 hover:text-blue-700"
              >
                <PencilIcon className="h-6 w-6" />
              </button>
              <button
                onClick={() => handleDelete(comment.id)}
                className="text-red-500 hover:text-red-700"
              >
                <TrashIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No comments yet.</p>
      )}
    </div>
  );
};

export default CommentItems;
