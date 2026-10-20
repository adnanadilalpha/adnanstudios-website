import type { SVGProps } from 'react'

type MarkProps = SVGProps<SVGSVGElement> & {
  title?: string
}

/** Hostinger geometric H mark. */
export function HostingerHMark({
  title = 'Hostinger',
  className,
  ...props
}: MarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path d="M6 4h6.5v9.25L18.75 7H25.5l-8.5 8.5 8.5 8.5h-6.75L12.5 18.75V28H6V4Zm14.25 0H27v24h-6.75V4Z" />
    </svg>
  )
}

/** WD Awards emblem (official paths). */
export function WDAwardsMark({
  title = 'WD Awards',
  className,
  ...props
}: MarkProps) {
  return (
    <svg
      viewBox="0 0 302 121"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path d="M269.406,12.49C254.482,0.637,231.844,0.02,229.501,0.017h-0.116c-0.043,0-0.08,0.001-0.093,0.002h-14.188l-17.998,32.499l39.133-0.015c15.23,0.474,27.742,17.35,23.648,37.162c-4.109,19.898-28.783,20.271-28.783,20.271H204.09l21.568-39.151h-38.625l-38.77,70.371h90.344c7.459-1.04,36.195-4.974,49.304-34.077C301.021,57.97,287.398,26.788,269.406,12.49z" />
      <polygon
        opacity="0.85"
        points="135.094,0.021 96.417,0.02 48.86,86.375 68.433,120.899"
      />
      <polygon points="194.469,0.021 155.792,0.021 108.235,86.375 127.808,120.901" />
      <polygon points="38.187,67.519 75.776,0.02 0,0.02" />
    </svg>
  )
}

/** Orpetron geometric mark. */
export function OrpetronMark({
  title = 'Orpetron',
  className,
  ...props
}: MarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path d="M40.52 64H64V40.52L40.52 64ZM59.6667 59.6667H50.5333L59.6667 50.5333V59.6667ZM0 0V23.48L23.48 0H0ZM4.33333 4.33333H13.4667L4.33333 13.4667V4.33333ZM42.7333 0H26.36V23.2667L27.4933 22.72C28.3067 22.32 29.1733 22.04 30.0667 21.8667L30.6933 21.7467V4.33333H38.8533V20.44L43.1867 16.1067V6.82667L47.8267 11.4667L51.0133 8.28L42.7333 0ZM55.72 12.9867L52.5333 16.1733L57.1733 20.8133H47.8933L43.56 25.1467H59.6667V33.3067H42.2533L42.1333 33.9333C41.96 34.8267 41.68 35.6933 41.28 36.52L40.7333 37.64H64V21.2667L55.72 12.9867ZM36.5067 41.28C35.6933 41.68 34.8267 41.9733 33.9333 42.1333L33.2933 42.2533V59.6667H25.1467V43.56L20.8133 47.8933V57.1733L16.1733 52.5333L12.9867 55.72L21.2667 64H37.64V40.7333L36.5067 41.28ZM0 26.36V42.7333L8.28 51.0133L11.4667 47.8267L6.82667 43.1867H16.1067L20.44 38.8533H4.33333V30.6933H21.7333L21.8533 30.0667C22.0267 29.1733 22.32 28.3067 22.72 27.48L23.2667 26.36H0ZM38.16 30.5467C37.6133 28.2133 35.7733 26.3867 33.4533 25.84C32.9867 25.72 32.4933 25.6667 32 25.6667C28.5067 25.6667 25.6667 28.5067 25.6667 32C25.6667 32.4933 25.72 32.9867 25.84 33.4533C26.3867 35.7867 28.2133 37.6133 30.5467 38.16C31.0133 38.28 31.5067 38.3333 32 38.3333C35.4933 38.3333 38.3333 35.4933 38.3333 32C38.3333 31.5067 38.28 31.0133 38.16 30.5467Z" />
    </svg>
  )
}
