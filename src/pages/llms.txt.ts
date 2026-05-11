import type { APIRoute } from 'astro'
import { buildLlmsText } from '../utils/llms'

export const GET: APIRoute = () =>
  new Response(buildLlmsText(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8'
    }
  })
