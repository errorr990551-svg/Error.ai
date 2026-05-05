import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Search,
  Code,
  Users,
  TrendingUp,
  PenTool,
  Monitor,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Award,
  Globe,
  BarChart,
  Zap
} from 'lucide-react';
import Footer from '../components/common/Footer';

/* --- Hero Section --- */
const Hero = () => (
  <div className="relative pt-16 pb-12 lg:pt-24 lg:pb-20 overflow-hidden bg-[#F4F3ED] min-h-[calc(100vh-80px)] flex items-center">
    {/* Background Geometric Shape */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#EAE8DE] -skew-x-12 translate-x-24 z-0 hidden lg:block"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        {/* Left Side Content */}
        <div className="mb-12 lg:mb-0">
          <div className="flex items-center text-[#FF4D00] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-8 h-[2px] bg-[#FF4D00] mr-3"></span>
            Digital Growth Agency — Since 2023
          </div>
          <h1 className="text-[42px] md:text-[5rem] font-[800] text-[#0A0A0A] tracking-[-0.05em] mb-6 leading-[0.9] font-heading">
            We Turn <br />
            <span className="whitespace-nowrap"><span className="text-[#FF4D00]">Clicks</span> Into</span> <br />
            <span className="text-[#FF4D00]">Clients.</span>
          </h1>
          <p className="mt-4 max-w-md text-base text-gray-500 mb-8 leading-relaxed font-medium">
            Errorr.in is the growth partner for startups, local businesses, manufacturers, and ambitious brands who want real results — not vanity metrics.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="px-8 py-3.5 bg-[#FF4D00] text-white rounded-xl font-bold text-base hover:bg-[#e64500] hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/20">
              Explore Services
            </button>
            <button className="px-8 py-3.5 bg-transparent text-[#0A0A0A] border-2 border-[#0A0A0A]/10 rounded-xl font-bold text-base hover:bg-[#0A0A0A] hover:text-white transition-all duration-300">
              Free Strategy Call
            </button>
          </div>
        </div>

        {/* Right Side Stats Cards */}
        <div className="relative w-full max-w-lg mx-auto lg:ml-auto flex justify-center">
          <div className="space-y-4 w-full max-w-md">
            {/* Card 1 */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white p-6 rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex items-center gap-6 transform hover:scale-[1.02] transition-transform cursor-default border border-gray-50/50"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <BarChart className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-[#0A0A0A] font-heading tracking-tighter">3.8x</h3>
                <p className="text-xs text-gray-400 font-medium mt-0.5">Average ROI increase</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="bg-white p-6 rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex items-center gap-6 translate-x-4 lg:translate-x-8 transform hover:scale-[1.02] transition-transform cursor-default border border-gray-50/50"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center flex-shrink-0">
                <Search className="text-pink-600" size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-[#0A0A0A] font-heading tracking-tighter">150+</h3>
                <p className="text-xs text-gray-400 font-medium mt-0.5">Campaigns launched</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="bg-white p-6 rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex items-center gap-6 transform hover:scale-[1.02] transition-transform cursor-default border border-gray-50/50"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                <Zap className="text-yellow-600" size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-[#0A0A0A] font-heading tracking-tighter">48h</h3>
                <p className="text-xs text-gray-400 font-medium mt-0.5">Avg. campaign go-live</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </div>
);



/* --- Marquee Section --- */
const Marquee = () => {
  const words = [
    "OPTIMIZATION", "SEO & RANKING", "PPC ADVERTISING", "SOCIAL MEDIA GROWTH",
    "WEBSITE DEVELOPMENT", "EMAIL MARKETING", "CONTENT STRATEGY", "ANALYTICS & TRACKING",
    "CONVERSION OPTIMIZATION"
  ];

  return (
    <div className="bg-[#0A0A0A] py-3 overflow-hidden border-y border-white/5 relative">
      <div className="animate-marquee-infinite">
        {/* First set */}
        <div className="flex items-center gap-12 pr-12">
          {words.map((word, i) => (
            <div key={`a-${i}`} className="flex items-center gap-12">
              <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-80">{word}</span>
              <span className="text-[#FF4D00] text-[8px] transform rotate-45">■</span>
            </div>
          ))}
        </div>
        {/* Second set for seamless loop */}
        <div className="flex items-center gap-12 pr-12">
          {words.map((word, i) => (
            <div key={`b-${i}`} className="flex items-center gap-12">
              <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-80">{word}</span>
              <span className="text-[#FF4D00] text-[8px] transform rotate-45">■</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
/* --- Services Section --- */
const Services = () => {
  const serviceList = [
    { num: "01", category: "SEO", title: "Search Engine\nOptimization", desc: "Dominate Google rankings with technical audits, on-page mastery, and link-building that lasts — not just quick fixes." },
    { num: "02", category: "PPC", title: "Pay-Per-Click\nAdvertising", desc: "Every rupee tracked. Google Ads, Meta Ads, and YouTube campaigns optimized for conversions, not just clicks." },
    { num: "03", category: "WEB", title: "Website\nDevelopment", desc: "Fast, conversion-optimized websites built to rank, convert, and represent your brand at its best." },
    { num: "04", category: "SMM", title: "Social Media\nMarketing", desc: "Thumb-stopping content and community strategies that build brand love and drive measurable sales." },
    { num: "05", category: "CRO", title: "Conversion Rate\nOptimization", desc: "We don't just bring traffic — we make sure it converts with A/B testing, UX audits, and funnel optimization." },
    { num: "06", category: "DATA", title: "Analytics &\nTracking", desc: "Full-funnel attribution, GA4 setup, dashboards and reports that tell you exactly what's working and what isn't." },
  ];

  return (
    <div className="py-24 bg-brand-offwhite border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-[4rem] font-bold text-brand-dark mb-6 tracking-tight max-w-3xl leading-[1.2] font-heading">
            Full-Stack Digital <br />
            Marketing
          </h3>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed font-medium opacity-80">
            Every service we offer is connected — so your SEO informs your content, your PPC data improves your CRO, and everything compounds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceList.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#FF4D00] group cursor-pointer flex flex-col h-full">
              <div className="text-[#FF4D00] font-bold text-xs tracking-widest uppercase mb-6 flex items-center">
                {s.num} <span className="mx-2 text-gray-200">—</span> {s.category}
              </div>
              <h4 className="text-xl font-bold text-[#0A0A0A] mb-4 whitespace-pre-line leading-snug group-hover:text-[#FF4D00] transition-colors">{s.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium opacity-90">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="px-8 py-4 bg-[#FF4D00] text-white rounded-full font-semibold hover:bg-[#e64500] hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/20">
            View All Services &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

/* --- Process Section --- */
const Process = () => (
  <div className="py-24 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-20 max-w-4xl mx-auto text-center">
        <h2 className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-4">Our Process</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 tracking-tight leading-[1.2] font-heading">From Strategy to Scale</h3>
        <p className="text-gray-500 text-base max-w-xl leading-relaxed font-medium opacity-80 mx-auto">
          We follow a clear, transparent process designed to get you results fast — and keep improving over time.
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-12 left-[12.5%] w-[75%] h-[2px] bg-gray-300 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          {[
            { num: "01", title: "Discovery & Audit", desc: "Deep dive into your business, competitors, and current digital presence." },
            { num: "02", title: "Strategy Blueprint", desc: "A custom roadmap with clear KPIs, timelines, and channel priorities." },
            { num: "03", title: "Launch & Execute", desc: "Campaigns go live within 48 hours. Fast, quality, no excuses." },
            { num: "04", title: "Optimize & Scale", desc: "Weekly reporting, monthly reviews, continuous improvement and scaling." }
          ].map((step, i) => (
            <div key={i} className="relative text-center flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold mb-8 transition-all duration-300 bg-brand-offwhite text-[#0A0A0A] border-2 border-gray-100 shadow-sm group-hover:border-[#FF4D00] group-hover:bg-[#FF4D00] group-hover:text-white group-hover:shadow-xl group-hover:shadow-orange-500/20">
                {step.num}
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-4">{step.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium opacity-80 max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);


/* --- Stats Section --- */
const Stats = () => (
  <div className="py-24 bg-brand-offwhite border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-4">By The Numbers</h2>
        <h3 className="text-4xl md:text-[4rem] font-bold text-brand-dark tracking-tight leading-[1.2] font-heading pb-2">Real Results We're Proud Of</h3>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-x-auto overflow-hidden">
        <div className="flex divide-x divide-gray-50 min-w-max">
          {[
            { number: "150+", label: "Campaigns Managed" },
            { number: "3.8x", label: "Average ROI Delivered", highlight: true },
            { number: "94%", label: "Client Retention Rate" },
            { number: "12+", label: "Industries Served" }
          ].map((stat, i) => (
            <div key={i} className="flex-1 p-12 text-center min-w-[200px] hover:bg-gray-50/50 transition-colors duration-300">
              <div className={`text-5xl font-bold mb-4 tracking-tighter ${stat.highlight ? 'text-[#FF4D00]' : 'text-[#0A0A0A]'}`}>
                {stat.number}
              </div>
              <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);


/* --- Industries Section --- */
const Industries = () => {
  const industries = [
    { name: "Startups & Founders", icon: "🚀" },
    { name: "Local Businesses", icon: "🏪" },
    { name: "Law Firms & Lawyers", icon: "⚖️" },
    { name: "Real Estate Agencies", icon: "🏠" },
    { name: "Manufacturers", icon: "🏭" },
    { name: "E-commerce Brands", icon: "🛍️" },
    { name: "Healthcare Clinics", icon: "🏥" },
    { name: "EdTech & Coaching", icon: "🎓" },
    { name: "Hospitality & Hotels", icon: "🏨" },
    { name: "B2B Services", icon: "💼" },
    { name: "Construction Firms", icon: "🏗️" },
    { name: "SaaS Companies", icon: "💡" },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-4">Industries We Serve</h2>
          <h3 className="text-4xl md:text-[4rem] font-bold text-[#0A0A0A] mb-6 tracking-tight max-w-4xl leading-[1.2] font-heading pb-2">
            Built for <br />
            Businesses Ready <br />
            to Grow
          </h3>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed font-medium opacity-80">
            From lean startups to established manufacturers, we craft digital strategies specific to your industry and goals.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <div key={i} className="bg-white px-4 py-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3 hover:border-brand-orange hover:shadow-md transition-all cursor-pointer h-24">
              <div className="text-2xl flex-shrink-0">{ind.icon}</div>
              <div className="font-semibold text-brand-dark text-xs leading-tight">{ind.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



/* --- Testimonials Section --- */
const Testimonials = () => (
  <div className="py-24 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-4">Client Love</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-brand-dark tracking-tight leading-[1.2]">What Our Clients Say</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            quote: "Error.in completely transformed our online presence. Within 4 months, we went from page 5 on Google to ranking #1 for our main keywords. Our enquiries tripled.",
            name: "Rohit Kapoor",
            title: "Founder, Legal Ease Advocates",
            initials: "RK",
            color: "bg-blue-600"
          },
          {
            quote: "Our manufacturing business had zero digital presence. Akshat's team built us a website, ran Google Ads, and we started getting B2B leads within the first month. Exceptional.",
            name: "Sunita Agarwal",
            title: "Director, PrecisionParts Pvt. Ltd.",
            initials: "SA",
            color: "bg-[#FF4D00]"
          },
          {
            quote: "As a real estate broker, competition is brutal. Error.in's Meta Ads strategy brought in 40+ qualified leads in the first month at a fraction of what I was spending before.",
            name: "Vikram Rathore",
            title: "Principal, Rathore Properties",
            initials: "VR",
            color: "bg-emerald-600"
          }
        ].map((testimonial, i) => (
          <div key={i} className="bg-brand-offwhite p-10 rounded-3xl shadow-sm border border-gray-50 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div>
              <div className="text-[#FF4D00] text-5xl font-serif leading-none mb-6 opacity-20 group-hover:opacity-100 transition-opacity">"</div>
              <p className="text-gray-600 text-lg leading-relaxed font-medium mb-10 italic">{testimonial.quote}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full ${testimonial.color} text-white flex items-center justify-center font-bold shadow-lg shadow-gray-200`}>
                {testimonial.initials}
              </div>
              <div>
                <h5 className="font-bold text-brand-dark">{testimonial.name}</h5>
                <p className="text-xs text-gray-400 font-medium">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


/* --- CTA Section --- */
const CTA = () => (
  <div className="py-16 bg-[#0A0A0A] text-white relative z-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="max-w-3xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-0 leading-[1.2]">
            Ready to stop leaving money on the table?<br className="hidden lg:block" />
            <span className="text-gray-400">Let's build your </span>
            <span className="text-[#FF4D00]">unfair digital advantage.</span>
          </h2>
        </div>

        <div className="flex-shrink-0">
          <button className="px-8 py-3.5 bg-[#FF4D00] text-white rounded-2xl font-bold text-base hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 shadow-xl shadow-orange-500/20 whitespace-nowrap">
            Book Free Call &rarr;
          </button>
        </div>
      </div>
    </div>
  </div>
);




/* --- Home Component (Exports all sections) --- */
const Home = () => {
  return (
    <div className="bg-brand-offwhite font-sans text-brand-dark selection:bg-brand-orange selection:text-white">
      <Hero />
      <Marquee />
      <Industries />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;