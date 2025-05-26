import React from 'react';
import { Link } from 'react-router-dom';
import { Globe as GlobeEurope, Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-dark-400/40 backdrop-blur-sm py-10">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <GlobeEurope size={24} className="text-primary-500" />
              <span className="font-orbitron text-lg font-bold text-white">
                Futur<span className="text-primary-500">Lern</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              A futuristic approach to German language learning. Immerse yourself in our A1 and A2 courses designed for efficient fluency.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Twitter size={18} />} href="#" />
              <SocialLink icon={<Linkedin size={18} />} href="#" />
              <SocialLink icon={<Github size={18} />} href="#" />
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-orbitron font-bold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <FooterLink href="/home">Home</FooterLink>
              <FooterLink href="/courses/a1">A1 Course</FooterLink>
              <FooterLink href="/courses/a2">A2 Course</FooterLink>
              <FooterLink href="#">About Us</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-orbitron font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Free Learning</FooterLink>
              <FooterLink href="#">Success Stories</FooterLink>
              <FooterLink href="#">FAQs</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-orbitron font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Terms & Conditions</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FuturLern. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="text-error-500 mx-1" /> for German language enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => (
  <a 
    href={href} 
    className="h-8 w-8 rounded-full bg-dark-300 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-colors"
  >
    {icon}
  </a>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <Link 
      to={href} 
      className="text-gray-400 hover:text-primary-500 transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Footer;