import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900 bg-opacity-90 z-50">
      <span className="relative w-24 h-24 border-8 border-t-transparent border-red-500 border-solid rounded-full animate-spin"></span>
    </div>
  );
};

export default Loading;
