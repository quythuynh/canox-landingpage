import cors from 'cors'
import express from 'express'
import { addToWaitlist, dbPath, listWaitlist, type WaitlistRole } from './db.js'

const app = express()
const PORT = Number(process.env.PORT) || 3001

app.use(cors())
app.use(express.json())

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function parseRole(value: unknown): WaitlistRole | null {
  if (value === undefined || value === null || value === '') return null
  if (value === 'shop' || value === 'buyer') return value
  return null
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, db: dbPath })
})

app.get('/api/waitlist', (_req, res) => {
  res.json({ data: listWaitlist() })
})

app.post('/api/waitlist', (req, res) => {
  const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : ''
  const role = parseRole(req.body?.role)

  if (!email || !EMAIL_RE.test(email)) {
    res.status(400).json({ error: 'Email không hợp lệ' })
    return
  }

  if (req.body?.role !== undefined && req.body?.role !== null && req.body?.role !== '' && role === null) {
    res.status(400).json({ error: 'Role phải là shop hoặc buyer' })
    return
  }

  try {
    const row = addToWaitlist(email, role)
    res.status(201).json({ data: row })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : ''
    if (message.includes('UNIQUE')) {
      res.status(409).json({ error: 'Email đã được đăng ký' })
      return
    }
    console.error(err)
    res.status(500).json({ error: 'Lỗi server' })
  }
})

app.listen(PORT, () => {
  console.log(`API http://localhost:${PORT}`)
  console.log(`DB  ${dbPath}`)
})
