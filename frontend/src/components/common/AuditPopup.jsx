import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AuditForm from './AuditForm';

const AuditPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    // Show popup after a small delay for initial page visit
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    // Listen for manual trigger events (e.g. Get a Quote clicks)
    const handleOpenEvent = () => {
      setFormKey((prev) => prev + 1);
      setIsOpen(true);
    };

    window.addEventListener('open-audit-modal', handleOpenEvent);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('open-audit-modal', handleOpenEvent);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-brand-dark/70 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-brand-orange hover:text-white text-gray-500 transition-all z-20 cursor-pointer shadow-sm"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-7 max-h-[90vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="mb-4 pr-6">
                <div className="text-brand-orange font-bold tracking-widest text-[10px] uppercase mb-1">
                  REQUEST A CUSTOM QUOTE
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-dark font-heading leading-tight">
                  Get Your Free Digital Audit & Quote
                </h2>
                <p className="text-gray-500 mt-1 font-medium text-xs leading-relaxed">
                  Fill in your details. We will analyze your digital presence and send a custom strategy & quote.
                </p>
              </div>

              <AuditForm key={formKey} isPopup={true} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuditPopup;
