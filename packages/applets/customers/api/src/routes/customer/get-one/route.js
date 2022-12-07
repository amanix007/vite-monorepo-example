import { handler } from './handler'
import { schema } from './schema'

export default [
  { method: 'GET', url: '/customer/:id', handler, schema }
]
