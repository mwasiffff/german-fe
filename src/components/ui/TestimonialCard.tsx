import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  image: string;
  rating: number;
  text: string;
  location: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  image, 
  rating, 
  text, 
  location,
  index
}) => {
  return (
    <motion.div 
      className="glass-panel h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4 space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? 'text-warning-500 fill-warning-500' : 'text-gray-500'} 
            />
          ))}
          <span className="ml-2 text-sm text-gray-400">{rating}.0</span>
        </div>
        
        <blockquote className="text-gray-300 flex-grow">
          "{text}"
        </blockquote>
        
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center">
          <img 
            src={image} 
            alt={name} 
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <div className="font-medium text-white">{name}</div>
            <div className="text-sm text-gray-400">{location}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;