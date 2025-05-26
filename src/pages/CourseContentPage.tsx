import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Download, MessageCircle, BookOpen, CheckCircle } from 'lucide-react';

const CourseContentPage: React.FC = () => {
  const { level, module } = useParams();

  // Mock data for course content
  const courseContent = {
    title: 'Basic Conversations',
    description: 'Learn essential German phrases for everyday conversations.',
    video: 'https://example.com/video.mp4',
    materials: [
      { title: 'Lesson Notes', type: 'PDF', size: '2.4 MB' },
      { title: 'Practice Exercises', type: 'PDF', size: '1.8 MB' },
      { title: 'Vocabulary List', type: 'PDF', size: '1.2 MB' },
    ],
    nextLesson: 'Numbers and Counting',
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-orbitron font-bold text-white mb-2">
          {courseContent.title}
        </h1>
        <p className="text-gray-400">{courseContent.description}</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Video Player */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel aspect-video rounded-xl overflow-hidden relative group">
            <img 
              src="https://images.pexels.com/photos/5699459/pexels-photo-5699459.jpeg"
              alt="Lesson thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark-500/60 flex items-center justify-center">
              <motion.button
                className="p-4 bg-primary-500 rounded-full text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play size={24} />
              </motion.button>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="glass-panel p-6 rounded-xl space-y-6">
            <h2 className="text-xl font-orbitron font-bold text-white">Lesson Content</h2>
            
            <div className="space-y-4">
              <ContentSection
                title="1. Introduction"
                duration="5:30"
                completed={true}
              />
              <ContentSection
                title="2. Basic Greetings"
                duration="8:45"
                completed={true}
              />
              <ContentSection
                title="3. Common Phrases"
                duration="10:15"
                completed={false}
              />
              <ContentSection
                title="4. Practice Dialogue"
                duration="12:00"
                completed={false}
              />
            </div>
          </div>

          {/* Discussion */}
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-xl font-orbitron font-bold text-white mb-4">Discussion</h2>
            <div className="space-y-4">
              <textarea
                placeholder="Ask a question or share your thoughts..."
                className="w-full bg-dark-300 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                rows={3}
              />
              <button className="btn-hologram py-2 px-4">
                Post Comment
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Course Materials */}
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-xl font-orbitron font-bold text-white mb-4">Course Materials</h2>
            <div className="space-y-3">
              {courseContent.materials.map((material, index) => (
                <MaterialCard
                  key={index}
                  title={material.title}
                  type={material.type}
                  size={material.size}
                />
              ))}
            </div>
          </div>

          {/* Next Lesson */}
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-xl font-orbitron font-bold text-white mb-4">Next Up</h2>
            <div className="text-gray-400 mb-4">{courseContent.nextLesson}</div>
            <button className="btn-hologram w-full py-2 flex items-center justify-center space-x-2">
              <Play size={18} />
              <span>Start Next Lesson</span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-xl font-orbitron font-bold text-white mb-4">Your Progress</h2>
            <div className="space-y-4">
              <ProgressStat icon={<BookOpen size={20} />} label="Lessons Completed" value="8/12" />
              <ProgressStat icon={<MessageCircle size={20} />} label="Discussions" value="5" />
              <ProgressStat icon={<CheckCircle size={20} />} label="Exercises Done" value="24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContentSectionProps {
  title: string;
  duration: string;
  completed: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, duration, completed }) => (
  <div className={`flex items-center justify-between p-3 rounded-lg ${completed ? 'bg-primary-500/20' : 'bg-dark-300'}`}>
    <div className="flex items-center space-x-3">
      {completed ? (
        <CheckCircle size={18} className="text-primary-500" />
      ) : (
        <Play size={18} className="text-gray-400" />
      )}
      <span className={completed ? 'text-primary-500' : 'text-gray-300'}>{title}</span>
    </div>
    <span className="text-sm text-gray-500">{duration}</span>
  </div>
);

interface MaterialCardProps {
  title: string;
  type: string;
  size: string;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ title, type, size }) => (
  <motion.button
    className="w-full flex items-center justify-between p-3 rounded-lg bg-dark-300 hover:bg-dark-200 transition-colors"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-center space-x-3">
      <Download size={18} className="text-primary-500" />
      <div className="text-left">
        <div className="text-sm text-gray-300">{title}</div>
        <div className="text-xs text-gray-500">{type} • {size}</div>
      </div>
    </div>
  </motion.button>
);

interface ProgressStatProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const ProgressStat: React.FC<ProgressStatProps> = ({ icon, label, value }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2 text-gray-400">
      {icon}
      <span>{label}</span>
    </div>
    <span className="text-white font-medium">{value}</span>
  </div>
);

export default CourseContentPage;