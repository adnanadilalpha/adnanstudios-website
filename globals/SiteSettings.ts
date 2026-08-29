import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Content',
  admin: {
    group: 'Content',
    description: 'Homepage copy and FAQ — synced to the live site.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroHeadline',
      type: 'text',
      label: 'Hero subheadline',
      required: true,
      defaultValue:
        'Product design studio for landing pages, SaaS, and apps. One person from Figma to production.',
      admin: {
        description:
          'The line below the main headline on the homepage hero.',
      },
    },
    {
      name: 'faqItems',
      type: 'array',
      label: 'FAQ',
      labels: {
        singular: 'Question',
        plural: 'Questions',
      },
      admin: {
        description: 'Frequently asked questions shown on the homepage.',
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
