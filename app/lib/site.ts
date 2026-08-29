export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adnanstudios.com'

export const deliveryStack = 'Next.js, Flutter, and WordPress'
export const deliveryStackOr = 'Next.js, Flutter, or WordPress'

export const siteConfig = {
  name: 'Adnan Studios',
  owner: 'Adnan Adil',
  title: 'Product Design Studio & Landing Page Designer | Adnan Studios',
  description:
    'Adnan Studios is a product design studio for landing pages, SaaS, and web apps. Adnan Adil designs in Figma and ships in Next.js, Flutter, and WordPress — one person from wireframe to production. No handoff gap.',
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
} as const

export const caseStudySlugs = [
  'deaftawk',
  'quizwiz',
  'stock',
  'moodia',
  'lockn',
] as const
