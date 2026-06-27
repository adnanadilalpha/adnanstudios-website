declare module 'reading-time' {
  interface ReadingTimeResult {
    text: string
    minutes: number
    time: number
    words: number
  }

  function readingTime(text: string, options?: { wordsPerMinute?: number }): ReadingTimeResult

  export = readingTime
}
