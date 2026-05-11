import type { APIRoute } from 'astro'
import { buildAgentContext } from '../utils/llms'

export const GET: APIRoute = () =>
  new Response(buildAgentContext(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8'
    }
  })
