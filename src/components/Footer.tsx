export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cano-500 font-display text-xs font-bold text-white">
                C
              </span>
              <span className="font-display text-lg font-semibold text-white">Canox</span>
            </div>
            <p className="mt-2 max-w-xs text-sm text-cano-100/50">
              Sản phẩm thương mại điện tử của{' '}
              <strong className="text-cano-200/80">Công ty Cano</strong>. Kết nối Shop & Buyer.
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <div>
              <p className="font-medium text-cano-200">Sản phẩm</p>
              <ul className="mt-3 space-y-2 text-cano-100/50">
                <li>
                  <a href="#doi-tuong" className="hover:text-cano-200">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#doi-tuong" className="hover:text-cano-200">
                    Buyer
                  </a>
                </li>
                <li>
                  <a href="#tinh-nang" className="hover:text-cano-200">
                    Tính năng
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-cano-200">Công ty</p>
              <ul className="mt-3 space-y-2 text-cano-100/50">
                <li>
                  <a href="#" className="hover:text-cano-200">
                    Về Cano
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-cano-200">
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cano-200">
                    Điều khoản
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-cano-100/40">
          © {new Date().getFullYear()} Công ty Cano. Canox — All rights reserved.
        </p>
      </div>
    </footer>
  )
}
