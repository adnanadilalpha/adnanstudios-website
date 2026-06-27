import { HomePage } from '@/app/components/HomePage'
import { getSiteContent } from '@/lib/site-content'

export const revalidate = 60

export default async function Home() {
  const content = await getSiteContent()

  return <HomePage content={content} />
}
