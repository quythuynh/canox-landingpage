import { useState } from 'react'

const nav = [
  { label: 'Tính năng', href: '#tinh-nang' },
  { label: 'Shop & Buyer', href: '#doi-tuong' },
  { label: 'Cách hoạt động', href: '#cach-hoat-dong' },
  { label: 'Liên hệ', href: '#lien-he' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-cano-950/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cano-500 font-display text-sm font-bold text-white">
            C
          </span>
          <div className="text-left leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              Canox
            </span>
            <span className="block text-xs text-cano-300/80">by Cano</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-cano-100/80 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#lien-he"
            className="rounded-lg px-4 py-2 text-sm font-medium text-cano-100 transition hover:text-white"
          >
            Đăng nhập
          </a>
          <a
            href="#lien-he"
            className="rounded-lg bg-cano-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cano-400"
          >
            Bắt đầu miễn phí
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-cano-100 md:hidden"
          aria-label="Mở menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-cano-950 px-4 py-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2.5 text-sm text-cano-100"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#lien-he"
            className="mt-3 block rounded-lg bg-cano-500 py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Bắt đầu miễn phí
          </a>
        </nav>
      )}
    </header>
  )
}
