import config from '@payload-config'
import { getPayload } from 'payload'

export function isCmsEnabled() {
  const uri = process.env.DATABASE_URI || process.env.DATABASE_URL
  return Boolean(uri?.trim())
}

export async function getPayloadClient() {
  if (!isCmsEnabled()) {
    throw new Error('Payload CMS is not configured. Set DATABASE_URI in your environment.')
  }

  return getPayload({ config })
}
