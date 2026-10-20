export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adnanstudios.com'

export const deliveryStack = 'Next.js, Flutter, and WordPress'
export const deliveryStackOr = 'Next.js, Flutter, or WordPress'

export const siteConfig = {
  name: 'Adnan Studios',
  owner: 'Adnan Adil',
  title: 'Product Design Studio & Landing Page Designer | Adnan Studios',
  description:
    'Adnan Studios is the product design studio of Adnan Adil for landing pages, SaaS, and web apps. Design in Figma, ship in Next.js, Flutter, or WordPress — Zero Handoff from wireframe to production.',
  gaId: 'G-Q8QVJBXH5Z',
  calendlyUrl: 'https://calendly.com/adnanstudios',
  contactEmail: process.env.CONTACT_EMAIL || 'hello@adnanstudios.com',
  adminEmail: process.env.CONTACT_ADMIN_EMAIL || 'hello@adnanstudios.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/adnan-adil-syed/',
    upwork: 'https://www.upwork.com/freelancers/adnanux?mp_source=share',
    contra: 'https://contra.com/adnanadiil?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=adnanadiil',
    github: 'https://github.com/adnanadilalpha',
  },
  partners: {
    hostinger: 'https://www.hostinger.com?REFERRALCODE=1SYEDADNANA80',
    wdAwards: 'https://wdawards.com/',
    orpetron: 'https://orpetron.com/account/',
  },
} as const

export const caseStudySlugs = [
  'deaftawk',
  'quizwiz',
  'stock',
  'moodia',
] as const
