import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import CustomSelect from './CustomSelect';

const AuditForm = ({ isPopup = false }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (val) => {
    setFormData((prev) => ({ ...prev, businessType: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setResponseMsg('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const endpoint = `${apiUrl}/api/contact`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          company: formData.businessType,
          businessType: formData.businessType,
          message: formData.message,
          location: isPopup ? 'Popup Audit Form' : 'Free Audit Page',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setResponseMsg(data.message || 'Thank you! Your request has been submitted.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          businessType: '',
          message: '',
        });
      } else {
        setStatus('error');
        setResponseMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setResponseMsg('Unable to connect to server. Please check your connection or try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'success' && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-start gap-3">
          <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-sm">Submission Successful!</p>
            <p className="text-xs mt-0.5">{responseMsg}</p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="text-xs font-bold text-emerald-700 underline mt-2 inline-block cursor-pointer"
            >
              Send another message
            </button>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl flex items-start gap-3">
          <AlertCircle size={20} className="text-rose-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-sm">Submission Failed</p>
            <p className="text-xs mt-0.5">{responseMsg}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[12px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">FIRST NAME</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Rahul"
            required
            className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium text-sm text-brand-dark placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className="block text-[12px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">LAST NAME</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="rahul@company.com"
            required
            className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium text-sm text-brand-dark placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className="block text-[12px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">PHONE NUMBER</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(e) => {
              const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
              setFormData((prev) => ({ ...prev, phone: val }));
            }}
            placeholder="9876543210"
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
            maxLength="10"
            className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium text-sm text-brand-dark placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="relative">
        <label className="block text-[12px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">BUSINESS TYPE</label>
        <CustomSelect
          name="businessType"
          value={formData.businessType}
          onChange={handleSelectChange}
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
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          placeholder="Tell us your biggest challenge..."
          required
          className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium text-sm text-brand-dark placeholder:text-gray-400 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 bg-brand-orange text-white rounded-full font-bold text-base hover:bg-[#e64500] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed transition-all duration-300 shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
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
