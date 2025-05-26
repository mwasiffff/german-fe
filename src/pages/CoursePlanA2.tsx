import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Star, Users, Award, Clock } from 'lucide-react';
import PricingCard from '../components/ui/PricingCard';
import PricingToggle from '../components/ui/PricingToggle';
import TestimonialCard from '../components/ui/TestimonialCard';
import CountdownTimer from '../components/ui/CountdownTimer';
import img1 from '../images/img1.jpg';

const CoursePlanA2: React.FC = () => {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  const basicFeatures = [
    "Full A2 Curriculum",
    "Interactive Listening Labs",
    "200+ Practice Exercises",
    "Advanced Grammar Modules",
    "Progress Tracking",
    "Lifetime Access"
  ];
  
  const premiumFeatures = [
    "Everything in Basic",
    "Personal Mentor Q&A",
    "Resume Help in German",
    "Job-Oriented Vocabulary",
    "Teacher Consultancy",
    "Cultural Immersion Module"
  ];
  
  const testimonials = [
    {
      name: "Zainab Khan",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "Completed A2 in just 2 weeks! The intensive program helped me secure a job at a German company.",
      location: "Islamabad, Pakistan"
    },
    {
      name: "Usman Ali",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The teacher consultations were invaluable. I'm now confidently handling business communications in German!",
      location: "Lahore, Pakistan"
    },
    {
      name: "Sana Malik",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "Intensive 2-week format was perfect for my schedule. The business German module was exactly what I needed.",
      location: "Karachi, Pakistan"
    },
    {
      name: "Hamza Ahmed",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The cultural immersion module helped me understand German business etiquette. Great investment!",
      location: "Rawalpindi, Pakistan"
    },
    {
      name: "Aisha Tariq",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "From A1 to A2 in just 4 weeks total! The intensive format really works for motivated learners.",
      location: "Faisalabad, Pakistan"
    },
    {
      name: "Imran Khan",
      image: "https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The job-oriented vocabulary and resume help landed me a position at a German multinational!",
      location: "Multan, Pakistan"
    },
    {
      name: "Nadia Hassan",
      image: "https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "Completed both A1 and A2 in just one month. The intensive program is challenging but worth it!",
      location: "Peshawar, Pakistan"
    },
    {
      name: "Ali Raza",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The advanced grammar modules and listening labs improved my comprehension significantly.",
      location: "Quetta, Pakistan"
    },
    {
      name: "Mehwish Khan",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "Teacher consultancy sessions helped me overcome advanced grammar challenges quickly.",
      location: "Islamabad, Pakistan"
    },
    {
      name: "Shahid Malik",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The cultural immersion and business modules prepared me well for working in Germany!",
      location: "Lahore, Pakistan"
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
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary-500/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent-500/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-dark-300 px-4 py-1 rounded-full text-sm text-gray-300 mb-4">
              Master A2 in just 2 weeks after completing A1
            </div>
            <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
              German A2 <span className="text-secondary-500">Course Plans</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take your German to the next level with our intensive 2-week A2 course designed for rapid progress.
            </p>
          </motion.div>
          
          <div className="flex justify-center mb-8">
            <CountdownTimer days={7} hours={23} minutes={59} seconds={59} />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Stat icon={<Star className="text-warning-500" />} value="4.8" label="Average Rating" />
            <Stat icon={<Users className="text-primary-500" />} value="100+" label="Success Stories" />
            <Stat icon={<Award className="text-accent-500" />} value="98%" label="Success Rate" />
            <Stat icon={<Clock className="text-secondary-500" />} value="2 Weeks" label="Duration" />
          </div>
          
          {/* Pricing Toggle */}
          <PricingToggle onToggle={setIsAnnual} />
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              plan="Basic"
              price={16999}
              features={basicFeatures}
              courseLevel="A2"
            />
            <PricingCard
              plan="Premium"
              price={19999}
              features={premiumFeatures}
              isPremium
              courseLevel="A2"
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
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-6">
                What You'll Learn in 2 Weeks
              </h2>
              
              <div className="space-y-6">
                <div className="glass-panel p-4">
                  <h3 className="font-orbitron text-lg text-white mb-2">Intermediate Conversation</h3>
                  <p className="text-gray-300">Master complex conversations, express opinions, and discuss a wider range of topics with confidence.</p>
                </div>
                
                <div className="glass-panel p-4">
                  <h3 className="font-orbitron text-lg text-white mb-2">Advanced Grammar</h3>
                  <p className="text-gray-300">Quick mastery of past tenses, modal verbs, conjunctions, and complex sentence structures.</p>
                </div>
                
                <div className="glass-panel p-4">
                  <h3 className="font-orbitron text-lg text-white mb-2">Expanded Vocabulary</h3>
                  <p className="text-gray-300">Learn 1000+ new words covering work, education, entertainment, and current events.</p>
                </div>
                
                <div className="glass-panel p-4">
                  <h3 className="font-orbitron text-lg text-white mb-2">Professional German</h3>
                  <p className="text-gray-300">Master business terminology, email writing, and professional communication skills.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-panel overflow-hidden rounded-xl neon-border">
                <img 
                  src={img1} 
                  alt="German A2 Course" 
                  className="w-full rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-dark-400/70 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-secondary-500/30 rounded-full blur-3xl -z-10" />
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
              Success Stories from A2 Students
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from our students who mastered German A2 in just 2 weeks through our intensive program.
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
                    ? 'w-6 bg-secondary-500' 
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
              Everything you need to know about our 2-week German A2 course.
            </p>
          </motion.div>
          
          <div className="space-y-4">
            <FaqItem 
              question="How intensive is the 2-week A2 course?"
              answer="The A2 course requires 5-6 hours of daily commitment. Our AI-powered platform and structured curriculum ensure rapid progress while maintaining comprehension."
            />
            <FaqItem 
              question="Do I need to complete A1 before taking the A2 course?"
              answer="Yes, A1 proficiency is required. We recommend completing our A1 course first, which also takes just 2 weeks."
            />
            <FaqItem 
              question="What support is available during the course?"
              answer="Premium plan students get teacher consultations, while all students have access to AI-powered learning assistance 24/7 and regular progress tracking."
            />
            <FaqItem 
              question="What job opportunities open up with A2 German proficiency?"
              answer="With A2 proficiency, you can qualify for entry-level positions in German companies, customer service roles, and positions in the hospitality industry. Our Premium plan includes job-oriented modules to maximize these opportunities."
            />
            <FaqItem 
              question="Can I switch between Basic and Premium plans?"
              answer="Yes, you can upgrade from Basic to Premium at any time. The price difference will be based on the current pricing of the plans."
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
            className="text-secondary-500"
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

export default CoursePlanA2;