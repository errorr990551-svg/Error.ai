import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, MapPin, ArrowRight } from 'lucide-react';
import Footer from '../components/common/Footer';
import { ChevronDown } from 'lucide-react';

const CustomSelect = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("");

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 bg-white border rounded-xl flex items-center justify-between transition-all font-medium text-sm ${isOpen ? 'border-brand-orange ring-2 ring-brand-orange/20' : 'border-gray-100'
          } ${selected ? 'text-brand-dark' : 'text-gray-500'}`}
      >
        <span>{selected || placeholder}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-orange' : 'text-gray-400'}`}
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-[60]" onClick={() => setIsOpen(false)} />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-[70] overflow-hidden"
          >
            {options.map((opt, i) => (
              <div
                key={i}
                onClick={() => {
                  setSelected(opt);
                  setIsOpen(false);
                }}
                className={`px-4 py-3 text-sm cursor-pointer transition-colors ${selected === opt
                  ? 'bg-brand-orange text-white'
                  : 'text-brand-dark hover:bg-brand-orange/5'
                  }`}
              >
                {opt}
              </div>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

const FreeAudit = () => {
  return (
    <div className="bg-brand-offwhite min-h-screen font-sans selection:bg-brand-orange selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">

          {/* Left Side: Content */}
          <div className="mb-16 lg:mb-0">
            <div className="text-brand-orange font-bold tracking-widest text-[16px] uppercase mb-4">
              CONTACT US
            </div>
            <h1 className="text-[42px] md:text-[4.5rem] font-[800] text-brand-dark tracking-[-0.05em] mb-8 leading-[1.2] font-heading pb-2">
              Let's Grow Your <br className="hidden md:block" />
              Business Together
            </h1>
            <p className="text-gray-500 text-lg mb-12 max-w-md leading-relaxed font-medium">
              Book a free 30-minute strategy call and get a no-obligation digital audit. We'll show you exactly what's holding your growth back — and how to fix it.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Globe size={18} className="text-blue-500" />
                </div>
                <span className="text-brand-dark font-bold text-sm">errorr.in</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                  <Mail size={18} className="text-purple-500" />
                </div>
                <span className="text-brand-dark font-bold text-sm">hello@errorr.in</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <MapPin size={18} className="text-red-500" />
                </div>
                <span className="text-brand-dark font-bold text-sm">India (Remote-First)</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-50"
            >
              <h2 className="text-xl font-bold text-brand-dark mb-6 font-heading">Get Your Free Audit</h2>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">FIRST NAME</label>
                    <input
                      type="text"
                      placeholder="Rahul"
                      className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium text-sm text-brand-dark placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">LAST NAME</label>
                    <input
                      type="text"
                      placeholder="Sharma"
                      className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium text-sm text-brand-dark placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">EMAIL</label>
                  <input
                    type="email"
                    placeholder="rahul@company.com"
                    className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium text-sm text-brand-dark placeholder:text-gray-400"
                  />
                </div>

                <div className="relative">
                  <label className="block text-[12px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">BUSINESS TYPE</label>
                  <CustomSelect
                    options={[
                      "Startup / New Business",
                      "Established Brand",
                      "E-commerce Store",
                      "Local Service Business",
                      "Manufacturing / B2B"
                    ]}
                    placeholder="Select Business Type"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">WHAT DO YOU NEED HELP WITH?</label>
                  <textarea
                    rows="3"
                    placeholder="Tell us your biggest challenge..."
                    className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium text-sm text-brand-dark placeholder:text-gray-400 resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-4 bg-brand-orange text-white rounded-full font-bold text-base hover:bg-[#e64500] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2">
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FreeAudit;
