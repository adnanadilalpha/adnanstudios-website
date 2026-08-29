import type { Payload } from 'payload'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default async function DashboardWelcome({
  payload,
}: {
  payload: Payload
}) {
  const [publishedResult, draftsResult, mediaResult] = await Promise.all([
    payload.count({
      collection: 'insights',
      where: { _status: { equals: 'published' } },
    }),
    payload.count({
      collection: 'insights',
      where: { _status: { equals: 'draft' } },
    }),
    payload.count({ collection: 'media' }),
  ])

  const published = publishedResult.totalDocs
  const drafts = draftsResult.totalDocs
  const media = mediaResult.totalDocs

  return (
    <div className="studio-dashboard">
      <div className="studio-dashboard__hero">
        <div className="studio-dashboard__eyebrow">
          <span className="studio-dashboard__dot" aria-hidden />
          Studio CMS
        </div>
        <h2 className="studio-dashboard__title">Manage your site content</h2>
        <p className="studio-dashboard__desc">
          Publish insights, update homepage copy, and manage media — all synced to
          adnanstudios.com.
        </p>
        <div className="studio-dashboard__actions">
          <a
            className="studio-dashboard__link studio-dashboard__link--primary"
            href="/admin/collections/insights/create"
          >
            New insight
          </a>
          <a
            className="studio-dashboard__link studio-dashboard__link--ghost"
            href="/admin/globals/site-settings"
          >
            Site content
          </a>
          <a
            className="studio-dashboard__link studio-dashboard__link--ghost"
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View site ↗
          </a>
        </div>
        <div className="studio-dashboard__stats">
          <div className="studio-dashboard__stat">
            <span className="studio-dashboard__stat-value">{published}</span>
            <span className="studio-dashboard__stat-label">Published</span>
          </div>
          <div className="studio-dashboard__stat">
            <span className="studio-dashboard__stat-value">{drafts}</span>
            <span className="studio-dashboard__stat-label">Drafts</span>
          </div>
          <div className="studio-dashboard__stat">
            <span className="studio-dashboard__stat-value">{media}</span>
            <span className="studio-dashboard__stat-label">Media files</span>
          </div>
        </div>
      </div>
    </div>
  )
}
