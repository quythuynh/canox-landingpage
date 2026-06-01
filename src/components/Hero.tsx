export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cano-600/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-cano-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cano-500/30 bg-cano-500/10 px-4 py-1.5 text-sm text-cano-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cano-400" />
            Sản phẩm thương mại điện tử của{' '}
            <span className="font-semibold text-white">Cano</span>
          </p>

          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Mua bán trực tuyến
            <span className="mt-1 block text-cano-300">đơn giản hơn với Canox</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cano-100/70">
            Nền tảng thương mại điện tử kết nối{' '}
            <strong className="font-medium text-white">Shop</strong> (người bán) và{' '}
            <strong className="font-medium text-white">Buyer</strong> (người mua) — quản lý
            cửa hàng, đơn hàng và thanh toán trên một hệ sinh thái thống nhất.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#lien-he"
              className="w-full rounded-xl bg-cano-500 px-8 py-3.5 text-center text-base font-semibold text-white transition hover:bg-cano-400 sm:w-auto"
            >
              Mở cửa hàng — Shop
            </a>
            <a
              href="#lien-he"
              className="w-full rounded-xl border border-cano-500/40 bg-cano-500/10 px-8 py-3.5 text-center text-base font-semibold text-cano-100 transition hover:border-cano-400/60 hover:bg-cano-500/20 sm:w-auto"
            >
              Mua sắm ngay — Buyer
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-cano-900/50 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/10 bg-cano-950/80 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-cano-400/80" />
              <span className="ml-2 text-xs text-cano-300/60">canox.app — dashboard</span>
            </div>
            <div className="grid gap-px bg-white/5 p-4 sm:grid-cols-3 sm:p-6">
              <DashboardCard label="Doanh thu hôm nay" value="12.4M" unit="₫" trend="+18%" />
              <DashboardCard label="Đơn hàng mới" value="47" unit="" trend="+12" />
              <DashboardCard label="Shop đang hoạt động" value="1.2K" unit="" trend="live" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardCard({
  label,
  value,
  unit,
  trend,
}: {
  label: string
  value: string
  unit: string
  trend: string
}) {
  return (
    <div className="rounded-xl bg-cano-950/60 p-4 sm:p-5">
      <p className="text-xs text-cano-300/70">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold text-white">
        {value}
        {unit && <span className="text-base font-normal text-cano-300">{unit}</span>}
      </p>
      <p className="mt-1 text-xs font-medium text-cano-400">{trend}</p>
    </div>
  )
}
