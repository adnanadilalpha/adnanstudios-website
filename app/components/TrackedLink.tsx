'use client'

import Link from 'next/link'
import { trackOutboundClick } from '../lib/analytics'

interface TrackedLinkProps {
  href: string
  platform: string
  className?: string
  children: React.ReactNode
  external?: boolean
}

export function TrackedLink({
  href,
  platform,
  className,
  children,
  external = true,
}: TrackedLinkProps) {
  const handleClick = () => {
    trackOutboundClick(platform)
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={handleClick}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
