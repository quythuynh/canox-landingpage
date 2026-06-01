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

## Deploy lên Vercel

1. Vào [vercel.com](https://vercel.com) → **Add New Project** → import repo `quythuynh/canox-landingpage`
2. Framework: **Vite** (tự nhận từ `vercel.json`)
3. **Storage** → **Neon** → Create & Connect (tự gán `DATABASE_URL`)
4. **Deploy**

API production: `/api/waitlist` (serverless + Neon Postgres).  
Local vẫn dùng SQLite qua `npm run dev` (Express port 3001).

```bash
# Deploy bằng CLI (đã login vercel)
npx vercel --prod
```

Sau deploy, kiểm tra: `https://<project>.vercel.app/api/health`
