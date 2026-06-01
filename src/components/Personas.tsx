const personas = [
  {
    id: 'shop',
    badge: 'Shop',
    title: 'Dành cho người bán',
    description:
      'Mở cửa hàng trực tuyến trong vài phút. Quản lý sản phẩm, tồn kho, đơn hàng và doanh thu từ một bảng điều khiển duy nhất.',
    features: [
      'Tạo shop & catalog sản phẩm',
      'Quản lý đơn hàng & vận chuyển',
      'Báo cáo doanh thu theo thời gian thực',
      'Khuyến mãi & mã giảm giá',
    ],
    cta: 'Đăng ký Shop',
    accent: 'from-cano-600 to-cano-800',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
      </svg>
    ),
  },
  {
    id: 'buyer',
    badge: 'Buyer',
    title: 'Dành cho người mua',
    description:
      'Khám phá hàng ngàn shop, so sánh giá, đặt hàng an toàn và theo dõi giao hàng — trải nghiệm mua sắm mượt mà trên mọi thiết bị.',
    features: [
      'Tìm kiếm & lọc sản phẩm thông minh',
      'Giỏ hàng & thanh toán đa phương thức',
      'Theo dõi đơn hàng realtime',
      'Đánh giá & phản hồi shop',
    ],
    cta: 'Khám phá Buyer',
    accent: 'from-emerald-700 to-cano-900',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  },
]

export function Personas() {
  return (
    <section id="doi-tuong" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Hai vai trò, một nền tảng
          </h2>
          <p className="mt-4 text-cano-100/70">
            Canox được thiết kế cho cả hai phía thị trường — người bán xây dựng doanh nghiệp, người
            mua tìm kiếm sản phẩm chất lượng.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {personas.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-cano-900/40 p-8 transition hover:border-cano-500/30"
            >
              <div
                className={`pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl transition group-hover:opacity-30`}
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cano-500/20 text-cano-300">
                    {p.icon}
                  </span>
                  <span className="rounded-full bg-cano-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cano-300">
                    {p.badge}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-cano-100/70">{p.description}</p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-cano-100/80">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-cano-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#lien-he"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cano-300 transition hover:text-white"
                >
                  {p.cta}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
