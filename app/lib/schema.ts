import { siteConfig, siteUrl } from './site'

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.owner,
    jobTitle: 'Product Designer & Developer',
    description: siteConfig.description,
    url: siteUrl,
    sameAs: Object.values(siteConfig.social),
    knowsAbout: [
      'Product Design',
      'Figma',
      'Next.js',
      'Flutter',
      'WordPress',
      'Zero Handoff Development',
      'SaaS Design',
      'FinTech Design',
      'Accessibility Design',
    ],
  }
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    founder: {
      '@type': 'Person',
      name: siteConfig.owner,
    },
    sameAs: Object.values(siteConfig.social),
    areaServed: 'Worldwide',
    priceRange: '$5000-$15000+',
  }
}

export function serviceSchemas() {
  const services = [
    {
      name: 'Starter',
      price: '5000',
      description:
        'Zero Handoff MVP package. Figma design and production build for up to 10 screens. Next.js, Flutter, or WordPress — one person from wireframe to shipped product.',
    },
    {
      name: 'Professional',
      price: '15000',
      description:
        'Zero Handoff scale package. Full Figma to production workflow for up to 30 screens with user testing and post-launch support.',
    },
    {
      name: 'Enterprise',
      price: '0',
      description:
        'Custom Zero Handoff engagement. Unlimited screens, design system, accessibility audit, and ongoing maintenance.',
    },
  ]

  return services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} Package`,
    provider: {
      '@type': 'ProfessionalService',
      name: siteConfig.name,
      url: siteUrl,
    },
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'USD',
      description: service.description,
    },
    description: service.description,
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
      '@context': 'https://schema.org',
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
        '@type': 'ProfessionalService',
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
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: siteConfig.owner,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
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
