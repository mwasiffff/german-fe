import React from 'react';
import { Outlet } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - hidden on mobile, shown on medium screens and up */}
      <div className="hidden md:block">
        <DashboardSidebar />
      </div>
      
      <div className="flex-1 flex flex-col w-full">
        <DashboardNavbar />
        
        <main className="flex-1 p-4 md:p-6 perspective-1000 overflow-x-hidden">
          <div className="book-animation max-w-[1400px] mx-auto">
            <Outlet />
          </div>
        </main>
        
        <footer className="py-4 border-t border-white/10 bg-dark-400/40 backdrop-blur-sm">
          <div className="container mx-auto px-4 flex items-center justify-center space-x-2">
            <span className="text-gray-400 text-sm">Made with ❤️ by Muhammad Wasif</span>
            <a 
              href="https://www.linkedin.com/in/mwasifanwar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;