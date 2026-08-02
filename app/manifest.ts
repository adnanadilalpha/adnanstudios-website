import type { MetadataRoute } from 'next'
import { siteConfig } from './lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Adnan Studios',
    description: siteConfig.shortDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#34A983',
    lang: 'en',
    categories: ['business', 'design', 'productivity'],
    icons: [
      {
        src: '/images/logo.png',
        sizes: '512x408',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
  }
}
