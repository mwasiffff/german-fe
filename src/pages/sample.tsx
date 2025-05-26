import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import logo from '../images/logo.png';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // In a real app, we would authenticate the user here
      navigate('/home');
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
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
              <p className="text-gray-400 text-sm">Welcome Back!</p>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-6">
            Login to Your Account
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
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
                Login
              </Button>
            </div>
          </form>
          
          <p className="mt-8 text-center text-sm text-gray-400">
            Don't have an account? {' '}
            <button 
              onClick={() => navigate('/register')}
              className="text-primary-500 hover:text-primary-400 font-medium"
            >
              Register now
            </button>
          </p>
        </motion.div>
      </div>
      
      {/* Right Side - Image and Overlay */}
      <div className="hidden md:block md:w-1/2 relative">
        <div className="absolute inset-0 bg-dark-500 opacity-40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-500 to-transparent z-20" />
        
        <img 
          src="https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="German learning experience" 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex items-center z-30 px-12">
          <div className="glass-panel max-w-md p-6 rounded-xl">
            <h2 className="text-2xl font-orbitron font-bold text-white mb-4">
              Welcome Back to FuturLern
            </h2>
            <p className="text-gray-300">
              Continue your German learning journey with our AI-powered platform. Pick up right where you left off.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-500/20 text-primary-500 text-xs font-medium">Personalized</span>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary-500/20 text-secondary-500 text-xs font-medium">Interactive</span>
              <span className="inline-block px-3 py-1 rounded-full bg-accent-500/20 text-accent-500 text-xs font-medium">Engaging</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;