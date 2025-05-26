import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';
import logo from '../../images/logo.png';



const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-400/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <motion.div 
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <img src={logo} alt="FuturLern Logo" className="w-10 h-10" />
            </motion.div>
            <span className="font-orbitron text-xl font-bold text-white">
              Futur<span className="text-primary-500">Lern</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <NavLink to="/home" active={location.pathname === '/home'}>Home</NavLink>
            <NavLink to="/courses/a1" active={location.pathname === '/courses/a1'}>A1 Course</NavLink>
            <NavLink to="/courses/a2" active={location.pathname === '/courses/a2'}>A2 Course</NavLink>
{localStorage.getItem('user') && (
  <div className="relative">
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg hover:bg-primary-500/10 transition-all duration-300"
      onClick={() => setShowDropdown(prev => !prev)}
    >
      <div className="w-8 h-8 bg-primary-500/30 rounded-full flex items-center justify-center text-white font-semibold text-sm uppercase">
        {JSON.parse(localStorage.getItem('user') || '{}')?.fullName?.[0] || 'U'}
      </div>
      <span className="font-orbitron text-sm sm:text-base text-white whitespace-nowrap">
        {JSON.parse(localStorage.getItem('user') || '{}')?.fullName || 'User'}
      </span>
    </motion.div>

    {showDropdown && (
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        className="absolute right-0 mt-2 w-40 bg-dark-500 border border-white/10 rounded-md shadow-lg z-50"
      >
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = '/login';
          }}
          className="block w-full text-left px-4 py-2 text-white hover:bg-primary-500/10 transition"
        >
          Log out
        </button>
      </motion.div>
    )}
  </div>
)}


          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="lg:hidden bg-dark-400/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <MobileNavLink to="/home" active={location.pathname === '/home'} onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/courses/a1" active={location.pathname === '/courses/a1'} onClick={() => setIsMobileMenuOpen(false)}>
              A1 Course
            </MobileNavLink>
            <MobileNavLink to="/courses/a2" active={location.pathname === '/courses/a2'} onClick={() => setIsMobileMenuOpen(false)}>
              A2 Course
            </MobileNavLink>
{localStorage.getItem('user') && (
  <div className="relative px-4">
    <div
      className="flex items-center gap-3 py-2 rounded-lg hover:bg-primary-500/10 transition cursor-pointer"
      onClick={() => setShowDropdown(prev => !prev)}
    >
      <div className="w-8 h-8 bg-primary-500/30 rounded-full flex items-center justify-center text-white font-semibold text-sm uppercase">
        {JSON.parse(localStorage.getItem('user') || '{}')?.fullName?.[0] || 'U'}
      </div>
      <span className="font-orbitron text-white text-sm sm:text-base whitespace-nowrap">
        {JSON.parse(localStorage.getItem('user') || '{}')?.fullName || 'User'}
      </span>
    </div>

    {showDropdown && (
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        className="mt-1 w-full bg-dark-500 border border-white/10 rounded-md shadow-lg z-50"
      >
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = '/login';
          }}
          className="block w-full text-left px-4 py-2 text-white hover:bg-primary-500/10 transition"
        >
          Log out
        </button>
      </motion.div>
    )}
  </div>
)}


          </div>
        </motion.div>
      )}
    </header>
  );
};

type NavLinkProps = {
  to: string;
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => (
  <Link 
    to={to} 
    className={`relative font-medium transition-colors hover:text-primary-500 ${
      active ? 'text-primary-500' : 'text-white'
    }`}
  >
    {children}
    {active && (
      <motion.span 
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
        layoutId="navIndicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    )}
  </Link>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ to, active, children, onClick }) => (
  <Link 
    to={to} 
    className={`py-2.5 px-4 rounded-lg font-medium ${
      active ? 'bg-primary-500/20 text-primary-500' : 'text-white hover:bg-white/5'
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;