import pkg from '../../package.json'

/**
 * Creates OpenAPI documentation options for `fastify-swagger` plugin
 * @param host Host on which API documentation is available
 * @param port HTTP port on which API documentation is available
 */
export default function (host, port, routePrefix = '/documentation') {
  return {
    routePrefix,
    swagger: {
      info: {
        title: 'Vue+Vite Monorepo API',
        description: pkg.description,
        version: pkg.version
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: `${host}:${port}`,
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'Customers', description: 'Customer-related end-points' },
        { name: 'Inventory', description: 'Inventory-related end-points' }
      ]
    },
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    },
    exposeRoute: true
  }
}
