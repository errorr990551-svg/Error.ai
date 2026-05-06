import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Search, 
  Globe, 
  Code, 
  BarChart, 
  PenTool, 
  Mail, 
  Phone
} from 'lucide-react';

/* --- Navbar Component --- */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dropdown Data
  const services = [
    { title: "SEO Optimization", icon: <Search size={18} />, desc: "Boost your organic ranking" },
    { title: "PPC Advertising", icon: <BarChart size={18} />, desc: "Paid campaigns that convert" },
    { title: "Social Media", icon: <Globe size={18} />, desc: "Engage your audience" },
    { title: "Content Marketing", icon: <PenTool size={18} />, desc: "Storytelling that sells" },
    { title: "Email Marketing", icon: <Mail size={18} />, desc: "Direct to inbox strategies" },
    { title: "Web Dev & Design", icon: <Code size={18} />, desc: "Stunning, fast websites" },
  ];

  const aboutLinks = [
    { title: "Our Team", desc: "Meet the experts" },
    { title: "Our Story/Mission", desc: "Why we do what we do" },
    { title: "Testimonials", desc: "What our clients say" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* --- LOGO SECTION (LEFT) --- */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-heading font-black text-3xl tracking-tighter text-[#0A0A0A]">
                Errorr<span className="text-[#FF4D00]">.</span>in
              </span>
            </Link>
          </div>

          {/* --- RIGHT SECTION (LINKS + CTA) --- */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              to="/" 
              className={`font-bold transition-colors text-sm hover:opacity-80 ${isActive('/') ? 'text-[#FF4D00]' : 'text-[#0A0A0A]'}`}
            >
              Home
            </Link>

            <a href="#" className="text-[#0A0A0A] font-bold hover:text-[#FF4D00] transition-colors text-sm">
              About
            </a>

            <Link 
              to="/services" 
              className={`font-bold transition-colors text-sm hover:text-[#FF4D00] ${isActive('/services') ? 'text-[#FF4D00]' : 'text-[#0A0A0A]'}`}
            >
              Services
            </Link>

            <Link 
              to="/free-audit" 
              className="bg-[#0A0A0A] text-white px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:bg-[#FF4D00] hover:shadow-lg flex items-center"
            >
              Get a Free Audit
            </Link>
          </div>



          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-orange focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-4 text-lg font-bold rounded-xl transition-colors ${isActive('/') ? 'text-brand-orange bg-brand-orange/5' : 'text-brand-dark hover:bg-gray-50'}`}
          >
            Home
          </Link>
          
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-4 text-lg font-bold text-brand-dark hover:bg-gray-50 rounded-xl transition-colors"
          >
            About
          </Link>

          <Link 
            to="/services" 
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-4 text-lg font-bold rounded-xl transition-colors ${isActive('/services') ? 'text-brand-orange bg-brand-orange/5' : 'text-brand-dark hover:bg-gray-50'}`}
          >
            Services
          </Link>

          <div className="pt-4 mt-4 border-t border-gray-100">
            <Link 
              to="/free-audit" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full bg-brand-dark text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-brand-orange transition-all shadow-lg active:scale-95"
            >
              Get a Free Audit <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;