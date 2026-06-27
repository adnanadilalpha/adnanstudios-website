import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { Insights } from './collections/Insights'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { SiteSettings } from './globals/SiteSettings'

const projectRoot = path.resolve(process.cwd())

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: projectRoot,
    },
    meta: {
      title: 'Adnan Studios CMS',
      titleSuffix: ' | Adnan Studios',
      description: 'Manage insights, site content, and media for adnanstudios.com',
    },
    components: {
      graphics: {
        Icon: '@/components/admin/Icon',
        Logo: '@/components/admin/Logo',
      },
    },
  },
  collections: [Users, Media, Insights],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-me',
  typescript: {
    outputFile: path.resolve(projectRoot, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || process.env.DATABASE_URL || 'mongodb://127.0.0.1/adnan-studios',
  }),
  sharp,
})
