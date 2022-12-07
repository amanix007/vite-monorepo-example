import fastify from 'fastify'
import fastifyCORS from 'fastify-cors'
import fastifyOpenAPI from 'fastify-swagger'
import pkg from '../package.json'
import registerRoutes from './routes'
import getDocumentationOptions from './documentation'

// CONFIGURATION
const host = 'localhost'
const port = 3333

// APPLICATION
console.log('-'.repeat(60))
console.log(`API Server ${pkg.name} v.${pkg.version}, ${new Date().toLocaleTimeString()}`)
const app = fastify()

// PLUGINS
// CORS: Enables requests from UI running on another domain
app.register(fastifyCORS, { origin: '*' })
// OpenAPI: Enables API documentation UI at /documentation route
app.register(fastifyOpenAPI, getDocumentationOptions(host, port, '/documentation'))

// ROUTES
registerRoutes(app)
console.log('> GET /documentation')
console.log('-'.repeat(60))

// LISTEN
const start = async () => {
  try {
    await app.listen(port)
    console.log(`Listening on http://${host}:${port}/`)

  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
