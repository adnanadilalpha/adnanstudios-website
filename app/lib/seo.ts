import type { Metadata } from 'next'
import { siteConfig, siteUrl } from './site'

export const defaultOgImage = {
  url: `${siteUrl}/images/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: 'Adnan Studios — Zero Handoff product design and development studio',
} as const

export const seoKeywords = [
  'adnan studios',
  'product design studio',
  'product development studio',
  'design and development agency',
  'zero handoff',
  'zero handoff design',
  'figma to code',
  'figma to production',
  'figma to next.js',
  'figma to flutter',
  'end to end product studio',
  'mvp design and development',
  'saas product design agency',
  'fintech product design',
  'next.js development agency',
  'flutter app development studio',
  'wordpress product development',
  'ui ux design studio',
  'startup product studio',
  'hire product design studio',
] as const

type BuildPageMetadataInput = {
  title: string
  description: string
  path?: string
  keywords?: string[]
  type?: 'website' | 'article'
  images?: Array<{ url: string; width?: number; height?: number; alt?: string }>
  noIndex?: boolean
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
}

export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') return siteUrl
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function buildPageMetadata({
  title,
  description,
  path = '/',
  keywords = [...seoKeywords],
  type = 'website',
  images = [defaultOgImage],
  noIndex = false,
  publishedTime,
  modifiedTime,
  authors,
}: BuildPageMetadataInput): Metadata {
  const url = absoluteUrl(path)
  const ogImages = images.map((image) => ({
    url: image.url.startsWith('http') ? image.url : absoluteUrl(image.url),
    width: image.width ?? 1200,
    height: image.height ?? 630,
    alt: image.alt ?? title,
  }))

  return {
    title,
    description,
    keywords,
    authors: authors?.map((name) => ({ name })) ?? [{ name: siteConfig.name, url: siteUrl }],
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type,
      images: ogImages,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImages.map((image) => image.url),
      creator: '@adnanadil',
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  }
}
