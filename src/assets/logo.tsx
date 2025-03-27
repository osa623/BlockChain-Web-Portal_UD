
import React from 'react';

export const Logo = ({ className = '', size = 40 }: { className?: string, size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 50 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="50" height="50" rx="10" fill="url(#logo-gradient)" />
      <path d="M25 12L32 24.5L25 37L18 24.5L25 12Z" fill="white" />
      <circle cx="25" cy="25" r="8" fill="url(#inner-gradient)" />
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3671E9" />
          <stop offset="1" stopColor="#7B61FF" />
        </linearGradient>
        <linearGradient id="inner-gradient" x1="17" y1="17" x2="33" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3DC786" />
          <stop offset="1" stopColor="#7B61FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
