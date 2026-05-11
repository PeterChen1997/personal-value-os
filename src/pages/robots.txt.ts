import type { APIRoute } from 'astro'

const siteUrl = 'https://peterchen1997.github.io/personal-value-os'

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    }
  )
