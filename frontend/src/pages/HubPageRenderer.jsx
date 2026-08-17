import React, { useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/seo/Breadcrumbs';
import pageMaster from '../data/pageMaster.json';
import pageMasterIndex from '../data/pageMasterIndex.json';
import { Search, ArrowRight, Layers } from 'lucide-react';

const HubPageRenderer = () => {
  const location = useLocation();
  const slug = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
  const hubData = pageMasterIndex[slug] || {
    'Title Tag': 'Industrial SEO & B2B Lead Hubs | Errorr',
    'H1': 'Industrial Marketing Directories & Hubs',
    'clean_slug': slug,
    'h2_list': [
      'Overview of specialized industrial hubs',
      'All child pages and target industries',
      'Proven methodology and case studies',
      'How to get started'
    ]
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 48;

  // Filter children
  const childPages = useMemo(() => {
    return pageMaster.filter((p) => {
      const parentLink = p['Parent Hub (link in)'] || '';
      const childSlug = p.clean_slug || '';
      
      if (slug === '/services/') return childSlug.startsWith('/services/') && childSlug !== '/services/';
      if (slug === '/industries/') return childSlug.includes('/for/') || childSlug.startsWith('/industries/');
      if (slug === '/locations/') return childSlug.includes('/bangalore/') || childSlug.includes('/pune/') || childSlug.includes('/chennai/') || childSlug.includes('/manesar/') || childSlug.includes('/mumbai/') || childSlug.includes('/ahmedabad/') || childSlug.startsWith('/locations/');
      if (slug === '/export-markets/') return childSlug.startsWith('/export-markets/');
      if (slug === '/compare/') return childSlug.startsWith('/compare/') || childSlug.startsWith('/best/');
      if (slug === '/case-studies/') return childSlug.startsWith('/case-studies/');
      if (slug === '/pricing/') return childSlug.startsWith('/pricing/');
      if (slug === '/tools/') return childSlug.startsWith('/tools/');
      
      return parentLink.includes(slug) || childSlug.startsWith(slug);
    });
  }, [slug]);

  const filteredChildren = useMemo(() => {
    if (!searchTerm) return childPages;
    return childPages.filter(
      (p) =>
        p.H1?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p['Title Tag']?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.clean_slug?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [childPages, searchTerm]);

  const totalPages = Math.ceil(filteredChildren.length / itemsPerPage);
  const paginatedChildren = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredChildren.slice(start, start + itemsPerPage);
  }, [filteredChildren, currentPage]);

  return (
    <div className="pt-24 bg-brand-offwhite font-sans text-brand-dark min-h-screen overflow-x-hidden">
      <SEOHead pageData={hubData} />
      <Breadcrumbs />

      {/* Hero */}
      <section className="px-4 py-16 mb-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-brand-orange text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-8 h-[2px] bg-brand-orange mr-3"></span>
            Directory Hub ({childPages.length} Pages)
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 leading-tight font-heading tracking-tight">
            {hubData.H1 || hubData['Title Tag']}
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed font-medium">
            {hubData['Meta Description'] || 'Browse our complete directory of specialized B2B lead generation hubs, sector benchmarks, and geographic industrial marketing capabilities.'}
          </p>

          {/* Search bar */}
          <div className="mt-8 relative max-w-xl">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder={`Search ${childPages.length} pages in this hub...`}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-3.5 bg-brand-offwhite border border-gray-200 rounded-2xl text-brand-dark focus:outline-none focus:border-brand-orange text-sm font-medium"
            />
          </div>
        </div>
      </section>

      {/* Grid of Children */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-brand-dark font-heading">
            Child Pages ({filteredChildren.length})
          </h2>
          {totalPages > 1 && (
            <div className="text-xs font-semibold text-gray-500">
              Page {currentPage} of {totalPages}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedChildren.map((child, idx) => (
            <Link
              key={idx}
              to={child.clean_slug}
              className="bg-white border border-gray-100 hover:border-brand-orange hover:shadow-xl rounded-3xl p-6 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-brand-orange font-bold uppercase tracking-wider mb-3">
                  <span>{child.Tier || 'P1'} • {child.Cluster || 'Directory'}</span>
                  <span className="px-2.5 py-0.5 bg-brand-offwhite rounded-md text-gray-600 text-[10px] font-semibold">{child['Page Type']}</span>
                </div>
                <h3 className="text-base font-bold text-brand-dark group-hover:text-brand-orange transition-colors line-clamp-2 mb-2 font-heading">
                  {child.H1 || child['Title Tag']}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                  {child['Meta Description']}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-brand-dark group-hover:text-brand-orange">
                <span>View Route Specs</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-3">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-brand-dark hover:bg-brand-dark hover:text-white disabled:opacity-40 transition-all"
            >
              Previous
            </button>
            <span className="text-xs font-semibold text-gray-600 px-4">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-brand-dark hover:bg-brand-dark hover:text-white disabled:opacity-40 transition-all"
            >
              Next
            </button>
          </div>
        )}
      </section>

      {/* H2 Outlines */}
      <section className="px-4 py-16 max-w-4xl mx-auto space-y-6">
        {hubData.h2_list?.map((h2, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-brand-dark font-heading mb-2">{h2}</h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
              Every route under this cluster is optimized with unique title tags, custom meta descriptions, structural JSON-LD schema, and technical proof assets required for high-intent B2B search visibility.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HubPageRenderer;
