# CanoX Landing Page

Landing page tĩnh HTML/CSS/JS giới thiệu **CanoX** — nội dung lấy từ [calatha.com](https://calatha.com/) (Công ty TNHH Cano).

## Nội dung chính

- Tagline: **Mua sắm thông minh**
- Freeship đơn từ **199k**
- Kênh người bán → `calatha.com/shop/check`
- Hotline **0932 070 787** · **support@canox.com**
- Địa chỉ: 300 Độc Lập, Tân Phú, TP.HCM

## Chạy local

```bash
npx serve .
# mở http://localhost:3000
```

## Deploy Vercel

1. [vercel.com](https://vercel.com) → **Add New Project** → import `quythuynh/canox-landingpage`
2. Giữ mặc định: **không** Build Command, **không** Install (site HTML tĩnh)
3. **Deploy** — mỗi lần `git push` lên `main` sẽ tự deploy lại

`vercel.json` đã cấu hình sẵn (`outputDirectory: "."`).
