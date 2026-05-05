import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer';
import { 
  Search, BarChart2, Globe, Code, PenTool, Mail, 
  ShieldCheck, PieChart, Zap, Layers, CheckCircle2,
  Plus, Minus, ArrowRight
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc, features, color = "orange" }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col h-full group"
  >
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${color === 'orange' ? 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-4 font-heading leading-tight">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
    <div className="space-y-3 pt-6 border-t border-gray-50">
      {features.map((feature, i) => (
        <div key={i} className="flex items-center gap-3 text-xs font-medium text-gray-600">
          <ArrowRight size={14} className="text-brand-orange" />
          {feature}
        </div>
      ))}
    </div>
  </motion.div>
);

const PricingCard = ({ plan, price, features, recommended = false }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className={`p-8 rounded-[2.5rem] shadow-xl flex flex-col h-full relative ${recommended ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark border border-gray-100'}`}
  >
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
        Most Popular
      </div>
    )}
    <h3 className="text-xl font-bold mb-2 font-heading">{plan}</h3>
    <p className={`text-xs mb-8 ${recommended ? 'text-gray-400' : 'text-gray-500'}`}>Perfect for growing businesses</p>
    <div className="mb-8 flex items-baseline gap-1">
      <span className="text-4xl font-black font-heading">{price}</span>
      <span className={`text-sm ${recommended ? 'text-gray-400' : 'text-gray-500'}`}>/month</span>
    </div>
    <div className="space-y-4 mb-10 flex-grow">
      {features.map((f, i) => (
        <div key={i} className="flex items-center gap-3 text-xs font-medium">
          <CheckCircle2 size={16} className="text-brand-orange shrink-0" />
          {f}
        </div>
      ))}
    </div>
    <button className={`w-full py-4 rounded-full font-bold text-sm transition-all duration-300 ${recommended ? 'bg-brand-orange text-white hover:bg-white hover:text-brand-dark' : 'bg-white border border-gray-200 text-brand-dark hover:bg-brand-dark hover:text-white'}`}>
      Get a Quote
    </button>
  </motion.div>
);

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-base font-bold text-brand-dark group-hover:text-brand-orange transition-colors pr-8 leading-tight">{question}</span>
        <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={18} className="text-brand-orange" /> : <Plus size={18} className="text-gray-400 group-hover:text-brand-orange" />}
        </div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-sm text-gray-500 leading-relaxed max-w-3xl">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

