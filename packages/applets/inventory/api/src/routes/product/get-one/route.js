import { handler } from './handler'
import { schema } from './schema'

export default [
  { method: 'GET', url: '/product/:id', handler, schema }
]
