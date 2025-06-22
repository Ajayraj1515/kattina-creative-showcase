
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        
        <div>
          <h1 className="loading-title">
            Hey! Ajay's Portfolio is Loading...
          </h1>
          <div className="loading-dots">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
