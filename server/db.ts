import Database from 'better-sqlite3'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = path.join(root, 'data')
const dbPath = path.join(dataDir, 'canox.db')

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

const db = new Database(dbPath)

db.pragma('journal_mode = WAL')

db.exec(`
  CREATE TABLE IF NOT EXISTS waitlist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE COLLATE NOCASE,
    role TEXT CHECK (role IS NULL OR role IN ('shop', 'buyer')),
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`)

export type WaitlistRole = 'shop' | 'buyer'

export type WaitlistRow = {
  id: number
  email: string
  role: WaitlistRole | null
  created_at: string
}

const insertStmt = db.prepare<[string, WaitlistRole | null]>(
  `INSERT INTO waitlist (email, role) VALUES (?, ?)`,
)

const listStmt = db.prepare(`SELECT id, email, role, created_at FROM waitlist ORDER BY id DESC`)

export function addToWaitlist(email: string, role: WaitlistRole | null): WaitlistRow {
  const info = insertStmt.run(email, role)
  const row = db
    .prepare(`SELECT id, email, role, created_at FROM waitlist WHERE id = ?`)
    .get(info.lastInsertRowid) as WaitlistRow
  return row
}

export function listWaitlist(): WaitlistRow[] {
  return listStmt.all() as WaitlistRow[]
}

export { db, dbPath }
