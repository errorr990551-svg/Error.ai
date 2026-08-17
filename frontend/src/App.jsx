import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AuditPopup from "./components/common/AuditPopup";

// Static Pages
import Home from "./pages/Home";
import FreeAudit from "./pages/FreeAudit";
import Services from "./pages/Services";
import About from "./pages/About";
import CaseStudyIotaflow from "./pages/CaseStudyIotaflow";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Dynamic Master Renderers
import MasterPageRenderer from "./pages/MasterPageRenderer";
import HubPageRenderer from "./pages/HubPageRenderer";
import InteractiveToolRenderer from "./pages/InteractiveToolRenderer";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Route Selector component that inspects pathname
const DynamicRouteHandler = () => {
  const location = useLocation();
  const rawPath = location.pathname;
  const slug = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;

  const hubs = ['/services/', '/industries/', '/locations/', '/export-markets/', '/compare/', '/case-studies/', '/pricing/', '/tools/'];

  if (slug.startsWith('/tools/')) {
    return <InteractiveToolRenderer />;
  }

  if (hubs.includes(slug)) {
    return <HubPageRenderer />;
  }

  return <MasterPageRenderer />;
};

const App = () => {
  return (
    <div className="min-h-screen bg-brand-offwhite font-sans text-brand-dark selection:bg-brand-orange/20 selection:text-brand-orange">
      <ScrollToTop />
      <Navbar />
      <AuditPopup />
      <Routes>
        {/* Main core static routes */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies/iotaflow" element={<CaseStudyIotaflow />} />
        <Route path="/free-audit" element={<FreeAudit />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Catch-all for all 1,000 Excel SEO Master pages */}
        <Route path="*" element={<DynamicRouteHandler />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;