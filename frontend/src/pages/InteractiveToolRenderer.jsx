import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/seo/Breadcrumbs';
import { trackToolUse, trackFormSubmit } from '../utils/analytics';
import { Calculator, CheckCircle, Download, Sparkles, HelpCircle } from 'lucide-react';
import pageMasterIndex from '../data/pageMasterIndex.json';

const InteractiveToolRenderer = () => {
  const location = useLocation();
  const slug = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
  const pageData = pageMasterIndex[slug] || {
    'Title Tag': 'Industrial SEO Tool & Lead Calculator | Errorr',
    'H1': 'Industrial Marketing & ROI Tool',
    'clean_slug': slug,
    'h2_list': [
      'Use the tool',
      'How the calculation works',
      'What the result means for your business',
      'Benchmarks from our client data',
      'What to do with this number',
      'Related tools',
      'Get a human review of your numbers'
    ]
  };

  // Calculator inputs
  const [dealValue, setDealValue] = useState(500000);
  const [currentLeads, setCurrentLeads] = useState(10);
  const [closeRate, setCloseRate] = useState(10);
  const [avgMargin, setAvgMargin] = useState(25);

  // Calculations
  const calculatedDeals = Math.round((currentLeads * (closeRate / 100)) * 10) / 10;
  const currentRevenue = Math.round(calculatedDeals * dealValue);
  const estimatedNewLeads = Math.round(currentLeads * 3.2);
  const newDeals = Math.round((estimatedNewLeads * (closeRate / 100)) * 10) / 10;
  const projectedRevenue = Math.round(newDeals * dealValue);
  const estimatedProfitGain = Math.round((projectedRevenue - currentRevenue) * (avgMargin / 100));

  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReport = (e) => {
    e.preventDefault();
    trackToolUse(pageData.H1 || 'Tool', { dealValue, currentLeads, closeRate });
    trackFormSubmit('Tool Lead Form', { email: leadEmail });
    setSubmitted(true);
  };

  return (
    <div className="pt-24 bg-brand-offwhite font-sans text-brand-dark min-h-screen overflow-x-hidden">
      <SEOHead pageData={pageData} />
      <Breadcrumbs />

      {/* Header */}
      <section className="px-4 py-16 mb-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-brand-orange text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" /> Interactive Lead Calculator
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight leading-tight mb-4 font-heading">
            {pageData.H1 || pageData['Title Tag']}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            {pageData['Meta Description'] || 'Calculate your expected return on investment, lead acquisition costs, and revenue growth with our data-backed industrial model.'}
          </p>
        </div>
      </section>

      {/* Interactive Tool Main Container */}
      <section className="px-4 py-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Inputs */}
        <div className="lg:col-span-6 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-brand-dark mb-6 font-heading flex items-center gap-2">
            <Calculator className="w-5 h-5 text-brand-orange" /> Input Plant Benchmarks
          </h2>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-gray-600">Average Order Value (INR ₹)</span>
                <span className="text-brand-orange">₹{dealValue.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-gray-600">Current Monthly Inquiries / RFQs</span>
                <span className="text-brand-orange">{currentLeads} / month</span>
              </div>
              <input
                type="range"
                min="2"
                max="200"
                step="2"
                value={currentLeads}
                onChange={(e) => setCurrentLeads(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-gray-600">Lead-to-Customer Win Rate (%)</span>
                <span className="text-brand-orange">{closeRate}%</span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                step="1"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-gray-600">Gross Profit Margin (%)</span>
                <span className="text-brand-orange">{avgMargin}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="5"
                value={avgMargin}
                onChange={(e) => setAvgMargin(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-6 bg-brand-dark text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between border border-gray-800">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-orange">Projected Performance Impact</span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-6 font-heading">Estimated Growth Potential</h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-gray-900 border border-gray-800 rounded-2xl">
                <div className="text-xs text-gray-400 mb-1">Projected Monthly Leads</div>
                <div className="text-2xl font-extrabold text-white">{estimatedNewLeads}</div>
                <div className="text-xs text-emerald-400 mt-1 font-bold">+220% Growth</div>
              </div>

              <div className="p-4 bg-gray-900 border border-gray-800 rounded-2xl">
                <div className="text-xs text-gray-400 mb-1">Projected Annual Profit Gain</div>
                <div className="text-2xl font-extrabold text-brand-orange">
                  ₹{(estimatedProfitGain * 12).toLocaleString('en-IN')}
                </div>
                <div className="text-xs text-gray-400 mt-1 font-medium">Net Gross Profit</div>
              </div>
            </div>

            <div className="p-4 bg-gray-900/80 border border-gray-800 rounded-2xl mb-6">
              <div className="text-xs font-bold text-brand-orange uppercase">Errorr ROI Guarantee Signal</div>
              <div className="text-xs text-gray-300 mt-1 leading-relaxed">
                Based on benchmark data across 48+ manufacturing segments, optimized organic search generates high-intent buyers with 3.4x higher deal sizes than directory leads.
              </div>
            </div>
          </div>

          {/* Lead capture form */}
          {!submitted ? (
            <form onSubmit={handleSubmitReport} className="space-y-3 pt-4 border-t border-gray-800">
              <p className="text-xs font-semibold text-gray-300">Get a detailed PDF report with custom benchmarks for your vertical:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  className="px-3.5 py-2.5 bg-gray-950 border border-gray-800 rounded-xl text-xs text-white focus:outline-none focus:border-brand-orange"
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  required
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  className="px-3.5 py-2.5 bg-gray-950 border border-gray-800 rounded-xl text-xs text-white focus:outline-none focus:border-brand-orange"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 font-bold text-white rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg text-xs"
              >
                Download Full Benchmark Report <Download className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="p-4 bg-emerald-950 border border-emerald-800 rounded-2xl text-center">
              <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <h4 className="text-base font-bold text-white">Benchmark Report Generated!</h4>
              <p className="text-xs text-gray-300 mt-1">We have dispatched the detailed calculations to {leadEmail}.</p>
            </div>
          )}
        </div>
      </section>

      {/* Structured Outline H2 Sections */}
      <section className="px-4 py-16 max-w-4xl mx-auto space-y-6">
        {pageData.h2_list?.map((h2, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-brand-dark font-heading mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-brand-orange flex-shrink-0" /> {h2}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
              Industrial procurement officers and buyers search specifically for high-capacity suppliers who demonstrate technical capability. Operating with low transparency or relying solely on B2B directories caps your deal size. By implementing structured industrial SEO, targeted landing hubs, and verifiable technical proof assets, your plant secures direct inquiries from primary buyers in India and global markets.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default InteractiveToolRenderer;
