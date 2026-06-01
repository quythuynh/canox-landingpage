import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function CTA() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<'shop' | 'buyer' | ''>('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role: role || undefined }),
      })
      const json = (await res.json()) as { error?: string }

      if (!res.ok) {
        setStatus('error')
        setMessage(json.error ?? 'Đăng ký thất bại')
        return
      }

      setStatus('success')
      setMessage('Đã đăng ký! Chúng tôi sẽ liên hệ sớm.')
      setEmail('')
      setRole('')
    } catch {
      setStatus('error')
      setMessage('Không kết nối được server. Chạy npm run dev để bật API.')
    }
  }

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
              Tham gia danh sách chờ để nhận quyền truy cập sớm. Chúng tôi sẽ liên hệ khi nền tảng
              mở beta cho Shop và Buyer.
            </p>

            <form
              className="mx-auto mt-10 max-w-md space-y-3"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email của bạn"
                  disabled={status === 'loading'}
                  className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-cano-200/50 focus:border-cano-400 focus:outline-none focus:ring-2 focus:ring-cano-400/30 disabled:opacity-60"
                  aria-label="Email"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="rounded-xl bg-white px-6 py-3 font-semibold text-cano-900 transition hover:bg-cano-50 disabled:opacity-60"
                >
                  {status === 'loading' ? 'Đang gửi...' : 'Đăng ký'}
                </button>
              </div>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value as 'shop' | 'buyer' | '')}
                disabled={status === 'loading'}
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-cano-100 focus:border-cano-400 focus:outline-none focus:ring-2 focus:ring-cano-400/30 disabled:opacity-60"
                aria-label="Vai trò quan tâm"
              >
                <option value="" className="bg-cano-900">
                  Tôi quan tâm (tùy chọn)
                </option>
                <option value="shop" className="bg-cano-900">
                  Shop — người bán
                </option>
                <option value="buyer" className="bg-cano-900">
                  Buyer — người mua
                </option>
              </select>
            </form>

            {message && (
              <p
                className={`mt-4 text-sm ${status === 'success' ? 'text-cano-300' : 'text-amber-200'}`}
                role="status"
              >
                {message}
              </p>
            )}

            <p className="mt-6 text-xs text-cano-200/50">
              Bằng việc đăng ký, bạn đồng ý nhận thông tin từ Cano về Canox.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
