import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle, LogIn, Users, Star, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import logo from '../images/logo.png';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginClick = () => {
    navigate('/login');
  };
  
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (validate()) {
    try {
      const response = await fetch('https://german-be.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
          navigate('/login');
        }, 3000);
      } else {
        alert(data.message || 'Registration failed. Try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Something went wrong. Please try again.');
    }
  }
};

  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
          >
            <div className="absolute inset-0 bg-dark-500/80 backdrop-blur-sm" />
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="glass-panel p-8 rounded-xl relative z-10 max-w-md w-full text-center"
            >
              <div className="bg-success-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-success-500" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                Registration Successful!
              </h3>
              <p className="text-gray-300 mb-2">
                Your account has been created successfully.
              </p>
              <p className="text-gray-400 text-sm">
                Redirecting to login page...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex items-center">
            <motion.div 
              whileHover={{ rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
<img 
  src={logo} 
  alt="FuturLern Logo" 
  className="w-12 h-12 mr-3"
/>
            </motion.div>
            <div>
              <h1 className="text-2xl font-orbitron font-bold text-white">
                Futur<span className="text-primary-500">Lern</span>
              </h1>
              <p className="text-gray-400 text-sm">Master German, Shape Your Future</p>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-6">
            Join Our Exclusive Waitlist
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`input-field pl-10 ${errors.fullName ? 'border-error-500' : ''}`}
                  placeholder="John Doe"
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-sm text-error-500">{errors.fullName}</p>
              )}
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field pl-10 ${errors.email ? 'border-error-500' : ''}`}
                  placeholder="your.email@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-error-500">{errors.email}</p>
              )}
            </div>
            
            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  className={`input-field pl-10 pr-10 ${errors.password ? 'border-error-500' : ''}`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} className="text-gray-400 hover:text-gray-300" />
                  ) : (
                    <Eye size={18} className="text-gray-400 hover:text-gray-300" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-error-500">{errors.password}</p>
              )}
            </div>
            
            <div>
              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="lg"
                icon={<ArrowRight size={18} />}
              >
                Join Waitlist Now
              </Button>
            </div>
          </form>
          
          <div className="mt-8 text-center space-y-4">
            <p className="text-gray-400">Already have an account?</p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
<div className="relative z-[100] pointer-events-auto">
  <Button 
    variant="outline"
    size="lg"
    fullWidth
    icon={<LogIn size={18} />}
    onClick={handleLoginClick}
    type="button"
    className="bg-dark-300 hover:bg-primary-500/20 transition-colors duration-300"
  >
    Log in to your account
  </Button>
</div>
        </motion.div>
      </div>
              </motion.div>
      </div>
      
      {/* Right Side - Success Story */}
      <div className="hidden md:block md:w-1/2 relative">
        <div className="absolute inset-0 bg-dark-500 opacity-40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-500 to-transparent z-20" />
        
        <img 
          src="https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="German learning experience" 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex items-center z-30 px-12">
          <div className="glass-panel p-8 rounded-xl space-y-6">
            {/* Success Badge */}
            <div className="flex items-center space-x-2">
              <span className="bg-success-500/20 text-success-500 px-3 py-1 rounded-full text-sm font-medium">
                1st Batch Success
              </span>
              <span className="bg-warning-500/20 text-warning-500 px-3 py-1 rounded-full text-sm font-medium">
                Only 20 Seats Left
              </span>
            </div>

            {/* Success Stats */}
            <div className="grid grid-cols-2 gap-4">
              <StatCard icon={<Users size={20} />} value="150+" label="Alumni" />
              <StatCard icon={<Star size={20} />} value="98%" label="Success Rate" />
              <StatCard icon={<Clock size={20} />} value="20" label="Seats Left" />
            </div>

            <div>
              <h2 className="text-2xl font-orbitron font-bold text-white mb-3">
                Join Our Success Story
              </h2>
              <p className="text-gray-300 mb-4">
                Our first batch students have mastered German and achieved their language goals. Don't miss your chance to be part of our next success story.
              </p>
            </div>

            {/* Success Points */}
            <div className="space-y-3">
              <SuccessPoint text="Comprehensive A1 & A2 German courses" />
              <SuccessPoint text="AI-powered learning system" />
              <SuccessPoint text="Interactive speaking practice" />
              <SuccessPoint text="Native speaker interactions" />
            </div>

            {/* Testimonial */}
            <div className="glass-panel p-4 rounded-lg">
              <p className="text-gray-300 italic mb-3">
                "FuturLern's innovative approach helped me master German in just 6 months. The AI-powered platform and interactive lessons made learning both effective and enjoyable!"
              </p>
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Student" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-medium">Asad Khan</p>
                  <p className="text-gray-400 text-sm">German Language Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Success Story */}
      <div className="md:hidden px-4 py-8 bg-dark-400/40 backdrop-blur-sm">
        <div className="glass-panel p-6 rounded-xl space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="bg-success-500/20 text-success-500 px-3 py-1 rounded-full text-sm font-medium">
              1st Batch Success
            </span>
            <span className="bg-warning-500/20 text-warning-500 px-3 py-1 rounded-full text-sm font-medium">
              Only 20 Seats Left
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <StatCard icon={<Users size={20} />} value="150+" label="Alumni" />
            <StatCard icon={<Star size={20} />} value="98%" label="Success Rate" />
          </div>

          <div className="glass-panel p-4 rounded-lg">
            <p className="text-gray-300 italic mb-3 text-sm">
              "FuturLern's innovative approach helped me master German in just 6 months!"
            </p>
            <div className="flex items-center space-x-3">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="Student" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-white font-medium text-sm">Asad Khan</p>
                <p className="text-gray-400 text-xs">German Language Expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
  <div className="glass-panel p-3 rounded-lg flex items-center space-x-3">
    <div className="text-primary-500">{icon}</div>
    <div>
      <div className="text-white font-orbitron font-bold">{value}</div>
      <div className="text-gray-400 text-xs">{label}</div>
    </div>
  </div>
);

interface SuccessPointProps {
  text: string;
}

const SuccessPoint: React.FC<SuccessPointProps> = ({ text }) => (
  <div className="flex items-center space-x-2">
    <CheckCircle size={16} className="text-success-500" />
    <span className="text-gray-300 text-sm">{text}</span>
  </div>
);

export default RegisterPage;