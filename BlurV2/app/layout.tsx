import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BlurOps — Reimagine Your Business That Grows Without You | 4-Week Agency Bootcamp',
  description: 'A 4-week live bootcamp for agency founders doing $200K-$750K. Build documented systems, AI-ready SOPs, and OKR dashboards. Stop being the bottleneck.',
  keywords: 'agency operations, founder burnout, SOP creation, agency systems, AI operations, OKR dashboard, agency scaling',
  openGraph: {
    title: 'BlurOps — Reimagine Your Business That Grows Without You',
    description: 'The live bootcamp for burnt-out agency founders. Build systems. Reclaim 20+ hours/week. In 4 weeks.',
    type: 'website',
    url: 'https://blurops.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-inter">{children}</body>
    </html>
  )
}
