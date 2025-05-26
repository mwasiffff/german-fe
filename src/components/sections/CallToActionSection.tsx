import React from 'react';
import { motion } from 'framer-motion';
import { Rocket as RocketLaunch } from 'lucide-react';
import Button from '../ui/Button';
import CountdownTimer from '../ui/CountdownTimer';
import { useNavigate } from 'react-router-dom';

const CallToActionSection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary-500/10 to-transparent -z-10" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary-500/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary-500/20 rounded-full blur-[80px] -z-10" />
      
      <div className="container mx-auto">
        <motion.div
          className="glass-panel overflow-hidden rounded-2xl relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 md:p-12 z-10 relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
                Begin Your German Journey Today
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Join thousands of successful learners and start speaking German with confidence. Next batch starts in:
              </p>
              
              <div className="flex justify-center mb-8">
                <CountdownTimer days={7} hours={23} minutes={59} seconds={59} />
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-center mb-2 text-lg font-orbitron">
                  <span className="text-gray-400 line-through mr-2">PKR 24,999</span>
                  <span className="text-primary-500 font-bold">PKR 14,999</span>
                </div>
                <p className="text-accent-500 text-sm">40% Early Bird Discount • Only 20 seats left</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  icon={<RocketLaunch size={20} />}
                  onClick={() => navigate('/courses/a1')}
                >
                  Reserve Your Seat Now
                </Button>
                
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => navigate('/courses/a2')}
                >
                  View A2 Course
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;