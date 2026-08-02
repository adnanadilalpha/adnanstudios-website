import type { Metadata } from 'next'
import { buildPageMetadata } from '@/app/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy policy for Adnan Studios. How contact form data, Calendly bookings, and site analytics are handled.',
  path: '/privacy',
  keywords: ['adnan studios privacy policy', 'contact form privacy', 'website analytics privacy'],
})

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
