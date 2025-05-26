import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  level: 'A1' | 'A2';
  description: string;
  features: string[];
  imageSrc: string;
  route: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  level, 
  description, 
  features, 
  imageSrc,
  route
}) => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      className="glass-panel overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative h-[200px] overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="bg-primary-500 text-white px-3 py-1 rounded-full font-orbitron text-sm">
            {level}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-orbitron font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <span className="flex-shrink-0 bg-primary-500/20 rounded-full p-1 mr-2">
                <Check size={14} className="text-primary-500" />
              </span>
              <span className="text-sm text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="pt-4 border-t border-white/10">
          <Button 
            variant="primary" 
            fullWidth 
            onClick={() => navigate(route)}
          >
            Explore {level} Plan
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;