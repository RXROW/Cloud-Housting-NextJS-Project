"use client";

import React, { useState } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { CommentWithUser } from '@/utils/types';
import UpdateCommentForm from './UpdateCommentForm';
import axios from 'axios';
import { DOMAIN } from '@/utils/constants';
import { useRouter } from 'next/navigation';

interface CommentItemProps {
  comment: CommentWithUser;
}

const CommentItems = ({ comment }: CommentItemProps) => {
 const [open, setOpen] = useState(false);
 const router = useRouter();

  const handleUpdate = () => {
    setOpen(true)
   
  };

  const handleDelete =async () => {
 try {
  if(confirm("You Want to delete this comment ?")){
    await axios.delete(`${DOMAIN}/api/comments/${comment.id}`)
    router.refresh();

  }
 } catch (error) {
  console.log(error)
 }
  };

  return (
    <div className="my-8">
      {comment ? (
        <div className="border p-4 bg-white rounded-lg flex items-start">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">
              {comment.user.username}
            </h3>
            <p className="text-gray-600">{comment.text}</p>
            <p className="mt-2 text-gray-500 text-sm">
              {new Date(comment.createdAt).toLocaleString()}
            </p>
          </div>
          <div className="ml-4 flex flex-col items-center gap-4 space-y-2">
            <button
              onClick={() => handleUpdate()}
              className="text-blue-500 hover:text-blue-700"
            >
              <PencilIcon className="h-6 w-6" />
            </button>
            <button
              onClick={() => handleDelete()}
              className="text-red-500 hover:text-red-700"
            >
              <TrashIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No comments yet.</p>
      )}
      {open && <UpdateCommentForm      
       setOpen={setOpen} 
         text={comment.text} 
         commentId={comment.id}  />}
    </div>
  );
};

export default CommentItems;
