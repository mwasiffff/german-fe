import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

interface PricingCardProps {
  plan: string;
  price: number;
  features: string[];
  isPremium?: boolean;
  courseLevel: 'A1' | 'A2';
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  plan, 
  price, 
  features, 
  isPremium = false,
  courseLevel
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/checkout', { 
      state: { 
        plan, 
        price, 
        courseLevel 
      } 
    });
  };

  const getPrice = () => {
    if (courseLevel === 'A1') {
      return isPremium ? 17999 : 14999;
    }
    return isPremium ? 19999 : 16999;
  };
  
  return (
    <motion.div
      className={`glass-panel relative overflow-hidden ${isPremium ? 'border-secondary-500/30' : 'border-white/10'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: isPremium ? 0.1 : 0 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {isPremium && (
        <div className="absolute -right-12 top-6 rotate-45 bg-secondary-500 text-white px-12 py-1 font-orbitron text-sm z-10">
          Best Value
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
          {plan}
        </h3>
        
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-white">PKR {getPrice().toLocaleString()}</span>
            <span className="text-gray-400 ml-2">one-time</span>
          </div>
          <div className="text-accent-500 text-sm font-medium mt-1">2-Week Intensive Course</div>
        </div>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <span className={`flex-shrink-0 rounded-full p-1 mr-2 ${isPremium ? 'bg-secondary-500/20' : 'bg-primary-500/20'}`}>
                <Check size={16} className={isPremium ? 'text-secondary-500' : 'text-primary-500'} />
              </span>
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          variant={isPremium ? 'secondary' : 'primary'} 
          fullWidth
          icon={<ArrowRight size={18} />}
          onClick={handleClick}
        >
          Select {plan}
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;