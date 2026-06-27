import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: {
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'heroHeadline',
              type: 'text',
              defaultValue: 'One person designs and ships. No handoff gap.',
            },
            {
              name: 'heroTitle',
              type: 'text',
              defaultValue: 'Zero Handoff product design and development.',
            },
            {
              name: 'heroSubhead',
              type: 'text',
              defaultValue: 'Design in Figma. Ship in Next.js, Flutter, or WordPress. Same person from wireframe to production.',
            },
          ],
        },
        {
          label: 'Packages',
          fields: [
            {
              name: 'packagesTitle',
              type: 'text',
              defaultValue: 'Zero Handoff Packages',
            },
            {
              name: 'packagesDescription',
              type: 'textarea',
              defaultValue:
                'Every tier includes Figma design and development by the same person — Next.js, Flutter, or WordPress. No separate developer handoff.',
            },
          ],
        },
        {
          label: 'FAQ',
          fields: [
            {
              name: 'faqItems',
              type: 'array',
              labels: {
                singular: 'FAQ Item',
                plural: 'FAQ Items',
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
        },
      ],
    },
  ],
}
