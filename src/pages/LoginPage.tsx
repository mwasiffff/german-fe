import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Star, Users } from 'lucide-react';
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
  const [loading, setLoading] = useState(false);
  
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
  
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true); // Show spinner

  try {
    const response = await fetch('https://german-be.onrender.com/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    // Safer way to parse JSON
    const text = await response.text();
    const data = text ? JSON.parse(text) : {};

    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/intro');
    } else {
      alert(data.message || 'Login failed. Please check your credentials.');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Something went wrong. Please try again.');
  }

  setLoading(false); // Hide spinner
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
              <img src={logo} alt="FuturLern Logo" className="w-12 h-12 mr-3" />
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
  disabled={loading}
  icon={!loading && <ArrowRight size={18} />}
>
  {loading ? 'Logging in...' : 'Login'}
</Button>
            </div>
          </form>
          
          <div className="mt-8 text-center space-y-4">
  <p className="text-gray-400">Don't have an account?</p>
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="relative z-[100] pointer-events-auto">
      <Button 
        variant="outline"
        size="lg"
        fullWidth
        onClick={() => navigate('/register')}
        type="button"
        className="bg-dark-300 hover:bg-primary-500/20 transition-colors duration-300"
      >
        Register now
      </Button>
    </div>
  </motion.div>
</div>
        </motion.div>
      </div>
      
      {/* Right Side - Image and Content */}
      <div className="hidden md:block md:w-1/2 relative">
        <div className="absolute inset-0 bg-dark-500 opacity-40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-500 to-transparent z-20" />
        
        <img 
          src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="German learning experience" 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <motion.div 
            className="glass-panel p-6 rounded-xl w-[90%] max-w-md mx-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Welcome Message */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-orbitron font-bold text-white mb-2">
                Start Your German Journey
              </h2>
              <p className="text-gray-300">
                Join our community of successful German learners
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <StatCard icon={<Users size={20} />} value="1,500+" label="Students" />
              <StatCard icon={<Star size={20} />} value="98%" label="Success Rate" />
            </div>

            {/* Featured Testimonial */}
            <div className="mb-6">
              <TestimonialCard
                name="Sarah Ahmed"
                role="Medical Student"
                image="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                text="The structured approach and medical terminology focus helped me prepare for my residency in Germany."
              />
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              <BenefitItem
                title="AI-Powered Learning"
                description="Personalized study path"
              />
              <BenefitItem
                title="Live Practice"
                description="With native speakers"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Success Story */}
      <div className="md:hidden px-4 py-8">
        <motion.div 
          className="glass-panel p-6 rounded-xl space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-4">
            <h3 className="text-xl font-orbitron font-bold text-white mb-2">
              Join Our Success Story
            </h3>
            <p className="text-gray-300 text-sm">
              Learn German in just 2 weeks with our proven method
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <StatCard icon={<Users size={20} />} value="1,500+" label="Students" />
            <StatCard icon={<Star size={20} />} value="98%" label="Success Rate" />
          </div>

          <TestimonialCard
            name="Sarah Ahmed"
            role="Medical Student"
            image="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
            text="The structured approach helped me prepare for my residency in Germany."
          />
        </motion.div>
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

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, image, text }) => (
  <div className="glass-panel p-4 rounded-lg">
    <div className="flex items-center space-x-4 mb-3">
      <img 
        src={image}
        alt={name} 
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h4 className="text-white font-medium">{name}</h4>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
    <p className="text-gray-300 text-sm italic">"{text}"</p>
  </div>
);

interface BenefitItemProps {
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ title, description }) => (
  <div className="glass-panel p-3 rounded-lg text-center">
    <h4 className="text-white font-medium text-sm mb-1">{title}</h4>
    <p className="text-gray-400 text-xs">{description}</p>
  </div>
);

export default LoginPage;
