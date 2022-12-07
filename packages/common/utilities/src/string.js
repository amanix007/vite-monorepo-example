/**
 * Capitalizes all words in the input text
 * @param text Text to capitalize
 */
export function capitalize (text) {
  if (text) {
    const result = []
    let isSpace = true

    for (const ch of Array.from(text)) {
      if (ch === ' ') {
        isSpace = true
        result.push(' ')
      } else {
        result.push(isSpace ? ch.toUpperCase() : ch)
        isSpace = false
      }
    }

    return result.join('')
  }
}
