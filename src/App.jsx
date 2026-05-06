import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from "./components/common/Navbar";
import AuditPopup from "./components/common/AuditPopup";
import Home from "./pages/Home";
import FreeAudit from "./pages/FreeAudit";
import Services from "./pages/Services";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <div className="min-h-screen bg-brand-offwhite font-sans text-brand-dark selection:bg-brand-orange/20 selection:text-brand-orange">
      <ScrollToTop />
      <Navbar />
      <AuditPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/free-audit" element={<FreeAudit />} />
      </Routes>
    </div>
  );
};

export default App;