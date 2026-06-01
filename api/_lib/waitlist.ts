import { neon } from '@neondatabase/serverless'

export type WaitlistRole = 'shop' | 'buyer'

export type WaitlistRow = {
  id: number
  email: string
  role: WaitlistRole | null
  created_at: string
}

let tableReady: Promise<void> | null = null

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL not set')
  return neon(url)
}

function ensureTable() {
  if (!tableReady) {
    const sql = getSql()
    tableReady = sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        role TEXT CHECK (role IS NULL OR role IN ('shop', 'buyer')),
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `.then(() => undefined)
  }
  return tableReady
}

export async function addToWaitlist(
  email: string,
  role: WaitlistRole | null,
): Promise<WaitlistRow> {
  await ensureTable()
  const sql = getSql()
  const rows = await sql`
    INSERT INTO waitlist (email, role)
    VALUES (${email}, ${role})
    RETURNING id, email, role, created_at::text
  `
  return rows[0] as WaitlistRow
}

export async function listWaitlist(): Promise<WaitlistRow[]> {
  await ensureTable()
  const sql = getSql()
  const rows = await sql`
    SELECT id, email, role, created_at::text FROM waitlist ORDER BY id DESC
  `
  return rows as WaitlistRow[]
}

export function isDbConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL)
}
