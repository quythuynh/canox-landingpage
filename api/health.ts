import { isDbConfigured } from './_lib/waitlist.js'

export async function GET() {
  return Response.json({ ok: true, db: isDbConfigured() ? 'postgres' : 'not_configured' })
}
