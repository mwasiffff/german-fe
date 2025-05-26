import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../ui/CourseCard';

const CoursePreviewSection: React.FC = () => {
  const courses = [
    {
      title: "German A1 Complete Course",
      level: "A1" as const,
      description: "Master the basics of German with our comprehensive A1 course designed for beginners.",
      features: [
        "Full A1 Curriculum",
        "AI Grammar Help",
        "Interactive Quizzes",
        "Lifetime Access"
      ],
      imageSrc: "https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      route: "/courses/a1"
    },
    {
      title: "German A2 Advanced Course",
      level: "A2" as const,
      description: "Build on your foundations and expand your German language skills with our A2 course.",
      features: [
        "Full A2 Curriculum",
        "Interactive Listening Labs",
        "Job-Oriented Vocabulary",
        "Native Speaker Practice"
      ],
      imageSrc: "https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      route: "/courses/a2"
    }
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
            Choose Your Learning Path
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our structured courses take you from beginner to confident speaker in just 2 weeks with systematic progression and immersive practice.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              level={course.level}
              description={course.description}
              features={course.features}
              imageSrc={course.imageSrc}
              route={course.route}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePreviewSection;