import { addToWaitlist, isDbConfigured, listWaitlist, type WaitlistRole } from './_lib/waitlist.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function parseRole(value: unknown): WaitlistRole | null {
  if (value === undefined || value === null || value === '') return null
  if (value === 'shop' || value === 'buyer') return value
  return null
}

function dbNotReady() {
  return Response.json(
    { error: 'Database chưa cấu hình. Thêm Neon Postgres trong Vercel → Storage.' },
    { status: 503 },
  )
}

export async function GET() {
  if (!isDbConfigured()) return dbNotReady()

  try {
    const data = await listWaitlist()
    return Response.json({ data })
  } catch (err) {
    console.error(err)
    return Response.json({ error: 'Lỗi server' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  if (!isDbConfigured()) return dbNotReady()

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Body JSON không hợp lệ' }, { status: 400 })
  }

  const email =
    typeof (body as { email?: unknown })?.email === 'string'
      ? (body as { email: string }).email.trim().toLowerCase()
      : ''
  const role = parseRole((body as { role?: unknown })?.role)

  if (!email || !EMAIL_RE.test(email)) {
    return Response.json({ error: 'Email không hợp lệ' }, { status: 400 })
  }

  if (
    (body as { role?: unknown })?.role !== undefined &&
    (body as { role?: unknown })?.role !== null &&
    (body as { role?: unknown })?.role !== '' &&
    role === null
  ) {
    return Response.json({ error: 'Role phải là shop hoặc buyer' }, { status: 400 })
  }

  try {
    const row = await addToWaitlist(email, role)
    return Response.json({ data: row }, { status: 201 })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    if (message.includes('unique') || message.includes('duplicate')) {
      return Response.json({ error: 'Email đã được đăng ký' }, { status: 409 })
    }
    console.error(err)
    return Response.json({ error: 'Lỗi server' }, { status: 500 })
  }
}
