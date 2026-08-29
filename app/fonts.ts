import { Instrument_Sans, JetBrains_Mono, Syne } from 'next/font/google'

export const fontBody = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const fontDisplay = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})
