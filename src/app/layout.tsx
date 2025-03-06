import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import '@/styles/globals.scss'
import { Header } from '@/shared/layouts'

const quicksan = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksan',
  display: 'fallback'
})

export const metadata: Metadata = {
  title: 'Baya Ecommerce',
  description: 'Built by Namdev'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${quicksan.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
