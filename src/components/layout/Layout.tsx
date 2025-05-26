import React from 'react';
import { Outlet } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import Navbar from './Navbar';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="py-4 border-t border-white/10 bg-dark-400/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex items-center justify-center space-x-2">
          <span className="text-gray-400">Made with ❤️ by Muhammad Wasif</span>
          <a 
            href="https://www.linkedin.com/in/mwasifanwar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-500 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;