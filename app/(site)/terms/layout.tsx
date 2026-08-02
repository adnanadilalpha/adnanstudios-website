import type { Metadata } from 'next'
import { buildPageMetadata } from '@/app/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms of Service',
  description:
    'Terms of service for Adnan Studios product design and development services.',
  path: '/terms',
  keywords: [
    'adnan studios terms of service',
    'product design studio terms',
    'development engagement terms',
  ],
})

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
