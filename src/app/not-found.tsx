import Link from 'next/link';
import React from 'react';

function NotFound() {
  return (
    <div className="flex items-center flex-col gap-3 justify-center min-h-screen ">
      <h1 className="text-4xl font-bold text-red-700">404 - Page Not Found</h1>
      <Link className='text-3xl border border-spacing-1 p-2 bg-blue-100 text-red-700' href={"/"}>Go To Home Page </Link>
    </div>
  );
}

export default NotFound;
