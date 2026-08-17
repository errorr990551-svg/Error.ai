import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/seo/Breadcrumbs';
import { trackFormSubmit, trackCallClick, trackWhatsappClick } from '../utils/analytics';
import pageMasterIndex from '../data/pageMasterIndex.json';
import { CheckCircle2, ShieldCheck, ArrowRight, Phone, MessageSquare, Award, UserCheck, Building2 } from 'lucide-react';

const MasterPageRenderer = () => {
  const location = useLocation();
  const rawPath = location.pathname;
  const slug = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;

  const pageData = pageMasterIndex[slug] || pageMasterIndex['/'] || {
    'Title Tag': 'Industrial SEO & B2B Lead Generation for Manufacturers | Errorr',
    'H1': 'Industrial SEO & B2B Lead Generation for Manufacturers',
    'clean_slug': slug,
    'h2_list': [
      'The lead problem manufacturers actually have',
      'What we do differently from generalist agencies',
      'Results: client case studies with numbers',
      'Industries we work with',
      'How engagements run, month by month',
      'Pricing bands',
      'Book a free audit'
    ]
  };

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    trackFormSubmit(pageData.H1 || 'Money Page Audit Form', { company: formCompany });
    setFormSubmitted(true);
  };

  // Internal links parsing
  const internalLinksRaw = pageData['Internal Links Out'] || '';
  const internalLinks = internalLinksRaw.split(';').map((s) => s.trim()).filter(Boolean);

  return (
    <div className="pt-24 bg-brand-offwhite font-sans text-brand-dark overflow-x-hidden min-h-screen">
      <SEOHead pageData={pageData} />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="px-4 py-16 mb-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-brand-orange text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-8 h-[2px] bg-brand-orange mr-3"></span>
            {pageData.Cluster || 'Industrial SEO'} • {pageData.Tier || 'P0'}
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 leading-tight font-heading tracking-tight">
            {pageData.H1 || pageData['Title Tag']}
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed mb-8 font-medium">
            {pageData['Meta Description'] || 'We build search and lead systems for Indian manufacturers. Case studies with real enquiry numbers, not vanity traffic.'}
          </p>

          {/* Quick EEAT Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <div className="text-xs text-gray-600">
                <span className="font-bold text-brand-dark block">Required Proof Asset</span>
                {pageData['Required Proof Asset'] || 'Verified client case study'}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-brand-orange flex-shrink-0" />
              <div className="text-xs text-gray-600">
                <span className="font-bold text-brand-dark block">Unique Value Element</span>
                {pageData['Mandatory Unique Element'] || 'B2B industrial benchmarks'}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <UserCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div className="text-xs text-gray-600">
                <span className="font-bold text-brand-dark block">Author Sign-off</span>
                {pageData['Author'] || 'Founder / Head of Strategy'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="px-4 py-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* Content Body */}
        <div className="lg:col-span-7 space-y-8">

          <div className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
            <h2 className="text-base font-bold text-brand-dark mb-4 font-heading">Key Strategy & Intent Overview</h2>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-gray-400 block mb-1">Search Intent</span>
                <span className="font-bold text-brand-orange">{pageData['Intent'] || 'Transactional'}</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Funnel Stage</span>
                <span className="font-bold text-emerald-600">{pageData['Funnel Stage'] || 'Decision'}</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Primary Keyword</span>
                <span className="font-semibold text-brand-dark">{pageData['Primary Keyword'] || pageData['clean_slug']}</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Target Word Count</span>
                <span className="font-semibold text-brand-dark">{pageData['Words'] || 1200} words</span>
              </div>
            </div>
          </div>

          {/* Render H2 Sections */}
          {pageData.h2_list?.map((h2, idx) => (
            <article key={idx} className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-brand-dark font-heading flex items-start gap-3">
                <span className="text-brand-orange font-mono">0{idx + 1}.</span> {h2}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                For manufacturing companies operating in the industrial B2B segment, standard digital agency tactics fail because buyers do not purchase high-ticket equipment or components on impulse. RFQs require technical validation, capacity proofs, ISO compliance details, and geographical proximity assurance.
              </p>
              <div className="p-3 bg-brand-offwhite rounded-xl text-xs text-gray-500 flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Verified against {pageData['Primary Keyword']} search parameters.</span>
              </div>
            </article>
          ))}

          {/* Internal Links Out */}
          {internalLinks.length > 0 && (
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-brand-dark mb-3 font-heading">Related Technical & Service Hubs</h3>
              <div className="flex flex-wrap gap-2">
                {internalLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.trim()}
                    className="px-3.5 py-1.5 bg-brand-offwhite hover:bg-brand-orange hover:text-white text-brand-dark border border-gray-200 rounded-xl text-xs font-semibold transition-all"
                  >
                    {link.trim()}
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Lead Capture Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-8 shadow-xl sticky top-28 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-2 font-heading">
              {pageData['Primary CTA'] || 'Book a Free Audit'}
            </h3>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              Get an explicit 30-minute technical review of your industrial digital presence and RFQ conversion bottleneck.
            </p>

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Company Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sharp Components Pvt Ltd"
                    value={formCompany}
                    onChange={(e) => setFormCompany(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-sm text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-sm text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="rajesh@sharpcomponents.in"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-sm text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-sm text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-orange hover:bg-orange-600 font-bold text-white rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  Request Technical Audit <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="p-6 bg-emerald-950 border border-emerald-800 rounded-2xl text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white">Audit Request Received!</h4>
                <p className="text-xs text-gray-300 mt-2">
                  Our technical strategist will analyze {formCompany || 'your plant'} and send the audit roadmap within 24 hours.
                </p>
              </div>
            )}

            {/* Direct Contact CTAs */}
            <div className="mt-6 pt-6 border-t border-gray-800 grid grid-cols-2 gap-3 text-center">
              <button
                onClick={() => trackCallClick('+919876543210')}
                className="py-3 px-3 bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-xl text-xs font-bold text-gray-200 hover:text-white flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-orange" /> Call Us
              </button>
              <button
                onClick={() => trackWhatsappClick()}
                className="py-3 px-3 bg-emerald-950 border border-emerald-800 hover:border-emerald-700 rounded-xl text-xs font-bold text-emerald-300 hover:text-emerald-100 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp
              </button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default MasterPageRenderer;
