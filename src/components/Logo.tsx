import React from 'react';
import { Leaf } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-8' }) => {
  return (
    // <div className={`bg-green-600 rounded-full p-1.5 flex items-center justify-center ${className}`}>
    //   <Leaf className="text-white" size={20} />
    // </div>
    <div className="flex justify-center items-center bg-primary rounded-full p-2">
  <img src="./src/assets/your-logo.png" alt="Logo" className="h-20 w-30" />
</div>

  );
};

export default Logo;