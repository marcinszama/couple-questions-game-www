import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'The Couple Questions', template: '%s | The Couple Questions' },
  description: 'Evidence-based guided discussions to help couples communicate better, resolve conflicts, and deepen connection.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://couplequestionsgame.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
