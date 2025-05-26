import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description,
  delay = 0
}) => {
  return (
    <motion.div 
      className="glass-panel p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full p-3 inline-block mb-4">
        {icon}
      </div>
      
      <h3 className="text-lg font-orbitron font-bold text-white mb-2">
        {title}
      </h3>
      
      <p className="text-gray-300">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;