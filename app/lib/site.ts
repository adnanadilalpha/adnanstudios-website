export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adnanstudios.com'

export const deliveryStack = 'Next.js, Flutter, and WordPress'
export const deliveryStackOr = 'Next.js, Flutter, or WordPress'

export const siteConfig = {
  name: 'Adnan Studios',
  owner: 'Adnan Adil',
  title: 'Adnan Studios | Product Design & Development Studio',
  description: `Adnan Studios is a product design and development studio. We design in Figma and ship in ${deliveryStack}. Zero Handoff from wireframe to production — MVPs, SaaS, and fintech products built end to end.`,
  shortDescription:
    'Zero Handoff product design and development studio. Figma to Next.js, Flutter, and WordPress — one studio from wireframe to production.',
  gaId: 'G-Q8QVJBXH5Z',
  calendlyUrl: 'https://calendly.com/adnanstudios',
  contactEmail: process.env.CONTACT_EMAIL || 'hello@adnanstudios.com',
  adminEmail: process.env.CONTACT_ADMIN_EMAIL || 'hello@adnanstudios.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/adnan-adil-syed/',
    upwork:
      'https://www.upwork.com/freelancers/adnanux?mp_source=share',
    contra:
      'https://contra.com/adnanadiil?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=adnanadiil',
    github: 'https://github.com/adnanadilalpha',
  },
} as const

export const caseStudySlugs = [
  'deaftawk',
  'quizwiz',
  'stock',
  'moodia',
  'lockn',
] as const
