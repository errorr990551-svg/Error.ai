import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AuditForm from './AuditForm';

const AuditPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a small delay for better UX
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-brand-dark transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
              <div className="mb-8">
                <div className="text-brand-orange font-bold tracking-widest text-[12px] uppercase mb-2">
                  LIMITED TIME OFFER
                </div>
                <h2 className="text-3xl font-bold text-brand-dark font-heading">
                  Get Your Free Digital Audit
                </h2>
                <p className="text-gray-500 mt-2 font-medium">
                  We'll analyze your website and show you exactly how to grow your business.
                </p>
              </div>

              <AuditForm isPopup={true} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuditPopup;
