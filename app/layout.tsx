import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'The Couple Questions', template: '%s | The Couple Questions' },
  description: 'Evidence-based guided discussions to help couples communicate better, resolve conflicts, and deepen connection.',
  metadataBase: new URL('https://www.couplequestionsgame.com'),
  alternates: {
    canonical: 'https://www.couplequestionsgame.com',
  },
  openGraph: {
    siteName: 'The Couple Questions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@couplequestions',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
