// LoadingBars.js
import React from 'react';
import './Loadinglights.css';

const LoadingBars = () => {
  return (
    <div className="flex flex-col items-center justify-center"> {/* Centering horizontally and vertically */}
      <div className="flex flex-col items-center space-y-2 bg-yellow-100 bg-opacity-50 w-40 h-4 rounded-md overflow-hidden relative mb-1">
        <div className="bg-yellow-400 animate-loading-bar1 absolute top-0 left-0 w-full h-full"></div>
      </div>
      <div className="flex flex-col items-center space-y-2 bg-yellow-100 bg-opacity-50 w-40 h-4 rounded-md overflow-hidden relative mb-1">
        <div className="bg-yellow-400 animate-loading-bar2 absolute top-0 left-0 w-full h-full"></div>
      </div>
      <div className="flex flex-col items-center space-y-2 bg-yellow-100 bg-opacity-50 w-40 h-4 rounded-md overflow-hidden relative mb-1">
        <div className="bg-yellow-400 animate-loading-bar3 absolute top-0 left-0 w-full h-full"></div>
      </div>
    </div>
  );
};

export default LoadingBars;
