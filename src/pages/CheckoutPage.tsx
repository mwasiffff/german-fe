import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, User, Mail, Phone, Calendar, Clock, Upload, Ban as Bank, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';

interface LocationState {
  plan: string;
  price: number;
  courseLevel: 'A1' | 'A2';
}

const CheckoutPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | null;
  
  // Default values if navigated directly
  const plan = state?.plan || 'Premium';
  const courseLevel = state?.courseLevel || 'A1';
  
  // Get price based on course level and plan
  const getPrice = () => {
    if (courseLevel === 'A1') {
      return plan === 'Premium' ? 17999 : 14999;
    }
    return plan === 'Premium' ? 19999 : 16999;
  };

  const price = getPrice();
  
  const [step, setStep] = useState<'bank-details' | 'verification'>('bank-details');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    transactionId: '',
    bankName: '',
    transactionDate: '',
    transactionTime: '',
    receipt: null as File | null,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, receipt: e.target.files![0] }));
    }
  };
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.transactionId.trim()) newErrors.transactionId = 'Transaction ID is required';
    if (!formData.bankName.trim()) newErrors.bankName = 'Bank name is required';
    if (!formData.transactionDate.trim()) newErrors.transactionDate = 'Transaction date is required';
    if (!formData.transactionTime.trim()) newErrors.transactionTime = 'Transaction time is required';
    if (!formData.receipt) newErrors.receipt = 'Transaction receipt is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (validate() && !isSubmitting) {
    setIsSubmitting(true);

    try {
      // 1. Upload receipt to backend → file.io
      const form = new FormData();
      form.append('receipt', formData.receipt!);

      const uploadRes = await fetch('https://german-be.onrender.com/api/upload', {
        method: 'POST',
        body: form,
      });

      const uploadData = await uploadRes.json();

      if (!uploadData.url) throw new Error('Failed to upload receipt');

      const receiptLink = uploadData.url;

      // 2. Compose WhatsApp message
      const message = `
🧾 *Course Purchase Confirmation*

👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📘 Course: German ${courseLevel}
💎 Plan: ${plan}
💰 Amount: PKR ${price.toLocaleString()}
🏦 Bank: ${formData.bankName}
🔁 Transaction ID: ${formData.transactionId}
📅 Date: ${formData.transactionDate}
⏰ Time: ${formData.transactionTime}
🖼️ Receipt: ${receiptLink}

Please verify my payment and activate the course.
      `;

      // 3. Redirect to WhatsApp
      const whatsappURL = `https://wa.me/923156722708?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappURL;

    } catch (error) {
      console.error('Submission error:', error);
      setShowErrorPopup(true);
      setTimeout(() => setShowErrorPopup(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  }
};

  
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="flex justify-start mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            <span>Back to course plans</span>
          </button>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Bank Details Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-panel p-8 rounded-xl">
              <h1 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-8">
                Complete Your Purchase
              </h1>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-orbitron text-white mb-4">Personal Information</h2>
                
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
                
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`input-field pl-10 ${errors.phone ? 'border-error-500' : ''}`}
                      placeholder="+92 1234567890"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-error-500">{errors.phone}</p>
                  )}
                </div>
                
                <h2 className="text-xl font-orbitron text-white mb-4 pt-4 border-t border-white/10">
                  Bank Transfer Details
                </h2>
                
                <div className="glass-panel p-4 mb-6 bg-primary-500/10">
                  <h3 className="font-orbitron text-white mb-2">Bank Account Information</h3>
                  <p className="text-gray-300 text-sm mb-2">Please transfer the amount to the following account:</p>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-gray-400">Bank Name:</span> <span className="text-white">Habib Bank Limited (HBL)</span></p>
                    <p><span className="text-gray-400">Account Name:</span> <span className="text-white">Muhammad Wasif</span></p>
                    <p><span className="text-gray-400">Account Number:</span> <span className="text-white">04467902658903</span></p>
                    <p><span className="text-gray-400">IBAN:</span> <span className="text-white">PK95HABB0004467902658903</span></p>
                    <p><span className="text-gray-400">Amount:</span> <span className="text-white">PKR {price.toLocaleString()}</span></p>
                  </div>
                </div>
                
                {/* Transaction ID */}
                <div>
                  <label htmlFor="transactionId" className="block text-sm font-medium text-gray-300 mb-1">
                    Transaction ID
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Bank size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="transactionId"
                      name="transactionId"
                      type="text"
                      value={formData.transactionId}
                      onChange={handleChange}
                      className={`input-field pl-10 ${errors.transactionId ? 'border-error-500' : ''}`}
                      placeholder="Enter transaction ID"
                    />
                  </div>
                  {errors.transactionId && (
                    <p className="mt-1 text-sm text-error-500">{errors.transactionId}</p>
                  )}
                </div>
                
                {/* Bank Name */}
                <div>
                  <label htmlFor="bankName" className="block text-sm font-medium text-gray-300 mb-1">
                    Bank Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <CreditCard size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="bankName"
                      name="bankName"
                      type="text"
                      value={formData.bankName}
                      onChange={handleChange}
                      className={`input-field pl-10 ${errors.bankName ? 'border-error-500' : ''}`}
                      placeholder="Enter bank name"
                    />
                  </div>
                  {errors.bankName && (
                    <p className="mt-1 text-sm text-error-500">{errors.bankName}</p>
                  )}
                </div>
                
                {/* Transaction Date and Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="transactionDate" className="block text-sm font-medium text-gray-300 mb-1">
                      Transaction Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar size={18} className="text-gray-400" />
                      </div>
                      <input
                        id="transactionDate"
                        name="transactionDate"
                        type="date"
                        value={formData.transactionDate}
                        onChange={handleChange}
                        className={`input-field pl-10 ${errors.transactionDate ? 'border-error-500' : ''}`}
                      />
                    </div>
                    {errors.transactionDate && (
                      <p className="mt-1 text-sm text-error-500">{errors.transactionDate}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="transactionTime" className="block text-sm font-medium text-gray-300 mb-1">
                      Transaction Time
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock size={18} className="text-gray-400" />
                      </div>
                      <input
                        id="transactionTime"
                        name="transactionTime"
                        type="time"
                        value={formData.transactionTime}
                        onChange={handleChange}
                        className={`input-field pl-10 ${errors.transactionTime ? 'border-error-500' : ''}`}
                      />
                    </div>
                    {errors.transactionTime && (
                      <p className="mt-1 text-sm text-error-500">{errors.transactionTime}</p>
                    )}
                  </div>
                </div>
                
                {/* Receipt Upload */}
                <div>
                  <label htmlFor="receipt" className="block text-sm font-medium text-gray-300 mb-1">
                    Transaction Receipt
                  </label>
                  <div className="relative">
                    <input
                      id="receipt"
                      name="receipt"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*,.pdf"
                    />
                    <div 
                      className={`input-field flex items-center justify-center py-8 cursor-pointer border-dashed ${
                        errors.receipt ? 'border-error-500' : ''
                      }`}
                      onClick={() => document.getElementById('receipt')?.click()}
                    >
                      <div className="text-center">
                        <Upload size={24} className="text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-400">
                          {formData.receipt ? formData.receipt.name : 'Click to upload receipt'}
                        </p>
                      </div>
                    </div>
                  </div>
                  {errors.receipt && (
                    <p className="mt-1 text-sm text-error-500">{errors.receipt}</p>
                  )}
                </div>
                
                <div className="pt-6">
                  <Button
                    type="submit"
                    variant={courseLevel === 'A1' ? 'primary' : 'secondary'}
                    fullWidth
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Complete Purchase'}
                  </Button>
                  
                  <p className="text-center text-sm text-gray-400 mt-4">
                    Your payment information is secure and encrypted
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
          
          {/* Right: Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-panel p-6 rounded-xl sticky top-24">
              <h2 className="text-xl font-orbitron font-bold text-white mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-300">Course:</span>
                  <span className="text-white font-medium">German {courseLevel}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-300">Plan:</span>
                  <span className="text-white font-medium">{plan}</span>
                </div>
                
                <div className="flex justify-between border-t border-white/10 pt-4">
                  <span className="text-gray-300">Subtotal:</span>
                  <span className="text-white font-medium">PKR {price.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="flex justify-between border-t border-white/10 pt-4 mb-6">
                <span className="text-lg text-white font-orbitron">Total:</span>
                <span className="text-lg text-white font-orbitron">PKR {price.toLocaleString()}</span>
              </div>
              
              <div className="space-y-3">
                <BenefitItem text="Lifetime Access to Course Content" />
                <BenefitItem text="Official Course Completion Badge" />
                <BenefitItem text="24/7 AI-Powered Learning Support" />
                <BenefitItem text="Priority Support on WhatsApp" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
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
                Payment Verification in Progress
              </h3>
              <p className="text-gray-300 mb-2">
                Your payment details have been submitted successfully.
              </p>
              <p className="text-gray-400 text-sm">
                We'll verify your payment and grant access to your course shortly.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Popup */}
      <AnimatePresence>
        {showErrorPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <motion.div
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              className="glass-panel p-4 rounded-xl bg-error-500/10 border border-error-500/20 max-w-md"
            >
              <div className="flex items-start">
                <AlertCircle size={20} className="text-error-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-error-500 mb-1">System Notice</h4>
                  <p className="text-sm text-gray-300">
                    Your purchase is being processed. Our team will review it shortly.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface BenefitItemProps {
  text: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ text }) => (
  <div className="flex items-start">
    <CheckCircle size={16} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
    <span className="text-sm text-gray-300">{text}</span>
  </div>
);

export default CheckoutPage;