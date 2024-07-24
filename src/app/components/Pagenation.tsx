import React from 'react';

function Pagination() {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="rounded-sm bg-gray-100 ">
      <button className="mx-1 px-2 py-1 hover:bg-slate-600 hover:text-white">
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className="mx-1 px-2 py-1 hover:bg-slate-600 hover:text-white "
        >
          {page}
        </button>
      ))}
      <button className="mx-1 px-2 py-1  hover:bg-slate-600 hover:text-white">
        Next
      </button>
      </div>
    </div>
  );
}

export default Pagination;
