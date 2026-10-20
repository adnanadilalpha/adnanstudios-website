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
}
