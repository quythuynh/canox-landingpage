export function CTA() {
  return (
    <section id="lien-he" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cano-500/30 bg-gradient-to-br from-cano-800 to-cano-950 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(110,231,199,0.15),transparent_60%)]" />
          <div className="relative">
            <p className="text-sm font-medium uppercase tracking-wider text-cano-300">
              Công ty Cano
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Sẵn sàng trải nghiệm Canox?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cano-100/80">
              Nền tảng thương mại điện tử đang được phát triển. Liên hệ Cano để biết thêm về
              beta dành cho Shop và Buyer.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@cano.vn?subject=Canox%20-%20Shop"
                className="w-full rounded-xl bg-white px-8 py-3.5 text-center text-base font-semibold text-cano-900 transition hover:bg-cano-50 sm:w-auto"
              >
                Liên hệ — Shop
              </a>
              <a
                href="mailto:hello@cano.vn?subject=Canox%20-%20Buyer"
                className="w-full rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white/15 sm:w-auto"
              >
                Liên hệ — Buyer
              </a>
            </div>

            <p className="mt-8 text-sm text-cano-200/60">
              <a href="mailto:hello@cano.vn" className="text-cano-300 hover:text-white">
                hello@cano.vn
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
