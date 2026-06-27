import type { Metadata } from 'next'
import { siteUrl } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of service for Adnan Studios product design and development services.',
  openGraph: {
    title: 'Terms of Service | Adnan Studios',
    description: 'Terms of service for Adnan Studios design and development engagements.',
    url: `${siteUrl}/terms`,
  },
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
