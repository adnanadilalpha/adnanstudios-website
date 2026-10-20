'use client';

import { Marquee } from './ui/Marquee';

const stats = [
  '50+ projects delivered',
  'Top Rated Upwork freelancer',
  '3× WD Awards',
  'Orpetron award judge',
  'Hostinger Partner',
  'Next.js · Flutter · Figma',
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
