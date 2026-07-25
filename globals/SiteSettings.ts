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
              defaultValue: 'A product design and development studio. No handoff gap.',
            },
            {
              name: 'heroTitle',
              type: 'text',
              defaultValue: 'Zero Handoff product design and development.',
            },
            {
              name: 'heroSubhead',
              type: 'text',
              defaultValue: 'We design in Figma and ship in Next.js, Flutter, or WordPress. One studio from wireframe to production.',
            },
          ],
        },
        {
          label: 'Packages',
          fields: [
            {
              name: 'packagesTitle',
              type: 'text',
              defaultValue: 'Studio Packages',
            },
            {
              name: 'packagesDescription',
              type: 'textarea',
              defaultValue:
                'Every tier includes Figma design and production development by our studio — Next.js, Flutter, or WordPress. No separate agency handoff.',
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
