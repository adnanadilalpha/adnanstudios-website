import type { Metadata } from 'next'
import { siteUrl } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Adnan Studios. How contact form data, Calendly bookings, and site analytics are handled.',
  openGraph: {
    title: 'Privacy Policy | Adnan Studios',
    description: 'Privacy policy for Adnan Studios website and contact forms.',
    url: `${siteUrl}/privacy`,
  },
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
