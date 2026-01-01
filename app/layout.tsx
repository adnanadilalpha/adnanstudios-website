import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adnan Adil Portfolio',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

