import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Search, 
  Zap, 
  Microscope, 
  Handshake, 
  Sprout, 
  CheckCircle2, 
  BarChart2, 
  Calendar, 
  Link as LinkIcon, 
  Brain,
  ArrowRight
} from 'lucide-react';
import Footer from '../components/common/Footer';

/* --- Founder Card Component --- */
const FounderCard = () => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-50 max-w-sm ml-auto"
  >
    <div className="flex items-center gap-5">
      <div className="w-16 h-16 bg-[#0A0A0A] rounded-2xl flex items-center justify-center text-white font-heading font-black text-2xl tracking-tighter shrink-0 shadow-lg shadow-gray-200">
        AR
      </div>
      <div>
        <h3 className="text-xl font-bold text-brand-dark font-heading leading-tight">Akshat Raj</h3>
        <p className="text-[#FF4D00] text-[10px] font-bold uppercase tracking-wider mt-1">Founder & Lead Strategist, Errorr.in</p>
      </div>
    </div>
    <div className="mt-6 pt-6 border-t border-gray-50 flex justify-between items-center">
      <span className="px-4 py-1.5 bg-orange-50 text-[#FF4D00] text-[10px] font-bold rounded-full uppercase tracking-widest">Founder</span>
    </div>
  </motion.div>
);

/* --- Core Value Card Component --- */
const ValueCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center justify-center aspect-square h-full">
    <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF4D00] flex items-center justify-center mb-6 group-hover:bg-[#FF4D00] group-hover:text-white transition-colors duration-300">
      <Icon size={24} />
    </div>
    <h4 className="text-xl font-bold text-brand-dark mb-4 font-heading">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed font-medium opacity-90">{desc}</p>
  </div>
);

