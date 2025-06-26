import React from 'react';

interface LynkLogoProps {
  className?: string;
}

const LynkLogo: React.FC<LynkLogoProps> = ({ className = 'h-8 w-auto' }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="20" r="10" fill="currentColor" className="text-lynk-purple" />
      <circle cx="25" cy="20" r="10" fill="currentColor" className="text-lynk-orange opacity-80" />
    </svg>
  );
};

export default LynkLogo;