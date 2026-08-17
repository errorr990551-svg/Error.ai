import json
import os
from datetime import datetime

def generate_sitemap_and_robots():
    base_dir = os.path.dirname(__file__)
    index_path = os.path.abspath(os.path.join(base_dir, '..', 'src', 'data', 'pageMasterIndex.json'))
    public_dir = os.path.abspath(os.path.join(base_dir, '..', 'public'))
    
    os.makedirs(public_dir, exist_ok=True)
    
    with open(index_path, 'r', encoding='utf-8') as f:
        page_index = json.load(f)
        
    domain = "https://errorr.in"
    today = datetime.now().strftime("%Y-%m-%d")
    
    # Build Sitemap XML
    xml_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    ]
    
    for slug, page in page_index.items():
        loc = f"{domain}{slug}"
        tier = page.get('Tier', 'P2')
        if tier == 'P0':
            priority = "1.0"
            changefreq = "weekly"
        elif tier == 'P1':
            priority = "0.8"
            changefreq = "monthly"
        else:
            priority = "0.6"
            changefreq = "monthly"
            
        xml_lines.append("  <url>")
        xml_lines.append(f"    <loc>{loc}</loc>")
        xml_lines.append(f"    <lastmod>{today}</lastmod>")
        xml_lines.append(f"    <changefreq>{changefreq}</changefreq>")
        xml_lines.append(f"    <priority>{priority}</priority>")
        xml_lines.append("  </url>")
        
    xml_lines.append('</urlset>')
    
    sitemap_content = "\n".join(xml_lines)
    sitemap_path = os.path.join(public_dir, 'sitemap.xml')
    with open(sitemap_path, 'w', encoding='utf-8') as f:
        f.write(sitemap_content)
        
    print(f"Generated sitemap with {len(page_index)} URLs at {sitemap_path}")
    
    # Build robots.txt (T04, T05, T08)
    robots_content = f"""# Robots.txt for errorr.in
User-agent: *
Allow: /

# Allow AI Assistant Crawlers (T08)
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

# Sitemap Index (T04, T05)
Sitemap: {domain}/sitemap.xml
"""
    robots_path = os.path.join(public_dir, 'robots.txt')
    with open(robots_path, 'w', encoding='utf-8') as f:
        f.write(robots_content.strip())
        
    print(f"Updated robots.txt at {robots_path}")

if __name__ == '__main__':
    generate_sitemap_and_robots()
