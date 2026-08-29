import type { CollectionConfig } from 'payload'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const Insights: CollectionConfig = {
  slug: 'insights',
  labels: {
    singular: 'Insight',
    plural: 'Insights',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', '_status', 'publishedAt', 'updatedAt'],
    group: 'Content',
    description: 'Blog posts and articles published at /insights.',
    preview: (doc) => {
      if (doc?.slug) {
        return `${siteUrl}/insights/${doc.slug}`
      }
      return null
    },
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true
      return {
        _status: {
          equals: 'published',
        },
      }
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 500,
      },
    },
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.title && !data.slug) {
          data.slug = slugify(data.title)
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL path — auto-generated from title if left empty.',
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Meta description for SEO and listing cards.',
      },
    },
    {
      name: 'author',
      type: 'text',
      defaultValue: 'Adnan Adil',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Article body',
    },
  ],
}
