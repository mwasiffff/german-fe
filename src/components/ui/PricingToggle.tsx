import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PricingToggleProps {
  onToggle: (isAnnual: boolean) => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ onToggle }) => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const handleToggle = () => {
    setIsAnnual(!isAnnual);
    onToggle(!isAnnual);
  };
  
  return (
    <div className="flex flex-col items-center space-y-4 mb-10">
      <h3 className="text-xl font-medium text-white">Choose your payment plan</h3>
      
      <div className="flex items-center space-x-4">
        <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
          One-time payment
        </span>
        
        <button 
          onClick={handleToggle}
          className="relative inline-flex h-6 w-12 items-center rounded-full border-2 border-primary-500/50 bg-dark-300 transition-colors focus:outline-none"
          aria-pressed={isAnnual}
        >
          <span className="sr-only">
            {isAnnual ? 'Use one-time payment' : 'Use subscription plan'}
          </span>
          <motion.span 
            className="inline-block h-4 w-4 rounded-full bg-primary-500"
            animate={{ x: isAnnual ? 24 : 4 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </button>
        
        <span className={`text-sm font-medium transition-colors flex items-center ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
          Subscription
          <span className="ml-2 bg-accent-500 text-white text-xs px-2 py-0.5 rounded-full">
            Save 20%
          </span>
        </span>
      </div>
    </div>
  );
};

export default PricingToggle;