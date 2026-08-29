import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Media',
    plural: 'Media',
  },
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*'],
  },
  admin: {
    useAsTitle: 'filename',
    group: 'Assets',
    description: 'Images used across the site.',
    defaultColumns: ['filename', 'alt', 'updatedAt'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description: 'Describe the image for accessibility and SEO.',
      },
    },
  ],
}
