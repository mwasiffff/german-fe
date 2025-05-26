import React from 'react';
import { motion } from 'framer-motion';
import { Bell, User, Search } from 'lucide-react';

const DashboardNavbar: React.FC = () => {
  return (
    <header className="border-b border-white/10 bg-dark-400/40 backdrop-blur-sm py-4">
      <div className="px-6 flex items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search lessons, modules, resources..."
            className="w-full bg-dark-300 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 text-gray-400 hover:text-white transition-colors"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full" />
          </motion.button>

          {/* Profile */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 p-2 text-gray-400 hover:text-white transition-colors"
          >
            <User size={20} />
            <span>Profile</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;