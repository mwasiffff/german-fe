import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, VolumeX, Brain, Rocket, Star, Globe, ChevronRight, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import logo from '../images/logo.png';
import videoSrc from '../images/vid1.mp4';

const IntroVideoPage: React.FC = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showSkip, setShowSkip] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    navigate('/home');
  };

  const handleMuteClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSkip = () => {
    navigate('/home');
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  return (
    <div className="fixed inset-0 bg-dark-500 flex flex-col justify-between overflow-y-auto">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[120px]"
            animate={{
              x: [-400, 400],
              y: [-200, 200],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary-500/10 rounded-full blur-[100px]"
            animate={{
              x: [300, -300],
              y: [200, -200],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col min-h-screen">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
<motion.div 
  className="flex items-center justify-center mb-6"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
>
  <div className="relative w-16 h-16">
    <motion.div
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full blur-md"
    />
    <img src={logo} alt="FuturLern Logo" className="w-full h-full object-contain relative" />
  </div>
</motion.div>

          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">FuturLern</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your journey to German fluency begins here
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col items-center justify-center my-8">
          {/* Video Container */}
         <motion.div 
  className="w-full max-w-5xl mx-auto relative"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.5 }}
>
  <div className="relative aspect-video rounded-2xl overflow-hidden glass-panel neon-border">
<video
  className="w-full h-full object-cover rounded-xl"
  autoPlay
  loop
  muted
  controls
  playsInline
>
  <source
    src="https://drive.google.com/uc?export=download&id=1a_yXTd8D3xyYJaSVwUuSanYLVVgzli0p"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>


  </div>
        {/* Skip Button Below Video */}
      <AnimatePresence>
        {showSkip && (
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Button
              variant="primary"
              onClick={handleSkip}
              icon={<ChevronRight size={18} />}
            >
              Skip Introduction
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
</motion.div>

          {/* Features Grid */}
          <motion.div
            className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Feature
              icon={<Brain className="text-primary-500" size={24} />}
              title="AI-Powered"
              description="Personalized learning path"
              delay={0}
            />
            <Feature
              icon={<Rocket className="text-secondary-500" size={24} />}
              title="Fast-Track"
              description="Master German in 2 weeks"
              delay={0.1}
            />
            <Feature
              icon={<Star className="text-accent-500" size={24} />}
              title="98% Success"
              description="Proven track record"
              delay={0.2}
            />
            <Feature
              icon={<CheckCircle className="text-success-500" size={24} />}
              title="Certified"
              description="Industry recognized"
              delay={0.3}
            />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="text-center mt-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-400 text-sm">
            Press play to begin your German learning journey
          </p>
        </motion.div>
      </div>
    </div>
  );
};

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => (
  <motion.div
    className="glass-panel p-4 flex items-center space-x-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ 
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
  >
    <div className="p-3 rounded-lg bg-gradient-to-br from-dark-300 to-dark-400">
      {icon}
    </div>
    <div>
      <h3 className="font-orbitron text-white font-medium">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </motion.div>
);

export default IntroVideoPage;
