'use client';

import { Marquee } from './ui/Marquee';

const stats = [
  '7+ years in product design',
  '50+ projects delivered',
  '68k+ users served',
  '60k+ monthly visits',
  'US$1.5M FY23 revenue',
  'Clients in 10+ countries',
  'Zero Handoff workflow',
  'Next.js · Flutter · WordPress',
];

export function StatsBar() {
  return (
    <div className="border-b border-foreground/10 bg-white/50 py-3.5">
      <Marquee speed={42}>
        {stats.map((stat, i) => (
          <span key={i} className="flex items-center mx-10 whitespace-nowrap">
            <span className="text-sm text-foreground/50 font-medium">{stat}</span>
            <span className="ml-10 text-brand text-sm">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
