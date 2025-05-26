import React from 'react';
import { motion } from 'framer-motion';
import { Rocket as RocketLaunch, Brain, Zap, Users, Star, Clock } from 'lucide-react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <span className="bg-primary-500/20 text-primary-500 text-sm font-medium px-3 py-1 rounded-full">
                2nd Batch Starting Soon
              </span>
              <span className="bg-warning-500/20 text-warning-500 text-sm font-medium px-3 py-1 rounded-full">
                Only 20 Seats Left
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-white leading-tight mb-6">
              Master German in
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"> Just 2 Weeks!</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-6">
              Join our intensive 2-week German mastery program! Our revolutionary AI-powered platform has helped 150+ students achieve German fluency in record time. Limited seats available for our next batch!
            </p>

            {/* Success Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Stat number="2 Weeks" label="Course Duration" />
              <Stat number="98%" label="Success Rate" />
              <Stat number="150+" label="Success Stories" />
              <Stat number="20" label="Seats Left" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="primary" 
                size="lg"
                icon={<RocketLaunch size={20} />}
                onClick={() => navigate('/courses/a1')}
              >
                Reserve Your Seat Now
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/courses/a2')}
              >
                View Success Stories
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <Feature icon={<Brain size={18} />} text="Rapid Learning System" />
              <Feature icon={<Star size={18} />} text="Native Speaker Practice" />
              <Feature icon={<Clock size={18} />} text="2-Week Mastery" />
            </div>
          </motion.div>
          
          {/* Right Content - Animation or Image */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 glass-panel overflow-hidden rounded-xl neon-border">
                <img 
                  src="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="German learning experience" 
                  className="w-full h-auto rounded-xl opacity-90"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-dark-400/80 to-transparent" />
                
                {/* Floating badges */}
                <motion.div 
                  className="absolute top-6 left-6 glass-panel px-3 py-1.5 rounded-full text-sm"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <span className="text-accent-500 font-medium">2-Week Program</span>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-6 right-6 glass-panel px-3 py-1.5 rounded-full text-sm"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
                >
                  <span className="text-primary-500 font-medium">Limited Seats!</span>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-primary-500/20 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-[-30px] left-[-30px] w-60 h-60 bg-secondary-500/20 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface StatProps {
  number: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ number, label }) => (
  <div className="glass-panel p-3 text-center rounded-lg">
    <div className="text-primary-500 font-orbitron font-bold text-xl">{number}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </div>
);

interface FeatureProps {
  icon?: React.ReactNode;
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, text }) => (
  <div className="flex items-center space-x-2 text-sm">
    {icon && (
      <span className="text-primary-500">
        {icon}
      </span>
    )}
    <span className="text-gray-300">{text}</span>
  </div>
);

export default HeroSection;