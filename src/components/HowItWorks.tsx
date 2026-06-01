const steps = [
  {
    step: '01',
    title: 'Đăng ký tài khoản',
    description: 'Chọn vai trò Shop hoặc Buyer, xác minh email và hoàn tất hồ sơ trong vài phút.',
  },
  {
    step: '02',
    title: 'Thiết lập hoặc khám phá',
    description: 'Shop: thêm sản phẩm, cấu hình thanh toán. Buyer: duyệt danh mục và thêm vào giỏ.',
  },
  {
    step: '03',
    title: 'Giao dịch an toàn',
    description: 'Đặt hàng, thanh toán qua Canox và theo dõi trạng thái đến khi nhận hàng.',
  },
  {
    step: '04',
    title: 'Phát triển bền vững',
    description: 'Shop mở rộng quy mô với báo cáo & marketing. Buyer tích điểm và đánh giá shop.',
  },
]

export function HowItWorks() {
  return (
    <section id="cach-hoat-dong" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bắt đầu trong 4 bước
          </h2>
          <p className="mt-4 text-cano-100/70">
            Quy trình đơn giản cho cả người bán lẫn người mua — không cần kỹ thuật phức tạp.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.step} className="relative">
              <span className="font-display text-5xl font-bold text-cano-800">{s.step}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cano-100/60">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
