import React, { useState, useEffect } from 'react';

import logoSrc from "../../assets/images/Logo.png";
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
  Smartphone,
  Phone
} from 'lucide-react';

/* --- Navbar Component --- */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // LOGO CONFIGURATION
  // Replace this string with your actual logo URL
  ; 

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

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#293171]/95 backdrop-blur-md border-[#1e245a] py-2 shadow-lg' 
          : 'bg-[#293171] border-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* --- LOGO SECTION --- */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <a href="/" className="flex items-center gap-2 group">
              {/* Image Logo Option */}
              {logoSrc ? (
                 <img src={logoSrc} alt="ERROR.AI Logo" className="h-52 w-auto object-contain" />
              ) : (
                // Fallback if no src provided
                <div className="h-8 w-8 bg-[#FFB638] rounded flex items-center justify-center text-[#293171] font-bold text-lg">
                  E
                </div>
              )}
              
              
            </a>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-[#FFB638] font-medium transition-colors text-sm">
              Home
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-white hover:text-[#FFB638] font-medium transition-colors outline-none focus:outline-none text-sm">
                Services
                <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega Menu / Dropdown */}
              <div 
                className={`absolute top-full -left-4 w-screen max-w-md bg-[#293171] shadow-2xl rounded-xl mt-3 p-4 grid grid-cols-2 gap-2 border border-[#3d4585] transform transition-all duration-200 origin-top-left ${
                  activeDropdown === 'services' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}
              >
                {services.map((item, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="flex items-start p-3 rounded-lg hover:bg-[#1e245a] transition-colors group/item"
                  >
                    <div className="mt-1 p-2 bg-[#1e245a] text-[#FFB638] rounded-md group-hover/item:bg-[#FFB638] group-hover/item:text-[#293171] transition-colors border border-[#3d4585]">
                      {item.icon}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-xs text-gray-300">{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <a href="#" className="text-white hover:text-[#FFB638] font-medium transition-colors text-sm">
              Case Studies
            </a>

            {/* About Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-white hover:text-[#FFB638] font-medium transition-colors outline-none focus:outline-none text-sm">
                About Us
                <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-0 w-60 bg-[#293171] shadow-2xl rounded-xl mt-3 p-2 border border-[#3d4585] transform transition-all duration-200 origin-top-left ${
                  activeDropdown === 'about' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}
              >
                {aboutLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="block px-4 py-3 rounded-lg text-sm text-white hover:bg-[#1e245a] hover:text-[#FFB638] font-medium transition-colors"
                  >
                    {link.title}
                    <span className="block text-xs text-gray-400 font-normal mt-0.5">{link.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --- CTA BUTTON --- */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="relative overflow-hidden bg-[#FFB638] text-[#293171] px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 hover:bg-white hover:text-[#293171] hover:shadow-lg flex items-center group"
            >
              <span className="relative z-10">Contact Us</span>
              <ArrowRight size={14} className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#FFB638] focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#293171] border-t border-[#3d4585] shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2 h-full overflow-y-auto">
          <a href="#" className="block px-4 py-3 text-base font-medium text-white hover:bg-[#1e245a] rounded-lg">
            Home
          </a>
          
          {/* Mobile Services */}
          <div className="space-y-1">
            <div className="px-4 py-3 text-base font-medium text-white bg-[#1e245a] rounded-lg">Services</div>
            <div className="pl-6 space-y-1 border-l-2 border-[#3d4585] ml-4">
              {services.map((s, i) => (
                <a key={i} href="#" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-[#FFB638] hover:bg-[#1e245a]/50 rounded-r-lg">
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          <a href="#" className="block px-4 py-3 text-base font-medium text-white hover:bg-[#1e245a] rounded-lg">
            Case Studies
          </a>

          {/* Mobile About */}
          <div className="space-y-1">
            <div className="px-4 py-3 text-base font-medium text-white bg-[#1e245a] rounded-lg">About Us</div>
            <div className="pl-6 space-y-1 border-l-2 border-[#3d4585] ml-4">
              {aboutLinks.map((l, i) => (
                <a key={i} href="#" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-[#FFB638] hover:bg-[#1e245a]/50 rounded-r-lg">
                  {l.title}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-[#3d4585]">
            <a href="#contact" className="flex items-center justify-center w-full bg-[#FFB638] text-[#293171] px-6 py-3 rounded-xl font-bold text-base hover:bg-white transition-colors shadow-lg">
              Get in Touch <Phone size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;