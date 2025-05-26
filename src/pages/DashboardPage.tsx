import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, Clock, Award, BookOpen, ChevronRight } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  // Mock data for purchased courses
  const purchasedCourses = [
    {
      id: 'a1',
      title: 'German A1',
      progress: 45,
      modules: [
        { id: 1, title: 'Introduction to German', completed: true },
        { id: 2, title: 'Basic Conversations', completed: true },
        { id: 3, title: 'Numbers and Counting', completed: false },
        { id: 4, title: 'Daily Routines', completed: false },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-orbitron font-bold text-white">My Learning Journey</h1>
        <div className="flex space-x-4">
          <StatCard icon={<BookOpen size={20} />} value="2" label="Active Courses" />
          <StatCard icon={<Clock size={20} />} value="12h" label="Learning Time" />
          <StatCard icon={<Award size={20} />} value="4" label="Certificates" />
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 gap-6">
        {purchasedCourses.map((course) => (
          <motion.div
            key={course.id}
            className="page-turn"
            initial={{ rotateY: 60, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="page-content">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-4">{course.title}</h3>
                  
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white">{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-300 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => navigate(`/course/${course.id}/1`)}
                    className="w-full btn-hologram py-2 flex items-center justify-center space-x-2"
                  >
                    <Play size={18} />
                    <span>Continue Learning</span>
                  </button>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.modules.map((module, index) => (
                    <motion.button
                      key={module.id}
                      onClick={() => navigate(`/course/${course.id}/${module.id}`)}
                      className="page-turn glass-panel p-4 flex items-start space-x-4 hover:bg-white/5 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className={`p-3 rounded-lg ${module.completed ? 'bg-primary-500/20' : 'bg-dark-300'}`}>
                        {module.completed ? (
                          <Award size={24} className="text-primary-500" />
                        ) : (
                          <Play size={24} className="text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="font-medium text-white mb-1">{module.title}</h4>
                        <p className="text-sm text-gray-400">
                          {module.completed ? 'Completed' : 'In Progress'}
                        </p>
                      </div>
                      <ChevronRight size={20} className="text-gray-400" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
            <div className="page-shadow" />
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <motion.div
        className="page-turn"
        initial={{ rotateY: 60, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="page-content">
          <h2 className="text-xl font-orbitron font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <ActivityItem
              title="Completed Lesson"
              description="Basic Conversations - Module 2"
              time="2 hours ago"
              icon={<Award className="text-success-500" size={20} />}
            />
            <ActivityItem
              title="Started New Module"
              description="Numbers and Counting - Module 3"
              time="Yesterday"
              icon={<Play className="text-primary-500" size={20} />}
            />
          </div>
        </div>
        <div className="page-shadow" />
      </motion.div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
  <div className="glass-panel px-4 py-3 rounded-lg flex items-center space-x-3">
    <div className="text-primary-500">{icon}</div>
    <div>
      <div className="font-orbitron font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  </div>
);

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ title, description, time, icon }) => (
  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
    <div className="p-2 bg-dark-300 rounded-lg">{icon}</div>
    <div className="flex-1">
      <h4 className="text-white font-medium">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
    <span className="text-sm text-gray-500">{time}</span>
  </div>
);

export default DashboardPage;