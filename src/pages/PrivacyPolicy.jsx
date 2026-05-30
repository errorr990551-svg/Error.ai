import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  FileText, 
  ShieldCheck, 
  Mail, 
  ArrowRight, 
  ChevronRight, 
  Settings,
  HelpCircle,
  CheckCircle2,
  LockKeyhole,
  FileSpreadsheet,
  Workflow,
  Globe2
} from 'lucide-react';
import Footer from '../components/common/Footer';

// Reusable Section Header to match CaseStudy page
const SectionHeader = ({ label, title, light = false }) => (
  <div className="mb-12">
    <div className="font-bold tracking-widest text-[14px] uppercase mb-4 flex items-center gap-3 text-[#FF4D00]">
      <span className="w-8 h-[2px] bg-[#FF4D00]"></span>
      {label}
    </div>
    <h2 className={`text-3xl md:text-5xl font-bold font-heading leading-tight tracking-tight ${light ? 'text-white' : 'text-brand-dark'}`}>
      {title}
    </h2>
  </div>
);

// Reusable Info Card for section listings
const InfoCard = ({ icon: Icon, title, items }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF4D00] flex items-center justify-center mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-6 font-heading">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-gray-500 text-sm font-medium leading-relaxed">
          <ChevronRight size={14} className="mt-1 shrink-0 text-[#FF4D00]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 bg-brand-offwhite font-sans text-brand-dark selection:bg-[#FF4D00] selection:text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="px-4 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
            
            {/* Hero Left */}
            <div className="lg:col-span-7 mb-12 lg:mb-0">
              <div className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-6 flex items-center gap-4">
                <span className="w-12 h-[2px] bg-[#FF4D00]"></span>
                Legal & Trust Guidelines
              </div>
              <h1 className="text-4xl md:text-[5rem] font-[800] text-brand-dark tracking-[-0.05em] mb-8 leading-[1.0] font-heading">
                Privacy <span className="text-[#FF4D00]">Policy.</span>
              </h1>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium max-w-xl mb-8">
                Your business data is a critical asset. At Errorr.in, we treat your privacy and data security with radical transparency and compliance.
              </p>
              
              {/* Effective Date Badge */}
              <div className="inline-flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-orange-50 text-[#FF4D00] flex items-center justify-center shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Effective Date</div>
                  <div className="text-sm font-bold">May 30, 2026</div>
                </div>
              </div>
            </div>

            {/* Hero Right: Highlights Sidebar */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full blur-3xl opacity-60"></div>
                <h3 className="text-lg font-bold text-brand-dark mb-6 font-heading">Transparency Standards</h3>
                <div className="space-y-4">
                  {[
                    "100% GDPR Compliant Principles",
                    "CCPA Assured Rights Mapping",
                    "Zero Selling to Third-Party Lists",
                    "Double SSL Encrypted Transmission"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 bg-brand-offwhite p-4 rounded-xl border border-gray-50">
                      <div className="w-8 h-8 rounded-full bg-orange-50 text-[#FF4D00] flex items-center justify-center shrink-0 shadow-sm">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-xs font-bold text-gray-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="px-4 py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
            <div>
              <SectionHeader label="01 / COMMITMENT" title="Radical Transparency is Our Policy." />
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium">
                <p>
                  Welcome to <strong>Errorr.in</strong> (referred to as "we", "our", "us", or the "Agency"). We provide digital marketing services, performance advertising, SEO, web design, and strategic consulting to businesses and brands globally.
                </p>
                <p>
                  This Privacy Policy governs the processing of personal and business data collected through our website, lead forms, audits, and sales consultations. We treat your information with the same high level of security and respect we demand for our own business data.
                </p>
                <p className="text-brand-dark font-bold border-l-4 border-[#FF4D00] pl-6 py-2 bg-brand-orange/5 rounded-r-2xl">
                  By accessing our website or booking a free strategy audit, you consent to the data collection and utilization practices described in this policy.
                </p>
              </div>
            </div>
            
            {/* Right Card */}
            <div className="mt-16 lg:mt-0">
              <div className="bg-[#0A0A0A] rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4D00]/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#FF4D00] flex items-center justify-center mb-6">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-4">The Trust Equation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                    We believe privacy policies shouldn't be hidden in tiny fonts. Your business strategy requires complete trust, which is why we break down our guidelines clearly.
                  </p>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest italic border-l border-white/20 pl-4 py-2">
                    "The security of your business data is not a feature — it's our foundation."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Information We Collect */}
      <section className="px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="02 / DATA COLLECTION" title="What We Gather & Why." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <InfoCard 
              icon={Database}
              title="Voluntary Information"
              items={[
                "Provided directly by you via audit forms, contact links, or during strategy calls.",
                "Includes: Full Name, Business Email Address (errorr990551@gmail.com context), Company Name, Website URL, and Designation.",
                "Used solely to evaluate current marketing setups and contact you for audits."
              ]}
            />
            <InfoCard 
              icon={FileSpreadsheet}
              title="Automated Data"
              items={[
                "Collected dynamically during your visits using web logs and system trackers.",
                "Includes: IP Address, Geo-location details, Browser Type, and Device specifics.",
                "Analyzes: Referral Sources, scroll depths, and time spent on Spec/Case Study pages."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Section 3: How We Use Information */}
      <section className="px-4 py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
            
            {/* Left Header */}
            <div className="lg:col-span-5 mb-16 lg:mb-0">
              <SectionHeader label="03 / DATA WORKFLOW" title="How Your Data Powers Growth." />
              <p className="text-gray-500 text-lg leading-relaxed font-medium mb-8">
                We use your business parameters to optimize strategies and configure digital campaigns. Your data remains safe within our internal systems.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-50 text-[#FF4D00] rounded-xl text-xs font-black uppercase tracking-widest">
                No Selling of Data
              </div>
            </div>

            {/* Right Workflows Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Delivering Free Audits", desc: "Analyzing metrics to prepare your personalized SEO and PPC strategy report.", icon: Workflow },
                { title: "Personalizing Services", desc: "Crafting specific Google/Meta ads blueprints tailored to your business.", icon: Settings },
                { title: "Communications", desc: "Sending proposals, scheduling calls, and sharing marketing insights.", icon: Mail },
                { title: "Improving Our Site", desc: "Evaluating user clicks on our spec pages to optimize user experiences.", icon: Globe2 }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-brand-offwhite p-6 rounded-2xl border border-gray-50 hover:border-[#FF4D00]/20 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#FF4D00] flex items-center justify-center mb-4 group-hover:bg-[#FF4D00] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-brand-dark mb-2 font-heading">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Tracking & Cookies */}
      <section className="px-4 py-32 bg-[#0A0A0A] text-white rounded-[4rem] mx-4 my-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#FF4D000c,transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            
            {/* Left side */}
            <div>
              <SectionHeader label="04 / COOKIES" title="Tracking Pixels & Analytics." light />
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                <p>
                  To measure our search performance and run retargeting campaigns, we place standard tracking pixels and browser cookies. This includes services like Google Analytics (GA4) and Meta Ads.
                </p>
                <p>
                  Cookies help us understand if you are a returning visitor and which of our client case studies (such as Iotaflow) are attracting the most interest, allowing us to keep content relevant.
                </p>
              </div>
            </div>

            {/* Right side card */}
            <div className="mt-16 lg:mt-0">
              <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6 text-[#FF4D00]">
                  <HelpCircle size={24} />
                  <span className="text-xs font-black uppercase tracking-widest text-white">How to Opt Out</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                  You can configure your browser to decline all cookies or alert you when a cookie is placed. For full tracking opt-outs, we recommend using private browsing mode or configuring global Google/Meta settings.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Browser Settings", "Google Opt-out", "Meta Ad Preferences"].map((tag, i) => (
                    <span key={i} className="bg-white/5 px-4 py-2 rounded-full text-[10px] font-bold text-gray-300 uppercase tracking-widest border border-white/5">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 5: Data Security */}
      <section className="px-4 py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="05 / SECURITY" title="Our Protection Safeguards." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Shield, title: "SSL Encryption", desc: "All data transferred to and from our site is encrypted via Secure Socket Layer (SSL) technology." },
              { icon: LockKeyhole, title: "Restricted Access", desc: "Only our core strategy and analysis specialists have access to client audit submissions." },
              { icon: Lock, title: "Secure Cloud Services", desc: "Database logs and forms are stored on secure cloud services with multi-factor authentication." }
            ].map((sec, i) => (
              <div key={i} className="bg-brand-offwhite p-8 rounded-3xl border border-gray-50 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF4D00] flex items-center justify-center mb-6">
                  <sec.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4 font-heading">{sec.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-medium opacity-90">{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Your Privacy Rights */}
      <section className="px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="06 / COMPLIANCE" title="Your Control & Privacy Rights." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { title: "Right to Access", desc: "Request copies of any personal or business data we store about your organization." },
              { title: "Right to Correction", desc: "Request edits or corrections to any outdated or inaccurate details in our systems." },
              { title: "Right to Deletion", desc: "Request that we permanently purge your data from our database logs and emails." },
              { title: "Right to Restriction", desc: "Request that we pause processing your data while a dispute is resolved." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="text-xs font-black text-[#FF4D00] mb-6">0{i+1}</div>
                <h4 className="text-lg font-bold text-brand-dark mb-4 font-heading">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-medium opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Contact Us */}
      <section className="px-4 py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader label="07 / GET IN TOUCH" title="Have Privacy Questions?" />
          
          <p className="text-gray-500 text-base leading-relaxed font-medium mb-12 max-w-xl mx-auto">
            If you have questions about this Privacy Policy, wish to exercise any of your privacy rights, or need clarification regarding your digital audit details, please get in touch with our team.
          </p>

          <div className="bg-brand-offwhite p-8 rounded-[2.5rem] border border-gray-100 max-w-md mx-auto text-left">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 bg-[#0A0A0A] rounded-2xl flex items-center justify-center text-white font-heading font-black text-2xl tracking-tighter shrink-0 shadow-lg shadow-gray-200">
                AR
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark font-heading leading-tight">Akshat Raj</h3>
                <p className="text-[#FF4D00] text-[10px] font-bold uppercase tracking-wider mt-1">Founder & Lead Strategist, Errorr.in</p>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
              <Mail size={18} className="text-[#FF4D00]" />
              <span className="text-brand-dark font-bold text-sm">errorr990551@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <section className="py-24 bg-[#0A0A0A] text-white relative z-10 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-[800] tracking-tight mb-0 leading-[1.2] font-heading">
                Ready to fix the errors <br />
                holding your business <span className="text-[#FF4D00]">back?</span> <br />
                Book your strategy call.
              </h2>
            </div>

            <div className="flex-shrink-0">
              <Link 
                to="/free-audit" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#FF4D00] text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 shadow-xl shadow-orange-500/20 whitespace-nowrap"
              >
                Discuss Your Strategy <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
