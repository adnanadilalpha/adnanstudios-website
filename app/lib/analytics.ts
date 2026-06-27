declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

export function trackCalendlyClick(location: string) {
  trackEvent('calendly_click', { location })
}

export function trackPackageClick(tier: string) {
  trackEvent('package_get_started', { package_tier: tier })
}

export function trackCaseStudyLiveClick(project: string) {
  trackEvent('case_study_live_click', { project })
}

export function trackOutboundClick(platform: string) {
  trackEvent('outbound_click', { platform })
}

export function trackScrollDepth(slug: string, depth: number) {
  trackEvent('article_scroll_depth', { article_slug: slug, depth_percent: depth })
}

export function trackArticleTimeOnPage(slug: string, seconds: number) {
  trackEvent('article_time_on_page', { article_slug: slug, seconds })
}
