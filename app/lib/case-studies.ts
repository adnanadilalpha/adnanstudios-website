export interface CaseStudyData {
  slug: string
  title: string
  subtitle: string
  summary: string
  role: string
  scope: string
  timeline: string
  image: string
  imageAlt: string
  liveUrl: string
  metrics: Array<{ value: string; label: string }>
  problem: string
  process: string[]
  outcome: string
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  metaDescription: string
  keywords: string[]
}

export const caseStudies: Record<string, CaseStudyData> = {
  moodia: {
    slug: 'moodia',
    title: 'Moodia',
    subtitle: 'Mental Health Platform',
    summary:
      'Designed and built the product website and platform experience for a UK-based mental health ecosystem, communicating purpose, trust, and privacy across patients, clinicians, and partners.',
    role: 'Product Designer & Developer',
    scope: 'Information architecture, UX/UI design, Flutter web build',
    timeline: '6 weeks',
    image: '/images/moodia.webp',
    imageAlt: 'Moodia mental health platform homepage showing trust-focused layout and privacy messaging',
    liveUrl: 'https://moodiaapp.com/',
    metrics: [
      { value: '98%', label: 'User trust score' },
      { value: '5.2 min', label: 'Average session time' },
      { value: 'Multi-audience', label: 'Patients, clinicians, partners' },
    ],
    problem:
      'Moodia needed a platform that could speak to multiple audiences without compromising on privacy or clinical credibility. Generic health templates failed to communicate the product\'s differentiated approach.',
    process: [
      'Mapped user journeys for patients, clinicians, and institutional partners',
      'Built a privacy-first information architecture with clear consent flows',
      'Designed and shipped responsive Flutter web pages with consistent trust signals',
    ],
    outcome:
      'Moodia launched a cohesive platform experience that increased session time and user trust scores. The site clearly communicates purpose without overwhelming visitors with clinical jargon.',
    testimonial: {
      quote: 'The platform finally feels like one product, not three websites stitched together.',
      author: 'Product Team',
      role: 'Moodia',
    },
    metaDescription:
      'Case study: Moodia mental health platform. Zero Handoff design and Flutter build for a UK mental health ecosystem with 98% user trust score.',
    keywords: ['Moodia', 'mental health design', 'healthcare UX', 'Flutter web', 'product design case study'],
  },
  lockn: {
    slug: 'lockn',
    title: 'Lockn',
    subtitle: 'FinTech Savings Platform',
    summary:
      'Designed and built a high-conversion landing experience for a private FinTech product focused on secure individual and group savings with escrow protection.',
    role: 'Product Designer & Developer',
    scope: 'Landing page UX, trust messaging, Flutter web build',
    timeline: '4 weeks',
    image: '/images/lockn.webp',
    imageAlt: 'Lockn fintech landing page showing secure savings messaging and escrow protection highlights',
    liveUrl: 'https://locknapp.com/',
    metrics: [
      { value: '95%', label: 'Trust score in user testing' },
      { value: 'High', label: 'Conversion rate' },
      { value: 'Escrow-first', label: 'Security positioning' },
    ],
    problem:
      'Lockn needed to convert visitors who had never heard of the brand while communicating financial security and escrow protection. Standard fintech templates felt generic and failed to build trust quickly.',
    process: [
      'Audited competitor onboarding and trust signal patterns in fintech',
      'Designed progressive disclosure flows that lead with security, not features',
      'Built and shipped a Flutter web landing page with A/B-ready component structure',
    ],
    outcome:
      'Lockn launched a landing page that scored 95% on trust metrics in user testing. The page converts visitors by leading with escrow protection and social proof before asking for signup.',
    testimonial: {
      quote: 'Visitors finally understand what makes Lockn different within the first scroll.',
      author: 'Founding Team',
      role: 'Lockn',
    },
    metaDescription:
      'Case study: Lockn fintech landing page. Zero Handoff Figma to Flutter build with 95% trust score and high conversion.',
    keywords: ['Lockn', 'fintech design', 'landing page', 'escrow', 'Flutter web', 'conversion design'],
  },
}
