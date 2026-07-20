import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BarChart2, 
  Search, 
  Target, 
  Settings, 
  FileText, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  Globe,
  Database,
  Users,
  Layout,
  MessageSquare,
  Cpu,
  Zap,
  BarChart,
  Layers,
  LineChart,
  HardDrive
} from 'lucide-react';
import Footer from '../components/common/Footer';

const SectionHeader = ({ label, title, light = false }) => (
  <div className="mb-16">
    <div className={`font-bold tracking-widest text-[16px] uppercase mb-6 flex items-center gap-4 ${light ? 'text-[#FF4D00]' : 'text-[#FF4D00]'}`}>
      <span className={`w-12 h-[2px] ${light ? 'bg-[#FF4D00]' : 'bg-[#FF4D00]'}`}></span>
      {label}
    </div>
    <h2 className={`text-3xl md:text-5xl font-bold font-heading leading-tight ${light ? 'text-white' : 'text-brand-dark'}`}>
      {title}
    </h2>
  </div>
);

const InfoCard = ({ icon: Icon, title, items }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF4D00] flex items-center justify-center mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-6 font-heading">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 group text-gray-500 text-sm font-medium leading-relaxed">
          <ChevronRight size={14} className="mt-1 shrink-0 text-[#FF4D00]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const CaseStudyIotaflow = () => {
  return (
    <div className="pt-32 bg-brand-offwhite font-sans text-brand-dark selection:bg-brand-orange selection:text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="px-4 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-6 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-[#FF4D00]"></span>
              Industrial SEO Case Study
            </div>
            <h1 className="text-4xl md:text-[5rem] font-[800] text-brand-dark tracking-[-0.05em] mb-10 leading-[1.0] font-heading">
              How To Generate <span className="text-[#FF4D00]">Leads Online</span> For Flowmeter Manufacturing.
            </h1>
            <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-medium max-w-3xl mb-12 italic">
              "The goal was not vanity traffic. The goal was qualified industrial discovery."
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="bg-white px-6 py-4 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">I</div>
                <div>
                  <div className="text-xs text-gray-400 uppercase font-bold tracking-tighter">Featuring</div>
                  <div className="text-sm font-bold">IOTAFLOW SYSTEMS PVT. LTD.</div>
                </div>
              </div>
              <div className="bg-white px-6 py-4 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-orange-50 text-[#FF4D00] flex items-center justify-center">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase font-bold tracking-tighter">Impact</div>
                  <div className="text-sm font-bold">1.38K+ Organic Clicks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Buying Shift */}
      <section className="px-4 py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
            <div>
              <SectionHeader label="MARKET CONTEXT" title="Industrial Manufacturers Rely on Offline — Until Now." />
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium">
                <p>
                  Industrial manufacturing companies have traditionally relied on distributors, trade expos, dealer networks, references, and offline sales relationships to generate business. That model still works — but it is no longer enough.
                </p>
                <p>
                  Today, engineers, procurement managers, EPC contractors, plant heads, and industrial buyers begin their purchasing journey online. Before contacting a vendor, they search for technical specifications, application compatibility, and manufacturer credibility.
                </p>
                <p className="text-brand-dark font-bold border-l-4 border-[#FF4D00] pl-6 py-2">
                  This shift has fundamentally changed lead generation. For flow measurement instrumentation, search visibility is now directly tied to business growth.
                </p>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Technical Specifications",
                "Application Compatibility",
                "Calibration Capabilities",
                "Certifications",
                "Industry Use Cases",
                "Installation Methods",
                "Pricing Intent Signals",
                "Manufacturer Credibility"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-brand-offwhite p-5 rounded-2xl border border-gray-50 shadow-sm group hover:border-[#FF4D00] transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#FF4D00] shadow-sm group-hover:bg-[#FF4D00] group-hover:text-white transition-all">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-bold text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Client */}
      <section className="px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0A0A0A] rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#FF4D000a,transparent)] pointer-events-none"></div>
            
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start relative z-10">
              <div>
                <SectionHeader label="THE CLIENT" title="IOTAFLOW SYSTEMS PRIVATE LIMITED" light />
                <p className="text-gray-400 text-lg leading-relaxed mb-12 font-medium">
                  An Indian industrial flow meter manufacturer specializing in precision instrumentation for process industries, serving water treatment, oil & gas, steam systems, and industrial automation.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h4 className="text-[#FF4D00] font-bold text-sm uppercase tracking-widest mb-6">Product Specialization</h4>
                    <ul className="space-y-3">
                      {[
                        "Electromagnetic Flow Meters",
                        "Ultrasonic Flow Meters",
                        "Vortex Flow Meters",
                        "Turbine Flow Meters",
                        "Thermal Mass Flow Meters",
                        "Gas Flow Meters",
                        "Water Flow Systems",
                        "Automation Instrumentation"
                      ].map((p, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold opacity-80">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]"></div>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#FF4D00] font-bold text-sm uppercase tracking-widest mb-6">Target Buyers</h4>
                    <ul className="space-y-3">
                      {[
                        "Engineers",
                        "Technical Consultants",
                        "Procurement Teams",
                        "Industrial Contractors",
                        "Plant Operators",
                        "EPC Firms"
                      ].map((b, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold opacity-80">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-6 font-heading">The Trust Equation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    Manufacturing buyers are not casual consumers. They require technical trust before inquiry generation. Websites must communicate:
                  </p>
                  <div className="space-y-4">
                    {[
                      { t: "Engineering Expertise", i: <Cpu size={18} /> },
                      { t: "Technical Clarity", i: <Settings size={18} /> },
                      { t: "Product Reliability", i: <ShieldCheck size={18} /> },
                      { t: "Industrial Use-Case Depth", i: <Target size={18} /> },
                      { t: "Manufacturing Credibility", i: <Globe size={18} /> }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                        <div className="text-[#FF4D00]">{item.i}</div>
                        <span className="text-sm font-bold">{item.t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="px-4 py-32 bg-white/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="THE CHALLENGE" title="Why Industrial SEO is a Different Game." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <InfoCard 
              icon={Search}
              title="Low Organic Visibility"
              items={[
                "Limited visibility for non-branded industrial keywords.",
                "Most traffic came from direct or branded searches.",
                "Missing out on discovery-based purchasing cycles."
              ]}
            />
            <InfoCard 
              icon={Target}
              title="Competitive Search Space"
              items={[
                "Established competitors with high domain authority.",
                "Older websites with technical content libraries.",
                "Aggressive industrial SEO investments by distributors."
              ]}
            />
            <InfoCard 
              icon={Settings}
              title="Technical Content Gaps"
              items={[
                "Generic marketing pages don't convert engineers.",
                "Buyers search for calibration, media compatibility, etc.",
                "Lack of structured educational SEO content."
              ]}
            />
            <InfoCard 
              icon={Layers}
              title="Intent Alignment"
              items={[
                "Pages structured around product names, not engineering needs.",
                "Disconnect between search behavior and architecture.",
                "Poor search engine understanding of product applications."
              ]}
            />
          </div>
        </div>
      </section>

      {/* SEO Strategy Pillars */}
      <section className="px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="THE STRATEGY" title="A Four-Pillar Industrial SEO Blueprint." />
          
          <div className="space-y-32">
            {/* Pillar 1: Technical SEO */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#FF4D00] flex items-center justify-center mb-10 shadow-sm">
                  <Settings size={32} />
                </div>
                <h3 className="text-4xl font-bold text-brand-dark mb-8 font-heading tracking-tight">1. Technical SEO Optimization</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
                  Technical SEO formed the foundation. Manufacturing websites often suffer from indexing inefficiencies and thin technical pages. We optimized the structure to ensure high crawlability and semantic relevance.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-widest">Core Improvements</h4>
                    <ul className="space-y-3 text-sm text-gray-500 font-medium">
                      <li className="flex items-center gap-2 italic underline underline-offset-4 decoration-[#FF4D00]/30">Metadata Optimization</li>
                      <li className="flex items-center gap-2 italic underline underline-offset-4 decoration-[#FF4D00]/30">Internal Linking Structure</li>
                      <li className="flex items-center gap-2 italic underline underline-offset-4 decoration-[#FF4D00]/30">Product Page Hierarchy</li>
                      <li className="flex items-center gap-2 italic underline underline-offset-4 decoration-[#FF4D00]/30">Crawlability & Indexing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-widest">Schema Implementations</h4>
                    <ul className="space-y-3 text-sm text-gray-500 font-medium">
                      <li className="flex items-center gap-2">• Product & FAQ Schema</li>
                      <li className="flex items-center gap-2">• Organization Schema</li>
                      <li className="flex items-center gap-2">• Breadcrumb & Spec Markup</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-16 lg:mt-0">
                <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 -translate-y-16 translate-x-16 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="text-xs text-gray-400 uppercase font-black tracking-widest mb-4">Implementation Insight</div>
                    <div className="text-2xl font-bold text-brand-dark leading-tight mb-8 font-heading italic">
                      "Metadata was rewritten for industrial search terminology, moving away from generic branding to technical intent."
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {["Industrial supplier", "Mag flow manufacturer", "Digital water meter", "Thermal mass sensor"].map((tag, i) => (
                        <span key={i} className="bg-gray-50 px-4 py-2 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-gray-100">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Content Strategy */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-brand-dark rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl">
                   <div className="relative z-10">
                    <div className="text-[#FF4D00] text-xs font-black uppercase tracking-[0.2em] mb-6">Industrial Psychology</div>
                    <h4 className="text-2xl font-bold font-heading mb-8">The Buyer Journey Cycle</h4>
                    <div className="space-y-4">
                      {["Identify Problem", "Research Technologies", "Compare Manufacturers", "Validate Specifications", "Assess Trustworthiness", "Finalize Vendor"].map((step, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 group hover:border-[#FF4D00]/50 transition-all">
                          <div className="text-xs font-black text-[#FF4D00]">0{i+1}</div>
                          <span className="text-sm font-bold opacity-90">{step}</span>
                        </div>
                      ))}
                    </div>
                   </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#FF4D00] flex items-center justify-center mb-10 shadow-sm">
                  <FileText size={32} />
                </div>
                <h3 className="text-4xl font-bold text-brand-dark mb-8 font-heading tracking-tight">2. Industrial Content Strategy</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
                  We built technical education assets instead of promotional content. This strategy focused on matching engineering search behavior and semantic variations (Topical Clusters).
                </p>
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#FF4D00] shadow-sm">
                      <Users size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-dark mb-2">Buyer Psychology Alignment</h5>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">Content supports identification, technology research, and technical validation stages.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#FF4D00] shadow-sm">
                      <Target size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-dark mb-2">Semantic SEO Mapping</h5>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">Mapped related variations (Mag Flow, Electromagnetic, Industrial Water) into high-authority topic clusters.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3: Product SEO */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#FF4D00] flex items-center justify-center mb-10 shadow-sm">
                  <Zap size={32} />
                </div>
                <h3 className="text-4xl font-bold text-brand-dark mb-8 font-heading tracking-tight">3. Product SEO Asset Transformation</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
                  We transformed static product pages (which often contain only PDFs) into technical landing assets. We focused on application-based optimization and engineering trust signals.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Electromagnetic Flow Meter SEO: Optimized for conductive liquid, water treatment, and chemical compatibility keywords.",
                    "Use-Case Targeting: Application-specific pages for wastewater, oil & gas, and industrial utilities.",
                    "Conversion-Focused Tech Copy: Educational positioning rather than purely promotional marketing."
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <CheckCircle2 size={18} className="text-[#FF4D00] mt-1 shrink-0" />
                      <span className="text-sm font-bold text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 lg:mt-0">
                <div className="bg-orange-50 rounded-[4rem] p-12 relative overflow-hidden">
                   <div className="relative z-10 text-center">
                     <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                       <BarChart size={32} className="text-[#FF4D00]" />
                     </div>
                     <h4 className="text-2xl font-bold text-brand-dark mb-6 font-heading tracking-tight">High-Intent Discovery</h4>
                     <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8">
                       "An industrial visitor spending time on technical specifications is worth lakhs of rupees in future B2B business."
                     </p>
                     <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#FF4D00] text-white rounded-xl text-xs font-black uppercase tracking-widest">
                       High Value Keywords
                     </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Pillar 4: E-E-A-T */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
               <div className="order-2 lg:order-1">
                 <div className="grid grid-cols-2 gap-6">
                   <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                     <div className="text-4xl font-black text-[#FF4D00] mb-4">Expert</div>
                     <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Real-world Manufacturing</div>
                   </div>
                   <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center mt-12">
                     <div className="text-4xl font-black text-brand-dark mb-4">Trust</div>
                     <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Engineering Authority</div>
                   </div>
                 </div>
               </div>
               <div className="order-1 lg:order-2">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#FF4D00] flex items-center justify-center mb-10 shadow-sm">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-4xl font-bold text-brand-dark mb-8 font-heading tracking-tight">4. E-E-A-T & Authority Building</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
                  Search engines prioritize expertise, experience, and trust. In B2B manufacturing, E-E-A-T is critical. We optimized content to reflect technical manufacturing knowledge and industry terminology.
                </p>
                <div className="space-y-4">
                  {[
                    "Expertise Signals: Industrial terminology and process-industry relevance.",
                    "Trust Signals: Product specificity, manufacturing positioning, and application clarity.",
                    "Industrial Authority: Building depth within niche automation and instrumentation clusters."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm font-bold text-gray-600">
                      <ChevronRight size={18} className="text-[#FF4D00]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Performance Results */}
      <section className="px-4 py-32 bg-[#F9F9F9] border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="PERFORMANCE RESULTS" title="Steady Growth, Technical Authority." />
          
          <div className="lg:grid lg:grid-cols-3 lg:gap-12 items-start">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                <h4 className="text-xs text-gray-400 font-black uppercase tracking-widest mb-6">12-Month Search Metrics</h4>
                <div className="space-y-8">
                  <div>
                    <div className="text-5xl font-black text-[#FF4D00] tracking-tighter">1.38K</div>
                    <div className="text-sm font-bold text-brand-dark mt-1">Organic Clicks</div>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-brand-dark tracking-tighter">28.5K</div>
                    <div className="text-sm font-bold text-gray-500 mt-1">Search Impressions</div>
                  </div>
                  <div className="flex gap-12 pt-8 border-t border-gray-100">
                    <div>
                      <div className="text-2xl font-black text-brand-dark tracking-tighter">4.9%</div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">CTR</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-brand-dark tracking-tighter">12</div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Avg Position</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-dark rounded-[3rem] p-10 text-white shadow-xl shadow-brand-dark/20">
                <div className="flex items-center gap-4 mb-6 text-[#FF4D00]">
                  <LineChart size={24} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Real-time engagement</span>
                </div>
                <h5 className="text-2xl font-bold font-heading mb-4 leading-tight">65.56% Engagement Rate</h5>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Industrial engagement quality matters more than raw volume. 1m 27s average engagement indicates technical depth is building trust.
                </p>
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-xl font-black text-white tracking-tighter">135</div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Active Users</div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-white tracking-tighter">118</div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Sessions</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 mt-16 lg:mt-0">
               <div className="bg-white rounded-[4rem] border border-gray-100 overflow-hidden shadow-sm">
                <div className="p-8 md:p-12 border-b border-gray-50 bg-gray-50/30">
                  <h3 className="text-2xl font-bold font-heading tracking-tight">Performance Summary Table</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-100 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                        <th className="px-12 py-8">SEO Metric</th>
                        <th className="px-12 py-8">Before Strategy</th>
                        <th className="px-12 py-8 text-[#FF4D00]">After Implementation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-medium">
                      {[
                        { m: "Organic Visibility", b: "Low / Limited", a: "Strong & Steady Growth" },
                        { m: "Organic Clicks", b: "Minimal", a: "1.38K+ (Qualified Lead Paths)" },
                        { m: "Search Impressions", b: "Low Discovery", a: "28.5K+ Relevant Impacts" },
                        { m: "Average Position", b: "Weak Rankings", a: "12 (Targeted Technical Keywords)" },
                        { m: "CTR (Click Through Rate)", b: "Inconsistent", a: "4.9% (Highly Optimized Metadata)" },
                        { m: "Technical Keyword Coverage", b: "Very Limited", a: "Expanded Core Portfolio" },
                        { m: "Product Page Discovery", b: "Static / Weak", a: "Improved Discovery Assets" },
                        { m: "Engagement Quality", b: "Low Dwell Time", a: "Stronger Technical Engagement" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                          <td className="px-12 py-7 text-brand-dark font-bold text-sm tracking-tight">{row.m}</td>
                          <td className="px-12 py-7 text-gray-400 text-sm">{row.b}</td>
                          <td className="px-12 py-7 text-[#FF4D00] font-black text-sm flex items-center gap-3">
                            <TrendingUp size={16} />
                            {row.a}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it Worked & Differences */}
      <section className="px-4 py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <SectionHeader label="ANALYSIS" title="Why These SEO Improvements Worked." />
              <div className="space-y-12">
                {[
                  { t: "Matching Engineering Intent", d: "Industrial buyers prioritize technical accuracy, industrial applicability, and manufacturer trust over broad marketing promises." },
                  { t: "Building Topical Authority", d: "Google rewards niche depth. By focusing deeply on flow instrumentation and process industries, we built durable semantic authority." },
                  { t: "Informational + Commercial Intent", d: "SEO performs best when content supports both technical education and purchasing research during the long research cycle." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-2xl bg-brand-offwhite flex items-center justify-center shrink-0 group-hover:bg-[#FF4D00] group-hover:text-white transition-all shadow-sm">
                      <span className="font-black text-xl">0{i+1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 font-heading tracking-tight text-brand-dark">{item.t}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader label="THE DIFFERENCE" title="Why Industrial SEO is Unique." />
              <div className="bg-brand-offwhite rounded-[3rem] p-10 border border-gray-100 shadow-sm space-y-10">
                {[
                  { t: "Low Volume, High Value", d: "A technical keyword with 50 searches may be worth lakhs in business. Intent matters more than mass traffic." },
                  { t: "Long Buying Cycles", d: "Purchases involve evaluations, comparisons, and approvals. SEO builds long-term authority." },
                  { t: "Technical Content Matters", d: "Thin content fails in technical niches. Engineering depth builds the trust needed for inquiry." },
                  { t: "Engineers Search Differently", d: "Queries focus on specifications, standards, industrial applications, and operational efficiency." }
                ].map((item, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-[#FF4D00]/20 group hover:border-[#FF4D00] transition-colors">
                    <h5 className="text-lg font-bold text-brand-dark mb-2 font-heading">{item.t}</h5>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed italic">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Lessons Section */}
      <section className="px-4 py-32 bg-[#0A0A0A] text-white rounded-[4rem] mx-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,#FF4D0008,transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <SectionHeader label="KEY LESSONS" title="SEO Insights for Manufacturers." light />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
             {[
               { t: "Product Pages Are Assets", d: "Pages shouldn't function like static catalogs. They must answer engineering concerns immediately." },
               { t: "Authority Over Generic Marketing", d: "Educational engineering content builds trust and long-term ranking stability." },
               { t: "Patience is Compounding", d: "Authority growth in manufacturing is gradual but results in highly durable visibility." },
               { t: "Intent > Volume", d: "A few highly targeted industrial visitors are worth thousands of irrelevant users." },
               { t: "Domain Fluency is Required", d: "Content requires industrial understanding. Shallow writing fails to rank or convert technical buyers." },
               { t: "Search Intent Alignment", d: "SEO works when you become discoverable exactly when buyers research technical solutions." }
             ].map((lesson, i) => (
               <div key={i} className="bg-white/5 border border-white/5 p-10 rounded-[3rem] text-left hover:bg-white/10 transition-colors group">
                 <div className="text-[#FF4D00] font-black text-xs uppercase tracking-widest mb-6">Lesson 0{i+1}</div>
                 <h4 className="text-xl font-bold mb-4 font-heading tracking-tight">{lesson.t}</h4>
                 <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-gray-300 transition-colors">{lesson.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Detailed FAQ Section */}
      <section className="px-4 py-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader label="FAQ" title="Frequently Asked Questions." />
          
          <div className="space-y-4">
            {[
              { q: "How can flow meter manufacturers generate leads online?", a: "Manufacturers can generate leads through industrial SEO, technical content marketing, application-specific landing pages, LinkedIn outreach, and educational engineering content. SEO works especially well because buyers search for specifications and credibility before inquiries." },
              { q: "Does SEO work for industrial manufacturing companies?", a: "Yes. SEO is highly effective because search traffic in manufacturing typically carries strong commercial intent. Buyers searching for technical industrial products are often already in the research or procurement stage." },
              { q: "What is industrial SEO?", a: "Industrial SEO refers to strategies specifically designed for manufacturing, engineering, automation, instrumentation, and industrial businesses. It focuses on technical content, B2B buying cycles, and authority building." },
              { q: "Why is technical content important in manufacturing SEO?", a: "Technical content builds trust with engineers and procurement teams. It also helps search engines understand topical expertise and improves rankings for technical industry-specific search queries." },
              { q: "How long does manufacturing SEO take?", a: "Industrial SEO generally takes several months before strong momentum develops. Since search volumes are lower and keywords more specialized, authority-building and content depth are critical." },
              { q: "What keywords should flowmeter companies target?", a: "They should target manufacturers/suppliers keywords for specific meters (Electromagnetic, Ultrasonic, Vortex, etc.), industrial instrumentation keywords, and application-based keywords like 'wastewater flow monitoring'." },
              { q: "Is Google Ads enough for industrial lead generation?", a: "Google Ads supports short-term leads, but SEO builds long-term visibility and trust. Industrial buyers research extensively before contacting suppliers, and organic presence builds higher credibility." },
              { q: "How does SEO help B2B manufacturing companies?", a: "It improves online visibility, ranks for specialized keywords, generates inbound inquiries, reduces distributor dependency, and builds technical authority to attract procurement searches." },
              { q: "What type of content ranks in industrial SEO?", a: "Technical guides, product comparisons, application pages, industry use cases, technical FAQs, and specification-oriented landing pages." },
              { q: "Why do engineering companies need SEO?", a: "Because technical buyers increasingly research solutions online before initiating conversations. Strong visibility improves trust and increases inbound business opportunities." }
            ].map((faq, i) => (
              <details key={i} className="group bg-brand-offwhite rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 open:bg-white open:shadow-xl">
                <summary className="px-8 py-8 flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-brand-dark pr-8 font-heading tracking-tight">{faq.q}</h4>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ChevronRight size={16} className="text-[#FF4D00]" />
                  </div>
                </summary>
                <div className="px-8 pb-8">
                  <div className="w-full h-px bg-gray-100 mb-6"></div>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Internal Linking (Subtle Footer Area) */}
      <section className="px-4 py-24 bg-[#F9F9F9] border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             <div className="space-y-4">
                <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF4D00]">Internal Assets</h5>
                <ul className="space-y-3 text-xs font-bold text-gray-400">
                   <li><Link to="/services" className="hover:text-brand-dark transition-colors">Industrial SEO Services</Link></li>
                   <li><Link to="/services" className="hover:text-brand-dark transition-colors">SEO for Manufacturers</Link></li>
                   <li><Link to="/services" className="hover:text-brand-dark transition-colors">B2B Lead Generation</Link></li>
                   <li><Link to="/services" className="hover:text-brand-dark transition-colors">Technical SEO Audit</Link></li>
                </ul>
             </div>
             <div className="space-y-4 text-center md:text-left lg:col-span-2">
                <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF4D00]">Final Thoughts</h5>
                <p className="text-xs font-bold text-gray-500 leading-relaxed italic max-w-md">
                  Industrial SEO is about becoming discoverable when high-intent buyers search for technical solutions. Long-term organic visibility compounds into stronger authority and sustainable lead generation.
                </p>
             </div>
             <div className="text-right">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF4D00] mb-4">Metadata</div>
                <div className="text-xs text-gray-400 leading-relaxed italic">
                  Slug: /how-to-generate-leads-online-for-flowmeter-manufacturing-companies/
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <section className="py-24 bg-[#0A0A0A] text-white relative z-10 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-[800] tracking-tight mb-0 leading-[1.1] font-heading">
                Ready to build your <br />
                <span className="text-[#FF4D00]">industrial authority?</span> <br />
                Book a consultation today.
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

export default CaseStudyIotaflow;
