import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import VideoSection from '../components/sections/VideoSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import CoursePreviewSection from '../components/sections/CoursePreviewSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ComparisonSection from '../components/sections/ComparisonSection';
import CallToActionSection from '../components/sections/CallToActionSection';

const HomePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroParallax = useTransform(smoothProgress, [0, 1], [0, -50]);
  const backgroundOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0.5]);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.className = 'absolute top-0 left-0 w-full h-full pointer-events-none z-0';
    containerRef.current?.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const createParticle = (x: number, y: number) => ({
      x,
      y,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.3
    });

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor((window.innerWidth * window.innerHeight) / 10000);
      
      for (let i = 0; i < numParticles; i++) {
        particles.push(createParticle(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        ));
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(67, 97, 238, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.remove();
    };
  }, []);

  const createSectionRef = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    return { ref, isInView };
  };

  const sectionsRefs = {
    video: createSectionRef(),
    features: createSectionRef(),
    courses: createSectionRef(),
    testimonials: createSectionRef(),
    comparison: createSectionRef(),
    cta: createSectionRef(),
  };

const user = JSON.parse(localStorage.getItem('user') || '{}');
const [dropdownOpen, setDropdownOpen] = useState(false);

const toggleDropdown = () => setDropdownOpen(prev => !prev);
const handleLogout = () => {
  localStorage.clear();
  window.location.href = '/login';
};


  return (
    <div ref={containerRef} className="relative">
      <div 
        className="fixed inset-0 bg-gradient-to-b from-dark-500 to-dark-300 z-[-2]"
        style={{ opacity: backgroundOpacity.get() }}
      />

      <motion.div style={{ y: heroParallax }}>
        <HeroSection />
      </motion.div>

      <motion.div
        ref={sectionsRefs.video.ref}
        animate={sectionsRefs.video.isInView ? {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" }
        } : {
          opacity: 0,
          y: 50
        }}
      >
        <VideoSection />
      </motion.div>

      <motion.div
        ref={sectionsRefs.features.ref}
        animate={sectionsRefs.features.isInView ? { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" }
        } : { 
          opacity: 0, 
          y: 50 
        }}
      >
        <FeaturesSection />
      </motion.div>

      <motion.div
        ref={sectionsRefs.courses.ref}
        animate={sectionsRefs.courses.isInView ? {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, ease: "easeOut" }
        } : {
          opacity: 0,
          scale: 0.95
        }}
      >
        <CoursePreviewSection />
      </motion.div>

      <motion.div
        ref={sectionsRefs.testimonials.ref}
        animate={sectionsRefs.testimonials.isInView ? {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, ease: "easeOut" }
        } : {
          opacity: 0,
          x: -50
        }}
      >
        <TestimonialsSection />
      </motion.div>

      <motion.div
        ref={sectionsRefs.comparison.ref}
        animate={sectionsRefs.comparison.isInView ? {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" }
        } : {
          opacity: 0,
          y: 50
        }}
      >
        <ComparisonSection />
      </motion.div>

      <motion.div
        ref={sectionsRefs.cta.ref}
        animate={sectionsRefs.cta.isInView ? {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, ease: "easeOut" }
        } : {
          opacity: 0,
          scale: 0.95
        }}
      >
        <CallToActionSection />
      </motion.div>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-[100px] animate-pulse" />
      </div>
    </div>
  );
};

export default HomePage;