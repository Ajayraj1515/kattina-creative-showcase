
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-purple-500/30 rounded-full animate-spin mx-auto mb-8">
            <div className="absolute top-0 left-0 w-24 h-24 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white animate-pulse">
              Hey! Ajay's Portfolio is Loading...
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
