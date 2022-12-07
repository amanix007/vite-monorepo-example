/**
 * A little delay, resolving a promise when interval passes
 * @param interval Interval in milliseconds
 */
export function delay(interval) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), interval)
  })
}
