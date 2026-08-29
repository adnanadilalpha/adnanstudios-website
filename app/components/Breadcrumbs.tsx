import Link from 'next/link'
import { breadcrumbSchema } from '../lib/schema'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: item.href || '',
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(schemaItems.filter((item) => item.url.length > 0))
          ),
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && <span className="text-white/20">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-brand transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white/60">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
