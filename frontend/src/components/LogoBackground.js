import React from 'react';

const LogoBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large subtle logo icon - cross/plus symbol inspired by RevLabs */}
      <svg 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cross/flow symbol */}
        <path 
          d="M45 10 L45 45 L10 45 L10 55 L45 55 L45 90 L55 90 L55 55 L90 55 L90 45 L55 45 L55 10 Z"
          fill="url(#logoGradient)"
        />
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#67E8F9" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Soft blur overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, #121418 70%)'
        }}
      />
    </div>
  );
};

export default LogoBackground;
