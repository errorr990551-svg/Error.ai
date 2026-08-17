import json
import os
import re

def build_schema_json(page_data):
    domain = "https://errorr.in"
    slug = page_data.get('clean_slug', '/')
    canonical_url = f"{domain}{slug}"
    title = page_data.get('Title Tag', 'Errorr | B2B Lead Generation for Manufacturers')
    description = page_data.get('Meta Description', '')
    schema_str = page_data.get('Schema', '')
    h1 = page_data.get('H1', title)

    schemas = []

    org_schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Errorr",
        "url": domain,
        "logo": f"{domain}/favicon.png",
        "description": "Industrial SEO & B2B Lead Generation Agency for Indian Manufacturers"
    }

    if 'Organization' in schema_str:
        schemas.append(org_schema)

    if 'WebSite' in schema_str:
        schemas.append({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Errorr",
            "url": domain
        })

    if 'ProfessionalService' in schema_str or 'LocalBusiness' in schema_str:
        schemas.append({
            "@context": "https://schema.org",
            "@type": "LocalBusiness" if 'LocalBusiness' in schema_str else "ProfessionalService",
            "name": "Errorr Industrial SEO & Marketing",
            "image": f"{domain}/favicon.png",
            "@id": canonical_url,
            "url": canonical_url,
            "telephone": "+91-9876543210",
            "priceRange": "₹₹₹",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Peenya Industrial Area",
                "addressLocality": "Bangalore",
                "addressRegion": "KA",
                "postalCode": "560058",
                "addressCountry": "IN"
            }
        })

    if 'Service' in schema_str:
        schemas.append({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": h1,
            "provider": {
                "@type": "Organization",
                "name": "Errorr",
                "url": domain
            },
            "description": description
        })

    h2_list = page_data.get('h2_list', [])
    if 'FAQPage' in schema_str and h2_list:
        main_entities = []
        for q in h2_list[:5]:
            main_entities.append({
                "@type": "Question",
                "name": q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f"Detailed strategy and technical methodology regarding {q} for B2B industrial manufacturers."
                }
            })
        schemas.append({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": main_entities
        })

    if slug != '/':
        parts = [p for p in slug.split('/') if p]
        items = [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": domain
        }]
        accum = ""
        for idx, part in enumerate(parts):
            accum += f"/{part}"
            items.append({
                "@type": "ListItem",
                "position": idx + 2,
                "name": part.replace('-', ' ').title(),
                "item": f"{domain}{accum}/"
            })
        schemas.append({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items
        })

    return schemas

def run_prerender():
    base_dir = os.path.dirname(__file__)
    dist_dir = os.path.abspath(os.path.join(base_dir, '..', 'dist'))
    index_json_path = os.path.abspath(os.path.join(base_dir, '..', 'src', 'data', 'pageMasterIndex.json'))
    template_path = os.path.join(dist_dir, 'index.html')

    if not os.path.exists(template_path):
        print(f"Dist template not found at {template_path}. Please build the app first.")
        return

    with open(template_path, 'r', encoding='utf-8') as f:
        template_html = f.read()

    with open(index_json_path, 'r', encoding='utf-8') as f:
        page_index = json.load(f)

    print(f"Prerendering {len(page_index)} static pages into dist/...")

    domain = "https://errorr.in"

    count = 0
    for slug, page in page_index.items():
        title = page.get('Title Tag', 'Industrial SEO & B2B Lead Generation for Manufacturers | Errorr')
        if 'Errorr' not in title:
            title = f"{title} | Errorr"
        meta_desc = page.get('Meta Description', 'We build search and lead systems for Indian manufacturers.')
        author = page.get('Author', 'Errorr Editorial Team')
        canonical_url = f"{domain}{slug}"
        h1 = page.get('H1', title)
        h2_list = page.get('h2_list', [])

        # Construct raw HTML content for T01 (curl visible body & headings)
        h2_html = "".join([f"<section><h2>{h2}</h2><p>Technical strategy and execution details for {h2}.</p></section>" for h2 in h2_list])
        body_content = f"""
        <div id="root">
          <header>
            <nav><a href="/">Home</a> | <a href="/services/">Services</a> | <a href="/contact/">Contact</a></nav>
            <h1>{h1}</h1>
            <p>{meta_desc}</p>
          </header>
          <main>
            <div className="proof-box">
              <p><strong>Proof Asset:</strong> {page.get('Required Proof Asset', 'Verified client metrics')}</p>
              <p><strong>Unique Value:</strong> {page.get('Mandatory Unique Element', 'B2B industrial benchmarks')}</p>
            </div>
            {h2_html}
          </main>
        </div>
        """

        schemas = build_schema_json(page)
        schema_tag = f'<script id="json-ld-schema" type="application/ld+json">{json.dumps(schemas)}</script>'

        head_tags = f"""
    <title>{title}</title>
    <meta name="description" content="{meta_desc}" />
    <meta name="author" content="{author}" />
    <link rel="canonical" href="{canonical_url}" />
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="{meta_desc}" />
    <meta property="og:url" content="{canonical_url}" />
    {schema_tag}
        """

        # Inject into template
        html = re.sub(r'<title>.*?</title>', '', template_html)
        html = re.sub(r'<meta\s+name="description".*?>', '', html)
        html = re.sub(r'<meta\s+name="author".*?>', '', html)
        html = re.sub(r'<link\s+rel="canonical".*?>', '', html)

        html = html.replace('</head>', f'{head_tags}\n</head>')

        # Replace root div
        html = re.sub(r'<div id="root"></div>', body_content, html)

        # Output path
        clean_path = slug.strip('/')
        if clean_path == '':
            target_file = os.path.join(dist_dir, 'index.html')
        else:
            target_dir = os.path.join(dist_dir, clean_path)
            os.makedirs(target_dir, exist_ok=True)
            target_file = os.path.join(target_dir, 'index.html')

        with open(target_file, 'w', encoding='utf-8') as out_f:
            out_f.write(html)

        count += 1

    print(f"Successfully prerendered {count} static HTML files in dist/!")

if __name__ == '__main__':
    run_prerender()
