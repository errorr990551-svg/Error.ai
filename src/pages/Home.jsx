import React from 'react';
import Logo from "../assets/images/Logo.png";
import { 
  ArrowRight, 
  Search, 
  Code, 
  Users, 
  TrendingUp, 
  PenTool, 
  Monitor, 
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Award,
  Globe
} from 'lucide-react';

/* --- Hero Section --- */
const Hero = () => (
  <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
    {/* Abstract Background Shapes */}
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#293171] blur-3xl opacity-30"></div>
    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#FFB638] blur-3xl opacity-10"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#293171]/50 border border-[#3d4585] text-[#FFB638] text-xs font-bold tracking-wide uppercase mb-8 shadow-sm backdrop-blur-sm">
        <MapPin size={12} className="mr-1" /> Proudly Based in Ranchi, Jharkhand
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
        Welcome to <span className="text-[#FFB638]">Error.AI</span><br />
        <span className="text-3xl md:text-5xl text-slate-300 font-bold mt-2 block">Best Digital Agency in Ranchi</span>
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed">
        <strong>Error.AI</strong> is the fastest-growing web development and digital marketing company in Jharkhand. We don't just build websites; we build digital empires for our clients using cutting-edge technology and data-driven SEO strategies.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="px-8 py-4 bg-[#FFB638] text-[#293171] rounded-full font-bold shadow-xl shadow-[#FFB638]/20 hover:bg-white hover:scale-105 transition-all duration-300">
          Get Free Audit
        </button>
        <button className="px-8 py-4 bg-transparent text-white border border-slate-700 rounded-full font-bold shadow-sm hover:border-[#FFB638] hover:text-[#FFB638] transition-all duration-300">
          Explore Services
        </button>
      </div>
    </div>
  </div>
);

