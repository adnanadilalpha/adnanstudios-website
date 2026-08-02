import { siteConfig, siteUrl } from './site'

export function organizationSchema() {
  const { aggregateRating, reviews } = reviewSchemas()

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/images/logo.png`,
      width: 512,
      height: 408,
    },
    image: `${siteUrl}/images/og-image.jpg`,
    email: siteConfig.contactEmail,
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: siteConfig.owner,
      url: siteUrl,
    },
    sameAs: Object.values(siteConfig.social),
    knowsAbout: [
      'Product Design',
      'UI/UX Design',
      'Figma',
      'Next.js',
      'Flutter',
      'WordPress',
      'Zero Handoff Development',
      'SaaS Design',
      'FinTech Design',
      'Accessibility Design',
      'MVP Development',
    ],
    aggregateRating,
    review: reviews.map(({ '@context': _c, ...review }) => review),
  }
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#founder`,
    name: siteConfig.owner,
    jobTitle: 'Founder',
    worksFor: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteConfig.name,
      url: siteUrl,
    },
    url: siteUrl,
    sameAs: Object.values(siteConfig.social),
  }
}

export function professionalServiceSchema() {
  const { aggregateRating } = reviewSchemas()

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#service`,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    image: `${siteUrl}/images/og-image.jpg`,
    founder: {
      '@type': 'Person',
      name: siteConfig.owner,
    },
    sameAs: Object.values(siteConfig.social),
    areaServed: 'Worldwide',
    priceRange: '$5000-$15000+',
    serviceType: [
      'Product Design',
      'Product Development',
      'UI/UX Design',
      'MVP Development',
      'SaaS Design',
    ],
    aggregateRating,
  }
}

export function serviceSchemas() {
  const services = [
    {
      name: 'Starter',
      price: '5000',
      description:
        'Zero Handoff MVP package from Adnan Studios. Figma design and production build for up to 10 screens. Next.js, Flutter, or WordPress — one studio from wireframe to shipped product.',
    },
    {
      name: 'Professional',
      price: '15000',
      description:
        'Zero Handoff scale package from Adnan Studios. Full Figma to production workflow for up to 30 screens with user testing and post-launch support.',
    },
    {
      name: 'Enterprise',
      price: '0',
      description:
        'Custom Zero Handoff engagement with Adnan Studios. Unlimited screens, design system, accessibility audit, and ongoing maintenance.',
    },
  ]

  return services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} Package`,
    provider: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteConfig.name,
      url: siteUrl,
    },
    offers: {
      '@type': 'Offer',
      price: service.price === '0' ? undefined : service.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${siteUrl}/#packages`,
      description: service.description,
    },
    description: service.description,
    areaServed: 'Worldwide',
  }))
}

export function reviewSchemas() {
  const reviews = [
    {
      author: 'Ali Shabbar',
      role: 'CEO, DeafTawk',
      rating: 5,
      reviewBody:
        'We initially made sure you get the interpreter in a maximum of 60 minutes. But now just 30 seconds.',
    },
    {
      author: 'Muhammad Ashar',
      role: 'CTO, OneScreen',
      rating: 5,
      reviewBody:
        'Adnan transformed our quiz app into a smart AI quiz generator, scalable, and well-executed.',
    },
  ]

  return {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: String(reviews.length),
      bestRating: '5',
      worstRating: '1',
    },
    reviews: reviews.map((review) => ({
      '@context': 'https://schema.org',
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
        jobTitle: review.role,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(review.rating),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: review.reviewBody,
      itemReviewed: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: siteConfig.name,
      },
    })),
  }
}

export function faqSchema(
  items: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function articleSchema(post: {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image || `${siteUrl}/images/og-image.jpg`,
    author: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteConfig.name,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/insights/${post.slug}`,
    },
  }
}

export function caseStudySchema(study: {
  title: string
  description: string
  slug: string
  image: string
  datePublished: string
  dateModified: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    additionalType: 'CaseStudy',
    name: study.title,
    headline: study.title,
    description: study.description,
    image: study.image.startsWith('http')
      ? study.image
      : `${siteUrl}${study.image}`,
    author: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteConfig.name,
    },
    creator: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    datePublished: study.datePublished,
    dateModified: study.dateModified,
    url: `${siteUrl}/case-studies/${study.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/case-studies/${study.slug}`,
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteConfig.name,
      url: siteUrl,
    },
  }
}
