/**
 * Returns current date and time
 */
export function now() {
  return new Date()
}

/**
 * Returns current time string
 */
export function timeString() {
  return now().toTimeString().substr(0, 8)
}

