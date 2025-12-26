import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Koos Simons — Product Manager | Lisbon',
  description: 'Product Manager based in Lisbon with 6 years PM experience building products that turn complex problems into solutions people actually adopt.',
  keywords: ['Product Manager', 'Lisbon', 'AI', 'Analytics', 'Portfolio'],
  authors: [{ name: 'Koos Simons' }],
  openGraph: {
    title: 'Koos Simons — Product Manager | Lisbon',
    description: 'Product Manager based in Lisbon with 6 years PM experience building products that turn complex problems into solutions people actually adopt.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
