import { handler } from './handler'
import { schema } from './schema'

export default [
  { method: 'GET', url: '/', handler, schema }
]