/* --- Stats Section --- */
const Stats = () => (
  <div className="bg-[#293171] py-12 border-y border-[#3d4585]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#3d4585]/50">
        {[
          { number: "500+", label: "Projects Delivered" },
          { number: "98%", label: "Client Retention" },
          { number: "10x", label: "ROI Generated" },
          { number: "24/7", label: "Support Team" }
        ].map((stat, i) => (
          <div key={i} className="p-4">
            <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
            <div className="text-[#FFB638] text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* --- About Us Section --- */
const About = () => (
  <div className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[#FFB638] transform translate-x-4 translate-y-4 rounded-2xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Team working in Ranchi office" 
            className="relative rounded-2xl shadow-xl w-full object-cover h-[550px]"
          />
        </div>
        <div className="mt-12 lg:mt-0">
          <h2 className="text-[#FFB638] font-bold tracking-wide uppercase text-sm mb-3">About Error.AI</h2>
          <h3 className="text-4xl font-extrabold text-[#293171] mb-6">
            Transforming Business Ideas into Digital Reality
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Established with a vision to digitalize Jharkhand, <strong>Error.AI</strong> has emerged as the leading IT solutions provider in Ranchi. We are more than just a service provider; <strong>Error.AI</strong> acts as your strategic partner in growth.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            While many agencies promise results, <strong>Error.AI</strong> guarantees them. Our team of certified professionals in Ranchi understands the local market dynamics while implementing global best practices in Web Design, SEO, and Branding.
          </p>
          <div className="space-y-4">
            {[
              "Certified Experts at Error.AI",
              "Award-Winning Designs by Error.AI Team",
              "Result-Oriented Strategies",
              "100% Transparency & Support"
            ].map((item, i) => (
              <div key={i} className="flex items-center">
                <CheckCircle className="text-[#FFB638] mr-3" size={20} />
                <span className="text-[#293171] font-medium">{item}</span>
              </div>
            ))}
          </div>
          <button className="mt-10 flex items-center text-[#293171] font-bold hover:text-[#FFB638] transition-colors">
            Read Error.AI Story <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

/* --- Services Section --- */
const Services = () => {
  const serviceList = [
    { title: "SEO Optimization", desc: "Get Error.AI's proven SEO strategies to rank #1 on Google. We drive organic traffic that converts into paying customers.", icon: <Search size={32} /> },
    { title: "Web Development", desc: "Error.AI builds fast, secure, and mobile-responsive websites using React, Next.js, and Node.js tailored to your business needs.", icon: <Code size={32} /> },
    { title: "Social Media PR", desc: "Boost your brand visibility with Error.AI's creative social media campaigns. We manage your reputation across all platforms.", icon: <Users size={32} /> },
    { title: "PPC Advertising", desc: "Maximize your ROI with Error.AI's laser-focused Google Ads and Meta campaigns. Instant leads, measurable results.", icon: <TrendingUp size={32} /> },
    { title: "Content Marketing", desc: "Error.AI's content team creates compelling stories, blogs, and graphics that engage your audience and build trust.", icon: <PenTool size={32} /> },
    { title: "App Development", desc: "Launch your business on mobile with Error.AI's native and cross-platform app development services.", icon: <Monitor size={32} /> },
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#FFB638] font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-extrabold text-[#293171] mb-4">Services Offered by Error.AI</h3>
          <p className="text-gray-600">From code to content, Error.AI provides a 360-degree digital solution for your brand.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FFB638] group">
              <div className="w-16 h-16 bg-[#293171]/5 text-[#293171] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#293171] group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-[#293171] mb-3">{s.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-4">{s.desc}</p>
              <a href="#" className="inline-flex items-center text-sm font-bold text-[#FFB638] hover:translate-x-1 transition-transform">
                Read More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* --- Why Choose Us --- */
const WhyChooseUs = () => (
  <div className="py-24 bg-[#293171] text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="mb-12 lg:mb-0">
          <h2 className="text-[#FFB638] font-bold tracking-wide uppercase text-sm mb-3">Why Choose Error.AI?</h2>
          <h3 className="text-4xl font-extrabold mb-6">Local Understanding, Global Execution.</h3>
          <p className="text-slate-300 mb-8 leading-relaxed">
            <strong>Error.AI</strong> is the only agency in Ranchi that combines deep technical expertise in software development with creative marketing strategies. We don't just run ads; we build digital ecosystems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#1e245a] p-6 rounded-xl border border-[#3d4585]">
              <Award className="text-[#FFB638] mb-4" size={32} />
              <h5 className="font-bold text-lg mb-2">Award Winning</h5>
              <p className="text-sm text-slate-400">Error.AI is recognized as the Top Emerging Agency in East India.</p>
            </div>
            <div className="bg-[#1e245a] p-6 rounded-xl border border-[#3d4585]">
              <TrendingUp className="text-[#FFB638] mb-4" size={32} />
              <h5 className="font-bold text-lg mb-2">Results First</h5>
              <p className="text-sm text-slate-400">Error.AI focuses on leads, sales, and revenue, not just vanity metrics.</p>
            </div>
          </div>
        </div>
        <div className="relative h-full min-h-[400px] bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-[#3d4585]">
            <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Strategy meeting"
                className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#293171] via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xl font-bold italic">"Error.AI helped us triple our online leads in just 3 months. Best agency in Ranchi!"</p>
                
            </div>
        </div>
      </div>
    </div>
  </div>
);

/* --- Testimonials / Social Proof --- */
const Testimonials = () => (
    <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 font-bold uppercase tracking-widest mb-8">Trusted by 100+ Brands including</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale transition-opacity hover:opacity-100">
             <div className="text-2xl font-black text-[#293171]">TATA <span className="text-gray-400 font-normal">STEEL</span></div>
             <div className="text-2xl font-black text-[#293171]">COAL <span className="text-gray-400 font-normal">INDIA</span></div>
             <div className="text-2xl font-black text-[#293171]">HDFC <span className="text-gray-400 font-normal">BANK</span></div>
             <div className="text-2xl font-black text-[#293171]">IIM <span className="text-gray-400 font-normal">RANCHI</span></div>
             <div className="text-2xl font-black text-[#293171]">JIO <span className="text-gray-400 font-normal">FIBER</span></div>
          </div>
        </div>
      </div>
);

/* --- Footer --- */
const Footer = () => (
    <footer className="bg-[#1a1f4d] text-white pt-20 pb-10 border-t border-[#3d4585]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div>
                    <div className="mb-6">
                      <img
                        src={Logo}
                        alt="Error.AI Logo"
                        className="h-18 md:h-22 object-contain"
                      />
                    </div>
                    <p className="text-slate-400 mb-6">Building digital empires from Ranchi. Error.AI provides top-tier marketing and development solutions to help your business grow.</p>
                    <div className="flex space-x-4">
                        {/* Social Placeholders */}
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full bg-[#293171] flex items-center justify-center hover:bg-[#FFB638] hover:text-[#293171] transition-colors cursor-pointer border border-[#3d4585]">
                                <Globe size={18} />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6 text-[#FFB638]">Quick Links</h4>
                    <ul className="space-y-4 text-slate-300">
                        <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">About Error.AI</a></li>
                        <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Our Services</a></li>
                        <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Case Studies</a></li>
                        <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Careers at Error.AI</a></li>
                        <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6 text-[#FFB638]">Services</h4>
                    <ul className="space-y-4 text-slate-300">
                        <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">SEO Optimization</a></li>
                        <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Web Development</a></li>
                        <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Social Media Marketing</a></li>
                        <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">PPC Management</a></li>
                        <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">App Development</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6 text-[#FFB638]">Get in Touch</h4>
                    <ul className="space-y-4 text-slate-300">
                        <li className="flex items-start">
                            <MapPin className="text-[#FFB638] mt-1 mr-3 flex-shrink-0" size={18} />
                            <span>Road No. 4, Ganga Nagar, Harmu<br/>Ranchi, Jharkhand - 834001</span>
                        </li>
                        <li className="flex items-center">
                            <Phone className="text-[#FFB638] mr-3 flex-shrink-0" size={18} />
                            <span>+91 62875 43232</span>
                        </li>
                        <li className="flex items-center">
                            <Mail className="text-[#FFB638] mr-3 flex-shrink-0" size={18} />
                            <span>info@errorr.in</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-[#3d4585] pt-8 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Error.AI Digital Solutions. All rights reserved. Made with ❤️ in Ranchi.</p>
            </div>
        </div>
    </footer>
);

/* --- Home Component (Exports all sections) --- */
const Home = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 selection:bg-[#FFB638] selection:text-[#293171]">
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Footer />
    </div>
  );
};

export default Home;