const Services = () => {
  const [openIndex, setOpenIndex] = React.useState(0);

  const faqs = [
    {
      question: "How long before I see results from SEO?",
      answer: "SEO is a long-term investment. You'll typically see initial movement in rankings within 60-90 days, with significant organic traffic growth at the 4-6 month mark. We set realistic expectations from day one and show you progress monthly."
    },
    {
      question: "What is your minimum ad spend requirement?",
      answer: "We recommend a minimum ad spend of ₹15,000–20,000/month for Google or Meta campaigns to have enough data to optimize effectively. Our management fees are separate and quoted based on your scope."
    },
    {
      question: "Do you offer month-to-month contracts?",
      answer: "Yes. We don't lock clients into long-term contracts because we believe results should keep you with us — not fine print. We typically ask for a 3-month minimum for new campaigns to have enough runway to show meaningful results."
    },
    {
      question: "Can you help if I have an existing website?",
      answer: "Absolutely. We start with a comprehensive audit of your existing site and assets. In many cases we can work with what you have, optimizing and improving it rather than building from scratch — saving you time and cost."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have deep experience in law firms, real estate, manufacturing, e-commerce, healthcare, local retail, startups, hospitality, and B2B services. We tailor our strategies to your specific industry dynamics and buyer behavior."
    },
    {
      question: "How will I know my campaigns are performing?",
      answer: "You'll have access to a live reporting dashboard updated in real time, plus weekly email summaries and a monthly strategy review call with our account lead. Complete transparency, always."
    }
  ];

  return (
    <div className="pt-32 overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-4 mb-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-[2px] bg-brand-orange"></span>
            <span className="text-[#FF4D00] font-bold tracking-widest text-xs uppercase">Our Services</span>
            <span className="w-8 h-[2px] bg-brand-orange"></span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[42px] md:text-[5rem] font-[800] text-brand-dark mb-10 leading-[1.3] font-heading tracking-[-0.05em] pb-2"
          >
            Every Service <br className="hidden md:block" /> 
            You Need to <br className="hidden md:block" />
            <span className="text-brand-orange">Dominate</span> <br className="hidden md:block" />
            Your Market <br className="hidden md:block" />
            Online
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We offer end-to-end digital marketing solutions — each one built to integrate with the others for compounding, measurable growth.
          </motion.p>
        </div>
      </section>

      {/* Complete Service Suite */}
      <section className="px-4 py-24 bg-white/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-4 block">What We Offer</span>
            <h2 className="text-4xl md:text-[4rem] font-bold text-brand-dark font-heading leading-tight tracking-tight pb-2">
              Our Complete <br /> Service Suite
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Core Row */}
            <ServiceCard 
              icon={Search}
              title="Search Engine Optimization (SEO)"
              desc="Long-term, sustainable traffic from Google that doesn't disappear when you stop paying. We build authority that compounds."
              features={[
                "Technical SEO Audits & Fixes",
                "Keyword Research & Content Strategy",
                "On-Page & Off-Page Optimization",
                "Local SEO for Geo-Targeted Growth",
                "Link Building & Digital PR",
                "Monthly Ranking Reports"
              ]}
            />
            <ServiceCard 
              icon={BarChart2}
              title="Pay-Per-Click Advertising (PPC)"
              desc="Precision-targeted ad campaigns that convert clicks into customers. We manage every rupee for maximum ROI."
              features={[
                "Google Search & Display Ads",
                "Meta (Facebook & Instagram) Ads",
                "YouTube & Video Advertising",
                "Remarketing & Retargeting",
                "Landing Page Optimization",
                "Real-Time Bid Management"
              ]}
            />
            <ServiceCard 
              icon={Code}
              title="Website Development"
              desc="Fast, beautiful, conversion-ready websites that rank on Google and turn visitors into paying customers."
              features={[
                "Custom Website Design & Development",
                "Landing Page Creation",
                "E-commerce Development",
                "Core Web Vitals Optimization",
                "Mobile-First Responsive Design",
                "CMS Integration (WordPress, Shopify)"
              ]}
            />

            {/* Content & Social Row */}
            <ServiceCard 
              icon={Globe}
              title="Social Media Marketing (SMM)"
              desc="Strategic social presence that builds community, drives engagement, and converts followers into customers."
              features={[
                "Content Calendar & Strategy",
                "Instagram, LinkedIn, Facebook Management",
                "Reels, Stories & Video Content",
                "Influencer Outreach & Collaboration",
                "Community Management & Engagement",
                "Social Commerce Setup"
              ]}
            />
            <ServiceCard 
              icon={PenTool}
              title="Content Marketing"
              desc="High-quality content that educates, attracts, and converts your target audience at every stage of the funnel."
              features={[
                "Blog Posts & SEO Articles",
                "Case Studies & Whitepapers",
                "Video Scripts & Copywriting",
                "Infographics & Visual Content",
                "Content Audits & Gap Analysis",
                "Thought Leadership Content"
              ]}
            />
            <ServiceCard 
              icon={Mail}
              title="Email Marketing"
              desc="Automated email sequences that nurture leads, retain customers, and recover lost revenue — on autopilot."
              features={[
                "Email Strategy & List Building",
                "Newsletter Design & Copywriting",
                "Automated Drip Sequences",
                "Segmentation & Personalization",
                "A/B Testing & Optimization",
                "Abandoned Cart & Recovery Campaigns"
              ]}
            />

            {/* Performance & Tech Row */}
            <ServiceCard 
              icon={PieChart}
              title="Analytics & Tracking"
              desc="Know exactly where your customers come from and what makes them convert. We set up the systems to show you the full picture."
              features={[
                "GA4 Setup & Configuration",
                "Google Tag Manager Integration",
                "Custom Dashboard Creation",
                "Conversion Tracking & Attribution",
                "Heatmaps & Session Recording",
                "Monthly Data Reports & Insights"
              ]}
            />
            <ServiceCard 
              icon={Zap}
              title="Conversion Rate Optimization (CRO)"
              desc="Make more money from your existing traffic. We identify bottlenecks and systematically eliminate them."
              features={[
                "A/B & Multivariate Testing",
                "UX & UI Audit",
                "Funnel Analysis & Optimization",
                "Landing Page Split Testing",
                "Copy & CTA Optimization",
                "User Behavior Analysis"
              ]}
            />
            <ServiceCard 
              icon={Layers}
              title="Technical Marketing"
              desc="The behind-the-scenes infrastructure that makes all your marketing channels work better together."
              features={[
                "Marketing Automation Setup",
                "CRM Integration & Management",
                "API & Third-Party Integrations",
                "Site Speed & Performance Optimization",
                "Schema Markup & Structured Data",
                "Technical SEO Implementation"
              ]}
            />

            {/* Reputation Card (Span 1) */}
            <ServiceCard 
              icon={ShieldCheck}
              title="Online Reputation Management (ORM)"
              desc="Build, protect, and manage your brand's reputation across the web — especially crucial for lawyers and real estate professionals."
              features={[
                "Google Business Profile Optimization",
                "Review Generation Campaigns",
                "Negative Review Response Strategy",
                "Brand Monitoring & Alerts",
                "Competitor Reputation Analysis"
              ]}
              color="blue"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-32 bg-[#F9F8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-4 block">Pricing</span>
            <h2 className="text-4xl md:text-[4rem] font-bold text-brand-dark font-heading leading-tight tracking-tight mb-8 pb-2">
              Transparent, <br /> Flexible Packages
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              No hidden fees. No lock-in contracts. Pick the package that fits your growth stage — or let us build a custom plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              plan="Starter"
              price="Custom"
              features={[
                "SEO Foundation Setup",
                "Social Media Management (2 platforms)",
                "Basic Google Ads Setup",
                "Monthly Performance Report",
                "Email Support"
              ]}
            />
            <PricingCard 
              plan="Growth"
              price="Custom"
              recommended={true}
              features={[
                "Full SEO Campaign",
                "PPC Management (Google + Meta)",
                "Social Media (3 platforms)",
                "Content Marketing (4 blogs/mo)",
                "Email Marketing Setup",
                "Analytics Dashboard",
                "Bi-Weekly Strategy Calls"
              ]}
            />
            <PricingCard 
              plan="Enterprise"
              price="Custom"
              features={[
                "Everything in Growth",
                "CRO Program",
                "Technical Marketing Setup",
                "Reputation Management",
                "Dedicated Account Manager",
                "Weekly Reporting & Calls",
                "Custom Integrations"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-4 block">Tech Stack</span>
            <h2 className="text-4xl md:text-[4rem] font-bold text-brand-dark font-heading leading-tight tracking-tight pb-2">
              Tools We Use to <br /> Get You Results
            </h2>
            <p className="text-gray-500 text-sm mt-6 max-w-lg">
              Industry-leading tools combined with human expertise. We use the same platforms as the world's top agencies.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Google Analytics 4", "Google Search Console", "SEMrush", "Ahrefs", "Google Ads", 
              "Meta Ads Manager", "Hotjar", "Mailchimp", "HubSpot", "Google Tag Manager",
              "WordPress", "Shopify", "Canva Pro", "Meta Business Suite", "Moz",
              "Screaming Frog", "Klaviyo", "Looker Studio", "Notion", "Slack"
            ].map((tool, i) => (
              <span key={i} className="px-6 py-3 bg-white border border-gray-100 rounded-full text-xs font-bold text-gray-600 shadow-sm hover:shadow-md transition-shadow">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Programs */}
      <section className="px-4 py-32 bg-white/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-4 block">Specialized Solutions</span>
            <h2 className="text-4xl md:text-[4rem] font-bold text-brand-dark font-heading leading-tight tracking-tight pb-2">
              Industry-Specific <br /> Marketing Programs
            </h2>
            <p className="text-gray-500 text-sm mt-6">
              We don't sell generic marketing. Here's how we approach some of our key verticals:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Legal Marketing Program", icon: "⚖️", label: "Law Firms" },
              { title: "Real Estate Growth Program", icon: "🏠", label: "Real Estate" },
              { title: "B2B Manufacturing Program", icon: "🏭", label: "Manufacturing" },
              { title: "Startup Growth Program", icon: "🚀", label: "Startups" },
              { title: "Local Business Domination", icon: "🏪", label: "Local Biz" },
              { title: "Healthcare Marketing Program", icon: "🏥", label: "Healthcare" },
            ].map((program, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-lg">{program.icon}</span>
                  <span className="text-[10px] font-bold text-[#FF4D00] uppercase tracking-widest">— {program.label}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-dark font-heading mb-4 leading-tight">{program.title}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed mb-0">
                  Tailored strategies designed specifically for {program.label.toLowerCase()} to drive high-intent leads and measurable ROI.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#FF4D00] font-bold tracking-widest text-[16px] uppercase mb-4 block">FAQ</span>
            <h2 className="text-4xl md:text-[4rem] font-bold text-brand-dark font-heading leading-tight tracking-tight pb-2">
              Frequently <br /> Asked Questions
            </h2>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-xl">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#0A0A0A] text-white relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="max-w-3xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-0 leading-[1.2] font-heading">
                Not sure which services you need? <br className="hidden lg:block" />
                Let's audit your digital presence for <span className="text-[#FF4D00]">free</span> and tell you exactly what will move the needle.
              </h2>
            </div>

            <div className="flex-shrink-0">
              <Link 
                to="/free-audit"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF4D00] text-white rounded-2xl font-bold text-base hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 shadow-xl shadow-orange-500/20 whitespace-nowrap"
              >
                Book Free Call &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
