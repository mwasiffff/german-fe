import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Shield, Clock, Users, Trophy } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Brain size={24} className="text-primary-500" />,
      title: "AI-Powered Learning",
      description: "Our adaptive AI customizes lessons to your learning style and pace, focusing on areas you need most.",
    },
    {
      icon: <Shield size={24} className="text-secondary-500" />,
      title: "Trusted by Thousands",
      description: "Join over 15,000 successful learners who have mastered German through our proven learning platform.",
    },
    {
      icon: <Trophy size={24} className="text-accent-500" />,
      title: "Guaranteed Results",
      description: "Experience rapid progress with our structured curriculum and achievement-based learning system.",
    },
    {
      icon: <Users size={24} className="text-primary-500" />,
      title: "Native Speaker Interactions",
      description: "Practice with AI simulations of conversations with native German speakers.",
    },
    {
      icon: <Clock size={24} className="text-secondary-500" />,
      title: "Learn at Your Own Pace",
      description: "Access course materials 24/7 and progress through lessons on your own schedule.",
    },
    {
      icon: <Sparkles size={24} className="text-accent-500" />,
      title: "Interactive Exercises",
      description: "Engage with immersive exercises that make learning German intuitive and enjoyable.",
    },
  ];
  
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
            Advanced Features for Rapid Learning
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with proven language learning methods to accelerate your German fluency.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;