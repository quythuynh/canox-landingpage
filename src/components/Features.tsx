const features = [
  {
    title: 'Quản lý đa shop',
    description: 'Một tài khoản Canox, nhiều cửa hàng — phù hợp thương hiệu và nhà bán lẻ.',
  },
  {
    title: 'Thanh toán tích hợp',
    description: 'Hỗ trợ ví điện tử, chuyển khoản và COD — minh bạch, đối soát nhanh.',
  },
  {
    title: 'Vận chuyển thông minh',
    description: 'Kết nối đơn vị giao hàng, in vận đơn và cập nhật trạng thái tự động.',
  },
  {
    title: 'Bảo mật & tin cậy',
    description: 'Mã hóa giao dịch, xác thực hai lớp và chính sách bảo vệ người mua.',
  },
  {
    title: 'Phân tích doanh thu',
    description: 'Biểu đồ, báo cáo xuất nhập tồn và insight hành vi khách hàng.',
  },
  {
    title: 'Ứng dụng di động',
    description: 'Shop và Buyer đều có trải nghiệm tối ưu trên iOS & Android.',
  },
]

function FeatureIcon() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cano-500/15 text-cano-400">
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </span>
  )
}

export function Features() {
  return (
    <section id="tinh-nang" className="border-y border-white/5 bg-cano-950/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Mọi thứ bạn cần để bán & mua online
          </h2>
          <p className="mt-4 text-cano-100/70">
            Canox gom toàn bộ công cụ thương mại điện tử — từ catalog đến giao hàng — trong một
            nền tảng do Cano phát triển.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-white/5 bg-cano-900/30 p-6 transition hover:border-cano-500/20 hover:bg-cano-900/50"
            >
              <FeatureIcon />
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cano-100/60">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
