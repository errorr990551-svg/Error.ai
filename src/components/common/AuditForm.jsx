import React, { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import CustomSelect from './CustomSelect';

const AuditForm = ({ isPopup = false }) => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.target);
    const payload = {
      firstName: formData.get('First Name'),
      lastName: formData.get('Last Name'),
      email: formData.get('Email'),
      phone: formData.get('Phone'),
      businessType: formData.get('Business Type'),
      message: formData.get('Message'),
      isPopup,
    };

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 bg-green-50 rounded-2xl text-center border border-green-200 space-y-3">
        <CheckCircle size={48} className="text-green-500 mx-auto" />
        <h3 className="text-xl font-bold text-green-900">Thank You!</h3>
        <p className="text-sm text-green-700 font-medium">
          Your audit request has been sent successfully. We will get back to you shortly!
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 px-6 py-2 bg-green-600 text-white font-medium rounded-full text-xs hover:bg-green-700 transition-all"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm">
          <AlertCircle size={20} className="shrink-0 text-red-500" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[12px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">FIRST NAME</label>
          <input
            type="text"
            name="First Name"
            placeholder="Rahul"
            required
            className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium text-sm text-brand-dark placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className="block text-[12px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">LAST NAME</label>
          <input
            type="text"
            name="Last Name"
            placeholder="Sharma"
            required
            className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium text-sm text-brand-dark placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[12px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">EMAIL</label>
          <input
            type="email"
            name="Email"
            placeholder="rahul@company.com"
            required
            className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium text-sm text-brand-dark placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className="block text-[12px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">PHONE NUMBER</label>
          <input
            type="tel"
            name="Phone"
            placeholder="9876543210"
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
            maxLength="10"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
            }}
            className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium text-sm text-brand-dark placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="relative">
        <label className="block text-[12px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">BUSINESS TYPE</label>
        <CustomSelect
          name="Business Type"
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
          name="Message"
          rows="3"
          placeholder="Tell us your biggest challenge..."
          required
          className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium text-sm text-brand-dark placeholder:text-gray-400 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-brand-orange text-white rounded-full font-bold text-base hover:bg-[#e64500] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="animate-spin" size={18} /> Sending...
          </>
        ) : (
          <>
            Send Message <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
};

export default AuditForm;
