# Canox Landing Page

Landing page cho **Canox** — sản phẩm thương mại điện tử của **Công ty Cano**, hướng tới hai đối tượng **Shop** (người bán) và **Buyer** (người mua).

## Chạy local

```bash
npm install
npm run dev
```

- Frontend: http://localhost:5173  
- API + SQLite: http://localhost:3001 (`data/canox.db`)

Chỉ chạy frontend: `npm run dev:web`  
Chỉ chạy API: `npm run dev:server`

## Database (SQLite)

Bảng `waitlist`: `email` (unique), `role` (`shop` | `buyer`), `created_at`.

```bash
# Xem danh sách đăng ký
npm run db:list

# API
curl http://localhost:3001/api/waitlist
curl -X POST http://localhost:3001/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@cano.vn","role":"shop"}'
```

## Build production

```bash
npm run build
npm run preview
```

Production: deploy `dist/` (static) và chạy `npm run dev:server` (hoặc `tsx server/index.ts`) trên host riêng; cấu hình reverse proxy `/api` → API.
