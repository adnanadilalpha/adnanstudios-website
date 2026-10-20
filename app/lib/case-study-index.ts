export type CaseStudyIndexItem = {
  slug: string
  title: string
  subtitle: string
  summary: string
  image: string
  imageAlt: string
  year: string
}

/** Canonical list used by /case-studies, sitemap-adjacent UI, and JSON-LD. */
export const caseStudyIndex: CaseStudyIndexItem[] = [
  {
    slug: 'deaftawk',
    title: 'DeafTawk',
    subtitle: 'Enterprise Accessibility Platform',
    summary:
      'Product design for a real-time sign language interpretation platform. Cut interpreter connection time from ~60 minutes to under 30 seconds for 68K+ users.',
    image: '/images/deaftawk.webp',
    imageAlt: 'DeafTawk enterprise accessibility dashboard',
    year: '2024',
  },
  {
    slug: 'quizwiz',
    title: 'QuizWiz',
    subtitle: 'AI-Powered Quiz Generator',
    summary:
      'EdTech product design for an AI quiz generator used by ~60K monthly visitors — from text, PDFs, and URLs to classroom-ready exports.',
    image: '/images/quiz.webp',
    imageAlt: 'QuizWiz AI quiz generator interface',
    year: '2025',
  },
  {
    slug: 'stock',
    title: 'MWS',
    subtitle: 'Private Subscriber FinTech Platform',
    summary:
      'End-to-end product design for a subscriber-only FinTech platform, shipped under fixed timelines in a constrained access environment.',
    image: '/images/stock.webp',
    imageAlt: 'MWS private subscriber FinTech dashboard',
    year: '2025',
  },
  {
    slug: 'moodia',
    title: 'Moodia',
    subtitle: 'Mental Health Platform',
    summary:
      'Zero Handoff design and Flutter build for a UK mental health ecosystem spanning patients, clinicians, and partners.',
    image: '/images/moodia.webp',
    imageAlt: 'Moodia mental health platform homepage',
    year: '2025',
  },
]
