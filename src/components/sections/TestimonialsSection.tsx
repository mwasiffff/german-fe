import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Asad Khan",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The interactive learning approach helped me secure a job at a German tech company. The cultural insights were particularly valuable.",
      location: "Islamabad, Pakistan"
    },
    {
      name: "Fatima Ahmed",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "I completed both A1 and A2 levels in just 6 months. The AI-powered learning system made it incredibly efficient and engaging.",
      location: "Lahore, Pakistan"
    },
    {
      name: "Hassan Syed",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The platform's structured approach helped me build a strong foundation in German. Now I can confidently communicate with clients.",
      location: "Karachi, Pakistan"
    },
    {
      name: "Amna Malik",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "As a medical student, this platform helped me prepare for my German language requirements. The medical terminology section was invaluable.",
      location: "Rawalpindi, Pakistan"
    },
    {
      name: "Zain Abbas",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The business German modules were exactly what I needed for my career growth. I'm now working with German clients daily.",
      location: "Faisalabad, Pakistan"
    },
    {
      name: "Sara Qureshi",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The platform's flexibility allowed me to learn at my own pace while working full-time. The results exceeded my expectations.",
      location: "Multan, Pakistan"
    },
    {
      name: "Bilal Khan",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "From zero German knowledge to conversational fluency in 4 months. The immersive learning experience made all the difference.",
      location: "Peshawar, Pakistan"
    },
    {
      name: "Ayesha Tariq",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The cultural context provided alongside language learning helped me adapt quickly when I moved to Germany for studies.",
      location: "Islamabad, Pakistan"
    },
    {
      name: "Omar Farooq",
      image: "https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The interactive exercises and real-world scenarios prepared me well for daily life in Germany. Highly recommended!",
      location: "Lahore, Pakistan"
    },
    {
      name: "Mehreen Ali",
      image: "https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The platform's approach to grammar made complex concepts easy to understand. I'm now confidently pursuing my master's in Germany.",
      location: "Karachi, Pakistan"
    }
  ];

  const visibleTestimonials = 3;
  const maxIndex = testimonials.length - visibleTestimonials;

  // Auto-rotation effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= maxIndex) {
          return 0; // Reset to beginning when reaching the end
        }
        return prev + 1;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrevious = () => {
    setIsPaused(true); // Pause auto-rotation when manually navigating
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIsPaused(true); // Pause auto-rotation when manually navigating
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  // Resume auto-rotation after 10 seconds of inactivity
  useEffect(() => {
    if (!isPaused) return;

    const timeout = setTimeout(() => {
      setIsPaused(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [isPaused]);

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-[10%] left-[5%] w-80 h-80 bg-primary-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied learners who have achieved their German language goals with our platform.
          </p>
        </motion.div>
        
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-dark-300/80 backdrop-blur-sm border border-white/10 transition-all ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-dark-200'
            }`}
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-dark-300/80 backdrop-blur-sm border border-white/10 transition-all ${
              currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-dark-200'
            }`}
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          {/* Testimonials Container */}
          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / visibleTestimonials)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-full md:w-[calc(33.333%-1rem)]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
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
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsPaused(true);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-primary-500 w-4' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;