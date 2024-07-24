import React from 'react';

function AddCommentForm() {
  return (
 <>
 
     
         
        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700 font-medium mb-2">
          Add Your Comment
          </label>
          <textarea
            id="comment"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your comment"
         
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
   
 
    </div>

    </>
  );
}

export default AddCommentForm;
