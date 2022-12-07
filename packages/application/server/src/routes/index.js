// General routes
import statusRoutes from './status'

// Routes introduced by applets
import customerRoutes from '@vue-vite-monorepo/customers.api'
import inventoryRoutes from '@vue-vite-monorepo/inventory.api'

const routes = [
  ...statusRoutes,
  ...customerRoutes,
  ...inventoryRoutes
]

/**
 * Registers routes into fastify application
 * @param app Fastify application instance
 */
export default function (app) {
  for (const route of routes) {
    console.log(`> ${route.method} ${route.url}`)
    app.route(route)
  }
}
