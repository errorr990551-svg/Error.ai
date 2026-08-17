import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ customItems }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0 && !customItems) return null;

  const items = customItems || pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}/`;
    const label = value
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return { label, to };
  });

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-900/50 backdrop-blur border-b border-gray-800 text-sm py-3 px-4 sm:px-8">
      <ol className="flex flex-wrap items-center gap-2 max-w-7xl mx-auto text-gray-400">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-brand-orange transition-colors">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />
              {isLast ? (
                <span className="text-gray-200 font-medium truncate max-w-[250px] sm:max-w-md" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="text-gray-400 hover:text-brand-orange transition-colors truncate max-w-[180px]">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
