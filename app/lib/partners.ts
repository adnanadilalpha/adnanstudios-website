export const hostingerReferralUrl =
  'https://www.hostinger.com?REFERRALCODE=1SYEDADNANA80'

export const partners = [
  {
    id: 'hostinger',
    name: 'Hostinger Partner',
    href: hostingerReferralUrl,
    blurb: 'Official partner — exclusive hosting discount via referral',
  },
  {
    id: 'wd-awards',
    name: 'WD Awards',
    href: 'https://wdawards.com/',
    blurb: 'Multiple WD Awards nominations and wins',
  },
  {
    id: 'orpetron',
    name: 'Orpetron',
    href: 'https://orpetron.com/account/',
    blurb: 'Official web design award judge',
  },
] as const

export type PartnerId = (typeof partners)[number]['id']
