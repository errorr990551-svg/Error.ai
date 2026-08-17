import React, { useEffect } from 'react';

export function buildSchemaJSON(pageData) {
  const domain = "https://errorr.in";
  const slug = pageData?.clean_slug || "/";
  const canonicalUrl = `${domain}${slug}`;
  const title = pageData?.['Title Tag'] || "Errorr | B2B Lead Generation for Manufacturers";
  const description = pageData?.['Meta Description'] || "";
  const schemaStr = pageData?.['Schema'] || "";
  const h1 = pageData?.['H1'] || title;

  const schemas = [];

  // Base Organization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Errorr",
    "url": domain,
    "logo": `${domain}/favicon.png`,
    "description": "Industrial SEO & B2B Lead Generation Agency for Indian Manufacturers",
    "sameAs": [
      "https://www.linkedin.com/company/errorr-industrial"
    ]
  };

  // Check Schema keywords from column Q
  if (schemaStr.includes('Organization')) {
    schemas.push(orgSchema);
  }

  if (schemaStr.includes('WebSite')) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Errorr",
      "url": domain,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${domain}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    });
  }

  if (schemaStr.includes('ProfessionalService') || schemaStr.includes('LocalBusiness')) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": schemaStr.includes('LocalBusiness') ? "LocalBusiness" : "ProfessionalService",
      "name": "Errorr Industrial SEO & Marketing",
      "image": `${domain}/favicon.png`,
      "@id": canonicalUrl,
      "url": canonicalUrl,
      "telephone": "+91-9876543210",
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Peenya Industrial Area",
        "addressLocality": "Bangalore",
        "addressRegion": "KA",
        "postalCode": "560058",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.03,
        "longitude": 77.52
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    });
  }

  if (schemaStr.includes('Service')) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": h1,
      "provider": {
        "@type": "Organization",
        "name": "Errorr",
        "url": domain
      },
      "areaServed": "IN",
      "description": description
    });
  }

  if (schemaStr.includes('FAQPage') && pageData?.h2_list?.length > 0) {
    const mainEntities = pageData.h2_list.slice(0, 5).map(question => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Detailed information and strategy regarding ${question} tailored specifically for industrial manufacturers.`
      }
    }));
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": mainEntities
    });
  }

  // Breadcrumbs schema
  if (slug !== '/') {
    const parts = slug.split('/').filter(Boolean);
    const itemListElement = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": domain
      }
    ];

    let accumulated = '';
    parts.forEach((part, idx) => {
      accumulated += `/${part}`;
      itemListElement.push({
        "@type": "ListItem",
        "position": idx + 2,
        "name": part.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        "item": `${domain}${accumulated}/`
      });
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    });
  }

  return schemas;
}

const SEOHead = ({ pageData }) => {
  useEffect(() => {
    if (!pageData) return;

    const domain = "https://errorr.in";
    const slug = pageData.clean_slug || "/";
    const canonicalUrl = `${domain}${slug}`;
    const rawTitle = pageData['Title Tag'] || "Errorr | B2B Lead Generation for Manufacturers";
    const title = rawTitle.includes('Errorr') ? rawTitle : `${rawTitle} | Errorr`;
    const description = pageData['Meta Description'] || "";
    const author = pageData['Author'] || "Errorr Editorial Team";

    // 1. Title
    document.title = title;

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // 3. Meta author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.name = 'author';
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.content = author;

    // 4. Canonical link (T06)
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // 5. OpenGraph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = description;

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = canonicalUrl;

    // 6. JSON-LD Schema (T07)
    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    const schemas = buildSchemaJSON(pageData);
    if (schemas.length > 0) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemas);
      document.head.appendChild(script);
    }
  }, [pageData]);

  return null;
};

export default SEOHead;
