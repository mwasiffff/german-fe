import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import confetti from '../utils/confetti';

interface LocationState {
  plan: string;
  courseLevel: 'A1' | 'A2';
}

const SuccessPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | null;
  
  // Default values if navigated directly
  const plan = state?.plan || 'Premium';
  const courseLevel = state?.courseLevel || 'A1';
  
  useEffect(() => {
    // Trigger confetti effect when the component mounts
    confetti();
    
    // Redirect to home after 5 seconds
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="pt-24 pb-16 px-4 min-h-[80vh] flex items-center">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          className="glass-panel p-8 md:p-12 rounded-xl text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary-500/20 rounded-full blur-3xl -z-10" />
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="bg-success-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle size={48} className="text-success-500" />
          </motion.div>
          
          <motion.h1
            className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Purchase Successful!
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Your purchase of the {courseLevel} {plan} course is being processed.
            You'll receive access once payment is verified.
          </motion.p>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <SuccessItem 
              title="Next Steps"
              description="We'll verify your payment and grant access within 24 hours."
            />
            <SuccessItem 
              title="WhatsApp Verification"
              description="Check your WhatsApp for payment verification details."
            />
            <SuccessItem 
              title="Support"
              description="Contact us on WhatsApp if you need any assistance."
            />
          </motion.div>
          
          <motion.p
            className="text-sm text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Redirecting to home page in a few seconds...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

interface SuccessItemProps {
  title: string;
  description: string;
}

const SuccessItem: React.FC<SuccessItemProps> = ({ title, description }) => (
  <div className="glass-panel p-4 text-center">
    <h3 className="font-orbitron font-medium text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
);

export default SuccessPage;