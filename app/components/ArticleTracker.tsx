'use client'

import { useEffect, useRef } from 'react'
import { trackArticleTimeOnPage, trackScrollDepth } from '../lib/analytics'

interface ArticleTrackerProps {
  slug: string
}

export function ArticleTracker({ slug }: ArticleTrackerProps) {
  const trackedDepths = useRef(new Set<number>())
  const startTime = useRef(Date.now())

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return

      const percent = Math.round((scrollTop / docHeight) * 100)
      const milestones = [25, 50, 75, 100]

      for (const milestone of milestones) {
        if (percent >= milestone && !trackedDepths.current.has(milestone)) {
          trackedDepths.current.add(milestone)
          trackScrollDepth(slug, milestone)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [slug])

  useEffect(() => {
    return () => {
      const seconds = Math.round((Date.now() - startTime.current) / 1000)
      if (seconds >= 5) {
        trackArticleTimeOnPage(slug, seconds)
      }
    }
  }, [slug])

  return null
}
