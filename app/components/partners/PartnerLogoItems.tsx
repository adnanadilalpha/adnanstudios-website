'use client'

import Image from 'next/image'
import { TrackedLink } from '../TrackedLink'
import { OrpetronMark, WDAwardsMark } from './PartnerMarks'
import { partners } from '@/app/lib/partners'

function PartnerLogo({ id }: { id: (typeof partners)[number]['id'] }) {
  switch (id) {
    case 'hostinger':
      return (
        <Image
          src="/images/partners/hostinger-partner-brand.png"
          alt="Hostinger Partner"
          width={80}
          height={30}
          className="h-7 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
        />
      )
    case 'wd-awards':
      return (
        <span className="inline-flex items-center gap-2.5 text-white/45 group-hover:text-white/80 transition-colors">
          <WDAwardsMark className="h-5 w-auto shrink-0" />
          <span className="text-[11px] tracking-wide">
            <strong className="font-semibold">WD </strong>
            Awards
          </span>
        </span>
      )
    case 'orpetron':
      return (
        <span className="inline-flex items-center gap-2.5 text-white/45 group-hover:text-white/80 transition-colors">
          <OrpetronMark className="h-5 w-5 shrink-0" />
          <span className="flex flex-col leading-none gap-0.5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
              Orpetron
            </span>
            <span className="text-[10px] font-normal tracking-wide text-white/35 group-hover:text-white/55 transition-colors">
              Official Judge
            </span>
          </span>
        </span>
      )
  }
}

export function PartnerLogoItems({ className = '' }: { className?: string }) {
  return (
    <>
      {partners.map((partner) => (
        <TrackedLink
          key={partner.id}
          href={partner.href}
          platform={partner.id}
          className={`group mx-7 sm:mx-10 inline-flex items-center shrink-0 ${className}`}
        >
          <PartnerLogo id={partner.id} />
          <span className="sr-only">{partner.blurb}</span>
        </TrackedLink>
      ))}
    </>
  )
}
