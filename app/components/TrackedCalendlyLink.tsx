'use client'

import { siteConfig } from '../lib/site'
import { trackCalendlyClick } from '../lib/analytics'

interface TrackedCalendlyLinkProps {
  location: string
  className?: string
  children: React.ReactNode
}

export function TrackedCalendlyLink({
  location,
  className,
  children,
}: TrackedCalendlyLinkProps) {
  return (
    <a
      href={siteConfig.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackCalendlyClick(location)}
    >
      {children}
    </a>
  )
}
