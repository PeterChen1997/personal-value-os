import type { APIRoute } from 'astro'

const siteUrl = 'https://peterchen1997.github.io/personal-value-os'
const lastmod = '2026-05-11'

const urls = [
  { loc: `${siteUrl}/`, priority: '1.0' },
  { loc: `${siteUrl}/agent-context.md`, priority: '0.8' },
  { loc: `${siteUrl}/llms.txt`, priority: '0.7' }
]

export const GET: APIRoute = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8'
      }
    }
  )