const About = () => {
  return (
    <div className="pt-32 bg-brand-offwhite font-sans text-brand-dark selection:bg-brand-orange selection:text-white overflow-x-hidden">
      
      {/* Hero & Mission Section */}
      <section className="px-4 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
            {/* Left Side */}
            <div>
              <div className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-6">
                ABOUT ERRORR.IN
              </div>
              <h1 className="text-[32px] md:text-[3.8rem] font-[800] text-brand-dark tracking-[-0.05em] mb-10 leading-[1.1] font-heading max-w-xl">
                We Fix the <span className="text-[#FF4D00]">Errors</span> Holding Your Business <span className="text-[#FF4D00]">Back Online.</span>
              </h1>
              
              <div className="max-w-xl space-y-6">
                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                  Most businesses struggle with digital marketing not because they lack budget — but because they lack the right strategy. That's where Errorr.in comes in.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                  We're a performance-obsessed digital marketing agency founded in 2023, helping startups, local businesses, manufacturers, law firms, and real estate companies grow through data-driven marketing that actually converts.
                </p>
                <div className="pt-6">
                  <Link 
                    to="/services" 
                    className="px-8 py-4 bg-[#FF4D00] text-white rounded-full font-bold text-base hover:bg-[#e64500] hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/20 inline-block"
                  >
                    See Our Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="mt-16 lg:mt-48 space-y-8">
              <FounderCard />
              <p className="text-gray-500 text-sm leading-relaxed font-medium border-l-4 border-brand-orange pl-6 py-4 bg-brand-orange/5 rounded-r-2xl max-w-sm ml-auto">
                Akshat started Errorr.in in 2023 with a single mission: to give Indian businesses access to world-class digital marketing — without the agency fluff. With hands-on experience across SEO, paid media, and growth strategy, he personally oversees every client account to ensure results, not just reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-4 py-32 bg-white/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-4 block">WHAT WE STAND FOR</span>
            <h2 className="text-4xl md:text-[4.5rem] font-bold text-brand-dark font-heading leading-tight tracking-tight pb-2">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard 
              icon={Target}
              title="Results Over Reports"
              desc="We measure success in revenue, leads, and growth — not impressions and vanity metrics. Every decision is tied to outcomes."
            />
            <ValueCard 
              icon={Search}
              title="Radical Transparency"
              desc="You get real-time access to your data, honest communication, and zero agency jargon. If something isn't working, we'll tell you first."
            />
            <ValueCard 
              icon={Microscope}
              title="Always Testing"
              desc="Gut feelings are validated by data. Every campaign is an experiment, and every experiment makes the next one better."
            />
            <ValueCard 
              icon={Handshake}
              title="Partnership Mentality"
              desc="We treat your business like our own. Your growth is our reputation. We win together or not at all."
            />
            <ValueCard 
              icon={Sprout}
              title="Long-Term Thinking"
              desc="We don't chase quick wins that implode. We build compounding digital assets that grow in value month after month."
            />
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
            <div>
              <span className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-6 block">WHY ERRORR.IN</span>
              <h2 className="text-4xl md:text-[4.5rem] font-bold text-brand-dark font-heading leading-[1.1] tracking-tight mb-8 pb-2">
                We're Different — <br /> and We Can <br /> Prove It
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-lg">
                Most agencies overpromise and underdeliver. We let our process and results do the talking.
              </p>
            </div>

            <div className="mt-16 lg:mt-0 space-y-4">
              {[
                { title: "Founder-Led Strategy", desc: "Akshat personally oversees your strategy — no junior managers." },
                { title: "Industry-Specific Playbooks", desc: "Proven frameworks for law firms, real estate, manufacturing, and more." },
                { title: "Full-Funnel Coverage", desc: "From the first touchpoint to closed deal — we optimize every step." },
                { title: "No Long-Term Lock-ins", desc: "We earn your business every month. No 12-month contracts." },
                { title: "Live Reporting Dashboard", desc: "24/7 access to real-time performance data — you're never in the dark." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-gray-50 shadow-sm flex items-start gap-4 group hover:shadow-md transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#FF4D00] text-white flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-1 font-heading">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed font-medium opacity-90">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Impact Section */}
      <section className="px-4 py-32 bg-white/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-6 block">INDUSTRY IMPACT</span>
          <h2 className="text-4xl md:text-[4.5rem] font-bold text-brand-dark font-heading leading-tight tracking-tight mb-20 pb-2">
            The Growth We've <br /> Driven, By Industry
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { stat: "67%", label: "Avg lead increase for law firms" },
              { stat: "4.2X", label: "ROAS for e-commerce brands" },
              { stat: "82%", label: "Cost-per-lead reduction for real estate" },
              { stat: "220%", label: "Organic traffic growth for manufacturers" },
              { stat: "3X", label: "Booking increase for local businesses" }
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm text-center flex flex-col justify-center min-h-[140px]">
                <div className="text-[32px] md:text-4xl font-black text-[#FF4D00] font-heading tracking-tighter mb-2">{s.stat}</div>
                <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-6 block">HOW WE WORK</span>
            <h2 className="text-4xl md:text-[4.5rem] font-bold text-brand-dark font-heading leading-tight tracking-tight mb-8 pb-2">
              Lean, Focused, <br /> and Obsessed <br /> With Your Growth
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-2xl">
              We're a tight-knit team of specialists — each an expert in their domain. No bloated teams. No passing the buck. Just focused people who care about your results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart2, color: "text-blue-500", bg: "bg-blue-50", title: "Data-First Decision Making", desc: "Every strategy decision is backed by analytics, competitor research, and market data — never guesswork." },
              { icon: Calendar, color: "text-indigo-500", bg: "bg-indigo-50", title: "Weekly Performance Reviews", desc: "Regular check-ins ensure campaigns are always on track and pivoting quickly when needed." },
              { icon: LinkIcon, color: "text-purple-500", bg: "bg-purple-50", title: "Integrated Channel Approach", desc: "SEO, PPC, social and content strategies are built to work together — amplifying results across channels." },
              { icon: Brain, color: "text-pink-500", bg: "bg-pink-50", title: "Continuous Learning", desc: "Digital marketing evolves fast. Our team stays ahead with constant training, testing, and industry research." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-50 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-8`}>
                  <item.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-brand-dark mb-4 font-heading">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-medium opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0A0A0A] text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-[800] tracking-tight mb-0 leading-[1.3] font-heading">
                Ready to partner <br className="hidden lg:block" />
                with an agency that treats <br className="hidden lg:block" />
                your business like its <span className="text-[#FF4D00]">own?</span>
              </h2>
            </div>

            <div className="flex-shrink-0">
              <Link 
                to="/free-audit" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF4D00] text-white rounded-2xl font-bold text-base hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 shadow-xl shadow-orange-500/20 whitespace-nowrap"
              >
                Start Your Free Audit <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
