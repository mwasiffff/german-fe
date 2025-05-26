import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Award, Settings, BarChart2, MessageSquare } from 'lucide-react';
import logo from '../../images/logo.png';

const DashboardSidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-dark-400/40 backdrop-blur-sm border-r border-white/10 p-6">
      {/* Logo */}
      <Link to="/dashboard" className="flex items-center space-x-2 mb-8">
        <motion.div 
          whileHover={{ rotate: 10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img src={logo} alt="FuturLern Logo" className="w-25 h-25" />
        </motion.div>
        <span className="font-orbitron text-xl font-bold text-white">
          Futur<span className="text-primary-500">Lern</span>
        </span>
      </Link>

      {/* Navigation */}
      <nav className="space-y-2">
        <SidebarLink 
          to="/dashboard" 
          icon={<BookOpen size={20} />}
          text="My Courses"
          active={location.pathname === '/dashboard'}
        />
        <SidebarLink 
          to="/progress" 
          icon={<BarChart2 size={20} />}
          text="Progress"
          active={location.pathname === '/progress'}
        />
        <SidebarLink 
          to="/certificates" 
          icon={<Award size={20} />}
          text="Certificates"
          active={location.pathname === '/certificates'}
        />
        <SidebarLink 
          to="/community" 
          icon={<MessageSquare size={20} />}
          text="Community"
          active={location.pathname === '/community'}
        />
        <SidebarLink 
          to="/settings" 
          icon={<Settings size={20} />}
          text="Settings"
          active={location.pathname === '/settings'}
        />
      </nav>

      {/* Progress Card */}
      <div className="mt-8 glass-panel p-4 rounded-lg">
        <h3 className="font-orbitron text-white mb-2">Course Progress</h3>
        <div className="w-full h-2 bg-dark-300 rounded-full overflow-hidden">
          <div className="h-full w-[45%] bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
        </div>
        <p className="text-sm text-gray-400 mt-2">45% Completed</p>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  active: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, text, active }) => (
  <Link
    to={to}
    className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
      active 
        ? 'bg-primary-500/20 text-primary-500' 
        : 'text-gray-400 hover:bg-white/5 hover:text-white'
    }`}
  >
    {icon}
    <span>{text}</span>
    {active && (
      <motion.div
        className="absolute left-0 w-1 h-8 bg-primary-500 rounded-r-full"
        layoutId="activeIndicator"
      />
    )}
  </Link>
);

export default DashboardSidebar;