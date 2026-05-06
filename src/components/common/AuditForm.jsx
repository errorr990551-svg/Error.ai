import React from 'react';
import { ArrowRight } from 'lucide-react';
import CustomSelect from './CustomSelect';

const AuditForm = ({ isPopup = false }) => {
  return (
    <form
      action="https://formsubmit.co/errorr990551@gmail.com"
      method="POST"
      className="space-y-4"
    >
      {/* FormSubmit Configuration */}
      <input type="hidden" name="_cc" value="Info@errorr.in,akshat99055@gmail.com,vp380123@gmail.com" />
      <input type="hidden" name="_subject" value={isPopup ? "New Popup Audit Request!" : "New Free Audit Request!"} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" style={{ display: 'none' }} />

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
        className="w-full py-4 bg-brand-orange text-white rounded-full font-bold text-base hover:bg-[#e64500] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2"
      >
        Send Message <ArrowRight size={18} />
      </button>
    </form>
  );
};

export default AuditForm;
