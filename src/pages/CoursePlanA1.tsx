import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Star, Users, Award, Clock } from 'lucide-react';
import PricingCard from '../components/ui/PricingCard';
import PricingToggle from '../components/ui/PricingToggle';
import TestimonialCard from '../components/ui/TestimonialCard';
import CountdownTimer from '../components/ui/CountdownTimer';
import img1 from '../images/img1.jpg';

const CoursePlanA1: React.FC = () => {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  const basicFeatures = [
    "Full A1 Curriculum",
    "AI Grammar Help",
    "Interactive Quizzes",
    "100+ Practice Exercises",
    "Progress Tracking",
    "Lifetime Access"
  ];
  
  const premiumFeatures = [
    "Everything in Basic",
    "Live Mock Interview Practice",
    "1-on-1 Tech Support",
    "Personalized Study Plan",
    "Teacher Consultancy",
    "Business German Module"
  ];
  
  const testimonials = [
    {
      name: "Asad Khan",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "Completed A1 in just 2 weeks! The intensive program and AI-powered platform made learning German incredibly efficient.",
      location: "Islamabad, Pakistan"
    },
    {
      name: "Fatima Ahmed",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The 2-week intensive course was perfect for my busy schedule. Now I can confidently speak basic German!",
      location: "Lahore, Pakistan"
    },
    {
      name: "Hassan Syed",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "Incredible progress in just 14 days. The teacher consultations were invaluable for my learning.",
      location: "Karachi, Pakistan"
    },
    {
      name: "Amna Malik",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The intensive format helped me stay focused and motivated. Achieved my A1 goals faster than expected!",
      location: "Rawalpindi, Pakistan"
    },
    {
      name: "Zain Abbas",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The business German module was exactly what I needed. Completed A1 in 2 weeks and landed a job!",
      location: "Faisalabad, Pakistan"
    },
    {
      name: "Sara Qureshi",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "Fast-paced learning with excellent support. The 2-week program exceeded my expectations!",
      location: "Multan, Pakistan"
    },
    {
      name: "Bilal Khan",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "From zero to A1 in 2 weeks! The immersive learning experience made all the difference.",
      location: "Peshawar, Pakistan"
    },
    {
      name: "Ayesha Tariq",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The cultural context alongside intensive language learning helped me adapt quickly.",
      location: "Islamabad, Pakistan"
    },
    {
      name: "Omar Farooq",
      image: "https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "Intensive 2-week program with real-world scenarios prepared me well for daily conversations.",
      location: "Lahore, Pakistan"
    },
    {
      name: "Mehreen Ali",
      image: "https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The platform's approach to grammar made complex concepts easy to understand in just 2 weeks!",
      location: "Karachi, Pakistan"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => 
        prev === testimonials.length - 3 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-500/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
              German A1 <span className="text-primary-500">Course Plans</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master German A1 in just 2 weeks with our intensive, AI-powered learning program.
            </p>
          </motion.div>
          
          <div className="flex justify-center mb-8">
            <CountdownTimer days={7} hours={23} minutes={59} seconds={59} />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Stat icon={<Star className="text-warning-500" />} value="4.9" label="Average Rating" />
            <Stat icon={<Users className="text-primary-500" />} value="150+" label="Success Stories" />
            <Stat icon={<Award className="text-accent-500" />} value="100%" label="Success Rate" />
            <Stat icon={<Clock className="text-secondary-500" />} value="2 Weeks" label="Duration" />
          </div>
          
          {/* Pricing Toggle */}
          <PricingToggle onToggle={setIsAnnual} />
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              plan="Basic"
              price={14999}
              features={basicFeatures}
              courseLevel="A1"
            />
            <PricingCard
              plan="Premium"
              price={17999}
              features={premiumFeatures}
              isPremium
              courseLevel="A1"
            />
          </div>
          
          <div className="text-center mt-8 glass-panel inline-block px-4 py-2 rounded-full mx-auto">
            <span className="text-accent-500 text-sm">
              💡 Next batch starts in 7 days - Only 20 seats left!
            </span>
          </div>
        </div>
      </section>
      
      {/* Course Details Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="glass-panel overflow-hidden rounded-xl neon-border">
                <img 
                  src={img1} 
                  alt="German A1 Course" 
                  className="w-full rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-dark-400/70 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-primary-500/30 rounded-full blur-3xl -z-10" />
            </motion.div>
            
            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-6">
                What You'll Learn in 2 Weeks
              </h2>
              
              <div className="space-y-6">
                <div className="glass-panel p-4">
                  <h3 className="font-orbitron text-lg text-white mb-2">Basic Conversation</h3>
                  <p className="text-gray-300">Master introductions, greetings, and everyday phrases to navigate basic conversations confidently.</p>
                </div>
                
                <div className="glass-panel p-4">
                  <h3 className="font-orbitron text-lg text-white mb-2">Essential Grammar</h3>
                  <p className="text-gray-300">Learn core grammar structures including articles, present tense verbs, and basic sentence formation.</p>
                </div>
                
                <div className="glass-panel p-4">
                  <h3 className="font-orbitron text-lg text-white mb-2">Practical Vocabulary</h3>
                  <p className="text-gray-300">Build a foundation of 500+ essential words covering family, work, shopping, travel, and more.</p>
                </div>
                
                <div className="glass-panel p-4">
                  <h3 className="font-orbitron text-lg text-white mb-2">Cultural Context</h3>
                  <p className="text-gray-300">Gain insights into German culture, customs, and etiquette to enhance your language experience.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
              Success Stories from A1 Students
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from our students who mastered German A1 in just 2 weeks through our intensive program.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {testimonials.slice(currentTestimonialIndex, currentTestimonialIndex + 3).map((testimonial, index) => (
              <motion.div
                key={currentTestimonialIndex + index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  image={testimonial.image}
                  rating={testimonial.rating}
                  text={testimonial.text}
                  location={testimonial.location}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialIndex(index * 3)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentTestimonialIndex / 3) === index 
                    ? 'w-6 bg-primary-500' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about our 2-week German A1 course.
            </p>
          </motion.div>
          
          <div className="space-y-4">
            <FaqItem 
              question="How intensive is the 2-week course?"
              answer="Our A1 course is designed for maximum efficiency, requiring 4-5 hours of daily commitment. The AI-powered platform and structured curriculum ensure rapid progress while maintaining comprehension."
            />
            <FaqItem 
              question="Do I need any prior knowledge of German?"
              answer="No, the A1 course is designed for complete beginners. We start from the very basics and progressively build your knowledge through our intensive program."
            />
            <FaqItem 
              question="What support is available during the course?"
              answer="You'll have access to AI-powered learning assistance 24/7, regular progress tracking, and teacher consultations (Premium plan) to ensure you stay on track with your learning goals."
            />
            <FaqItem 
              question="Can I access the course on mobile devices?"
              answer="Absolutely! Our platform is fully responsive and works seamlessly on smartphones, tablets, and computers, allowing you to learn on the go."
            />
            <FaqItem 
              question="What's the difference between Basic and Premium plans?"
              answer="The Basic plan includes all essential materials to master A1 German in 2 weeks. The Premium plan adds teacher consultations, mock interviews, and business German materials for those seeking more comprehensive learning."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ icon, value, label }) => (
  <div className="glass-panel px-6 py-4 flex items-center space-x-3">
    <div className="text-2xl">
      {icon}
    </div>
    <div>
      <div className="font-orbitron font-bold text-white text-xl">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  </div>
);

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="glass-panel overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-orbitron text-lg text-white">{question}</h3>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-primary-500"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 pt-0 border-t border-white/10">
          <p className="text-gray-300">{answer}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CoursePlanA1;