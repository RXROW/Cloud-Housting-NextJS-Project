import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900 bg-opacity-70 z-50">
      <div className="w-64 h-48 bg-gray-200 animate-pulse rounded-lg">
        <div className="h-24 bg-gray-300 rounded-t-lg"></div>
        <div className="p-4">
          <div className="h-4 bg-gray-300 mb-2 rounded"></div>
          <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
