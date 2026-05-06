import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, MapPin } from 'lucide-react';
import Footer from '../components/common/Footer';
import AuditForm from '../components/common/AuditForm';

const FreeAudit = () => {
  return (
    <div className="bg-brand-offwhite min-h-screen font-sans selection:bg-brand-orange selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
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
              <AuditForm />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FreeAudit;
